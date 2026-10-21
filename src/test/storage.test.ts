import { beforeEach, describe, expect, it } from "vitest";
import { db, defaultPreferences } from "../storage/db";
import {
  saveLab,
  moveApplication,
  updateApplication,
} from "../storage/tracking";
import { exportBackup, validateBackup, restoreBackup } from "../storage/backup";
beforeEach(async () => {
  await db.records.clear();
  await db.preferences.clear();
});
describe("private tracking", () => {
  it("prevents duplicate records even for concurrent saves", async () => {
    await Promise.all([saveLab("meyerson"), saveLab("meyerson")]);
    expect(await db.records.count()).toBe(1);
    await expect(saveLab("foreign-lab")).rejects.toThrow();
  });
  it("retains every changed status including corrections", async () => {
    await saveLab("meyerson");
    await moveApplication("meyerson", "Applied");
    await moveApplication("meyerson", "Applied");
    await moveApplication("meyerson", "In Progress");
    const r = await db.records.get("meyerson");
    expect(r?.history.map((h) => h.status)).toEqual([
      "Saved",
      "Applied",
      "In Progress",
    ]);
    expect(r?.dateApplied).toMatch(/^\d{4}-/);
  });
  it("persists favorite, notes, follow-up and communication fields on reopen", async () => {
    await saveLab("meyerson");
    await updateApplication("meyerson", {
      favorite: true,
      notes: "Ask about mentorship",
      followUp: "2026-11-01",
      contactName: "Lab coordinator",
      communicationNotes: "Email drafted",
      lastContact: "2026-10-21",
    });
    db.close();
    await db.open();
    const r = await db.records.get("meyerson");
    expect(r).toMatchObject({
      favorite: true,
      notes: "Ask about mentorship",
      followUp: "2026-11-01",
      communicationNotes: "Email drafted",
      lastContact: "2026-10-21",
    });
    await updateApplication("meyerson", { favorite: false });
    expect((await db.records.get("meyerson"))?.favorite).toBe(false);
  });
});
describe("backup validation and restore", () => {
  it("rejects conflicting event identities and rolls back earlier restored records", async () => {
    await saveLab("meyerson");
    await saveLab("bernstein");
    const b = await exportBackup(),
      first = b.records[0],
      second = b.records[1];
    first.notes = "Incoming note";
    second.history[0].status = "Applied";
    await expect(restoreBackup(b)).rejects.toThrow(/conflict/i);
    expect((await db.records.get(first.labId))?.notes).toBe("");
    expect((await db.records.get(second.labId))?.history[0].status).toBe(
      "Saved",
    );
  });
  it("rejects contact-event identity conflicts instead of silently replacing notes", async () => {
    await saveLab("meyerson");
    await updateApplication("meyerson", {
      events: [
        {
          id: "contact-1",
          date: "2026-10-21",
          note: "Original contact",
          type: "Contact",
        },
      ],
    });
    const b = await exportBackup();
    b.records[0].events[0].note = "Overwritten contact";
    await expect(restoreBackup(b)).rejects.toThrow(/conflict/i);
    expect((await db.records.get("meyerson"))?.events[0].note).toBe(
      "Original contact",
    );
  });
  it("round trips records and settings and deduplicates histories", async () => {
    await saveLab("meyerson");
    await updateApplication("meyerson", { notes: "Keep me" });
    await db.preferences.put({ ...defaultPreferences, theme: "dark" });
    const backup = await exportBackup();
    await db.records.clear();
    await db.preferences.clear();
    await restoreBackup(backup);
    await restoreBackup(backup);
    expect((await db.records.get("meyerson"))?.notes).toBe("Keep me");
    expect((await db.records.get("meyerson"))?.history).toHaveLength(1);
    expect((await db.preferences.get("main"))?.theme).toBe("dark");
  });
  it("rejects invalid imports without partially changing storage", async () => {
    await saveLab("meyerson");
    const good = await exportBackup();
    for (const bad of [
      { ...good, version: 2 },
      { ...good, records: [{ ...good.records[0], labId: "foreign" }] },
      { ...good, records: [...good.records, ...good.records] },
      { ...good, records: [{ ...good.records[0], followUp: "2026-02-30" }] },
      { ...good, records: [{ ...good.records[0], status: "Pending" }] },
      { ...good, records: [{ ...good.records[0], notes: "x".repeat(20001) }] },
      { ...good, preferences: { ...good.preferences, compare: ["foreign"] } },
    ]) {
      expect(() => validateBackup(bad)).toThrow();
      await expect(restoreBackup(bad as typeof good)).rejects.toThrow();
      expect(await db.records.count()).toBe(1);
    }
  });
  it("merges local history when restored fields replace local fields", async () => {
    await saveLab("meyerson");
    const backup = await exportBackup();
    await moveApplication("meyerson", "Applied");
    await restoreBackup(backup);
    expect((await db.records.get("meyerson"))?.history).toHaveLength(3);
    expect((await db.records.get("meyerson"))?.status).toBe("Saved");
    expect((await db.records.get("meyerson"))?.history.at(-1)?.status).toBe(
      "Saved",
    );
  });
});
