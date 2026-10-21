import { Link, useParams } from "react-router-dom";
import { ScoreBreakdown } from "../components/ScoreBreakdown";
import {
  pathwayLabels,
  compensationLabels,
  audienceLabels,
  commitmentLabel,
} from "../domain/pathways";
import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { labs } from "../data/labs";
import { useAtlas } from "../app/AtlasProvider";
import { updateApplication, saveLab } from "../storage/tracking";
import { formatDate } from "../domain/deadlines";
import {
  Availability,
  DeadlineBadge,
  ExternalLink,
  LabActions,
  PageHeading,
  Scores,
} from "../components/Shared";
export function LabDetail() {
  const { id } = useParams(),
    lab = labs.find((l) => l.id === id),
    { records, act } = useAtlas();
  if (!lab)
    return (
      <>
        <PageHeading
          eyebrow="LABORATORY NOT FOUND"
          title="This lab isn’t in the atlas."
          description="Choose a laboratory from the verified catalog."
        />
        <Link to="/discover">Return to discovery</Link>
      </>
    );
  const r = records.find((r) => r.labId === lab.id);
  return (
    <>
      <Link className="text-link back-link" to="/discover">
        <ArrowLeft size={16} />
        Back to Discover
      </Link>
      <PageHeading
        eyebrow={lab.institution}
        title={lab.name}
        description={`${lab.pi} · ${lab.city}, ${lab.state}`}
        action={<LabActions lab={lab} />}
      />
      <div className="detail-layout">
        <div className="detail-main">
          <section className="panel detail-section">
            <p className="eyebrow">ENTRY ROUTE EVIDENCE</p>
            <h2>{pathwayLabels[lab.pathway.kind]}</h2>
            <p>
              <strong>{compensationLabels[lab.pathway.compensation]}</strong> ·{" "}
              {audienceLabels[lab.pathway.audience]}
            </p>
            <p>{lab.pathway.evidence}</p>
            <p className="muted small">{commitmentLabel(lab)}</p>
            {lab.pathway.sourceUrl && (
              <ExternalLink href={lab.pathway.sourceUrl}>
                Official entry-route information
              </ExternalLink>
            )}
            <p className="muted small">
              A route to apply or inquire is not an acceptance guarantee.
              Confirm current vacancies, applicant restrictions, work
              authorization and the required time commitment.
            </p>
          </section>
          <section className="panel detail-section">
            <Availability lab={lab} />
            <h2>Science with a purpose</h2>
            <p>{lab.description}</p>
            <div className="tags">
              {lab.fields.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
            <ExternalLink href={lab.website}>
              Official laboratory website
            </ExternalLink>
          </section>
          <section className="panel detail-section">
            <p className="eyebrow">YOUR RESEARCH ALIGNMENT</p>
            <h2>A closer look at the fit</h2>
            <Scores lab={lab} />
            <p>{lab.assessment}</p>
            <div className="fit-columns">
              <div>
                <h3>
                  <CheckCircle2 size={17} />
                  Relevant strengths
                </h3>
                <ul>
                  {lab.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>
                  <AlertTriangle size={17} />
                  Areas to develop
                </h3>
                <ul>
                  {lab.gaps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
            <h3>Research environment & prestige</h3>
            <p>{lab.prestigeReason}</p>
            <p className="muted small">
              Editorial scores use broad 5-point bands. They reflect research
              alignment and environment, not acceptance probabilities or an
              official ranking.
            </p>
          </section>
          <ScoreBreakdown labId={lab.id} />
          <section className="panel detail-section">
            <h2>Requirements & eligibility</h2>
            <ul>
              {lab.requirements.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div
              className={
                lab.eligibility === "restricted"
                  ? "eligibility-warning"
                  : "info-note"
              }
            >
              <strong>
                {lab.eligibility === "restricted"
                  ? "Eligibility barrier"
                  : "Eligibility needs confirmation"}
              </strong>
              <p>{lab.eligibilityNote}</p>
            </div>
            <h3>Application process</h3>
            <p>{lab.applicationMethod}</p>
            {lab.applicationUrl ? (
              <ExternalLink href={lab.applicationUrl}>
                Official opportunity information
              </ExternalLink>
            ) : (
              <p className="muted">
                No suitable application page has been verified.
              </p>
            )}
          </section>
          <section className="panel detail-section">
            <div className="panel-intro">
              <ShieldCheck size={20} />
              <div>
                <h2>Evidence, not guesswork</h2>
                <p>
                  Last checked {formatDate(lab.verified)}. Availability may
                  change; verify before applying.
                </p>
              </div>
            </div>
            {lab.sources.map((s, i) => (
              <div key={s.url + i} className="source-item">
                <ExternalLink href={s.url}>{s.title}</ExternalLink>
                <p>{s.evidence}</p>
                <div className="tags">
                  {s.claims.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
        <aside>
          <section className="panel detail-section sticky-detail">
            <h2>Your next step</h2>
            <DeadlineBadge lab={lab} />
            <p className="small muted">
              An unknown deadline does not mean applications are rolling.
            </p>
            <hr />
            <p className="location">
              <MapPin size={15} />
              {lab.city}, {lab.state}
            </p>
            <label className="filter-select">
              Your priority
              <select
                value={r?.priority ?? "Normal"}
                onChange={(e) =>
                  void act(async () => {
                    await saveLab(lab.id);
                    await updateApplication(lab.id, {
                      priority: e.target.value as "Normal" | "High" | "Low",
                    });
                  })
                }
              >
                <option>High</option>
                <option>Normal</option>
                <option>Low</option>
              </select>
            </label>
            {r && (
              <Link className="text-link" to="/tracker">
                Open application tracker →
              </Link>
            )}
            <hr />
            <h3>Lab contact</h3>
            {lab.contact ? (
              <>
                <p>{lab.contact.name}</p>
                <a
                  className="contact-email"
                  href={`mailto:${lab.contact.email}`}
                >
                  {lab.contact.email}
                </a>
              </>
            ) : (
              <p className="muted">
                No direct contact verified. Use the official institutional page.
              </p>
            )}
            <p className="local-note">
              Priority and application details stay in this browser.
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
