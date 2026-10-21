# Research Atlas verification

Verified October 21, 2026 using Node.js 24.22.0.

| Check                          | Result                                                                                                                |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| ESLint                         | Passed                                                                                                                |
| TypeScript                     | Passed                                                                                                                |
| Vitest / React Testing Library | 46 tests passed in 8 files                                                                                            |
| Playwright Chromium            | 13 passed; 1 intentionally skipped                                                                                    |
| Production build               | Passed; static output in `dist`                                                                                       |
| Production browser smoke       | Seven direct routes, compiled asset loading, batched discovery, application movement and reload persistence passed    |
| npm audit                      | Zero vulnerabilities                                                                                                  |
| Private identifier scan        | Zero matches in application source/build for checked private names/file markers and original document email addresses |
| Original reference exclusion   | Git confirms the private document is ignored; it is outside build output                                              |

Browser tests cover desktop and Pixel 7 emulation. The desktop pointer-drag test is intentionally skipped in the phone project; both viewports test the explicit Move to control and the complete application workflow. Phone stages stack vertically; desktop retains the horizontal Kanban board.

Accessibility checks use axe WCAG A/AA rules across six routes and populated dashboards in light/dark mode. They supplement keyboard interactions, visible focus states, focus-managed dialogs and visual inspection. They do not certify hardware touch, real-device Safari or every assistive technology.

The official-source catalog now contains 201 entries across 20 states: 197 laboratory groups and four OhioHealth clinical research/training programs. Ohio has 58 entries, including 29 in Columbus. Availability is six confirmed role advertisements, nine inquiry pathways, 184 interest targets and two closed technician routes. New research pages do not establish new vacancies. No fixed or rolling technician deadline was verified, so Closing Soon is intentionally empty. Official availability remains accurate only as of the record's verification date. Recheck before applying.

## Strict scoring and broader-field verification

Version 2 removes all 189 old numeric score guesses and aggregate explanations. Every published lab now has a validated nine-criterion review; score coverage, bounds, weighting, missing evidence, unverified requirements caps and separate eligibility barriers are tested. The earlier fit distribution (166/189 at 80+) is replaced by reviewed fit 25–85, with two labs at 80+. Prestige evidence spans 20–75. These observed ranges are not enforced percentile targets.

Twelve official-source additions broaden institutions and fields, for 201 entries across 20 states. Profile tables show awarded criterion definitions, point contributions, rounding and caps. Cards/comparison say Prestige evidence, with a visible discovery caveat distinguishing sparse documentation from poor reputation. Explore all fit levels changes the public view without overwriting the saved threshold.

Independent review identified and resolved missing criterion anchors, inquiry routes bypassing the unknown-requirements cap, and misleading prestige labeling. A separate `requirementsVerified` flag now defaults false and is checked independently of experience-route level. A catalog requirement recheck also corrected the specialized protein-purification route's fit treatment. No institutional brand bonus or keyword-overlap score is used.

Unit/integration tests cover the score model and UI, plus existing tracking and backups. A real chart-module preload during test collection avoids spending deadline-panel assertion time on cold Vite/Recharts transformation; no chart is mocked and the assertion timeout is unchanged. Direct desktop/phone scoring workflows cover high-threshold results, all-fit exploration, a distant-field lab, criterion tables, axe checks and horizontal overflow. Production routes, compiled assets, catalog batches and tracker reload remain verified. The private name/file-marker/email scan again returns zero matches.

Full criterion anchors and limits: [version 2 scoring rubric](research/scoring-rubric.md).

## Earlier nationwide 100-lab expansion verification

Three separate Superpowers research tasks added exactly 100 distinct PI groups across 18 major metros. Each record has an official group or detailed faculty research source. Coverage and duplicate tests verify 189 total entries, newly represented states and unique named PI groups. Existing IDs remain intact. An independent reviewer confirmed all regional counts and availability totals and spot-checked research/location and recruitment sources; this was not a second exhaustive revalidation of every source.

The economic-area selection is documented in [nationwide location methodology](research/nationwide-selection.md), using CBRE's 2025 comparative report and 2026 employment context plus official institutional and local development sources. No new economic score or claim of guaranteed funding, pay, affordability or neighborhood conditions is introduced.

Discovery renders 24 cards initially and expands via an accessible Show more control. Regression tests verify expansion to 48, reset after filtering, the complete 29-entry Columbus subset and new California/San Francisco browsing. The represented-state list derives from the catalog using a complete U.S. name map. Existing state and slider tests now verify filter behavior without assuming the old small directory.

The compiled production smoke verifies seven direct routes, including a new lab profile; the 189-match total, batch expansion, existing tracker movement and reload persistence, and phone rendering pass. The original private document remains ignored and the name/file-marker/email scan again finds zero source/build matches. The development preview returned HTTP 200.

## Earlier Ohio/Chicago expansion verification

Superpowers parallel research added 77 official-source entries across OSU Wexner/James, Nationwide Children's, Cleveland Clinic, Case Western Reserve, UChicago, Northwestern, Rush, Loyola and OhioHealth. Original stable IDs remain intact. Schema tests validate every record, uniqueness, research citations, contact citations and availability evidence for both open positions and inquiry routes. Research-only defaults preserve unknown deadlines, eligibility and vacancy status.

An independent review found two filtering issues, both corrected: case-equivalent scientific fields now share labels and filter consistently across institutions; city is a dedicated public filter that combines with text search and survives URL serialization. Regional browser tests verify Columbus and Chicago counts, research search within Columbus, and saving an expanded-catalog lab followed by reload. The full desktop/mobile workflow, drag alternative, comparison, backup, light/dark charts, responsive navigation and axe checks pass.

The compiled production smoke was repeated after expansion: six direct routes, 89-entry loading, 29-entry Columbus filtering, compiled asset loading and application movement/reload persistence passed. Desktop and phone screenshots were visually inspected. The live development URL returned HTTP 200. Private original email addresses, name and file markers produced zero matches in source and build output; Git confirms the original document remains ignored.

## Independent review and corrections

Superpowers native execution included a separate read-only reviewer. All five Important findings were addressed, with failing regression tests observed before fixes:

1. Bookmark weights now govern displayed card scores as well as ranking.
2. Empty-result clearing resets restrictive saved recommendation settings.
3. Conflicting imported event identities reject the entire restore; identical events deduplicate. Tests prove earlier writes roll back when a later record conflicts.
4. Decorative charts disable Recharts keyboard focus while adjacent text summaries remain accessible. Populated light/dark axe checks pass.
5. Restore/reset failures remain inside the active modal, with retained retry state.

Additional browser findings corrected secondary text contrast, stable saved-textarea labels, synchronous rapid slider interactions, explicit mobile dialog dimensions and focus restoration. A populated phone tracker exposed browser viewport expansion with horizontally scrolled stages; vertically stacked phone stages resolved the complete workflow. No confirmed review finding is deferred.

## Implementation decisions

- Work stays in the original workspace on `feat/research-atlas`; the repository initially contained no application or commits. No merge or remote push is implied.
- Windows-native progress bookkeeping replaces the skills' Bash helpers.
- Patched Vitest 4.1.12 replaces the initially resolved older test toolchain. The dependency audit is clean.
- Node 24 LTS is specified for development/deployment; the machine's globally installed Node version was not changed.
- Public filter URLs override saved defaults for that view; private application filters never enter shared URLs.
- Mobile stages trade horizontal panning for more vertical scrolling and dependable focus/tap behavior.

This repository is prepared for Vercel static deployment. A hosted deployment, external account configuration, remote push and real-device Safari verification were not performed.
