import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/button";
import { cn } from "@/utils/cn";

interface MobileNavSectionProps {
  id: string;
  label: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
}

// Nhóm mở/đóng trong drawer: grid-rows 0fr → 1fr, 200ms (layouts/app.md, nhóm sidebar).
export default function MobileNavSection({ id, label, isExpanded, onToggle, children }: MobileNavSectionProps) {
  const contentId = `mobile-nav-${id}`;

  return (
    <div>
      <Button
        variant="ghost"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={onToggle}
        className="h-10 min-h-10 w-full justify-between rounded-xl px-3 py-0 font-semibold text-foreground hover:bg-item-hover"
      >
        {label}
        <ChevronDown
          className={cn("size-4 shrink-0 text-muted transition-transform duration-200", isExpanded && "rotate-180")}
          aria-hidden
        />
      </Button>
      <div
        id={contentId}
        inert={!isExpanded}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isExpanded && "grid-rows-[1fr]",
          !isExpanded && "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-1 pt-1 pb-2">{children}</ul>
        </div>
      </div>
    </div>
  );
}
