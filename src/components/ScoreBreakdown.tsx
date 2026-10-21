import {
  calculateScores,
  fitBand,
  fitCriteria,
  prestigeCriteria,
  criterionAnchors,
} from "../domain/scoring";
import { reviewFor } from "../data/scoring";
export function ScoreBreakdown({ labId }: { labId: string }) {
  const review = reviewFor(labId),
    scores = calculateScores(review);
  return (
    <section className="panel detail-section score-breakdown">
      <p className="eyebrow">SCORING RUBRIC · VERSION 2</p>
      <h2>How these scores are earned</h2>
      <p>
        <strong>{fitBand(scores.fit)}</strong>. Scores are points, not
        acceptance percentages. Each criterion is reviewed from 0 to 4, then
        weighted and rounded to five-point bands.
      </p>
      <table aria-label="Résumé fit criteria">
        <thead>
          <tr>
            <th scope="col">Fit criterion</th>
            <th scope="col">Level</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {fitCriteria.map((c) => (
            <tr key={c.key}>
              <th scope="row">
                {c.label}
                <span className="criterion-anchor">
                  {criterionAnchors[c.key][review.fit[c.key]]}
                </span>
              </th>
              <td>{review.fit[c.key]} / 4</td>
              <td>
                {(review.fit[c.key] * c.weight) / 4} / {c.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="small muted">
        Weighted fit: {scores.fitRaw}/100 before rounding and evidence limits.
        Displayed fit: {scores.fit}/100.
      </p>
      {scores.limits.length > 0 && (
        <ul className="small">
          {scores.limits.map((limit) => (
            <li key={limit}>{limit}</li>
          ))}
        </ul>
      )}
      <table aria-label="Prestige evidence criteria">
        <thead>
          <tr>
            <th scope="col">Prestige criterion</th>
            <th scope="col">Level</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          {prestigeCriteria.map((c) => (
            <tr key={c.key}>
              <th scope="row">
                {c.label}
                <span className="criterion-anchor">
                  {criterionAnchors[c.key][review.prestige[c.key]]}
                </span>
              </th>
              <td>{review.prestige[c.key]} / 4</td>
              <td>
                {(review.prestige[c.key] * c.weight) / 4} / {c.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="small muted">
        Prestige measures documented research-environment evidence. Zero means
        no affirmative evidence for that criterion; it does not establish poor
        quality. Missing mentorship evidence limits confidence, and an
        institutional name earns no automatic points. Read the official sources
        below.
      </p>
    </section>
  );
}
