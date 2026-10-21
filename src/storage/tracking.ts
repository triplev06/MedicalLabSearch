import { db } from "./db";
import { labs } from "../data/labs";
import {
  preferencesSchema,
  recordSchema,
  statusSchema,
} from "../domain/schemas";
import type {
  ApplicationRecord,
  ApplicationStatus,
  EditableApplicationFields,
  Preferences,
} from "../domain/types";
import { today } from "../domain/deadlines";
export function assertLab(id: string) {
  if (!labs.some((l) => l.id === id))
    throw new Error("Unknown curated laboratory");
}
export async function saveLab(labId: string) {
  assertLab(labId);
  await db.transaction("rw", db.records, async () => {
    if (await db.records.get(labId)) return;
    const at = new Date().toISOString(),
      lab = labs.find((l) => l.id === labId)!;
    const r: ApplicationRecord = {
      labId,
      status: "Saved",
      favorite: false,
      priority: "Normal",
      notes: "",
      dateApplied: null,
      followUp: null,
      contactName: lab.contact?.name ?? "",
      contactEmail: lab.contact?.email ?? "",
      communicationNotes: "",
      lastContact: null,
      history: [{ id: crypto.randomUUID(), at, status: "Saved" }],
      events: [],
      updatedAt: at,
    };
    await db.records.add(recordSchema.parse(r));
  });
}
export async function moveApplication(
  labId: string,
  status: ApplicationStatus,
) {
  statusSchema.parse(status);
  await db.transaction("rw", db.records, async () => {
    const r = await db.records.get(labId);
    if (!r) throw new Error("Save the laboratory first");
    if (r.status === status) return;
    const at = new Date().toISOString();
    await db.records.put(
      recordSchema.parse({
        ...r,
        status,
        dateApplied:
          status === "Applied" && !r.dateApplied ? today() : r.dateApplied,
        updatedAt: at,
        history: [...r.history, { id: crypto.randomUUID(), at, status }],
      }),
    );
  });
}
export async function updateApplication(
  labId: string,
  patch: EditableApplicationFields,
) {
  await db.transaction("rw", db.records, async () => {
    const r = await db.records.get(labId);
    if (!r) throw new Error("Save the laboratory first");
    // Preserve immutable keys and status even when a runtime caller supplies extra keys.
    await db.records.put(
      recordSchema.parse({
        ...r,
        ...patch,
        labId: r.labId,
        status: r.status,
        history: r.history,
        updatedAt: new Date().toISOString(),
      }),
    );
  });
}
export async function toggleFavorite(labId: string) {
  await saveLab(labId);
  await db.transaction("rw", db.records, async () => {
    const r = (await db.records.get(labId))!;
    await db.records.put({
      ...r,
      favorite: !r.favorite,
      updatedAt: new Date().toISOString(),
    });
  });
}
export async function setPreferences(p: Preferences) {
  const parsed = preferencesSchema.parse(p);
  parsed.compare.forEach(assertLab);
  await db.preferences.put(parsed);
}
