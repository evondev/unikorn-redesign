import type { LucideIcon } from "lucide-react";

import NewBadge from "./new-badge";

interface MobileNavLinkProps {
  label: string;
  href: string;
  icon?: LucideIcon;
  meta?: string;
  isNew?: boolean;
}

// Dòng một hàng trong drawer: icon xám, tên, số phụ canh phải. Chữ dài xuống dòng, dòng cao theo chữ.
export default function MobileNavLink({ label, href, icon: Icon, meta, isNew }: MobileNavLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="flex min-h-10 w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-foreground/80 outline-hidden hover:bg-item-hover hover:text-foreground"
      >
        {Icon ? <Icon className="size-4 shrink-0 text-muted" aria-hidden /> : null}
        <span className="min-w-0 flex-1">{label}</span>
        {isNew ? <NewBadge /> : null}
        {meta ? <span className="shrink-0 text-xs tabular-nums text-muted">{meta}</span> : null}
      </a>
    </li>
  );
}
