export function combinedScore(
  lab: { fit: number; prestige: number },
  fitWeight: number,
) {
  const weight = Math.min(1, Math.max(0, fitWeight));
  return Math.round((lab.fit * weight + lab.prestige * (1 - weight)) * 10) / 10;
}
