import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";

test("new nationwide state and city filters lead to a persistent application", async ({
  page,
}) => {
  await page.goto("/discover");
  await expect(
    page.getByRole("heading", { name: "Discover your next chapter." }),
  ).toBeVisible();
  const filters = page.getByRole("button", { name: "Filters", exact: true });
  if (await filters.isVisible()) await filters.click();
  await page.getByLabel("California", { exact: true }).check();
  await page.getByLabel("City", { exact: true }).selectOption("San Francisco");
  await expect(page.getByTestId("lab-card")).toHaveCount(4);
  await expect(page).toHaveURL(/city=San\+Francisco/);
  await page
    .getByRole("link", { name: "Bivona Laboratory", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Bivona Laboratory", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Official laboratory website/ }),
  ).toHaveAttribute("href", /^https:\/\//);
  await page
    .getByRole("button", { name: "Save Bivona Laboratory", exact: true })
    .click();
  await page.getByRole("link", { name: /Application Tracker/ }).click();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Bivona Laboratory", exact: true }),
  ).toBeVisible();
});

test("regional discovery finds expanded labs and keeps saved applications after reload", async ({
  page,
}) => {
  await page.goto("/discover");
  await page
    .getByRole("button", { name: "Columbus area", exact: true })
    .click();
  await expect(page).toHaveURL(/city=Columbus/);
  await expect(page.getByTestId("lab-card")).toHaveCount(24);
  await page.getByRole("button", { name: "Show more laboratories" }).click();
  await expect(page.getByTestId("lab-card")).toHaveCount(29);
  await page
    .getByRole("button", { name: "Save Carson Laboratory", exact: true })
    .click();
  await page
    .getByRole("textbox", { name: "Search laboratories" })
    .fill("immunology");
  await expect(page).toHaveURL(/city=Columbus/);
  await expect(page.getByTestId("lab-card").first()).toBeVisible();
  for (const card of await page.getByTestId("lab-card").all())
    await expect(card).toContainText("Columbus, OH");
  await page.getByRole("button", { name: "Clear search", exact: true }).click();
  await page.getByRole("button", { name: "Chicago area", exact: true }).click();
  await expect(page.getByTestId("lab-card")).toHaveCount(20);
  await page
    .getByRole("button", { name: "All locations", exact: true })
    .click();
  await expect(page.getByTestId("lab-card")).toHaveCount(24);
  await expect(
    page.getByText("Showing 24 of 189 matching entries", { exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: /Application Tracker/ }).click();
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Carson Laboratory", exact: true }),
  ).toBeVisible();
});

test("populated dashboard charts are accessible in light and dark mode", async ({
  page,
}, info) => {
  await page.goto("/discover");
  await page
    .getByRole("button", { name: "Save Meyerson Laboratory", exact: true })
    .click();
  await page.getByRole("link", { name: /Application Tracker/ }).click();
  await page
    .getByLabel("Move Meyerson Laboratory to", { exact: true })
    .selectOption("Applied");
  for (const mode of ["Light", "Dark"]) {
    await page.getByRole("link", { name: "Preferences", exact: true }).click();
    await page
      .getByRole("button", {
        name: new RegExp(`^${mode}( ${mode} workspace)?$`),
      })
      .click();
    await page.getByRole("link", { name: "Dashboard", exact: true }).click();
    await expect(
      page.getByText(
        "Saved: 0 · In Progress: 0 · Applied: 1 · Interview: 0 · Offer: 0 · Rejected: 0",
        { exact: true },
      ),
    ).toBeVisible();
    const audit = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      audit.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
    await page.screenshot({
      path: info.outputPath(`dashboard-populated-${mode.toLowerCase()}.png`),
      fullPage: true,
    });
  }
});

test("discovery to application, persistent details, comparison and backup restore", async ({
  page,
}, info) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/discover");
  await expect(
    page.getByRole("heading", { name: "Discover your next chapter." }),
  ).toBeVisible();
  const filterToggle = page.getByRole("button", {
    name: "Filters",
    exact: true,
  });
  if (await filterToggle.isVisible()) await filterToggle.click();
  await page.getByLabel("Massachusetts", { exact: true }).click();
  await expect(page.getByLabel("Massachusetts", { exact: true })).toBeChecked();
  await expect(page.getByTestId("lab-card").first()).toContainText(", MA");
  await page.getByLabel("Minimum résumé fit", { exact: true }).press("End");
  await page
    .getByLabel("Minimum résumé fit", { exact: true })
    .press("ArrowLeft");
  await expect(page.getByTestId("lab-card").first()).toBeVisible();
  for (const card of await page.getByTestId("lab-card").all())
    await expect(card).toContainText(", MA");
  await page.getByLabel("Minimum résumé fit", { exact: true }).press("Home");
  for (let i = 0; i < 10; i++)
    await page
      .getByLabel("Minimum résumé fit", { exact: true })
      .press("ArrowRight");
  await page.getByRole("button", { name: "Nationwide", exact: true }).click();
  await page
    .getByRole("button", { name: "Save Meyerson Laboratory", exact: true })
    .click();
  await expect(
    page.getByRole("button", {
      name: "Saved Meyerson Laboratory",
      exact: true,
    }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Favorite Meyerson Laboratory", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Compare Meyerson Laboratory", exact: true })
    .click();
  await expect(
    page.getByRole("button", {
      name: "Compare Meyerson Laboratory",
      exact: true,
    }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("button", { name: "Compare Bernstein Laboratory", exact: true })
    .click();
  await page.getByRole("link", { name: /Compare Labs/ }).click();
  await expect(
    page.getByRole("table", { name: "Laboratory comparison" }),
  ).toBeVisible();
  await expect(
    page.getByRole("columnheader").filter({ hasText: "Meyerson Laboratory" }),
  ).toBeVisible();
  await page.getByRole("link", { name: /Application Tracker/ }).click();
  await page
    .getByLabel("Move Meyerson Laboratory to", { exact: true })
    .selectOption("Applied");
  await expect(
    page
      .locator('[data-stage="Applied"]')
      .getByRole("heading", { name: "Meyerson Laboratory" }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Edit Meyerson Laboratory", exact: true })
    .click();
  await page
    .getByLabel("Personal notes", { exact: true })
    .fill("Ask about mentorship and cell models.");
  await page.getByLabel("Follow-up date", { exact: true }).fill("2026-11-01");
  await page
    .getByLabel("Communication notes", { exact: true })
    .fill("Drafted an introduction.");
  await page
    .getByLabel("Event details", { exact: true })
    .fill("Prepared application materials.");
  await page.getByRole("button", { name: "Save changes", exact: true }).click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.reload();
  await page
    .getByRole("button", { name: "Edit Meyerson Laboratory", exact: true })
    .click();
  await expect(page.getByLabel("Personal notes", { exact: true })).toHaveValue(
    "Ask about mentorship and cell models.",
  );
  await expect(page.getByLabel("Follow-up date", { exact: true })).toHaveValue(
    "2026-11-01",
  );
  await expect(
    page.getByText("Prepared application materials.", { exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Close dialog" }).click();
  await expect
    .poll(async () =>
      page.evaluate(
        () => window.innerWidth <= document.documentElement.clientWidth + 1,
      ),
    )
    .toBe(true);
  await page.getByRole("link", { name: "Preferences", exact: true }).click();
  await page
    .getByRole("button", { name: "Dark Dark workspace", exact: true })
    .or(page.getByRole("button", { name: "Dark", exact: true }))
    .click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  const downloaded = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Export backup", exact: true })
    .click();
  const file = await downloaded,
    path = info.outputPath("backup.json");
  await file.saveAs(path);
  const backup = JSON.parse(await fs.readFile(path, "utf8"));
  expect(backup.records).toHaveLength(1);
  expect(backup.records[0].favorite).toBe(true);
  await page
    .getByRole("button", { name: "Clear browser data", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Confirm clear all data", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.getByLabel("Choose Research Atlas backup").setInputFiles(path);
  await page
    .getByRole("button", { name: "Confirm restore", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.getByRole("link", { name: /Application Tracker/ }).click();
  await expect(
    page
      .locator('[data-stage="Applied"]')
      .getByRole("heading", { name: "Meyerson Laboratory" }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("pointer dragging moves a record and preserves history", async ({
  page,
}, info) => {
  test.skip(
    info.project.name.includes("mobile"),
    "Pointer dragging is checked on desktop; mobile uses accessible move controls in the full workflow.",
  );
  await page.goto("/discover");
  await page
    .getByRole("button", { name: "Save Meyerson Laboratory", exact: true })
    .click();
  await page.getByRole("link", { name: /Application Tracker/ }).click();
  const handle = page.getByRole("button", {
      name: "Drag Meyerson Laboratory",
      exact: true,
    }),
    target = page.locator('[data-stage="In Progress"]');
  const from = await handle.boundingBox(),
    to = await target.boundingBox();
  expect(from).not.toBeNull();
  expect(to).not.toBeNull();
  await page.mouse.move(from!.x + from!.width / 2, from!.y + from!.height / 2);
  await page.mouse.down();
  await page.mouse.move(from!.x + 25, from!.y + 10, { steps: 5 });
  await page.mouse.move(to!.x + to!.width / 2, to!.y + 100, { steps: 15 });
  await page.mouse.up();
  await expect(
    target.getByRole("heading", { name: "Meyerson Laboratory" }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page
      .locator('[data-stage="In Progress"]')
      .getByRole("heading", { name: "Meyerson Laboratory" }),
  ).toBeVisible();
});

test("all routes are responsive, have usable navigation and pass accessibility checks", async ({
  page,
}, info) => {
  for (const route of [
    "/",
    "/discover",
    "/labs/meyerson",
    "/tracker",
    "/compare",
    "/preferences",
  ]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => ({
        id: v.id,
        description: v.description,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
    expect(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth + 1,
      ),
    ).toBe(true);
  }
  await page.goto("/");
  await page.screenshot({
    path: info.outputPath("dashboard-light.png"),
    fullPage: true,
  });
  await page.getByRole("link", { name: "Discover Labs", exact: true }).click();
  await expect(page.locator("h1")).toHaveText("Discover your next chapter.");
  await page.screenshot({
    path: info.outputPath("discover-light.png"),
    fullPage: true,
  });
});
