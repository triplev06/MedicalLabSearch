import { describe, expect, it } from "vitest";
import { combinedScore } from "../domain/ranking";
import {
  selectLabs,
  defaultFilters,
  encodeFilters,
  decodeFilters,
} from "../domain/filters";
import { deadlineInfo } from "../domain/deadlines";
import { labs } from "../data/labs";

describe("recommendation and combined filters", () => {
  it("makes default ranking values explicit so saved preferences cannot reinterpret a bookmark", () => {
    const params = encodeFilters(defaultFilters);
    expect(params.get("minFit")).toBe("50");
    expect(params.get("fitWeight")).toBe("0.6");
  });
  it("weights fit and prestige without implying probability", () => {
    expect(combinedScore({ fit: 80, prestige: 90 }, 0.6)).toBe(84);
    expect(combinedScore({ fit: 80, prestige: 90 }, 1)).toBe(80);
  });
  it("combines states, institution, fit and availability", () => {
    const found = selectLabs(
      labs.slice(0, 201),
      {
        ...defaultFilters,
        states: ["MA", "WA"],
        institution: "Dana-Farber Cancer Institute",
        availability: "open",
        minFit: 70,
      },
      [],
      new Date(2026, 9, 21),
    );
    expect(found.map((l) => l.id).sort()).toEqual(["bernstein", "meyerson"]);
    const tennessee = selectLabs(
      labs,
      { ...defaultFilters, states: ["TN"], minFit: 50 },
      [],
    );
    expect(tennessee.some((l) => l.id === "mchaourab")).toBe(false);
    expect(
      selectLabs(
        labs,
        { ...defaultFilters, states: ["TN"], minFit: 0 },
        [],
      ).some((l) => l.id === "mchaourab"),
    ).toBe(true);
    expect(tennessee.every((l) => l.state === "TN" && l.fit >= 50)).toBe(true);
  });
  it("keeps private tracking filters out of shareable URLs and rejects invalid ranges", () => {
    const params = encodeFilters({
      ...defaultFilters,
      states: ["MA", "TX"],
      favorite: true,
      status: "Applied",
    });
    expect(params.toString()).not.toMatch(/favorite|Applied/);
    expect(decodeFilters(params).states).toEqual(["MA", "TX"]);
    expect(
      decodeFilters(new URLSearchParams("minFit=999&sort=garbage")).minFit,
    ).toBe(50);
  });
  it("includes the exact minimum fit and sorts unknown deadlines last both ways", () => {
    const a = {
      ...labs[0],
      id: "fixed",
      fit: 50,
      deadline: { kind: "fixed" as const, date: "2026-10-28" },
    };
    const b = { ...labs[1], id: "unknown", fit: 49 };
    expect(selectLabs([a, b], defaultFilters, []).map((l) => l.id)).toEqual([
      "fixed",
    ]);
    for (const sort of ["deadline-asc", "deadline-desc"] as const)
      expect(
        selectLabs([labs[0], a], { ...defaultFilters, sort }, [])[0].id,
      ).toBe("fixed");
  });
});

describe("calendar deadlines", () => {
  const now = new Date(2026, 9, 21, 23, 59);
  it.each([
    ["2026-10-21", 0, "urgent"],
    ["2026-10-28", 7, "urgent"],
    ["2026-11-04", 14, "approaching"],
    ["2026-11-20", 30, "normal"],
    ["2026-10-20", -1, "expired"],
  ])("%s has %s calendar days and %s urgency", (date, days, tone) => {
    expect(
      deadlineInfo({ kind: "fixed", date: date as string }, now),
    ).toMatchObject({ days, tone });
  });
  it("separates rolling and unknown from fixed deadlines", () => {
    expect(deadlineInfo({ kind: "rolling" }, now).days).toBeNull();
    expect(deadlineInfo({ kind: "unknown" }, now).label).toBe(
      "Deadline unknown",
    );
    expect(
      selectLabs(
        [
          { ...labs[0], deadline: { kind: "rolling" } },
          { ...labs[1], deadline: { kind: "unknown" } },
          { ...labs[2], deadline: { kind: "fixed", date: "2026-11-30" } },
        ],
        { ...defaultFilters, deadlineWindow: "7" },
        [],
        now,
      ),
    ).toEqual([]);
  });
  it("handles leap days and daylight saving boundaries", () => {
    expect(
      deadlineInfo({ kind: "fixed", date: "2028-03-01" }, new Date(2028, 1, 28))
        .days,
    ).toBe(2);
    expect(
      deadlineInfo(
        { kind: "fixed", date: "2026-11-02" },
        new Date(2026, 9, 31, 23),
      ).days,
    ).toBe(2);
  });
});
