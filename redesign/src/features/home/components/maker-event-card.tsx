import type { MakerEvent } from "../types";

interface MakerEventCardProps {
  event: MakerEvent;
}

export default function MakerEventCard({ event }: MakerEventCardProps) {
  return (
    <li>
      <a
        href="#"
        className="block rounded-xl border border-border bg-background p-4 outline-hidden transition-colors hover:bg-background-hover"
      >
        <span className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="font-medium text-foreground/80">{event.organizer}</span>
          <span aria-hidden="true">·</span>
          <span>{event.badge}</span>
        </span>
        <span className="mt-1 block text-base font-semibold text-foreground">{event.title}</span>
        <span className="mt-1 block text-sm text-muted">
          {event.countdown ? (
            <>
              {"Nhận đề cử sau "}
              <span className="font-medium tabular-nums text-foreground">{event.countdown}</span>
              {` · ${event.detail}`}
            </>
          ) : (
            event.detail
          )}
        </span>
      </a>
    </li>
  );
}
