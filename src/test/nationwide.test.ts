import { describe, expect, it } from "vitest";
import { labs } from "../data/labs";

describe("nationwide major-metro expansion", () => {
  it("adds another 100 entries with broad geographic coverage", () => {
    expect(labs).toHaveLength(189);
    for (const state of ["CA", "NY", "MD", "NC", "GA", "MN", "MO", "CO", "FL"])
      expect(
        labs.some((l) => l.state === state),
        state,
      ).toBe(true);
    expect(new Set(labs.map((l) => l.state)).size).toBeGreaterThanOrEqual(17);
    expect(new Set(labs.map((l) => l.id)).size).toBe(labs.length);
  });
  it("does not pad the catalog with duplicate named PI groups", () => {
    const piGroups = labs
      .filter((l) => l.pi !== "Not specified by official source")
      .map((l) =>
        `${l.institution}|${l.pi}`.toLowerCase().replace(/[^a-z0-9|]/g, ""),
      );
    expect(new Set(piGroups).size).toBe(piGroups.length);
  });
});
