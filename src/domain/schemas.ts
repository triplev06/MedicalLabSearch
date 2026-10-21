import { z } from "zod";

export const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((s) => {
    const d = new Date(s + "T00:00:00Z");
    return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === s;
  }, "Invalid calendar date");
const text = z.string().max(20000);
const https = z
  .url()
  .refine((s) => s.startsWith("https://"), "Official links must use HTTPS");
export const statuses = [
  "Saved",
  "In Progress",
  "Applied",
  "Interview",
  "Offer",
  "Rejected",
] as const;
export const statusSchema = z.enum(statuses);
export const deadlineSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("fixed"), date: dateSchema }),
  z.object({ kind: z.literal("rolling") }),
  z.object({ kind: z.literal("unknown") }),
]);
export const labSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  name: text,
  institution: text,
  pi: text,
  city: text,
  state: z.string().regex(/^[A-Z]{2}$/),
  fields: z.array(z.string()).min(1),
  description: text,
  website: https,
  applicationUrl: https.nullable(),
  contact: z.object({ name: text, email: z.email() }).nullable(),
  sources: z
    .array(
      z.object({
        url: https,
        title: text,
        claims: z.array(
          z.enum([
            "research",
            "availability",
            "requirements",
            "environment",
            "contact",
            "deadline",
          ]),
        ),
        evidence: text,
      }),
    )
    .min(1),
  verified: dateSchema,
  availability: z.enum(["open", "inquiries", "interest", "closed"]),
  deadline: deadlineSchema,
  requirements: z.array(text),
  experience: z.enum(["entry", "experienced", "unknown", "doctoral"]),
  eligibility: z.enum(["likely", "unknown", "restricted"]),
  eligibilityNote: text,
  applicationMethod: text,
  fit: z.number().min(0).max(100),
  prestige: z.number().min(0).max(100),
  strengths: z.array(text),
  gaps: z.array(text),
  prestigeReason: text,
  assessment: text,
});
export const eventSchema = z.object({
  id: z.string().min(1).max(100),
  at: z.iso.datetime(),
  status: statusSchema,
});
export const contactEventSchema = z.object({
  id: z.string().min(1).max(100),
  date: dateSchema,
  note: text,
  type: z.enum(["Contact", "Milestone"]),
});
export const recordSchema = z.object({
  labId: z.string(),
  status: statusSchema,
  favorite: z.boolean(),
  priority: z.enum(["Normal", "High", "Low"]),
  notes: text,
  dateApplied: dateSchema.nullable(),
  followUp: dateSchema.nullable(),
  contactName: z.string().max(500),
  contactEmail: z.string().max(500),
  communicationNotes: text,
  lastContact: dateSchema.nullable(),
  history: z.array(eventSchema).max(10000),
  events: z.array(contactEventSchema).max(10000),
  updatedAt: z.iso.datetime(),
});
export const preferencesSchema = z.object({
  id: z.literal("main"),
  fitWeight: z.number().min(0).max(1),
  minFit: z.number().min(0).max(100),
  theme: z.enum(["system", "light", "dark"]),
  compare: z.array(z.string()).max(30),
});
export const backupSchema = z
  .object({
    app: z.literal("research-atlas"),
    version: z.literal(1),
    exportedAt: z.iso.datetime(),
    records: z.array(recordSchema).max(1000),
    preferences: preferencesSchema,
  })
  .strict();
