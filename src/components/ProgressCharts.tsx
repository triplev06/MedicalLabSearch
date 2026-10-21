import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";
import { useAtlas } from "../app/AtlasProvider";
import { analytics } from "../domain/analytics";
import { Empty } from "./Shared";
const colors = [
  "#81969c",
  "#54737c",
  "#35606e",
  "#657caa",
  "#388168",
  "#a57570",
];
export default function ProgressCharts() {
  const { records } = useAtlas(),
    a = analytics(records);
  return (
    <div className="charts-grid">
      <section className="panel chart-panel">
        <h2>Applications by stage</h2>
        <p className="muted small">A little momentum, made visible.</p>
        {records.length ? (
          <>
            <div className="chart" aria-hidden="true">
              <ResponsiveContainer width="100%" height={190}>
                <BarChart
                  accessibilityLayer={false}
                  data={a.byStatus}
                  margin={{ left: -25, right: 8, top: 12 }}
                >
                  <CartesianGrid vertical={false} stroke="var(--border)" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "var(--muted)", fontSize: 10 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fill: "var(--muted)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                    }}
                  />
                  <Bar
                    dataKey="value"
                    name="Applications"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={35}
                  >
                    {a.byStatus.map((s, i) => (
                      <Cell key={s.name} fill={colors[i]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="chart-summary">
              {a.byStatus.map((s) => `${s.name}: ${s.value}`).join(" · ")}
            </p>
          </>
        ) : (
          <Empty title="Your progress starts here">
            Save a lab to start your application journey.
          </Empty>
        )}
      </section>
      <section className="panel chart-panel">
        <h2>Submitted over time</h2>
        <p className="muted small">Each application is another door opened.</p>
        {a.overTime.length ? (
          <>
            <div className="chart" aria-hidden="true">
              <ResponsiveContainer width="100%" height={190}>
                <BarChart
                  accessibilityLayer={false}
                  data={a.overTime}
                  margin={{ left: -25, right: 8, top: 12 }}
                >
                  <CartesianGrid vertical={false} stroke="var(--border)" />
                  <XAxis
                    dataKey="month"
                    tick={{ fill: "var(--muted)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    allowDecimals={false}
                    tick={{ fill: "var(--muted)", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                    }}
                  />
                  <Bar
                    dataKey="count"
                    name="First submissions"
                    fill="#54737c"
                    radius={[4, 4, 0, 0]}
                    maxBarSize={45}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="chart-summary">
              {a.overTime
                .map((s) => `${s.month}: ${s.count} first submissions`)
                .join(" · ")}
            </p>
          </>
        ) : (
          <Empty title="Your first submission awaits">
            Move an application to Applied to see it here.
          </Empty>
        )}
      </section>
    </div>
  );
}
