import { describe, it, expect } from "vitest";
import { labs } from "../data/labs";
import { labSchema } from "../domain/schemas";
import { hasDocumentedPathway, pathwayRank } from "../domain/pathways";
import {
  selectLabs,
  defaultFilters,
  encodeFilters,
  decodeFilters,
} from "../domain/filters";
const now = new Date(2026, 9, 21);
function fixture(
  id: string,
  kind = "entry-role",
  compensation = "paid",
  audience = "general",
) {
  return labSchema.parse({
    ...labs[0],
    id,
    eligibility: "unknown",
    experience: "entry",
    availability: "open",
    deadline: { kind: "unknown" },
    pathway: {
      kind,
      compensation,
      audience,
      evidence: "Official research role and route are documented here.",
      sourceUrl: labs[0].website,
    },
  });
}
describe("documented entry pathways", () => {
  it("does not infer a route from a strong score, and excludes closed or restricted pathways", () => {
    const paid = fixture("paid");
    expect(hasDocumentedPathway(paid, now)).toBe(true);
    expect(
      hasDocumentedPathway({ ...paid, availability: "interest" }, now),
    ).toBe(false);
    expect(hasDocumentedPathway({ ...paid, availability: "closed" }, now)).toBe(
      false,
    );
    expect(
      hasDocumentedPathway({ ...paid, eligibility: "restricted" }, now),
    ).toBe(false);
    expect(
      hasDocumentedPathway(
        { ...paid, deadline: { kind: "fixed", date: "2026-10-20" } },
        now,
      ),
    ).toBe(false);
    expect(
      hasDocumentedPathway(
        fixture("unknown", "unverified", "unknown", "unknown"),
        now,
      ),
    ).toBe(false);
  });
  it("orders general paid roles before conditional training without changing fit scores", () => {
    const paid = fixture("paid"),
      training = fixture(
        "training",
        "training",
        "paid",
        "institution-students",
      ),
      inquiry = fixture("inquiry", "inquiry", "unknown", "general");
    expect(pathwayRank(paid, now)).toBeLessThan(pathwayRank(inquiry, now));
    expect(pathwayRank(inquiry, now)).toBeLessThan(pathwayRank(training, now));
    expect(
      selectLabs(
        [training, inquiry, paid],
        { ...defaultFilters, sort: "entry-route" },
        [],
        now,
      ).map((l) => l.id),
    ).toEqual(["paid", "inquiry", "training"]);
  });
  it("places documented paid training ahead of unpaid general inquiries", () => {
    const training = fixture("paid-training", "training", "paid", "general");
    const volunteer = fixture("volunteer", "inquiry", "unpaid", "general");
    expect(pathwayRank(training, now)).toBeLessThan(
      pathwayRank(volunteer, now),
    );
  });
  it("combines public route, pay and audience filters and bookmarks them", () => {
    const filters = {
      ...defaultFilters,
      pathway: "documented",
      compensation: "paid",
      audience: "general",
      sort: "entry-route" as const,
    };
    const paid = fixture("paid"),
      training = fixture(
        "training",
        "training",
        "paid",
        "institution-students",
      );
    expect(
      selectLabs([training, paid], filters, [], now).map((l) => l.id),
    ).toEqual(["paid"]);
    expect(decodeFilters(encodeFilters(filters))).toMatchObject(filters);
  });
  it("requires primary pathway evidence rather than an unsupported accessibility label", () => {
    expect(
      labSchema.safeParse({
        ...fixture("missing"),
        pathway: {
          kind: "entry-role",
          compensation: "paid",
          audience: "general",
          evidence: "",
          sourceUrl: null,
        },
      }).success,
    ).toBe(false);
  });
  it("separates verified durations from unknown commitments and excludes longer contracts", () => {
    const unknown = fixture("unknown-duration");
    const year = {
      ...fixture("year"),
      pathway: { ...unknown.pathway, minimumMonths: 12 },
    };
    const longer = {
      ...fixture("longer"),
      pathway: { ...unknown.pathway, minimumMonths: 24 },
    };
    const entries = [unknown, year, longer];
    expect(
      selectLabs(
        entries,
        { ...defaultFilters, commitment: "up-to-year" },
        [],
        now,
      )
        .map((l) => l.id)
        .sort(),
    ).toEqual(["unknown-duration", "year"]);
    expect(
      selectLabs(
        entries,
        { ...defaultFilters, commitment: "known-up-to-year" },
        [],
        now,
      ).map((l) => l.id),
    ).toEqual(["year"]);
    expect(
      decodeFilters(
        encodeFilters({ ...defaultFilters, commitment: "known-up-to-year" }),
      ).commitment,
    ).toBe("known-up-to-year");
  });
  it("can exclude documented part-time roles while retaining unconfirmed hours", () => {
    const unknown = fixture("unknown-hours");
    const full = {
      ...fixture("full"),
      pathway: { ...unknown.pathway, time: "full-time" as const },
    };
    const part = {
      ...fixture("part"),
      pathway: { ...unknown.pathway, time: "part-time" as const },
    };
    expect(
      selectLabs(
        [unknown, full, part],
        { ...defaultFilters, hours: "full-or-unknown" },
        [],
        now,
      )
        .map((l) => l.id)
        .sort(),
    ).toEqual(["full", "unknown-hours"]);
  });
});
describe("new first-role research coverage", () => {
  it("publishes the 165-route stable checkpoint without losing the existing catalog", () => {
    // The requested 300 additions remain an unfinished research goal in the plan.
    expect(labs).toHaveLength(366);
    const added = labs.slice(201);
    expect(added).toHaveLength(165);
    for (const lab of added) {
      expect(lab.pathway.kind, lab.id).not.toBe("unverified");
      expect(
        lab.sources.some(
          (s) =>
            s.url === lab.pathway.sourceUrl &&
            (s.claims.includes("availability") ||
              s.claims.includes("requirements")),
        ),
        lab.id,
      ).toBe(true);
    }
  });
});
