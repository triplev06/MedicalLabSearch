import type { ApplicationRecord } from "./types";
import { statuses } from "./schemas";
export function analytics(records: ApplicationRecord[]) {
  const byStatus = statuses.map((name) => ({
    name,
    value: records.filter((r) => r.status === name).length,
  }));
  const submitted = records.flatMap((r) => {
    const first = r.history
      .filter((h) => h.status === "Applied")
      .sort((a, b) => a.at.localeCompare(b.at))[0];
    return first
      ? [{ labId: r.labId, date: r.dateApplied ?? first.at.slice(0, 10) }]
      : r.dateApplied
        ? [{ labId: r.labId, date: r.dateApplied }]
        : [];
  });
  const byMonth = new Map<string, number>();
  for (const s of submitted) {
    const month = s.date.slice(0, 7);
    byMonth.set(month, (byMonth.get(month) ?? 0) + 1);
  }
  return {
    byStatus,
    submitted: submitted.length,
    overTime: [...byMonth]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([month, count]) => ({ month, count })),
    interviews: records.filter((r) =>
      r.history.some((h) => h.status === "Interview"),
    ).length,
    offers: records.filter((r) => r.history.some((h) => h.status === "Offer"))
      .length,
  };
}
