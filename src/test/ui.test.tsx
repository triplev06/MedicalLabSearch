import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "../app/App";
import { AtlasProvider } from "../app/AtlasProvider";
import { db, defaultPreferences } from "../storage/db";
import { exportBackup } from "../storage/backup";
import { saveLab } from "../storage/tracking";
import * as tracking from "../storage/tracking";
import Dexie from "dexie";
import { labs } from "../data/labs";
// Load the real lazy chart module during collection, so cold Vite transforms
// do not consume the deadline-panel interaction test's assertion budget.
import "../components/ProgressCharts";
beforeEach(async () => {
  vi.restoreAllMocks();
  await db.records.clear();
  await db.preferences.clear();
});
function start(path = "/discover") {
  render(
    <MemoryRouter initialEntries={[path]}>
      <AtlasProvider>
        <App />
      </AtlasProvider>
    </MemoryRouter>,
  );
}
describe("application views", () => {
  it.each(["slider", "reset"])(
    "keeps the %s default while an older saved preference is still visible",
    async (action) => {
      await db.preferences.put({ ...defaultPreferences, minFit: 100 });
      let releaseWrite!: () => void;
      const pending = new Promise<void>((resolve) => {
        releaseWrite = resolve;
      });
      vi.spyOn(tracking, "setPreferences").mockImplementation(async (prefs) => {
        await Dexie.waitFor(pending);
        await db.preferences.put(prefs);
      });
      start("/discover?minFit=100");
      try {
        const slider = await screen.findByLabelText("Minimum résumé fit");
        if (action === "slider")
          fireEvent.change(slider, { target: { value: "50" } });
        else
          await userEvent.click(
            screen.getByRole("button", { name: "Reset filters" }),
          );
        await userEvent.click(
          screen.getByRole("button", { name: /^Nationwide$/ }),
        );
        expect(slider).toHaveValue("50");
      } finally {
        releaseWrite();
        await waitFor(async () =>
          expect((await db.preferences.get("main"))?.minFit).toBe(50),
        );
      }
    },
  );
  it("opens a first-role view with public eligibility and duration filters without changing preferences", async () => {
    await db.preferences.put({ ...defaultPreferences, minFit: 65 });
    start();
    await userEvent.click(
      await screen.findByRole("button", { name: "First research role" }),
    );
    expect(screen.getByLabelText("Entry pathway")).toHaveValue("documented");
    expect(screen.getByLabelText("Applicant audience")).toHaveValue("external");
    expect(screen.getByLabelText("Minimum commitment")).toHaveValue(
      "up-to-year",
    );
    expect(screen.getByLabelText("Sort laboratories")).toHaveValue(
      "entry-route",
    );
    expect((await db.preferences.get("main"))?.minFit).toBe(65);
    await userEvent.selectOptions(
      screen.getByLabelText("Compensation"),
      "paid",
    );
    expect(screen.getByLabelText("Compensation")).toHaveValue("paid");
  });
  it("shows auditable criterion scores and confidence limits on a lab profile", async () => {
    start("/labs/meyerson");
    expect(
      await screen.findByRole("table", { name: "Résumé fit criteria" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("table", { name: "Prestige evidence criteria" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Demonstrated core methods", { exact: false }),
    ).toBeInTheDocument();
  });
  it("can explore all fit levels without overwriting the saved minimum", async () => {
    await db.preferences.put({ ...defaultPreferences, minFit: 70 });
    start();
    await userEvent.click(
      await screen.findByRole("button", { name: "Explore all fit levels" }),
    );
    expect(screen.getByLabelText("Minimum résumé fit")).toHaveValue("0");
    expect((await db.preferences.get("main"))?.minFit).toBe(70);
  });
  it("exposes new states and combines California with an exact city", async () => {
    start("/discover?minFit=0");
    await userEvent.click(await screen.findByLabelText("California"));
    await userEvent.selectOptions(
      screen.getByLabelText("City"),
      "San Francisco",
    );
    expect(screen.getAllByTestId("lab-card")).toHaveLength(
      Math.min(
        24,
        labs.filter((l) => l.state === "CA" && l.city === "San Francisco")
          .length,
      ),
    );
    for (const card of screen.getAllByTestId("lab-card"))
      expect(card).toHaveTextContent("San Francisco, CA");
    expect(screen.queryByLabelText("Alaska")).not.toBeInTheDocument();
  });
  it("expands discovery in batches and resets the batch when filters change", async () => {
    start("/discover?minFit=0");
    await screen.findByRole("heading", { name: "Discover your next chapter." });
    expect(screen.getAllByTestId("lab-card")).toHaveLength(24);
    await userEvent.click(
      screen.getByRole("button", { name: "Show more laboratories" }),
    );
    expect(screen.getAllByTestId("lab-card")).toHaveLength(48);
    await userEvent.click(screen.getByRole("button", { name: /^Ohio$/ }));
    expect(screen.getAllByTestId("lab-card")).toHaveLength(24);
    await userEvent.click(
      screen.getByRole("button", { name: "Columbus area" }),
    );
    expect(screen.getAllByTestId("lab-card")).toHaveLength(24);
    await userEvent.click(
      screen.getByRole("button", { name: "Show more laboratories" }),
    );
    const columbus = labs.filter(
      (l) => l.city === "Columbus" && l.state === "OH",
    ).length;
    expect(screen.getAllByTestId("lab-card")).toHaveLength(
      Math.min(48, columbus),
    );
    expect(
      !!screen.queryByRole("button", { name: "Show more laboratories" }),
    ).toBe(columbus > 48);
  });
  it("displays the same combined score as a bookmarked ranking weight", async () => {
    start("/discover?fitWeight=0");
    const link = await screen.findByRole("link", {
      name: "Bernstein Laboratory",
    });
    expect(
      link.closest("article")?.querySelector(".combined strong"),
    ).toHaveTextContent(
      `${labs.find((l) => l.id === "bernstein")!.prestige}/100`,
    );
  });
  it("clears persisted restrictive fit settings from the empty results view", async () => {
    await db.preferences.put({ ...defaultPreferences, minFit: 100 });
    start("/discover");
    await userEvent.click(
      await screen.findByRole("button", { name: "Clear filters" }),
    );
    expect(
      await screen.findByRole("button", { name: "Save Meyerson Laboratory" }),
    ).toBeInTheDocument();
    expect((await db.preferences.get("main"))?.minFit).toBe(50);
  });
  it("shows failed reset feedback inside its still-open modal", async () => {
    start("/preferences");
    await userEvent.click(
      await screen.findByRole("button", { name: "Clear browser data" }),
    );
    const write = vi
      .spyOn(db.records, "clear")
      .mockRejectedValueOnce(new Error("Disk failure"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    await userEvent.click(
      screen.getByRole("button", { name: "Confirm clear all data" }),
    );
    expect(
      await within(screen.getByRole("dialog")).findByRole("alert"),
    ).toHaveTextContent(/could not be cleared/i);
    write.mockRestore();
  });
  it("shows failed restore feedback inside the preview and keeps the backup for retry", async () => {
    await saveLab("meyerson");
    const backup = await exportBackup();
    const file = new File([JSON.stringify(backup)], "backup.json", {
      type: "application/json",
    });
    Object.defineProperty(file, "text", {
      value: async () => JSON.stringify(backup),
    });
    start("/preferences");
    await userEvent.upload(
      await screen.findByLabelText("Choose Research Atlas backup"),
      file,
    );
    await screen.findByRole("heading", { name: "Restore your backup" });
    const write = vi
      .spyOn(db.records, "put")
      .mockRejectedValueOnce(new Error("Disk failure"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    await userEvent.click(
      screen.getByRole("button", { name: "Confirm restore" }),
    );
    expect(
      await within(screen.getByRole("dialog")).findByRole("alert"),
    ).toHaveTextContent(/could not be restored/i);
    write.mockRestore();
    await userEvent.click(
      screen.getByRole("button", { name: "Confirm restore" }),
    );
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });
  it("retains draft notes and reports failed persistent writes", async () => {
    await saveLab("meyerson");
    start("/tracker");
    await userEvent.click(
      await screen.findByRole("button", { name: "Edit Meyerson Laboratory" }),
    );
    await userEvent.type(
      screen.getByLabelText("Personal notes"),
      "Keep this draft",
    );
    const errorLog = vi.spyOn(console, "error").mockImplementation(() => {});
    const write = vi
      .spyOn(db.records, "put")
      .mockRejectedValueOnce(new Error("Quota exceeded"));
    await userEvent.click(screen.getByRole("button", { name: "Save changes" }));
    expect(
      await screen.findByText(/Your text is still here/),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Personal notes")).toHaveValue(
      "Keep this draft",
    );
    expect((await db.records.get("meyerson"))?.notes).toBe("");
    write.mockRestore();
    errorLog.mockRestore();
    await userEvent.click(screen.getByRole("button", { name: "Save changes" }));
    await waitFor(async () =>
      expect((await db.records.get("meyerson"))?.notes).toBe("Keep this draft"),
    );
  });
  it("filters by state and responds to fit sliders", async () => {
    start();
    await screen.findByRole("heading", { name: "Discover your next chapter." });
    await userEvent.click(screen.getByLabelText("Massachusetts"));
    expect(screen.getAllByTestId("lab-card")).toHaveLength(
      Math.min(24, labs.filter((l) => l.state === "MA" && l.fit >= 50).length),
    );
    for (const card of screen.getAllByTestId("lab-card"))
      expect(card).toHaveTextContent(/, MA/);
    fireEvent.change(screen.getByLabelText("Minimum résumé fit"), {
      target: { value: "70" },
    });
    expect(screen.getAllByTestId("lab-card")).toHaveLength(
      Math.min(24, labs.filter((l) => l.state === "MA" && l.fit >= 70).length),
    );
    await userEvent.click(screen.getByRole("button", { name: "Nationwide" }));
    expect(screen.getByLabelText("Massachusetts")).not.toBeChecked();
    fireEvent.change(screen.getByLabelText("Résumé fit weight"), {
      target: { value: "100" },
    });
    expect(screen.getByText("100% fit · 0% prestige")).toBeInTheDocument();
  });
  it("saves from discovery and edits a persistent tracker record", async () => {
    start();
    await screen.findByRole("heading", { name: "Discover your next chapter." });
    await userEvent.click(
      screen.getByRole("button", { name: "Save Meyerson Laboratory" }),
    );
    await waitFor(async () => expect(await db.records.count()).toBe(1));
    await userEvent.click(
      screen.getByRole("link", { name: /Application Tracker/ }),
    );
    await userEvent.click(
      await screen.findByRole("button", { name: "Edit Meyerson Laboratory" }),
    );
    await userEvent.type(
      screen.getByLabelText("Personal notes"),
      "Ask about cell models",
    );
    fireEvent.change(screen.getByLabelText("Follow-up date"), {
      target: { value: "2026-11-01" },
    });
    await userEvent.click(screen.getByRole("button", { name: "Save changes" }));
    await waitFor(async () =>
      expect(await db.records.get("meyerson")).toMatchObject({
        notes: "Ask about cell models",
        followUp: "2026-11-01",
      }),
    );
  });
  it("compares selected laboratories without declaring an objective winner", async () => {
    start();
    await screen.findByRole("heading", { name: "Discover your next chapter." });
    await userEvent.click(
      screen.getByRole("button", { name: "Compare Meyerson Laboratory" }),
    );
    await userEvent.click(
      screen.getByRole("button", { name: "Compare Bernstein Laboratory" }),
    );
    await userEvent.click(screen.getByRole("link", { name: /Compare Labs/ }));
    expect(
      await screen.findByRole("table", { name: "Laboratory comparison" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Scores are a starting point/)).toBeInTheDocument();
  });
  it("explains an empty verified deadline list separately from reminders", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(new Date(2035, 0, 1));
    try {
      await saveLab("meyerson");
      start("/");
      expect(
        await screen.findByText("No verified upcoming deadlines"),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("heading", { name: "Follow-ups" }),
      ).toBeInTheDocument();
    } finally {
      vi.useRealTimers();
    }
  });
});
