import { describe, expect, it } from "vitest";
import { calculateScores, type ScoreReview } from "../domain/scoring";
import { labs } from "../data/labs";
import { scoreReviews, reviewFor } from "../data/scoring";
const strong: ScoreReview = {
  requirementsVerified: true,
  fit: { alignment: 4, methods: 4, preparation: 4, level: 4, transfer: 4 },
  prestige: { impact: 4, resources: 4, mentorship: 4, collaboration: 4 },
  fitEvidence: "All role-specific prerequisites documented.",
  prestigeEvidence: "All research-environment dimensions documented.",
};
describe("evidence-based score rubric", () => {
  it("has one reproducible criterion review for every published laboratory", () => {
    expect(Object.keys(scoreReviews).sort()).toEqual(
      labs.map((l) => l.id).sort(),
    );
    for (const lab of labs) {
      const review = reviewFor(lab.id),
        scores = calculateScores(review);
      expect(lab.fit, lab.id).toBe(scores.fit);
      expect(lab.prestige, lab.id).toBe(scores.prestige);
      if (review.fit.level <= 2)
        expect(lab.fit, lab.id).toBeLessThanOrEqual(75);
      if (!review.requirementsVerified)
        expect(lab.fit, lab.id).toBeLessThanOrEqual(75);
      if (lab.eligibility === "restricted")
        expect(lab.fit, lab.id).toBeLessThanOrEqual(40);
    }
  });
  it("rejects unsupported evidence levels and incomplete reviews", () => {
    expect(() =>
      calculateScores({ ...strong, fit: { ...strong.fit, methods: 5 } }),
    ).toThrow();
    expect(() =>
      calculateScores({
        ...strong,
        prestige: {
          ...strong.prestige,
          mentorship: undefined,
        } as unknown as ScoreReview["prestige"],
      }),
    ).toThrow();
  });
  it("requires complete evidence for a maximum score", () => {
    expect(calculateScores(strong)).toMatchObject({ fit: 100, prestige: 100 });
    expect(
      calculateScores({
        ...strong,
        fit: { ...strong.fit, methods: 2, preparation: 2 },
      }).fit,
    ).toBe(80);
  });
  it("limits qualification confidence when the role and core methods are unverified", () => {
    expect(
      calculateScores({ ...strong, requirementsVerified: false }).fit,
    ).toBe(75);
    expect(
      calculateScores({ ...strong, fit: { ...strong.fit, level: 2 } }).fit,
    ).toBe(75);
    expect(
      calculateScores({ ...strong, fit: { ...strong.fit, methods: 1 } }).fit,
    ).toBe(55);
    expect(
      calculateScores({ ...strong, fit: { ...strong.fit, alignment: 1 } }).fit,
    ).toBe(55);
    expect(
      calculateScores({ ...strong, fit: { ...strong.fit, level: 0 } }).fit,
    ).toBe(40);
  });
  it("does not grant prestige points for an institution name or missing mentorship evidence", () => {
    const sparse = {
      ...strong,
      prestige: { impact: 1, resources: 1, mentorship: 0, collaboration: 1 },
    };
    expect(calculateScores(sparse).prestige).toBe(20);
  });
});
