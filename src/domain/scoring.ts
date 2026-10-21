import { z } from "zod";
const level = z.number().int().min(0).max(4);
export const scoreReviewSchema = z
  .object({
    fit: z
      .object({
        alignment: level,
        methods: level,
        preparation: level,
        level,
        transfer: level,
      })
      .strict(),
    prestige: z
      .object({
        impact: level,
        resources: level,
        mentorship: level,
        collaboration: level,
      })
      .strict(),
    fitEvidence: z.string().min(20),
    prestigeEvidence: z.string().min(20),
    requirementsVerified: z.boolean().default(false),
  })
  .strict();
export type ScoreReview = z.input<typeof scoreReviewSchema>;
export const criterionAnchors: Record<string, readonly string[]> = {
  alignment: [
    "Outside stated interests",
    "Adjacent biological question",
    "Broad molecular or clinical overlap",
    "Direct disease or pathway overlap",
    "Same research question and model",
  ],
  methods: [
    "No demonstrated method overlap",
    "Generic transferable techniques only",
    "Some core methods; substantial gaps",
    "Most core methods demonstrated",
    "All role-required hands-on methods demonstrated",
  ],
  preparation: [
    "Documented academic prerequisite unmet",
    "Specialist academic preparation unverified",
    "Broad biology foundation only",
    "Specific academic preparation supports the work",
    "All role-specific academic prerequisites documented",
  ],
  level: [
    "Known unmet prerequisite for the advertised route",
    "Specialist or advanced route; assistant suitability unverified",
    "Assistant-level requirements unknown",
    "Relevant inquiry or training pathway documented",
    "Suitable entry-level role and route documented",
  ],
  transfer: [
    "No relevant workflow evidence",
    "Generic communication skills",
    "Useful documentation or analysis",
    "Directly relevant research or clinical workflow",
    "Same workflow demonstrated in prior projects",
  ],
  impact: [
    "Scientific contributions not evidenced",
    "Active research program described",
    "Specific scientific contribution documented",
    "Multiple clear research or translational contributions",
    "Externally recognized field-defining contribution",
  ],
  resources: [
    "Resources not evidenced",
    "Standard research methods described",
    "Specialized methods documented",
    "Specialized cores, models or clinical access documented",
    "Exceptional national-scale infrastructure or center resources",
  ],
  mentorship: [
    "Mentorship not evidenced",
    "Team or inquiry access only",
    "Explicit trainee or mentoring route",
    "Structured mentoring or trainee outcomes documented",
    "Sustained independently recognized mentoring outcomes",
  ],
  collaboration: [
    "Collaboration not evidenced",
    "Institutional affiliation only",
    "Specific multidisciplinary work",
    "Joint clinical or translational pipeline",
    "National or multi-institutional research leadership",
  ],
};
export const fitCriteria = [
  { key: "alignment", label: "Research alignment", weight: 25 },
  { key: "methods", label: "Demonstrated core methods", weight: 30 },
  { key: "preparation", label: "Academic preparation", weight: 15 },
  { key: "level", label: "Experience-level suitability", weight: 20 },
  { key: "transfer", label: "Transferable workflow", weight: 10 },
] as const;
export const prestigeCriteria = [
  { key: "impact", label: "Documented scientific impact", weight: 40 },
  { key: "resources", label: "Research resources", weight: 25 },
  { key: "mentorship", label: "Mentorship evidence", weight: 20 },
  { key: "collaboration", label: "Research collaboration", weight: 15 },
] as const;
export function calculateScores(input: ScoreReview) {
  const review = scoreReviewSchema.parse(input);
  const fitRaw = fitCriteria.reduce(
    (sum, c) => sum + (review.fit[c.key] * c.weight) / 4,
    0,
  );
  const prestigeRaw = prestigeCriteria.reduce(
    (sum, c) => sum + (review.prestige[c.key] * c.weight) / 4,
    0,
  );
  let cap = 100;
  const limits: string[] = [];
  if (
    review.fit.level !== 0 &&
    (!review.requirementsVerified || review.fit.level <= 2)
  ) {
    cap = 75;
    limits.push(
      "Role-specific qualifications are not fully verified; fit is capped at 75. An inquiry invitation is not proof of eligibility.",
    );
  }
  if (review.fit.methods <= 1) {
    cap = Math.min(cap, 55);
    limits.push(
      "Core methods are largely unverified or require substantial retraining; fit is capped at 55.",
    );
  }
  if (review.fit.alignment <= 1) {
    cap = Math.min(cap, 55);
    limits.push("Research alignment is indirect; fit is capped at 55.");
  }
  if (review.fit.level === 0 || review.fit.preparation === 0) {
    cap = Math.min(cap, 40);
    limits.push(
      "A documented prerequisite is unmet; fit is capped at 40. Review eligibility separately.",
    );
  }
  return {
    fit: Math.min(cap, Math.round(fitRaw / 5) * 5),
    prestige: Math.round(prestigeRaw / 5) * 5,
    fitRaw,
    prestigeRaw,
    limits,
  };
}
export function fitBand(score: number) {
  return score >= 80
    ? "Strong direct alignment"
    : score >= 65
      ? "Credible alignment with gaps"
      : score >= 50
        ? "Transferable fit"
        : score >= 35
          ? "Substantial stretch"
          : "Distant fit";
}
