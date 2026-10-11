import { Button } from "@/components/button";
import { cn } from "@/utils/cn";

import type { Need } from "../types";
import { formatNumber } from "../utils";

interface NeedTileProps {
  need: Need;
  isSelected: boolean;
  onSelect: (needId: string) => void;
}

// Ô việc là ô chọn (choice-controls.md, Card chọn). Đang chọn: viền trung tính đậm 2px (viền + ring-1)
// thay cho đỏ, để đỏ chỉ còn ở nút chính và brand.
function getTileStateClasses(isSelected: boolean) {
  return cn(
    isSelected && "border-selected ring-1 ring-selected hover:bg-surface",
    !isSelected && "border-border-strong hover:bg-background-hover",
  );
}

export default function NeedTile({ need, isSelected, onSelect }: NeedTileProps) {
  return (
    <Button
      variant="outline"
      aria-pressed={isSelected}
      onClick={() => onSelect(need.id)}
      className={cn(
        "w-34 shrink-0 flex-col items-stretch justify-start gap-3 rounded-2xl p-4 text-left [overflow-wrap:normal] md:w-auto",
        getTileStateClasses(isSelected),
      )}
    >
      <span className="grid size-10 place-items-center rounded-xl bg-foreground/5 text-foreground/80">
        <need.icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-foreground text-balance">{need.name}</span>
        <span className="mt-0.5 block text-xs font-normal text-muted">
          {`${formatNumber(need.productCount)} sản phẩm`}
        </span>
        <span className="mt-0.5 hidden text-xs font-normal text-muted text-pretty sm:block">{need.audience}</span>
      </span>
    </Button>
  );
}
