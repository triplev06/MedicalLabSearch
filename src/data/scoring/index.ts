import {
  calculateScores,
  scoreReviewSchema,
  type ScoreReview,
} from "../../domain/scoring";
import { initialReviews } from "./initial";
import { regionalReviews } from "./regional";
import { westChicagoReviews } from "./west-chicago";
import { eastSouthReviews } from "./east-south";
import { broaderReviews } from "./broader";
import { accessibleEastReviews } from "./accessible-east";
import { accessibleCentralReviews } from "./accessible-central";
import { accessibleWestSouthReviews } from "./accessible-west-south";
export const scoreReviews: Record<string, ScoreReview> = {
  ...initialReviews,
  ...regionalReviews,
  ...westChicagoReviews,
  ...eastSouthReviews,
  ...broaderReviews,
  ...accessibleEastReviews,
  ...accessibleCentralReviews,
  ...accessibleWestSouthReviews,
};
export function reviewFor(id: string): ScoreReview {
  const review = scoreReviews[id];
  if (!review) throw new Error(`Missing criterion review for laboratory ${id}`);
  return scoreReviewSchema.parse(review);
}
export function scoredFields(id: string) {
  const review = reviewFor(id),
    scores = calculateScores(review);
  return {
    fit: scores.fit,
    prestige: scores.prestige,
    assessment: review.fitEvidence,
    prestigeReason: review.prestigeEvidence,
  };
}
