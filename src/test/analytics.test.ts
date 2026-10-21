import { expect, it } from "vitest";
import { analytics } from "../domain/analytics";
import type { ApplicationRecord } from "../domain/types";
it("counts first submissions rather than corrections and keeps outcomes descriptive", () => {
  const a = {
    labId: "a",
    status: "Offer",
    dateApplied: null,
    history: [
      { at: "2026-10-01T00:00:00Z", status: "Applied" },
      { at: "2026-11-01T00:00:00Z", status: "Applied" },
      { at: "2026-11-02T00:00:00Z", status: "Interview" },
      { at: "2026-11-03T00:00:00Z", status: "Offer" },
    ],
  } as ApplicationRecord;
  expect(analytics([a])).toMatchObject({
    submitted: 1,
    interviews: 1,
    offers: 1,
    overTime: [{ month: "2026-10", count: 1 }],
  });
});
