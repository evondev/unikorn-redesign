import type { LucideIcon } from "lucide-react";

import { cn } from "@/utils/cn";

interface NeedGroupLinkProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  href: string;
  isDashed?: boolean;
}

// Ô nhóm việc trong menu "Sản phẩm": ô icon giống ô việc ở trang chủ để hai chỗ đọc ra cùng một bản đồ.
export default function NeedGroupLink({ icon: Icon, title, description, href, isDashed }: NeedGroupLinkProps) {
  return (
    <a
      href={href}
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 outline-hidden transition-colors hover:bg-item-hover focus-visible:bg-item-hover"
    >
      <span
        className={cn(
          "grid size-9 shrink-0 place-items-center rounded-lg bg-foreground/5 text-foreground/80",
          isDashed && "border border-dashed border-foreground/15 bg-transparent",
        )}
      >
        {Icon ? <Icon className="size-4" aria-hidden /> : null}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-foreground">{title}</span>
        <span className="mt-0.5 block text-xs text-muted text-pretty">{description}</span>
      </span>
    </a>
  );
}
