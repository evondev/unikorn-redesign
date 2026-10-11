import type { ReactNode } from "react";

interface FeedItemHeaderProps {
  leading: ReactNode;
  postedLabel: string;
  postedAtFull: string;
  children: ReactNode;
}

// Đầu mỗi mục: ai làm gì, khi nào. Ô đầu 40px để thân mục thụt đúng 52px (40 + gap 12) ở mọi loại mục.
export default function FeedItemHeader({ leading, postedLabel, postedAtFull, children }: FeedItemHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      {leading}
      <div className="min-w-0 flex-1">
        <p className="text-sm text-muted text-pretty">{children}</p>
        <p className="text-xs text-muted">
          <time title={postedAtFull}>{postedLabel}</time>
        </p>
      </div>
    </div>
  );
}
