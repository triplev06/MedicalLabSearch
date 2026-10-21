import Dexie, { type Table } from "dexie";
import type { ApplicationRecord, Preferences } from "../domain/types";
export class AtlasDatabase extends Dexie {
  records!: Table<ApplicationRecord, string>;
  preferences!: Table<Preferences, string>;
  constructor(name = "research-atlas") {
    super(name);
    this.version(1).stores({
      records: "labId,status,favorite,followUp,updatedAt",
      preferences: "id",
    });
  }
}
export const db = new AtlasDatabase();
export const defaultPreferences: Preferences = {
  id: "main",
  fitWeight: 0.6,
  minFit: 50,
  theme: "system",
  compare: [],
};
