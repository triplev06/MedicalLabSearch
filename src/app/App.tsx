import { Component, lazy, Suspense, useEffect, type ReactNode } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import {
  Compass,
  LayoutDashboard,
  Search,
  Columns3,
  Columns2,
  Settings2,
  LockKeyhole,
  ArrowUpRight,
} from "lucide-react";
import { useAtlas } from "./AtlasProvider";
const Dashboard = lazy(() =>
  import("../pages/Dashboard").then((m) => ({ default: m.Dashboard })),
);
const Discover = lazy(() =>
  import("../pages/Discover").then((m) => ({ default: m.Discover })),
);
const Tracker = lazy(() =>
  import("../pages/Tracker").then((m) => ({ default: m.Tracker })),
);
const Compare = lazy(() =>
  import("../pages/Compare").then((m) => ({ default: m.Compare })),
);
const Preferences = lazy(() =>
  import("../pages/Preferences").then((m) => ({ default: m.Preferences })),
);
const LabDetail = lazy(() =>
  import("../pages/LabDetail").then((m) => ({ default: m.LabDetail })),
);
const nav = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/discover", label: "Discover Labs", icon: Search },
  { path: "/tracker", label: "Application Tracker", icon: Columns3 },
  { path: "/compare", label: "Compare Labs", icon: Columns2 },
  { path: "/preferences", label: "Preferences", icon: Settings2 },
];
export function App() {
  const { records, prefs, error, notice } = useAtlas(),
    location = useLocation(),
    current = nav.find((n) =>
      n.path === "/"
        ? location.pathname === "/"
        : location.pathname.startsWith(n.path),
    );
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [location.pathname]);
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <aside className="sidebar">
        <NavLink className="brand" to="/" aria-label="Research Atlas home">
          <span className="brand-icon">
            <Compass size={25} strokeWidth={1.5} />
          </span>
          <span>
            Research<span className="brand-atlas">Atlas</span>
          </span>
        </NavLink>
        <div className="workspace-label">YOUR WORKSPACE</div>
        <nav aria-label="Main navigation">
          {nav.map((n) => (
            <NavLink end={n.path === "/"} key={n.path} to={n.path}>
              <n.icon size={18} />
              <span>{n.label}</span>
              {n.path === "/tracker" && records.length > 0 && (
                <small>{records.length}</small>
              )}
              {n.path === "/compare" && prefs.compare.length > 0 && (
                <small>{prefs.compare.length}</small>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-quote">
            <span>MAKE ROOM FOR POSSIBILITY</span>
            <p>
              The next breakthrough
              <br />
              could start with you.
            </p>
            <NavLink to="/discover">
              Find your place
              <ArrowUpRight size={14} />
            </NavLink>
          </div>
          <div className="privacy-status">
            <LockKeyhole size={15} />
            <div>
              <strong>Your progress, kept private</strong>
              <span>Stored in this browser</span>
            </div>
            <i />
          </div>
        </div>
      </aside>
      <div className="main-shell">
        <header className="topbar">
          <p>
            <span>Workspace</span>
            <span className="breadcrumb-divider">/</span>
            {current?.label ?? "Laboratory profile"}
          </p>
          <div>
            <span className="local-pill">
              <LockKeyhole size={12} />
              Local workspace
            </span>
            <span
              className="workspace-avatar"
              aria-label="Personal research workspace"
            >
              RA
            </span>
          </div>
        </header>
        <main id="main" tabIndex={-1}>
          <div className="main-content">
            {error && (
              <div role="alert" className="global-error">
                {error}
              </div>
            )}
            <Suspense
              fallback={
                <div role="status" className="loading">
                  Opening your next page…
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/preferences" element={<Preferences />} />
                <Route path="/labs/:id" element={<LabDetail />} />
                <Route
                  path="*"
                  element={
                    <div className="panel detail-section">
                      <h1>Page not found</h1>
                      <NavLink to="/">Return to dashboard</NavLink>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
            <footer className="site-footer">
              <span>
                <Compass size={14} />
                Research Atlas
              </span>
              <p>A thoughtful next step in research.</p>
              <NavLink to="/preferences">Privacy & your data</NavLink>
            </footer>
          </div>
        </main>
      </div>
      <div
        aria-live="polite"
        role="status"
        className={notice ? "toast" : "sr-only"}
      >
        {notice}
      </div>
    </div>
  );
}
export class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="fatal-error">
        <h1>Your workspace hit a problem.</h1>
        <p>Your browser data has not been reset. Reload to try again.</p>
        <button
          className="button button-primary"
          onClick={() => location.reload()}
        >
          Reload workspace
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}
