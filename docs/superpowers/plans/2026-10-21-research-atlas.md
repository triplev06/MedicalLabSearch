# Research Atlas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Deliver the complete Research Atlas discovery and application tracking application in the approved design and original project brief.

**Architecture:** React SPA with a public, curated laboratory catalog and separate Dexie browser-private application records. Pure TypeScript functions implement ranking, filtering, deadlines, validation and tracking rules. Reusable accessible components connect those functions to five primary views and lab detail routes.

**Tech Stack:** React, TypeScript, Vite, Tailwind, shadcn/ui, Lucide, React Router, dnd-kit, Dexie, Recharts, Vitest, React Testing Library, fake-indexeddb, Playwright, Vercel.

**Spec:** `docs/superpowers/specs/2026-10-21-research-atlas-design.md` and the original user specification.

## Global Constraints

- No backend, paid API, resume uploader, manual lab creation, or external lab-list import.
- Never publish the original resume or identifying details; only broad qualifications enter matching explanations.
- Confirmed open, accepting inquiries, interest only, and closed are separate availability categories.
- Unknown deadline is distinct from rolling; no stated deadline never implies rolling.
- Combined score = fit × fitWeight + prestige × (1 − fitWeight). Defaults are 0.6 fit weight and minimum fit 50.
- Tracker stages are Saved, In Progress, Applied, Interview, Offer, Rejected.
- Private application filters must not enter shareable URLs.
- Vercel builds with npm run build and publishes dist, with SPA rewrites.
- Use test-driven implementation for domain behavior and persistence; verify UI with integration and browser tests.

## Review Focus

1. Malformed or foreign backups must not partially mutate local data; test in Task 3.
2. Date boundaries and daylight-saving changes must not shift date-only deadlines; test in Task 2.
3. Unknown authorization or enrollment eligibility must not become an assumed positive; test in Tasks 1 and 4.
4. Storage failures must appear to the user without claiming edits were saved; test in Tasks 3 and 5.
5. Small screens and keyboard-only users must be able to filter, navigate, compare and move applications; test in Tasks 4, 5 and 7.

## File map

- `src/data/labs.ts`, `src/data/profile.ts`: public verified catalog and minimized qualification categories.
- `src/domain/types.ts`, `schemas.ts`: domain interfaces and runtime validation.
- `src/domain/ranking.ts`, `filters.ts`, `deadlines.ts`: pure discovery behavior.
- `src/storage/db.ts`, `tracking.ts`, `backup.ts`: Dexie schema, mutations, transactional restore.
- `src/hooks/useAtlas.ts`, `src/app/AtlasProvider.tsx`: reactive records/preferences and surfaced write errors.
- `src/components/ui/`: accessible shadcn primitives.
- `src/components/`: shell, lab cards, score controls, deadline badges, filters, charts and empty states.
- `src/pages/`: Dashboard, Discover, LabDetail, Tracker, Compare and Preferences.
- `src/test/`, `tests/e2e/`: domain, integration and browser verification.
- Root configuration: npm scripts, TypeScript, Vite/Vitest, ESLint, Playwright, Vercel and README.

## Task 1: Establish the application and verified catalog

**Files:** root build/tooling configuration; `src/domain/types.ts`, `schemas.ts`; `src/data/labs.ts`, `profile.ts`; `src/test/catalog.test.ts`.

**Interfaces:** `Lab` contains stable ID, institution, lab name, PI, city/state, fields, description, official links, nullable verified contact, source evidence, verified date, availability, discriminated deadline, requirements, eligibility caveats, fit/prestige scores, strengths/gaps and prestige rationale. `ApplicationRecord`, `Preferences`, `StatusEvent`, and `ContactEvent` define private storage contracts. Catalog exports `labs: Lab[]`.

- [x] Inspect dependency versions against official documentation and install only the approved stack and concrete supporting libraries. Configure npm scripts: dev, build, preview, lint, typecheck, test, test:e2e.
- [x] Write catalog tests asserting unique IDs, valid HTTPS official/source URLs, scores within 0–100, valid dates, and evidence for each open/rolling/fixed-deadline claim. Run to establish failure before the catalog exists.
- [x] Research a target of 12–18 real US labs across at least five states and a mix of institutions, prioritizing verified suitability and quality over a numeric quota. Open official sources, record the verification date, and avoid undergraduate-only or doctoral-only roles as primary recommendations.
- [x] Implement types, validation, the minimized public profile and verified records. Explicitly flag unsupported or unknown eligibility. Never invent a date to populate Closing Soon.
- [x] Run `npm test -- catalog` and `npm run typecheck`; expect passing catalog validation. Review the tracked file list for private references before any commit.

