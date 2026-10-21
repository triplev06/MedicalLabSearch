import { useRef, useState } from "react";
import {
  Download,
  Upload,
  ShieldCheck,
  Monitor,
  Sun,
  Moon,
  Trash2,
} from "lucide-react";
import { useAtlas } from "../app/AtlasProvider";
import { db, defaultPreferences } from "../storage/db";
import { exportBackup, restoreBackup, validateBackup } from "../storage/backup";
import type { Backup } from "../domain/types";
import { qualificationProfile } from "../data/profile";
import { PageHeading, ScoreControls } from "../components/Shared";
import { Button } from "../components/ui/button";
import { Dialog } from "../components/ui/dialog";
export function Preferences() {
  const { prefs, updatePrefs, act } = useAtlas(),
    fileRef = useRef<HTMLInputElement>(null),
    [backup, setBackup] = useState<Backup | null>(null),
    [fileError, setFileError] = useState(""),
    [reset, setReset] = useState(false),
    [busy, setBusy] = useState(false),
    [restoreError, setRestoreError] = useState(""),
    [resetError, setResetError] = useState("");
  async function download() {
    await act(async () => {
      const data = await exportBackup(),
        url = URL.createObjectURL(
          new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json",
          }),
        ),
        a = document.createElement("a");
      a.href = url;
      a.download = `research-atlas-backup-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, "Backup downloaded");
  }
  async function read(file?: File) {
    setFileError("");
    if (!file) return;
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error("too large");
      setRestoreError("");
      setBackup(validateBackup(JSON.parse(await file.text())));
    } catch {
      setFileError(
        "This is not a valid Research Atlas backup. Choose an exported JSON backup under 5 MB. Unknown labs, invalid dates, duplicate records and unsupported versions are rejected.",
      );
    }
    if (fileRef.current) fileRef.current.value = "";
  }
  return (
    <>
      <PageHeading
        eyebrow="A WORKSPACE THAT WORKS FOR YOU"
        title="Make the atlas your own."
        description="Fine-tune your recommendations, set the mood, and keep your data safe."
      />
      <div className="preferences-layout">
        <div>
          <section className="panel detail-section">
            <h2>Recommendation preferences</h2>
            <p className="muted">
              Changes update rankings throughout the atlas. Scores describe fit
              and research environment, never your likelihood of acceptance.
            </p>
            <ScoreControls
              weight={prefs.fitWeight}
              minFit={prefs.minFit}
              onWeight={(n) => void updatePrefs({ fitWeight: n })}
              onMinFit={(n) => void updatePrefs({ minFit: n })}
            />
          </section>
          <section className="panel detail-section">
            <h2>Appearance</h2>
            <p className="muted">
              Choose a comfortable environment for your next discovery.
            </p>
            <div className="theme-choices">
              {(
                [
                  { id: "light", label: "Light", icon: Sun },
                  { id: "dark", label: "Dark", icon: Moon },
                  { id: "system", label: "System", icon: Monitor },
                ] as const
              ).map((t) => (
                <button
                  className={prefs.theme === t.id ? "selected" : ""}
                  aria-pressed={prefs.theme === t.id}
                  key={t.id}
                  onClick={() => void updatePrefs({ theme: t.id })}
                >
                  <t.icon size={24} />
                  <strong>{t.label}</strong>
                  <span>
                    {t.id === "system"
                      ? "Follow your device"
                      : `${t.label} workspace`}
                  </span>
                </button>
              ))}
            </div>
          </section>
          <section className="panel detail-section">
            <h2>Back up your progress</h2>
            <p>
              Your applications, notes, contacts, timelines, favorites and
              settings live only in this browser. They do not automatically sync
              across devices and can be lost if browser data is cleared.
            </p>
            <div className="backup-actions">
              <Button variant="outline" onClick={() => void download()}>
                <Download size={17} />
                Export backup
              </Button>
              <Button
                variant="outline"
                onClick={() => fileRef.current?.click()}
              >
                <Upload size={17} />
                Restore backup
              </Button>
              <input
                className="sr-only"
                aria-label="Choose Research Atlas backup"
                ref={fileRef}
                type="file"
                accept=".json,application/json"
                onChange={(e) => void read(e.target.files?.[0])}
              />
            </div>
            <p className="small muted">
              Restore accepts Research Atlas backups only. It cannot add
              laboratories. You’ll review the record count before any changes
              are made.
            </p>
            {fileError && (
              <p role="alert" className="error-note">
                {fileError}
              </p>
            )}
          </section>
          <section className="panel detail-section">
            <h2>Clear local data</h2>
            <p className="muted">
              Permanently remove tracking records and reset preferences in this
              browser. Export a backup first if you want to keep your progress.
            </p>
            <Button
              variant="destructive"
              onClick={() => {
                setResetError("");
                setReset(true);
              }}
            >
              <Trash2 size={16} />
              Clear browser data
            </Button>
          </section>
        </div>
        <aside>
          <section className="panel detail-section privacy-panel">
            <ShieldCheck size={25} />
            <h2>Private by design</h2>
            <p>No accounts. No external database. No résumé upload.</p>
            <p>
              Personal application details stay on your device. The public
              catalog contains only broad qualification categories and
              source-backed research information.
            </p>
            <h3>Matching foundations</h3>
            <div className="tags">
              {qualificationProfile.interests.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <ul>
              {qualificationProfile.strengths.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h3>What needs confirmation</h3>
            {qualificationProfile.limitations.map((s) => (
              <p className="small muted" key={s}>
                {s}
              </p>
            ))}
          </section>
        </aside>
      </div>
      {backup && (
        <Dialog
          open
          onOpenChange={(v) => {
            if (!v) setBackup(null);
          }}
          title="Restore your backup"
          description="Review before changing browser-local records."
        >
          <div className="detail-section">
            <p>
              <strong>{backup.records.length}</strong> validated application
              records from {new Date(backup.exportedAt).toLocaleString()}.
            </p>
            <p>
              Records with matching laboratory IDs will use the backup’s notes,
              dates, status and flags. Existing and imported histories and
              contact events are combined without duplicate event IDs. Other
              existing records stay in place. Settings are replaced.
            </p>
            <p className="small muted">
              The curated laboratory catalog will not change.
            </p>
            {restoreError && (
              <p role="alert" className="error-note">
                {restoreError}
              </p>
            )}
            <div className="backup-actions">
              <Button variant="outline" onClick={() => setBackup(null)}>
                Cancel
              </Button>
              <Button
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  setRestoreError("");
                  if (await act(() => restoreBackup(backup), "Backup restored"))
                    setBackup(null);
                  else
                    setRestoreError(
                      "The backup could not be restored. No changes were made. Check browser storage or event conflicts and try again.",
                    );
                  setBusy(false);
                }}
              >
                {busy ? "Restoring…" : "Confirm restore"}
              </Button>
            </div>
          </div>
        </Dialog>
      )}
      {reset && (
        <Dialog
          open
          onOpenChange={setReset}
          title="Clear all local data?"
          description="This removes notes, applications, events and settings from this browser."
        >
          <div className="detail-section">
            <p>
              This cannot be undone without an exported backup. The published
              laboratory catalog stays available.
            </p>
            {resetError && (
              <p role="alert" className="error-note">
                {resetError}
              </p>
            )}
            <div className="backup-actions">
              <Button variant="outline" onClick={() => setReset(false)}>
                Keep my data
              </Button>
              <Button
                variant="destructive"
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  setResetError("");
                  if (
                    await act(
                      () =>
                        db.transaction(
                          "rw",
                          db.records,
                          db.preferences,
                          async () => {
                            await db.records.clear();
                            await db.preferences.put(defaultPreferences);
                          },
                        ),
                      "Local data cleared",
                    )
                  )
                    setReset(false);
                  else
                    setResetError(
                      "Local data could not be cleared. Your existing data is unchanged. Check browser storage and try again.",
                    );
                  setBusy(false);
                }}
              >
                Confirm clear all data
              </Button>
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
}
