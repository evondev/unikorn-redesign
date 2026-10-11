import { ChevronRight } from "lucide-react";

import { contestLinks, featuredEvent } from "@/constants/nav-menus";

import MenuLink from "./menu-link";

// Future Builders Meetup (nút sáng viền cầu vồng ở site gốc) thành mục đầu có ô ngày; Contests thành "Cuộc thi".
export default function EventsMenu() {
  return (
    <div className="flex w-[360px] flex-col py-2">
      <div className="px-2">
        <a
          href={featuredEvent.href}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 outline-hidden transition-colors hover:bg-item-hover focus-visible:bg-item-hover"
        >
          <span className="flex size-11 shrink-0 flex-col items-center justify-center rounded-lg bg-primary-light leading-none">
            <span className="text-xs font-medium text-muted">{featuredEvent.month}</span>
            <span className="mt-0.5 text-base font-semibold text-foreground">{featuredEvent.day}</span>
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-foreground">{featuredEvent.title}</span>
            <span className="mt-0.5 block text-xs text-muted text-pretty">{featuredEvent.summary}</span>
          </span>
        </a>
      </div>

      <hr className="my-2 border-border" />

      <section className="px-2" aria-label="Cuộc thi">
        <p className="px-3 py-2 text-xs font-medium text-muted">Cuộc thi</p>
        <ul className="flex flex-col gap-1">
          {contestLinks.map((contestLink) => (
            <li key={contestLink.label}>
              <MenuLink item={contestLink} />
            </li>
          ))}
        </ul>
      </section>

      <hr className="my-2 border-border" />

      <div className="px-2">
        <a
          href="#"
          className="flex min-h-10 w-full items-center justify-between gap-3 rounded-xl px-3 text-sm font-medium text-foreground outline-hidden transition-colors hover:bg-item-hover focus-visible:bg-item-hover"
        >
          Tất cả sự kiện và cuộc thi
          <ChevronRight className="size-4 shrink-0 text-muted" aria-hidden />
        </a>
      </div>
    </div>
  );
}
