import { describe, it, expect } from "vitest";
import { labs } from "../data/labs";
import { researchLab } from "../data/catalog/research-entry";
import {
  defaultFilters,
  selectLabs,
  encodeFilters,
  decodeFilters,
} from "../domain/filters";

describe("expanded research coverage", () => {
  it("combines a bookmarkable city with research search and state restrictions", () => {
    const found = selectLabs(
      labs,
      {
        ...defaultFilters,
        city: "Columbus",
        states: ["OH"],
        query: "cancer",
        minFit: 0,
      },
      [],
    );
    expect(found.length).toBeGreaterThan(5);
    expect(found.every((l) => l.city === "Columbus")).toBe(true);
    expect(
      decodeFilters(
        encodeFilters({
          ...defaultFilters,
          city: "Columbus",
          query: "cancer",
          states: ["OH"],
        }),
      ),
    ).toMatchObject({ city: "Columbus", query: "cancer", states: ["OH"] });
  });
  it("keeps research-field filtering consistent across institution modules", () => {
    const found = selectLabs(
      labs,
      { ...defaultFilters, field: "Cancer biology", minFit: 0 },
      [],
    );
    expect(found.some((l) => l.id === "cc-bao")).toBe(true);
    expect(found.some((l) => l.institution === "University of Chicago")).toBe(
      true,
    );
    const labels = [...new Set(labs.flatMap((l) => l.fields))];
    expect(new Set(labels.map((l) => l.toLowerCase())).size).toBe(
      labels.length,
    );
  });
  it("includes substantial Ohio and Chicago breadth without losing original IDs", () => {
    expect(labs.length).toBeGreaterThanOrEqual(80);
    expect(labs.filter((l) => l.state === "OH").length).toBeGreaterThanOrEqual(
      35,
    );
    expect(
      labs.filter((l) => l.city === "Columbus").length,
    ).toBeGreaterThanOrEqual(20);
    expect(
      labs.filter((l) => l.institution === "University of Chicago").length,
    ).toBeGreaterThanOrEqual(12);
    for (const name of [
      "Ohio State",
      "Cleveland Clinic",
      "OhioHealth",
      "Nationwide",
    ])
      expect(labs.some((l) => l.institution.includes(name))).toBe(true);
    for (const id of [
      "meyerson",
      "bernstein",
      "haolong-li",
      "koay",
      "kadara",
      "lissanu",
      "mchaourab",
      "remy",
      "montaner",
      "srivastava",
      "henderson",
      "barry",
    ])
      expect(labs.some((l) => l.id === id)).toBe(true);
  });
  it("searches city and combines it with the Ohio state filter", () => {
    const found = selectLabs(
      labs,
      { ...defaultFilters, query: "Columbus", states: ["OH"], minFit: 0 },
      [],
    );
    expect(found.length).toBeGreaterThanOrEqual(20);
    expect(found.every((l) => l.state === "OH" && l.city === "Columbus")).toBe(
      true,
    );
  });
  it("does not turn a research-only page into a hiring claim", () => {
    const l = researchLab({
      ...labs[0],
      id: "verified-research",
      availability: undefined,
      deadline: undefined,
      applicationUrl: undefined,
      contact: undefined,
      sources: undefined,
    });
    expect(l.availability).toBe("interest");
    expect(l.deadline.kind).toBe("unknown");
    expect(l.applicationUrl).toBeNull();
    expect(l.sources[0].claims).not.toContain("availability");
  });
});
