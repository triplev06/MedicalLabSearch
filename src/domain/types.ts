import type { z } from "zod";
import type {
  labSchema,
  recordSchema,
  preferencesSchema,
  backupSchema,
  statusSchema,
} from "./schemas";
export type Lab = z.infer<typeof labSchema>;
export type ApplicationRecord = z.infer<typeof recordSchema>;
export type Preferences = z.infer<typeof preferencesSchema>;
export type Backup = z.infer<typeof backupSchema>;
export type ApplicationStatus = z.infer<typeof statusSchema>;
export type EditableApplicationFields = Partial<
  Omit<ApplicationRecord, "labId" | "history" | "updatedAt" | "status">
>;
