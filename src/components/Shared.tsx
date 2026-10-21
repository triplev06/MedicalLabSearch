import {
  ArrowUpRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
  Bookmark,
  Heart,
  Columns2,
  Check,
  Plus,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { Lab } from "../domain/types";
import { combinedScore } from "../domain/ranking";
import { deadlineInfo, formatDate } from "../domain/deadlines";
import { useAtlas } from "../app/AtlasProvider";
import { saveLab, toggleFavorite } from "../storage/tracking";
import { Button } from "./ui/button";
export const availabilityLabels = {
  open: "Confirmed opening",
  inquiries: "Accepting inquiries",
  interest: "Lab of interest",
  closed: "Not recruiting technicians",
};
export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="external-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={14} />
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
export function Empty({
  icon: Icon = Sparkles,
  title,
  children,
}: {
  icon?: typeof Sparkles;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="empty">
      <span className="empty-icon">
        <Icon size={25} />
      </span>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
export function DeadlineBadge({ lab }: { lab: Lab }) {
  const { now } = useAtlas(),
    d = deadlineInfo(lab.deadline, now);
  return (
    <span className={`deadline ${d.tone}`}>
      <Clock3 size={13} />
      {d.label}
      {lab.deadline.kind === "fixed" && (
        <span> · {formatDate(lab.deadline.date)}</span>
      )}
    </span>
  );
}
export function Availability({ lab }: { lab: Lab }) {
  return (
    <span className={`availability ${lab.availability}`}>
      <span />
      {availabilityLabels[lab.availability]}
    </span>
  );
}
export function ScoreControls({
  weight,
  minFit,
  onWeight,
  onMinFit,
}: {
  weight: number;
  minFit: number;
  onWeight: (n: number) => void;
  onMinFit: (n: number) => void;
}) {
  return (
    <div className="score-controls">
      <div>
        <div className="label-row">
          <label htmlFor="fit-weight">Your recommendation balance</label>
          <strong>
            {Math.round(weight * 100)}% fit · {100 - Math.round(weight * 100)}%
            prestige
          </strong>
        </div>
        <input
          id="fit-weight"
          aria-label="Résumé fit weight"
          type="range"
          min="0"
          max="100"
          step="5"
          value={Math.round(weight * 100)}
          onChange={(e) => onWeight(Number(e.target.value) / 100)}
        />
        <div className="range-ends">
          <span>Institution prestige</span>
          <span>Résumé fit</span>
        </div>
      </div>
      <div>
        <div className="label-row">
          <label htmlFor="min-fit">Minimum résumé fit</label>
          <strong>{minFit}%</strong>
        </div>
        <input
          id="min-fit"
          aria-label="Minimum résumé fit"
          type="range"
          min="0"
          max="100"
          step="5"
          value={minFit}
          onChange={(e) => onMinFit(Number(e.target.value))}
        />
        <div className="range-ends">
          <span>Explore broadly</span>
          <span>Closest matches</span>
        </div>
      </div>
    </div>
  );
}
export function Scores({ lab, weight }: { lab: Lab; weight?: number }) {
  const { prefs } = useAtlas();
  return (
    <div className="scores">
      <div>
        <span>Résumé fit</span>
        <strong>
          {lab.fit}
          <small>/100</small>
        </strong>
        <div className="meter">
          <i style={{ width: `${lab.fit}%` }} />
        </div>
      </div>
      <div>
        <span>Prestige</span>
        <strong>
          {lab.prestige}
          <small>/100</small>
        </strong>
        <div className="meter prestige">
          <i style={{ width: `${lab.prestige}%` }} />
        </div>
      </div>
      <div className="combined">
        <span>Recommended</span>
        <strong>
          {combinedScore(lab, weight ?? prefs.fitWeight)}
          <small>/100</small>
        </strong>
      </div>
    </div>
  );
}
export function LabActions({
  lab,
  compact = false,
}: {
  lab: Lab;
  compact?: boolean;
}) {
  const { records, prefs, act, updatePrefs } = useAtlas(),
    r = records.find((r) => r.labId === lab.id),
    compared = prefs.compare.includes(lab.id);
  return (
    <div className="lab-actions">
      <Button
        variant={r ? "outline" : "default"}
        size="sm"
        aria-label={`${r ? "Saved" : "Save"} ${lab.name}`}
        onClick={() =>
          void act(
            () => saveLab(lab.id),
            r ? "Already in your tracker" : "Saved to your tracker",
          )
        }
      >
        {r ? <Check size={15} /> : <Plus size={15} />}
        {r ? "Saved" : "Save lab"}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        aria-label={`${r?.favorite ? "Unfavorite" : "Favorite"} ${lab.name}`}
        aria-pressed={r?.favorite ?? false}
        onClick={() => void act(() => toggleFavorite(lab.id))}
      >
        <Heart size={17} fill={r?.favorite ? "currentColor" : "none"} />
      </Button>
      <Button
        variant="ghost"
        size={compact ? "icon" : "sm"}
        aria-label={`Compare ${lab.name}`}
        aria-pressed={compared}
        onClick={() =>
          void updatePrefs({
            compare: compared
              ? prefs.compare.filter((id) => id !== lab.id)
              : [...prefs.compare, lab.id],
          })
        }
      >
        <Columns2 size={17} />
        {!compact && (compared ? "Selected" : "Compare")}
      </Button>
    </div>
  );
}
export function LabCard({ lab, weight }: { lab: Lab; weight?: number }) {
  return (
    <article className="lab-card" data-testid="lab-card">
      <div className="card-top">
        <span className="institution-mark">
          {lab.institution === "Dana-Farber Cancer Institute"
            ? "DF"
            : lab.institution === "MD Anderson Cancer Center"
              ? "MD"
              : lab.institution
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
        </span>
        <Availability lab={lab} />
      </div>
      <p className="eyebrow institution-name">{lab.institution}</p>
      <h3>
        <Link to={`/labs/${lab.id}`}>
          {lab.name}
          <ArrowUpRight size={17} />
        </Link>
      </h3>
      <p className="location">
        <MapPin size={13} />
        {lab.city}, {lab.state}
        <span>·</span>
        {lab.pi}
      </p>
      <p className="card-description">{lab.description}</p>
      <div className="tags">
        {lab.fields.map((f) => (
          <span key={f}>{f}</span>
        ))}
      </div>
      <Scores lab={lab} weight={weight} />
      {lab.eligibility === "restricted" && (
        <p className="eligibility-warning">
          Eligibility barrier · advertised doctoral track
        </p>
      )}
      <div className="card-bottom">
        <DeadlineBadge lab={lab} />
        <LabActions lab={lab} compact />
      </div>
      <div className="verification">
        <ShieldCheck size={12} /> Source checked {formatDate(lab.verified)}
      </div>
    </article>
  );
}
export function SectionHeading({
  title,
  children,
  to,
  label = "View all",
}: {
  title: string;
  children?: React.ReactNode;
  to?: string;
  label?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
      {to && (
        <Link className="text-link" to={to}>
          {label}
          <ArrowUpRight size={15} />
        </Link>
      )}
    </div>
  );
}
export function PageHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <header className="page-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {action}
    </header>
  );
}
export function LocalNote() {
  return (
    <p className="local-note">
      <Bookmark size={14} /> Your applications and notes stay in this browser.
      Export a backup to keep a copy.
    </p>
  );
}
