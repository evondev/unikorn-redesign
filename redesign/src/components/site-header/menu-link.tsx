import type { NavLinkItem } from "@/types/navigation";

import NewBadge from "./new-badge";

interface MenuLinkProps {
  item: NavLinkItem;
}

// Mục hai dòng trong panel: tên + một câu nói mục đó dùng để làm gì. Chữ dài thì xuống dòng, mục cao theo chữ.
export default function MenuLink({ item }: MenuLinkProps) {
  return (
    <a
      href={item.href}
      className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 outline-hidden transition-colors hover:bg-item-hover focus-visible:bg-item-hover"
    >
      {item.icon ? <item.icon className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden /> : null}
      <span className="min-w-0">
        <span className="flex items-center gap-2 text-sm font-medium text-foreground">
          {item.label}
          {item.isNew ? <NewBadge /> : null}
        </span>
        <span className="mt-0.5 block text-xs text-muted text-pretty">{item.description}</span>
      </span>
    </a>
  );
}
