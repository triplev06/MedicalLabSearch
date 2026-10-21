# Research Atlas verification

Verified October 21, 2026 using Node.js 24.22.0.

| Check                          | Result                                                                                                                 |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| ESLint                         | Passed                                                                                                                 |
| TypeScript                     | Passed                                                                                                                 |
| Vitest / React Testing Library | 35 tests passed in 6 files                                                                                             |
| Playwright Chromium            | 9 passed; 1 intentionally skipped                                                                                      |
| Production build               | Passed; static output in `dist`                                                                                        |
| Production browser smoke       | Six direct routes, compiled asset loading, application movement and reload persistence passed                          |
| npm audit                      | Zero vulnerabilities                                                                                                   |
| Private identifier scan        | Zero matches in application source/build for checked private names, institutions and original document email addresses |
| Original reference exclusion   | Git confirms the private document is ignored; it is outside build output                                               |

Browser tests cover desktop and Pixel 7 emulation. The desktop pointer-drag test is intentionally skipped in the phone project; both viewports test the explicit Move to control and the complete application workflow. Phone stages stack vertically; desktop retains the horizontal Kanban board.

Accessibility checks use axe WCAG A/AA rules across six routes and populated dashboards in light/dark mode. They supplement keyboard interactions, visible focus states, focus-managed dialogs and visual inspection. They do not certify hardware touch, real-device Safari or every assistive technology.

The official-source catalog now contains 89 entries across eight states: 85 laboratory groups and four OhioHealth clinical research/training programs. Ohio has 58 entries, including 29 in Columbus. Availability is five confirmed role advertisements, six inquiry pathways, 77 interest targets and one closed technician route. New research pages do not establish new vacancies. No fixed or rolling technician deadline was verified, so Closing Soon is intentionally empty. Official availability remains accurate only as of the record's verification date. Recheck before applying.

## Catalog expansion verification

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
