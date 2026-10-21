import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, Globe2, RotateCcw } from "lucide-react";
import { labs } from "../data/labs";
import {
  decodeFilters,
  defaultFilters,
  encodeFilters,
  selectLabs,
  type Filters,
} from "../domain/filters";
import { useAtlas } from "../app/AtlasProvider";
import {
  LabCard,
  PageHeading,
  ScoreControls,
  Empty,
  availabilityLabels,
} from "../components/Shared";
import { Button } from "../components/ui/button";
import { statuses } from "../domain/schemas";
const stateNames: Record<string, string> = {
  MA: "Massachusetts",
  WA: "Washington",
  TX: "Texas",
  TN: "Tennessee",
  OH: "Ohio",
  PA: "Pennsylvania",
  MI: "Michigan",
};
export function Discover() {
  const { records, prefs, now, updatePrefs } = useAtlas(),
    [params, setParams] = useSearchParams(),
    [mobileFilters, setMobileFilters] = useState(false);
  const [privateFilters, setPrivate] = useState({
    status: "",
    favorite: false,
    priority: "",
  });
  const parsed = decodeFilters(params);
  const derived = {
    ...parsed,
    minFit: params.has("minFit") ? parsed.minFit : prefs.minFit,
    fitWeight: params.has("fitWeight") ? parsed.fitWeight : prefs.fitWeight,
  };
  const externalKey = `${params.toString()}|${prefs.minFit}|${prefs.fitWeight}`;
  const [view, setView] = useState({ key: externalKey, filters: derived });
  // Controls update synchronously while router navigation commits the URL.
  // Changed URLs and saved defaults also refresh the view, including Back.
  if (view.key !== externalKey) setView({ key: externalKey, filters: derived });
  const f: Filters = { ...view.filters, ...privateFilters };
  function change(patch: Partial<Filters>) {
    setView({ key: externalKey, filters: { ...f, ...patch } });
    setParams(encodeFilters({ ...f, ...patch }), { replace: true });
    if (patch.fitWeight !== undefined)
      void updatePrefs({ fitWeight: patch.fitWeight });
    if (patch.minFit !== undefined) void updatePrefs({ minFit: patch.minFit });
  }
  function resetFilters() {
    setView({ key: externalKey, filters: defaultFilters });
    setParams({});
    setPrivate({ status: "", favorite: false, priority: "" });
    void updatePrefs({ minFit: 50, fitWeight: 0.6 });
  }
  const found = selectLabs(labs, f, records, now);
  return (
    <>
      <PageHeading
        eyebrow="THE RIGHT ENVIRONMENT CHANGES EVERYTHING"
        title="Discover your next chapter."
        description="Explore source-backed laboratories. Find where your experience can grow."
      />
      <section className="panel ranking-panel">
        <div className="panel-intro">
          <SlidersHorizontal size={19} />
          <div>
            <h2>Make it personal</h2>
            <p>
              Balance scientific fit with research environment. Scores guide
              exploration, not acceptance odds.
            </p>
          </div>
        </div>
        <ScoreControls
          weight={f.fitWeight}
          minFit={f.minFit}
          onWeight={(v) => change({ fitWeight: v })}
          onMinFit={(v) => change({ minFit: v })}
        />
      </section>
      <div className="discovery-toolbar">
        <label className="search-input">
          <Search size={19} />
          <span className="sr-only">Search laboratories</span>
          <input
            placeholder="Search labs, institutions, or research interests…"
            value={f.query}
            onChange={(e) => change({ query: e.target.value })}
          />
          {f.query && (
            <button
              aria-label="Clear search"
              onClick={() => change({ query: "" })}
            >
              ×
            </button>
          )}
        </label>
        <Button
          className="mobile-filter-toggle"
          variant="outline"
          onClick={() => setMobileFilters(!mobileFilters)}
          aria-expanded={mobileFilters}
        >
          <SlidersHorizontal size={16} />
          Filters
        </Button>
        <label className="sort-label">
          <span>Sort by</span>
          <select
            aria-label="Sort laboratories"
            value={f.sort}
            onChange={(e) =>
              change({ sort: e.target.value as Filters["sort"] })
            }
          >
            <option value="recommended">Recommended overall</option>
            <option value="fit">Highest résumé fit</option>
            <option value="prestige">Highest prestige</option>
            <option value="deadline-asc">Deadline: soonest first</option>
            <option value="deadline-desc">Deadline: latest first</option>
            <option value="institution">Institution name</option>
            <option value="verified">Recently verified</option>
          </select>
        </label>
      </div>
      <div className="discovery-layout">
        <aside
          className={`filters panel ${mobileFilters ? "filters-open" : ""}`}
          aria-label="Discovery filters"
        >
          <div className="filter-title">
            <h2>Refine your search</h2>
            <button
              aria-label="Reset filters"
              title="Reset filters"
              onClick={resetFilters}
            >
              <RotateCcw size={15} />
            </button>
          </div>
          <fieldset>
            <legend>Location</legend>
            <Button
              variant={!f.states.length ? "default" : "outline"}
              size="sm"
              onClick={() => change({ states: [] })}
            >
              <Globe2 size={14} />
              Nationwide
            </Button>
            <div className="state-list">
              {Object.entries(stateNames).map(([code, name]) => (
                <label key={code}>
                  <input
                    type="checkbox"
                    aria-label={name}
                    checked={f.states.includes(code)}
                    onChange={() =>
                      change({
                        states: f.states.includes(code)
                          ? f.states.filter((s) => s !== code)
                          : [...f.states, code],
                      })
                    }
                  />
                  {name}
                  <span>{labs.filter((l) => l.state === code).length}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <FilterSelect
            label="Research field"
            value={f.field}
            onChange={(v) => change({ field: v })}
            values={[...new Set(labs.flatMap((l) => l.fields))].sort()}
          />
          <FilterSelect
            label="Institution"
            value={f.institution}
            onChange={(v) => change({ institution: v })}
            values={[...new Set(labs.map((l) => l.institution))].sort()}
          />
          <FilterSelect
            label="Availability"
            value={f.availability}
            onChange={(v) => change({ availability: v })}
            values={Object.entries(availabilityLabels).map(
              ([value, label]) => ({ value, label }),
            )}
          />
          <FilterSelect
            label="Deadline window"
            value={f.deadlineWindow}
            onChange={(v) => change({ deadlineWindow: v })}
            values={[
              { value: "all", label: "All deadlines" },
              ...["7", "14", "30", "60"].map((v) => ({
                value: v,
                label: `Next ${v} days`,
              })),
            ]}
            noAll
          />
          <fieldset>
            <legend>Prestige range</legend>
            <div className="range-pair">
              <label>
                From
                <input
                  aria-label="Minimum prestige"
                  type="number"
                  min="0"
                  max={f.prestigeMax}
                  value={f.prestigeMin}
                  onChange={(e) =>
                    change({
                      prestigeMin: Math.max(
                        0,
                        Math.min(f.prestigeMax, Number(e.target.value)),
                      ),
                    })
                  }
                />
              </label>
              <span>—</span>
              <label>
                To
                <input
                  aria-label="Maximum prestige"
                  type="number"
                  min={f.prestigeMin}
                  max="100"
                  value={f.prestigeMax}
                  onChange={(e) =>
                    change({
                      prestigeMax: Math.min(
                        100,
                        Math.max(f.prestigeMin, Number(e.target.value)),
                      ),
                    })
                  }
                />
              </label>
            </div>
          </fieldset>
          <FilterSelect
            label="Experience requirement"
            value={f.experience}
            onChange={(v) => change({ experience: v })}
            values={[
              { value: "entry", label: "Entry-level route" },
              { value: "experienced", label: "Specific experience" },
              { value: "doctoral", label: "Doctoral track only" },
              { value: "unknown", label: "Requirements need confirmation" },
            ]}
          />
          <div className="private-filter-label">PRIVATE TO THIS BROWSER</div>
          <FilterSelect
            label="Application status"
            value={f.status}
            onChange={(v) => setPrivate({ ...privateFilters, status: v })}
            values={[...statuses, { value: "unsaved", label: "Not saved" }]}
          />
          <FilterSelect
            label="Priority"
            value={f.priority}
            onChange={(v) => setPrivate({ ...privateFilters, priority: v })}
            values={["High", "Normal", "Low"]}
          />
          <label className="check-label">
            <input
              type="checkbox"
              checked={f.favorite}
              onChange={(e) =>
                setPrivate({ ...privateFilters, favorite: e.target.checked })
              }
            />
            Favorites only
          </label>
        </aside>
        <div>
          <div className="results-caption">
            <p>
              <strong>{found.length}</strong> laboratories{" "}
              <span>· Curated for your research path</span>
            </p>
            <span className="verified-caption">
              Official sources · checked Oct 21, 2026
            </span>
          </div>
          {found.length ? (
            <div className="lab-grid">
              {found.map((l) => (
                <LabCard key={l.id} lab={l} weight={f.fitWeight} />
              ))}
            </div>
          ) : (
            <div className="panel">
              <Empty title="No laboratories match these filters">
                Try a wider fit range, another state, or clear your filters.
                <Button variant="outline" onClick={resetFilters}>
                  Clear filters
                </Button>
              </Empty>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
function FilterSelect({
  label,
  value,
  onChange,
  values,
  noAll = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  values: (string | { value: string; label: string })[];
  noAll?: boolean;
}) {
  return (
    <label className="filter-select">
      {label}
      <select
        aria-label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {!noAll && <option value="">All</option>}
        {values.map((v) => {
          const o = typeof v === "string" ? { value: v, label: v } : v;
          return (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </select>
    </label>
  );
}
