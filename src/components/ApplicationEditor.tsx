import { useState } from "react";
import type { ApplicationRecord, Lab } from "../domain/types";
import { useAtlas } from "../app/AtlasProvider";
import { today, formatDate } from "../domain/deadlines";
import { updateApplication } from "../storage/tracking";
import { db } from "../storage/db";
import { Dialog } from "./ui/dialog";
import { Button } from "./ui/button";
export function ApplicationEditor({
  lab,
  record,
  onClose,
}: {
  lab: Lab;
  record: ApplicationRecord;
  onClose: () => void;
}) {
  const [draft, setDraft] = useState(record),
    [eventNote, setEventNote] = useState(""),
    [eventDate, setEventDate] = useState(today()),
    [eventType, setEventType] = useState<"Contact" | "Milestone">("Contact"),
    [saving, setSaving] = useState(false),
    [removing, setRemoving] = useState(false),
    [localError, setLocalError] = useState("");
  const { act } = useAtlas();
  function field<K extends keyof ApplicationRecord>(
    key: K,
    value: ApplicationRecord[K],
  ) {
    setDraft((d) => ({ ...d, [key]: value }));
  }
  async function save(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setLocalError("");
    const patch = {
      notes: draft.notes,
      dateApplied: draft.dateApplied,
      followUp: draft.followUp,
      priority: draft.priority,
      favorite: draft.favorite,
      contactName: draft.contactName,
      contactEmail: draft.contactEmail,
      communicationNotes: draft.communicationNotes,
      lastContact: draft.lastContact,
      events: eventNote.trim()
        ? [
            ...draft.events,
            {
              id: crypto.randomUUID(),
              date: eventDate,
              note: eventNote.trim(),
              type: eventType,
            },
          ]
        : draft.events,
    };
    if (
      await act(() => updateApplication(lab.id, patch), "Application updated")
    )
      onClose();
    else
      setLocalError(
        "Changes were not saved. Your text is still here; please try again.",
      );
    setSaving(false);
  }
  return (
    <Dialog
      open
      onOpenChange={(v) => {
        if (!v) onClose();
      }}
      title={lab.name}
      description="Private application details · saved only in this browser"
    >
      <form onSubmit={save} className="editor-form">
        <div className="form-grid">
          <label>
            Priority
            <select
              value={draft.priority}
              onChange={(e) =>
                field(
                  "priority",
                  e.target.value as ApplicationRecord["priority"],
                )
              }
            >
              <option>High</option>
              <option>Normal</option>
              <option>Low</option>
            </select>
          </label>
          <label className="check-label">
            <input
              type="checkbox"
              checked={draft.favorite}
              onChange={(e) => field("favorite", e.target.checked)}
            />
            Favorite
          </label>
          <label>
            Date applied
            <input
              type="date"
              value={draft.dateApplied ?? ""}
              onChange={(e) => field("dateApplied", e.target.value || null)}
            />
          </label>
          <label>
            Follow-up date
            <input
              type="date"
              value={draft.followUp ?? ""}
              onChange={(e) => field("followUp", e.target.value || null)}
            />
          </label>
        </div>
        <label>
          Personal notes
          <textarea
            aria-label="Personal notes"
            maxLength={20000}
            rows={4}
            value={draft.notes}
            onChange={(e) => field("notes", e.target.value)}
            placeholder="What interests you? What would you like to ask?"
          />
        </label>
        <h3>Contact & communication</h3>
        <div className="form-grid">
          <label>
            Contact name
            <input
              maxLength={500}
              value={draft.contactName}
              onChange={(e) => field("contactName", e.target.value)}
            />
          </label>
          <label>
            Contact email
            <input
              type="email"
              maxLength={500}
              value={draft.contactEmail}
              onChange={(e) => field("contactEmail", e.target.value)}
            />
          </label>
          <label>
            Date of last contact
            <input
              type="date"
              value={draft.lastContact ?? ""}
              onChange={(e) => field("lastContact", e.target.value || null)}
            />
          </label>
        </div>
        <label>
          Communication notes
          <textarea
            aria-label="Communication notes"
            maxLength={20000}
            rows={3}
            value={draft.communicationNotes}
            onChange={(e) => field("communicationNotes", e.target.value)}
          />
        </label>
        <h3>Add a contact or important event</h3>
        <div className="form-grid">
          <label>
            Event type
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value as typeof eventType)}
            >
              <option>Contact</option>
              <option>Milestone</option>
            </select>
          </label>
          <label>
            Event date
            <input
              type="date"
              required
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </label>
        </div>
        <label>
          Event details
          <textarea
            aria-label="Event details"
            maxLength={20000}
            rows={2}
            value={eventNote}
            onChange={(e) => setEventNote(e.target.value)}
            placeholder="A conversation, invitation, or other milestone…"
          />
        </label>
        <h3>Application history</h3>
        <ol className="timeline">
          {record.history.map((h) => (
            <li key={h.id}>
              <strong>{h.status}</strong>
              <time>{new Date(h.at).toLocaleString()}</time>
            </li>
          ))}
          {record.events.map((e) => (
            <li key={e.id}>
              <strong>
                {e.type} · {formatDate(e.date)}
              </strong>
              <span>{e.note}</span>
            </li>
          ))}
        </ol>
        <p className="muted small">
          Changing or correcting a stage preserves earlier status history.
        </p>
        {localError && (
          <p role="alert" className="error-note">
            {localError}
          </p>
        )}
        <div className="editor-footer">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setRemoving(true)}
          >
            Remove application
          </Button>
          <div>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={saving}>
              {saving ? "Saving…" : "Save changes"}
            </Button>
          </div>
        </div>
      </form>
      {removing && (
        <div className="confirm-inline">
          <p>
            Remove this application, its notes and history from this browser?
            Export a backup first if needed.
          </p>
          <Button variant="outline" onClick={() => setRemoving(false)}>
            Keep application
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              void act(
                () => db.records.delete(lab.id),
                "Application removed",
              ).then((ok) => {
                if (ok) onClose();
              })
            }
          >
            Confirm removal
          </Button>
        </div>
      )}
    </Dialog>
  );
}
