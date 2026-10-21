import type { ApplicationRecord, Lab } from "./types";
import { deadlineInfo } from "./deadlines";
import { combinedScore } from "./ranking";
export const sorts = [
  "recommended",
  "fit",
  "prestige",
  "deadline-asc",
  "deadline-desc",
  "institution",
  "verified",
] as const;
export type Filters = {
  query: string;
  city: string;
  states: string[];
  field: string;
  institution: string;
  minFit: number;
  prestigeMin: number;
  prestigeMax: number;
  availability: string;
  deadlineWindow: string;
  status: string;
  favorite: boolean;
  priority: string;
  experience: string;
  sort: (typeof sorts)[number];
  fitWeight: number;
};
export const defaultFilters: Filters = {
  query: "",
  city: "",
  states: [],
  field: "",
  institution: "",
  minFit: 50,
  prestigeMin: 0,
  prestigeMax: 100,
  availability: "",
  deadlineWindow: "all",
  status: "",
  favorite: false,
  priority: "",
  experience: "",
  sort: "recommended",
  fitWeight: 0.6,
};
export function selectLabs(
  labs: Lab[],
  f: Filters,
  records: ApplicationRecord[],
  now = new Date(),
) {
  const map = new Map(records.map((r) => [r.labId, r]));
  return labs
    .filter((l) => {
      const r = map.get(l.id),
        days = deadlineInfo(l.deadline, now).days;
      return (
        (!f.query ||
          `${l.name} ${l.institution} ${l.pi} ${l.city} ${l.state} ${l.description} ${l.fields.join(" ")}`
            .toLowerCase()
            .includes(f.query.toLowerCase())) &&
        (!f.states.length || f.states.includes(l.state)) &&
        (!f.city || l.city === f.city) &&
        (!f.field ||
          l.fields.some(
            (field) => field.toLowerCase() === f.field.toLowerCase(),
          )) &&
        (!f.institution || l.institution === f.institution) &&
        l.fit >= f.minFit &&
        l.prestige >= f.prestigeMin &&
        l.prestige <= f.prestigeMax &&
        (!f.availability || l.availability === f.availability) &&
        (f.deadlineWindow === "all" ||
          (days !== null && days >= 0 && days <= Number(f.deadlineWindow))) &&
        (!f.status || (f.status === "unsaved" ? !r : r?.status === f.status)) &&
        (!f.favorite || r?.favorite) &&
        (!f.priority || r?.priority === f.priority) &&
        (!f.experience || l.experience === f.experience)
      );
    })
    .sort((a, b) => {
      let diff = 0;
      switch (f.sort) {
        case "fit":
          diff = b.fit - a.fit;
          break;
        case "prestige":
          diff = b.prestige - a.prestige;
          break;
        case "institution":
          diff = a.institution.localeCompare(b.institution);
          break;
        case "verified":
          diff = b.verified.localeCompare(a.verified);
          break;
        case "deadline-asc":
        case "deadline-desc": {
          const ad = deadlineInfo(a.deadline, now).days,
            bd = deadlineInfo(b.deadline, now).days;
          diff =
            ad === null
              ? bd === null
                ? 0
                : 1
              : bd === null
                ? -1
                : (ad - bd) * (f.sort === "deadline-asc" ? 1 : -1);
          break;
        }
        default:
          diff = combinedScore(b, f.fitWeight) - combinedScore(a, f.fitWeight);
      }
      return diff || a.id.localeCompare(b.id);
    });
}
const publicKeys = [
  "query",
  "city",
  "states",
  "field",
  "institution",
  "minFit",
  "prestigeMin",
  "prestigeMax",
  "availability",
  "deadlineWindow",
  "experience",
  "sort",
  "fitWeight",
] as const;
export function encodeFilters(f: Filters) {
  const p = new URLSearchParams();
  for (const k of publicKeys) {
    const value = f[k];
    if (JSON.stringify(value) !== JSON.stringify(defaultFilters[k]))
      p.set(k, Array.isArray(value) ? value.join(",") : String(value));
  }
  return p;
}
export function decodeFilters(p: URLSearchParams): Filters {
  const f = { ...defaultFilters, states: [] as string[] };
  for (const k of [
    "query",
    "city",
    "field",
    "institution",
    "availability",
    "experience",
  ] as const)
    f[k] = p.get(k) ?? "";
  f.states = (p.get("states") ?? "")
    .split(",")
    .filter((s) => /^[A-Z]{2}$/.test(s));
  for (const k of [
    "minFit",
    "prestigeMin",
    "prestigeMax",
    "fitWeight",
  ] as const) {
    const v = Number(p.get(k));
    if (
      p.has(k) &&
      Number.isFinite(v) &&
      v >= 0 &&
      v <= (k === "fitWeight" ? 1 : 100)
    )
      f[k] = v;
  }
  if (sorts.includes(p.get("sort") as (typeof sorts)[number]))
    f.sort = p.get("sort") as (typeof sorts)[number];
  if (["7", "14", "30", "60", "all"].includes(p.get("deadlineWindow") ?? ""))
    f.deadlineWindow = p.get("deadlineWindow")!;
  return f;
}
