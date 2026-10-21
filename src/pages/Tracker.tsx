import { useState } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  Bookmark,
  GripVertical,
  CalendarDays,
  Heart,
  Pencil,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAtlas } from "../app/AtlasProvider";
import { labs } from "../data/labs";
import { statuses } from "../domain/schemas";
import type {
  ApplicationRecord,
  ApplicationStatus,
  Lab,
} from "../domain/types";
import { moveApplication } from "../storage/tracking";
import {
  PageHeading,
  LocalNote,
  Empty,
  DeadlineBadge,
} from "../components/Shared";
import { formatDate } from "../domain/deadlines";
import { Button } from "../components/ui/button";
import { ApplicationEditor } from "../components/ApplicationEditor";
export function Tracker() {
  const { records, act } = useAtlas(),
    [editing, setEditing] = useState<string | null>(null),
    [dragging, setDragging] = useState<string | null>(null),
    [announcement, setAnnouncement] = useState("");
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor),
  );
  const lab = labs.find((l) => l.id === editing),
    record = records.find((r) => r.labId === editing);
  async function move(id: string, status: ApplicationStatus) {
    if (
      await act(() => moveApplication(id, status), "Application stage updated")
    )
      setAnnouncement(
        `${labs.find((l) => l.id === id)?.name} moved to ${status}`,
      );
  }
  function end(e: DragEndEvent) {
    setDragging(null);
    if (e.over && statuses.includes(e.over.id as ApplicationStatus))
      void move(String(e.active.id), e.over.id as ApplicationStatus);
  }
  return (
    <>
      <PageHeading
        eyebrow="SMALL STEPS. MEANINGFUL PROGRESS."
        title="Your research journey."
        description="Keep every application, conversation, and next step in one place."
        action={
          <Button asChild variant="outline">
            <Link to="/discover">Discover more labs</Link>
          </Button>
        }
      />
      <LocalNote />
      <p className="muted small board-instructions">
        Drag cards between stages, or use each card’s Move to menu. Keyboard
        dragging: Space to pick up, arrows to move, Space to drop.
      </p>
      <div aria-live="polite" className="sr-only">
        {announcement}
      </div>
      {!records.length ? (
        <div className="panel">
          <Empty icon={Bookmark} title="A new chapter starts with a saved lab">
            Explore the atlas and save a laboratory to start tracking your
            application.
            <Button asChild>
              <Link to="/discover">Find your first lab</Link>
            </Button>
          </Empty>
        </div>
      ) : (
        <DndContext
          sensors={sensors}
          onDragStart={(e) => setDragging(String(e.active.id))}
          onDragEnd={end}
          onDragCancel={() => setDragging(null)}
        >
          <div className="kanban" aria-label="Application stages">
            {statuses.map((status) => (
              <Column
                key={status}
                status={status}
                records={records.filter((r) => r.status === status)}
                onEdit={setEditing}
                onMove={move}
              />
            ))}
          </div>
          <DragOverlay>
            {dragging && (
              <div className="drag-overlay">
                {labs.find((l) => l.id === dragging)?.name}
              </div>
            )}
          </DragOverlay>
        </DndContext>
      )}
      {lab && record && (
        <ApplicationEditor
          key={lab.id}
          lab={lab}
          record={record}
          onClose={() => setEditing(null)}
        />
      )}
    </>
  );
}
function Column({
  status,
  records,
  onEdit,
  onMove,
}: {
  status: ApplicationStatus;
  records: ApplicationRecord[];
  onEdit: (id: string) => void;
  onMove: (id: string, s: ApplicationStatus) => Promise<void>;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: status });
  return (
    <section
      ref={setNodeRef}
      data-stage={status}
      className={`kanban-column ${isOver ? "drop-over" : ""}`}
    >
      <h2>
        <span className={`status-dot status-${statuses.indexOf(status)}`} />
        {status}
        <small>{records.length}</small>
      </h2>
      <div className="kanban-stack">
        {records.map((r) => {
          const lab = labs.find((l) => l.id === r.labId);
          return (
            lab && (
              <TrackerCard
                key={r.labId}
                record={r}
                lab={lab}
                onEdit={() => onEdit(lab.id)}
                onMove={(s) => void onMove(lab.id, s)}
              />
            )
          );
        })}
        {!records.length && <p className="column-empty">No applications yet</p>}
      </div>
    </section>
  );
}
function TrackerCard({
  record: r,
  lab,
  onEdit,
  onMove,
}: {
  record: ApplicationRecord;
  lab: Lab;
  onEdit: () => void;
  onMove: (s: ApplicationStatus) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: lab.id });
  return (
    <article
      ref={setNodeRef}
      style={{
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.3 : 1,
      }}
      className="tracker-card"
    >
      <div className="tracker-card-top">
        <span className={`priority priority-${r.priority.toLowerCase()}`}>
          {r.priority} priority
        </span>
        <button
          className="drag-handle"
          aria-label={`Drag ${lab.name}`}
          {...attributes}
          {...listeners}
        >
          <GripVertical size={17} />
        </button>
      </div>
      <p className="eyebrow">{lab.institution}</p>
      <h3>
        <Link to={`/labs/${lab.id}`}>{lab.name}</Link>
      </h3>
      <p className="tracker-meta">
        <strong>{lab.fit}%</strong> résumé fit{" "}
        {r.favorite && <Heart size={13} fill="currentColor" />}
      </p>
      <DeadlineBadge lab={lab} />
      {r.followUp && (
        <p className="followup">
          <CalendarDays size={13} />
          Follow up {formatDate(r.followUp)}
        </p>
      )}
      <div className="tracker-card-footer">
        <label>
          <span className="sr-only">Move {lab.name} to</span>
          <select
            aria-label={`Move ${lab.name} to`}
            value={r.status}
            onChange={(e) => onMove(e.target.value as ApplicationStatus)}
          >
            {statuses.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Edit ${lab.name}`}
          onClick={onEdit}
        >
          <Pencil size={15} />
        </Button>
      </div>
    </article>
  );
}
