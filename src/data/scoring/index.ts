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
export const scoreReviews: Record<string, ScoreReview> = {
  ...initialReviews,
  ...regionalReviews,
  ...westChicagoReviews,
  ...eastSouthReviews,
  ...broaderReviews,
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