## Task 2: Implement ranking, filtering and deadlines

**Files:** `src/domain/ranking.ts`, `filters.ts`, `deadlines.ts`; `src/test/discovery.test.ts`, `deadlines.test.ts`.

**Interfaces:** `combinedScore(lab: Lab, fitWeight: number): number`; `selectLabs(labs: Lab[], filters: Filters, records: ApplicationRecord[], now: Date): Lab[]`; `deadlineInfo(deadline: Lab['deadline'], now: Date): DeadlineInfo`; public filter URL encode/decode helpers. `Filters` covers all brief filters and seven sort modes.

- [x] Write failing tests: fit 80/prestige 90/weight .6 yields 84; minimum fit 50 includes 50; state selections OR together and combine with other filters by AND; nationwide clears states; private status/favorites never serialize into a URL.
- [x] Write failing tests for today, +7, +14, +30, expired, leap days and DST boundaries. Rolling/unknown deadlines must not enter a fixed-deadline window; unknown dates sort last in both date directions.
- [x] Implement pure functions with deterministic tie-breaking and calendar-day calculations. Date-only deadlines use the visitor's local calendar date, documented as an approximation when the source has no cutoff timezone.
- [x] Run `npm test -- discovery deadlines`; expect all assertions to pass.

## Task 3: Implement persistent tracking and safe backups

**Files:** `src/storage/db.ts`, `tracking.ts`, `backup.ts`; `src/test/storage.test.ts`, `backup.test.ts`.

**Interfaces:** `saveLab(labId: string): Promise<void>`; `moveApplication(labId: string, status: ApplicationStatus): Promise<void>`; `updateApplication(labId: string, patch: EditableApplicationFields): Promise<void>`; favorite/priority/remove mutations; `exportBackup(): Promise<Backup>`; `validateBackup(input: unknown): Backup`; `restoreBackup(backup: Backup): Promise<void>`.

- [x] Write failing fake-indexeddb tests for idempotent saving, concurrent duplicate prevention, reopening the database, favorites, notes, contact events, applied/follow-up dates and status corrections preserving prior history.
- [x] Write failing backup tests for round trips, schema-version errors, invalid/duplicate/unknown lab IDs, malformed dates, invalid statuses, oversized fields, transactional rollback, and duplicate history deduplication.
- [x] Implement unique lab-ID keys and transactional mutations. No-op status moves do not append history. Changed statuses append timestamped events with unique IDs; corrections retain earlier events.
- [x] Implement validated restore with a preview count. Incoming scalar fields replace existing fields for matching labs; merge and deduplicate history/contact events by event ID. Validate everything before a single transactional write. Restore preferences using the same runtime schema as live settings.
- [x] Implement reactive state and write-error propagation. Run `npm test -- storage backup`; expect passing persistence and rollback tests.

## Task 4: Build the accessible shell, discovery and profiles

**Files:** `src/app/`, `src/components/ui/`, `src/components/LabCard.tsx`, `ScoreControls.tsx`, `DiscoveryFilters.tsx`, `DeadlineBadge.tsx`; `src/pages/Discover.tsx`, `LabDetail.tsx`; `src/test/discovery-ui.test.tsx`.

**Interfaces:** provider exposes live records/preferences, mutation functions and an error message; shared lab components consume `Lab`, computed score and local record without duplicating domain rules.

- [x] Write integration tests for sliders immediately changing ranks, minimum fit, state multiselect, combined filters, nationwide reset and URL persistence. Verify unsatisfied and unknown eligibility remain visible despite high scores.
- [x] Implement responsive sidebar/mobile navigation, focus states, system/light/dark theme, error boundary and loading/empty/error states. Establish restrained neutral styling with navy accents and consistent spacing.
- [x] Implement all discovery filters and sort modes, mobile filter disclosure and public URL parameters. Keep private filters browser-local.
- [x] Implement detail routes with scores, strengths, gaps, research descriptions, eligibility, application method, deadline semantics, verified contacts, sources and verification date. Connect save/favorite/priority/compare actions to shared state.
- [x] Run `npm test -- discovery-ui`; verify keyboard labels, navigation and live slider updates pass.

