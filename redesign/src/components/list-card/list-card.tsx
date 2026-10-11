import type { ReactNode } from "react";

import { TextLink } from "@/components/text-link";
import { cn } from "@/utils";

interface ListCardProps {
  title: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
  children: ReactNode;
}

// Nhiều mục cùng loại thì một khung (card.md): tiêu đề và link nằm trong khung, dòng chia bằng divide-y.
export default function ListCard({ title, actionLabel, actionHref, className, children }: ListCardProps) {
  return (
    <section className={cn("min-w-0 rounded-2xl border border-border bg-surface", className)}>
      <header className="flex items-center justify-between gap-3 px-5 py-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {actionLabel ? <TextLink href={actionHref}>{actionLabel}</TextLink> : null}
      </header>
      {children}
    </section>
  );
}
