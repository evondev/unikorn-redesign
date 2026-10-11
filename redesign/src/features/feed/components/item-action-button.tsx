import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/button";
import { cn } from "@/utils";

interface ItemActionButtonProps {
  icon: LucideIcon;
  label: string;
  isIconOnly?: boolean;
  onClick?: () => void;
}

// Hành động ở chân mỗi mục (bình luận, thích, lưu, chép link): nút ghost cao 32px, chữ thường không đậm.
// Chỉ icon thì vuông 32px, nhãn nằm ở aria-label và title (small-controls.md, IconButton).
export default function ItemActionButton({ icon, label, isIconOnly = false, onClick }: ItemActionButtonProps) {
  return (
    <Button
      variant="ghost"
      icon={icon}
      onClick={onClick}
      aria-label={isIconOnly ? label : undefined}
      title={isIconOnly ? label : undefined}
      className={cn(
        "h-8 min-h-8 rounded-lg py-0 font-normal tabular-nums",
        isIconOnly && "size-8 px-0",
        !isIconOnly && "gap-1.5 px-2",
      )}
    >
      {isIconOnly ? null : label}
    </Button>
  );
}