## Task 5: Build the application board and record editor

**Files:** `src/pages/Tracker.tsx`; `src/components/TrackerCard.tsx`, `ApplicationEditor.tsx`; `src/test/tracker-ui.test.tsx`.

**Interfaces:** board consumes live application records joined to the curated catalog. Drag end and labeled move menu call the same `moveApplication` mutation. The editor calls `updateApplication` and contact/event mutations.

- [x] Write failing integration tests for save-to-board visibility, all six stage transitions, menu movement, note/date/contact persistence and displayed history after correcting a stage.
- [x] Implement dnd-kit pointer and keyboard sensors, droppable columns, movement announcements, drag overlay and reduced-motion behavior. Provide an explicit status menu on every card.
- [x] Implement editor fields for notes, applied date, follow-up date, contact details, communication notes, last contact, important events, priority and favorites. Show dates with unambiguous labels.
- [x] Test failed writes display an error and retain editable text for retry. Confirm record removal deliberately; never silently erase history when moving a card.
- [x] Run `npm test -- tracker-ui`; verify all workflow assertions pass.

## Task 6: Complete dashboard, comparisons and preferences

**Files:** `src/pages/Dashboard.tsx`, `Compare.tsx`, `Preferences.tsx`; `src/components/ProgressCharts.tsx`; `src/test/pages.test.tsx`.

**Interfaces:** views use shared selector/deadline/scoring functions and reactive storage. Analytics derive from actual application records and status history, never seeded personal activity.

- [x] Write failing tests for nearest verified deadlines first, no-deadline empty state, follow-ups separate from deadlines, status totals, and submitted-over-time aggregation from first submission events without double-counting corrections.
- [x] Implement balanced recommendations, prominent Closing Soon, all requested totals, follow-ups, recent activity, responsive status/submission charts with text summaries, and interview/offer progress.
- [x] Test and implement comparison of two or more selected labs, removing selections, qualification/research/location/application differences and evidence-based tradeoff prose. Use accessible mobile scrolling with visible cues.
- [x] Implement ranking/theme preferences, JSON download, validated restore preview and confirmation, error feedback, storage limitation text and deliberate local-data reset. Reuse storage schemas and mutations.
- [x] Run `npm test -- pages`; verify functional controls and calculations.

## Task 7: Verify the complete product and prepare deployment

**Files:** `tests/e2e/workflow.spec.ts`, `playwright.config.ts`, `vercel.json`, `README.md`; targeted fixes in affected source files.

**Interfaces:** `npm run build` produces `dist`; Vercel rewrites application routes to `index.html`; Playwright launches the local app through its configured webServer.

- [x] Add Playwright discovery → profile → save → tracker → move → notes/follow-up → reload persistence coverage. Add favorite, comparison, ranking slider, JSON backup/restore, dark theme and mobile navigation coverage.
- [x] Exercise pointer dragging and keyboard/menu movement separately. Check focus behavior, accessible names, horizontal overflow and reduced motion on desktop and phone sizes.
- [x] Run `npm run lint`, `npm run typecheck`, `npm test -- --run`, `npm run test:e2e`, `npm run build`. Resolve failures and rerun affected checks.
- [x] Inspect real desktop/mobile light/dark screens and browser console errors. Verify representative official links and validate all catalog source metadata. Correct stale availability claims rather than treating network success as evidence of recruitment.
- [x] Scan source, tracked files and dist for resume identifiers/contact details and prohibited source-document content. Confirm the original document remains ignored and outside dist.
- [x] Document standard npm setup, tested commands, catalog refresh and score rubric, backup/restore behavior, browser-storage limitations, date policy, and Vercel Hobby deployment with dist output and SPA routing.
- [x] Report completed behavior, actual check results, and any remaining external limitation accurately. Do not claim hosted deployment without an actual deployment.

## Plan self-review

The seven tasks cover the approved design and full project brief, including source-backed matching, every filter, deadline types, all tracker fields, backups, analytics, accessibility, testing and Vercel configuration. Shared types and domain functions remain the contracts across views. The five review-focus conditions have explicit owning test steps. Production catalog quality takes precedence over quantity; source availability may legitimately produce an empty Closing Soon panel.

## Execution choice

Native execution is recommended: the tasks share evolving catalog and storage contracts, and one implementation context keeps those interfaces consistent. Under the requested Superpowers workflow, written-plan review and execution-method selection precede product implementation.
