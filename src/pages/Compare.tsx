import { Link } from "react-router-dom";
import { Columns2, X } from "lucide-react";
import { labs } from "../data/labs";
import { useAtlas } from "../app/AtlasProvider";
import { combinedScore } from "../domain/ranking";
import {
  PageHeading,
  Empty,
  DeadlineBadge,
  Availability,
} from "../components/Shared";
import { Button } from "../components/ui/button";
import type { Lab } from "../domain/types";
export function Compare() {
  const { prefs, updatePrefs } = useAtlas(),
    selected = prefs.compare
      .map((id) => labs.find((l) => l.id === id))
      .filter((l): l is Lab => !!l);
  const rows: { label: string; render: (l: Lab) => React.ReactNode }[] = [
    {
      label: "Résumé fit",
      render: (l) => (
        <strong className="compare-score">
          {l.fit}
          <small>/100</small>
        </strong>
      ),
    },
    { label: "Prestige", render: (l) => <strong>{l.prestige}/100</strong> },
    {
      label: "Combined recommendation",
      render: (l) => <strong>{combinedScore(l, prefs.fitWeight)}/100</strong>,
    },
    { label: "Research interests", render: (l) => l.fields.join(" · ") },
    {
      label: "Relevant strengths",
      render: (l) => (
        <ul>
          {l.strengths.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Qualification gaps",
      render: (l) => (
        <ul>
          {l.gaps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Experience & eligibility",
      render: (l) => (
        <>
          {l.requirements.join(" ")}
          <p
            className={
              l.eligibility === "restricted"
                ? "eligibility-warning"
                : "muted small"
            }
          >
            {l.eligibilityNote}
          </p>
        </>
      ),
    },
    { label: "Location", render: (l) => `${l.city}, ${l.state}` },
    { label: "Deadline", render: (l) => <DeadlineBadge lab={l} /> },
    { label: "Availability", render: (l) => <Availability lab={l} /> },
    { label: "Application method", render: (l) => l.applicationMethod },
    { label: "Research environment", render: (l) => l.prestigeReason },
    { label: "Fit perspective", render: (l) => l.assessment },
  ];
  return (
    <>
      <PageHeading
        eyebrow="CONSIDER THE WHOLE PICTURE"
        title="Different labs. Different possibilities."
        description="Look beyond a single score and compare the environments where you could grow."
        action={
          <Button asChild variant="outline">
            <Link to="/discover">Choose laboratories</Link>
          </Button>
        }
      />
      {selected.length < 2 ? (
        <div className="panel">
          <Empty icon={Columns2} title="Bring two possibilities side by side">
            Select Compare on two or more laboratories in Discover.
            {selected.length === 1 && (
              <p>Currently selected: {selected[0].name}</p>
            )}
            <Button asChild>
              <Link to="/discover">Explore the atlas</Link>
            </Button>
          </Empty>
        </div>
      ) : (
        <>
          <div className="comparison-note">
            <strong>A better fit depends on your priorities.</strong>
            <p>
              Scores are a starting point. Consider actual eligibility,
              mentorship, methods you want to learn, location, and whether a
              position is verified. A higher score does not make a lab
              objectively superior.
            </p>
            <p>
              At your current balance: {Math.round(prefs.fitWeight * 100)}%
              résumé fit and {100 - Math.round(prefs.fitWeight * 100)}%
              prestige. Scroll horizontally to explore every laboratory.
            </p>
          </div>
          <div
            className="comparison-scroll panel"
            tabIndex={0}
            role="region"
            aria-label="Scrollable lab comparison"
          >
            <table
              aria-label="Laboratory comparison"
              className="comparison-table"
            >
              <thead>
                <tr>
                  <th scope="col">What matters to you</th>
                  {selected.map((l) => (
                    <th scope="col" key={l.id}>
                      <div>
                        <span className="eyebrow">{l.institution}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label={`Remove ${l.name} from comparison`}
                          onClick={() =>
                            void updatePrefs({
                              compare: prefs.compare.filter(
                                (id) => id !== l.id,
                              ),
                            })
                          }
                        >
                          <X size={15} />
                        </Button>
                      </div>
                      <Link to={`/labs/${l.id}`}>{l.name}</Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {selected.map((l) => (
                      <td key={l.id}>{row.render(l)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
