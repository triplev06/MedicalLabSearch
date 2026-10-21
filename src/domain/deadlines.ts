import type { Lab } from "./types";
export function calendarDay(date: Date): number {
  return (
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000
  );
}
export function daysUntil(date: string, now = new Date()): number {
  const [y, m, d] = date.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / 86400000 - calendarDay(now);
}
export function deadlineInfo(deadline: Lab["deadline"], now = new Date()) {
  if (deadline.kind !== "fixed")
    return {
      days: null,
      tone: "muted",
      label:
        deadline.kind === "rolling"
          ? "Rolling applications"
          : "Deadline unknown",
    };
  const days = daysUntil(deadline.date, now);
  return {
    days,
    tone:
      days < 0
        ? "expired"
        : days <= 7
          ? "urgent"
          : days <= 14
            ? "approaching"
            : "normal",
    label:
      days < 0
        ? "Deadline expired"
        : days === 0
          ? "Closes today"
          : `${days} days remaining`,
  };
}
export function actionable(lab: Lab, now = new Date()) {
  return (
    lab.availability !== "closed" &&
    (deadlineInfo(lab.deadline, now).days ?? 0) >= 0
  );
}
export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
export function formatDate(s: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(s + "T12:00:00"));
}
