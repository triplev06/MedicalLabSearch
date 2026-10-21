import { labSchema } from "../../domain/schemas";
import type { Lab } from "../../domain/types";
import { scoredFields } from "../scoring";

type RequiredFields =
  | "id"
  | "name"
  | "institution"
  | "pi"
  | "city"
  | "state"
  | "fields"
  | "description"
  | "website"
  | "strengths"
  | "gaps";
export type ResearchEntry = Pick<Lab, RequiredFields> &
  Partial<Omit<Lab, RequiredFields>> & { evidence?: string };

/** A verified research group is not, by itself, a verified hiring opportunity. */
export function researchLab(input: ResearchEntry): Lab {
  const { evidence, ...data } = input;
  return labSchema.parse({
    verified: "2026-10-21",
    availability: "interest",
    deadline: { kind: "unknown" },
    applicationUrl: null,
    contact: null,
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "No role-specific eligibility has been verified. Confirm degree requirements, employment authorization, enrollment conditions and time commitment directly.",
    requirements: [
      "No suitable role-specific education or experience requirements have been verified.",
    ],
    applicationMethod:
      "No suitable vacancy or application route has been verified. Check the official research group and institutional careers pages before considering an inquiry.",
    ...Object.fromEntries(
      Object.entries(data).filter(([, value]) => value !== undefined),
    ),
    ...scoredFields(data.id),
    sources: data.sources ?? [
      {
        url: data.website,
        title: `${data.name} · official research overview`,
        claims: ["research", "environment"],
        evidence: evidence ?? data.description,
      },
    ],
  });
}
