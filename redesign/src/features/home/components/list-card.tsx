import type { ReactNode } from "react";

import { TextLink } from "@/components/text-link";

interface ListCardProps {
  title: string;
  actionLabel: string;
  children: ReactNode;
}

// Nhiều mục cùng loại thì một khung (card.md): tiêu đề và link nằm trong khung, dòng chia bằng divide-y.
export default function ListCard({ title, actionLabel, children }: ListCardProps) {
  return (
    <section className="min-w-0 rounded-2xl border border-border bg-surface">
      <header className="flex items-center justify-between gap-3 px-5 py-3">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        <TextLink>{actionLabel}</TextLink>
      </header>
      {children}
    </section>
  );
}
