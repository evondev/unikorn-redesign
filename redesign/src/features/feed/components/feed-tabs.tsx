import type { KeyboardEvent } from "react";

import { Button } from "@/components/button";
import { cn } from "@/utils";

import { feedTabs } from "../constants/feed-filters";
import type { FeedTabId } from "../types";

interface FeedTabsProps {
  activeTabId: FeedTabId;
  onTabChange: (tabId: FeedTabId) => void;
}

// Tab `underline` (small-controls.md): ngay dưới còn hàng chip lọc nên không dùng `boxed`, hai hàng viên
// xám chồng nhau thì tab đang chọn đọc ra như một chip nữa. Tab không padding ngang để chữ tab đầu thẳng cột
// với tiêu đề trang; vạch 2px chạy đúng bề rộng chữ.
export default function FeedTabs({ activeTabId, onTabChange }: FeedTabsProps) {
  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const activeIndex = feedTabs.findIndex((tab) => tab.id === activeTabId);
    const lastIndex = feedTabs.length - 1;
    const nextIndexByKey: Record<string, number> = {
      ArrowRight: activeIndex === lastIndex ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? lastIndex : activeIndex - 1,
      Home: 0,
      End: lastIndex,
    };
    const nextIndex = nextIndexByKey[event.key];

    if (nextIndex === undefined) return;

    event.preventDefault();
    onTabChange(feedTabs[nextIndex].id);
    event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[nextIndex]?.focus();
  }

  return (
    <div className="scrollbar-clean overflow-x-auto">
      <div
        role="tablist"
        aria-label="Cách xếp bảng tin"
        onKeyDown={handleKeyDown}
        className="flex min-w-full gap-6 shadow-[inset_0_-1px_0_var(--tab-rail)]"
      >
        {feedTabs.map((tab) => {
          const isSelected = tab.id === activeTabId;

          return (
            <Button
              key={tab.id}
              variant="ghost"
              role="tab"
              aria-selected={isSelected}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative box-content h-10 min-h-10 shrink-0 rounded-none px-0 py-0 pb-px whitespace-nowrap hover:bg-transparent",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full",
                isSelected && "text-foreground after:bg-foreground",
                !isSelected && "text-foreground/70 after:bg-transparent hover:text-foreground",
              )}
            >
              {tab.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
