import { db, defaultPreferences } from "./db";
import { backupSchema, recordSchema } from "../domain/schemas";
import { assertLab } from "./tracking";
import type { Backup } from "../domain/types";
function mergeEvents<T extends { id: string }>(
  existing: T[],
  incoming: T[],
): T[] {
  const merged = new Map(existing.map((e) => [e.id, e]));
  for (const event of incoming) {
    const old = merged.get(event.id);
    if (old && JSON.stringify(old) !== JSON.stringify(event))
      throw new Error("Conflicting event identity in backup");
    merged.set(event.id, event);
  }
  return [...merged.values()];
}
export function validateBackup(input: unknown): Backup {
  const b = backupSchema.parse(input);
  const ids = new Set<string>();
  for (const r of b.records) {
    assertLab(r.labId);
    if (ids.has(r.labId)) throw new Error("Duplicate laboratory record");
    ids.add(r.labId);
    for (const list of [r.history, r.events])
      if (new Set(list.map((e) => e.id)).size !== list.length)
        throw new Error("Duplicate event identifiers");
  }
  b.preferences.compare.forEach(assertLab);
  if (new Set(b.preferences.compare).size !== b.preferences.compare.length)
    throw new Error("Duplicate comparison selection");
  return b;
}
export async function exportBackup(): Promise<Backup> {
  return db.transaction("r", db.records, db.preferences, async () => ({
    app: "research-atlas",
    version: 1,
    exportedAt: new Date().toISOString(),
    records: await db.records.toArray(),
    preferences: (await db.preferences.get("main")) ?? defaultPreferences,
  }));
}
export async function restoreBackup(input: Backup) {
  const b = validateBackup(input);
  await db.transaction("rw", db.records, db.preferences, async () => {
    for (const incoming of b.records) {
      const old = await db.records.get(incoming.labId);
      const history = mergeEvents(old?.history ?? [], incoming.history).sort(
        (a, b) => a.at.localeCompare(b.at),
      );
      // Restoring an earlier stage is a correction, not a deletion of history.
      if (old && old.status !== incoming.status)
        history.push({
          id: crypto.randomUUID(),
          at: new Date().toISOString(),
          status: incoming.status,
        });
      const events = mergeEvents(old?.events ?? [], incoming.events).sort(
        (a, b) => a.date.localeCompare(b.date),
      );
      await db.records.put(
        recordSchema.parse({
          ...incoming,
          history,
          events,
          updatedAt: new Date().toISOString(),
        }),
      );
    }
    await db.preferences.put(b.preferences);
  });
}
