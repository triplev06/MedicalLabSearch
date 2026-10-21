import type { Lab } from "./types";
import { deadlineInfo } from "./deadlines";
export const pathwayLabels = {
  "entry-role": "Documented entry role",
  training: "Training pathway",
  inquiry: "Inquiries welcome",
  unverified: "Entry route unverified",
};
export const audienceLabels = {
  general: "General applicants",
  students: "Student eligibility required",
  "institution-students": "Institution's own students only",
  unknown: "Applicant eligibility needs confirmation",
};
export const compensationLabels = {
  paid: "Paid",
  unpaid: "Unpaid / volunteer",
  unknown: "Compensation unknown",
};
export function commitmentLabel(lab: Lab) {
  const time = {
    "full-time": "Full time",
    "part-time": "Part time",
    flexible: "Flexible hours",
    unknown: "Hours unverified",
  }[lab.pathway.time];
  return `${time} · ${lab.pathway.minimumMonths === null ? "Minimum duration unverified" : `Minimum ${lab.pathway.minimumMonths} months`}`;
}
export function hasDocumentedPathway(lab: Lab, now = new Date()) {
  return (
    lab.pathway.kind !== "unverified" &&
    lab.pathway.sourceUrl !== null &&
    (lab.availability === "open" || lab.availability === "inquiries") &&
    lab.eligibility !== "restricted" &&
    lab.experience !== "doctoral" &&
    deadlineInfo(lab.deadline, now).tone !== "expired"
  );
}
export function pathwayRank(lab: Lab, now = new Date()) {
  if (!hasDocumentedPathway(lab, now)) return 9;
  if (lab.pathway.audience === "institution-students") return 8;
  if (
    lab.pathway.kind === "entry-role" &&
    lab.availability === "open" &&
    lab.pathway.compensation === "paid"
  )
    return 0;
  if (lab.pathway.compensation === "paid")
    return lab.pathway.audience === "general" ? 1 : 2;
  if (lab.pathway.audience === "general" && lab.pathway.kind === "inquiry")
    return 3;
  return lab.pathway.compensation === "unpaid" ? 5 : 4;
}
