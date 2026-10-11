import { Button } from "@/components/button";
import { cn } from "@/utils";

import { feedFilters } from "../constants/feed-filters";
import type { FeedFilterId } from "../types";

interface FeedFilterChipsProps {
  activeFilterId: FeedFilterId;
  onFilterChange: (filterId: FeedFilterId) => void;
}

// Chip lọc chính của màn (small-controls.md): h-9 text-sm, chọn một. Màn hẹp cuộn ngang, không xuống dòng;
// mép phải mờ dần cho biết còn chip phía sau, từ sm hàng vừa đủ nên bỏ mép mờ.
export default function FeedFilterChips({ activeFilterId, onFilterChange }: FeedFilterChipsProps) {
  return (
    <div className="scrollbar-clean overflow-x-auto py-0.5 [mask-image:linear-gradient(to_right,black_80%,transparent)] sm:[mask-image:none]">
      <div className="flex items-center gap-2 pr-8 sm:pr-0" role="group" aria-label="Lọc theo loại hoạt động">
        {feedFilters.map((filter) => {
          const isActive = filter.id === activeFilterId;

          return (
            <Button
              key={filter.id}
              variant="ghost"
              aria-pressed={isActive}
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                "h-9 min-h-9 shrink-0 rounded-full px-3.5 py-0 whitespace-nowrap",
                isActive && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                !isActive && "bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground",
              )}
            >
              {filter.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
