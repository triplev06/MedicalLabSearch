import { describe, expect, it } from "vitest";
import { labs } from "../data/labs";
import { labSchema } from "../domain/schemas";

describe("published catalog", () => {
  it("contains unique, source-backed real laboratories across the US", () => {
    expect(labs.length).toBeGreaterThanOrEqual(12);
    expect(new Set(labs.map((l) => l.id)).size).toBe(labs.length);
    expect(new Set(labs.map((l) => l.state)).size).toBeGreaterThanOrEqual(5);
    for (const lab of labs) {
      expect(labSchema.safeParse(lab).success, lab.id).toBe(true);
      expect(lab.sources.length).toBeGreaterThan(0);
      expect(lab.sources.some((s) => s.claims.includes("research"))).toBe(true);
      if (lab.availability === "open" || lab.availability === "inquiries")
        expect(lab.sources.some((s) => s.claims.includes("availability"))).toBe(
          true,
        );
      if (lab.contact)
        expect(
          lab.sources.some((s) => s.claims.includes("contact")),
          lab.id,
        ).toBe(true);
      if (lab.deadline.kind !== "unknown")
        expect(lab.sources.some((s) => s.claims.includes("deadline"))).toBe(
          true,
        );
    }
  });
});
