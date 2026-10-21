import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Bookmark,
  Send,
  MessagesSquare,
  Trophy,
  Clock3,
  CalendarDays,
  Compass,
  Sparkles,
} from "lucide-react";
import { useAtlas } from "../app/AtlasProvider";
import { labs } from "../data/labs";
import {
  actionable,
  deadlineInfo,
  daysUntil,
  formatDate,
} from "../domain/deadlines";
import { defaultFilters, selectLabs } from "../domain/filters";
import { analytics } from "../domain/analytics";
import {
  Empty,
  LabCard,
  PageHeading,
  SectionHeading,
  DeadlineBadge,
} from "../components/Shared";
import { Button } from "../components/ui/button";
const Charts = lazy(() => import("../components/ProgressCharts"));
export function Dashboard() {
  const { records, prefs, now } = useAtlas(),
    a = analytics(records);
  const recommended = selectLabs(
    labs.filter((l) => actionable(l, now) && l.eligibility !== "restricted"),
    { ...defaultFilters, minFit: prefs.minFit, fitWeight: prefs.fitWeight },
    records,
    now,
  ).slice(0, 3);
  const closing = labs
    .filter(
      (l) =>
        l.availability !== "closed" &&
        l.deadline.kind === "fixed" &&
        (deadlineInfo(l.deadline, now).days ?? -1) >= 0 &&
        (deadlineInfo(l.deadline, now).days ?? 61) <= 60,
    )
    .sort(
      (x, y) =>
        (deadlineInfo(x.deadline, now).days ?? 0) -
        (deadlineInfo(y.deadline, now).days ?? 0),
    );
  const followups = records
    .filter((r) => r.followUp)
    .sort((x, y) => x.followUp!.localeCompare(y.followUp!))
    .slice(0, 5);
  const activity = records
    .flatMap((r) => r.history.map((h) => ({ ...h, labId: r.labId })))
    .sort((x, y) => y.at.localeCompare(x.at))
    .slice(0, 5);
  const stats = [
    {
      label: "Saved laboratories",
      value: records.length,
      icon: Bookmark,
      sub: `${records.filter((r) => r.favorite).length} favorites`,
    },
    {
      label: "In progress",
      value: records.filter((r) => r.status === "In Progress").length,
      icon: Compass,
      sub: "Taking the next step",
    },
    {
      label: "Submitted",
      value: a.submitted,
      icon: Send,
      sub: "First applications sent",
    },
    {
      label: "Interviews",
      value: records.filter((r) => r.status === "Interview").length,
      icon: MessagesSquare,
      sub: `${a.interviews} reached interview stage`,
    },
    {
      label: "Offers",
      value: records.filter((r) => r.status === "Offer").length,
      icon: Trophy,
      sub: `${records.filter((r) => r.status === "Rejected").length} rejections`,
    },
  ];
  return (
    <>
      <PageHeading
        eyebrow="YOUR NEXT DISCOVERY STARTS HERE"
        title="Good science. Great possibilities."
        description="Find the right lab, make your next move, and build a future in research."
        action={
          <Button asChild>
            <Link to="/discover">
              Explore laboratories
              <ArrowUpRight size={16} />
            </Link>
          </Button>
        }
      />
      <section className="welcome-banner">
        <div>
          <span className="banner-label">
            <span />
            YOUR RESEARCH ATLAS
          </span>
          <h2>
            A thoughtful search.
            <br />A meaningful next step.
          </h2>
          <p>
            Your cell biology and clinical research skills can open doors.
            <br className="desktop-break" /> Explore environments where you can
            contribute—and grow.
          </p>
          <Link to="/discover">
            Find your research fit
            <ArrowRight size={17} />
          </Link>
        </div>
        <div className="atlas-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="orbit-point point-one" />
          <span className="orbit-point point-two" />
          <span className="orbit-point point-three" />
          <div className="atlas-center">
            <Compass size={68} strokeWidth={0.8} />
          </div>
          <span className="art-coordinate">EXPLORE · CONNECT · DISCOVER</span>
        </div>
      </section>
      <div className="stats-grid">
        {stats.map((s) => (
          <Link className="stat-card" to="/tracker" key={s.label}>
            <div>
              <span>{s.label}</span>
              <s.icon size={17} />
            </div>
            <strong>{s.value}</strong>
            <p>{s.sub}</p>
          </Link>
        ))}
      </div>
      <section className="closing-panel panel">
        <div className="closing-heading">
          <span className="closing-icon">
            <Clock3 size={20} />
          </span>
          <div>
            <h2>Closing Soon</h2>
            <p>Verified application deadlines in the next 60 days.</p>
          </div>
          <Link className="text-link" to="/discover?deadlineWindow=60">
            View deadlines
            <ArrowUpRight size={15} />
          </Link>
        </div>
        {closing.length ? (
          <div className="deadline-list">
            {closing.map((l) => (
              <Link key={l.id} to={`/labs/${l.id}`}>
                <strong>{l.name}</strong>
                <span>{l.institution}</span>
                <DeadlineBadge lab={l} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="closing-empty">
            <ShieldClock />
            <div>
              <strong>No verified upcoming deadlines</strong>
              <p>
                The current catalog has no confirmed fixed deadlines. Open roles
                may close without notice; check official pages before applying.
              </p>
            </div>
            <span className="subtle-badge">No dates invented</span>
          </div>
        )}
      </section>
      <SectionHeading
        title="A good place to begin"
        to="/discover"
        label="Explore all labs"
      >
        Your strongest actionable research matches, balanced with research
        environment.
      </SectionHeading>
      {recommended.length ? (
        <div className="recommendation-grid">
          {recommended.map((l) => (
            <LabCard key={l.id} lab={l} />
          ))}
        </div>
      ) : (
        <div className="panel">
          <Empty title="Widen your research horizon">
            Lower your minimum fit in Preferences to explore more opportunities.
          </Empty>
        </div>
      )}
      <SectionHeading title="Your momentum" to="/tracker" label="Open tracker">
        Every small step brings your research career closer.
      </SectionHeading>
      <Suspense
        fallback={<div className="panel loading">Loading progress charts…</div>}
      >
        <Charts />
      </Suspense>
      <div className="dashboard-bottom">
        <section className="panel detail-section">
          <SectionHeading title="Follow-ups" to="/tracker" />
          {followups.length ? (
            <ul className="followup-list">
              {followups.map((r) => (
                <li key={r.labId}>
                  <CalendarDays size={17} />
                  <div>
                    <Link to={`/labs/${r.labId}`}>
                      {labs.find((l) => l.id === r.labId)?.name}
                    </Link>
                    <p>
                      {formatDate(r.followUp!)} ·{" "}
                      {daysUntil(r.followUp!, now) < 0
                        ? "Overdue reminder"
                        : daysUntil(r.followUp!, now) === 0
                          ? "Due today"
                          : "Personal reminder"}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <Empty icon={CalendarDays} title="Room for your next conversation">
              Add a personal follow-up date in the tracker. Reminders appear
              when you visit.
            </Empty>
          )}
        </section>
        <section className="panel detail-section">
          <SectionHeading title="Recent activity" />
          {activity.length ? (
            <ol className="activity-list">
              {activity.map((h) => (
                <li key={h.id}>
                  <span className="activity-dot" />
                  <div>
                    <Link to={`/labs/${h.labId}`}>
                      {labs.find((l) => l.id === h.labId)?.name}
                    </Link>
                    <p>
                      Moved to {h.status}
                      <span> · {new Date(h.at).toLocaleDateString()}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          ) : (
            <Empty icon={Sparkles} title="A clean slate, full of possibility">
              Saved labs and application updates will appear here.
            </Empty>
          )}
        </section>
      </div>
      <div className="progress-note">
        <Trophy size={18} />
        <p>
          <strong>{a.interviews}</strong> applications have reached interview ·{" "}
          <strong>{a.offers}</strong> have reached an offer. These are your
          recorded milestones, not predictions.
        </p>
      </div>
    </>
  );
}
function ShieldClock() {
  return <Clock3 size={22} className="muted" />;
}
