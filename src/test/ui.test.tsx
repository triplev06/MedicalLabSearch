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
import { labs } from "../data/labs";
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
  it("exposes new states and combines California with an exact city", async () => {
    start();
    await userEvent.click(await screen.findByLabelText("California"));
    await userEvent.selectOptions(
      screen.getByLabelText("City"),
      "San Francisco",
    );
    expect(screen.getAllByTestId("lab-card")).toHaveLength(4);
    for (const card of screen.getAllByTestId("lab-card"))
      expect(card).toHaveTextContent("San Francisco, CA");
    expect(screen.queryByLabelText("Alaska")).not.toBeInTheDocument();
  });
  it("expands discovery in batches and resets the batch when filters change", async () => {
    start();
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
    expect(screen.getAllByTestId("lab-card")).toHaveLength(29);
    expect(
      screen.queryByRole("button", { name: "Show more laboratories" }),
    ).not.toBeInTheDocument();
  });
  it("displays the same combined score as a bookmarked ranking weight", async () => {
    start("/discover?fitWeight=0");
    const link = await screen.findByRole("link", {
      name: "Bernstein Laboratory",
    });
    expect(
      link.closest("article")?.querySelector(".combined strong"),
    ).toHaveTextContent("95/100");
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
      target: { value: "95" },
    });
    expect(screen.getAllByTestId("lab-card")).toHaveLength(
      Math.min(24, labs.filter((l) => l.state === "MA" && l.fit >= 95).length),
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
    await saveLab("meyerson");
    start("/");
    expect(
      await screen.findByText("No verified upcoming deadlines"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Follow-ups" }),
    ).toBeInTheDocument();
  });
});
