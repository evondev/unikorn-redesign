import { ChevronDown } from "lucide-react";
import type { ButtonHTMLAttributes, Ref } from "react";

import { Button } from "@/components/button";
import { cn } from "@/utils/cn";

interface NavTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isOpen: boolean;
  hasIndicator?: boolean;
  buttonRef: Ref<HTMLButtonElement>;
}

function getTriggerStateClasses(isOpen: boolean) {
  return cn(
    isOpen && "bg-foreground/5 text-foreground",
    !isOpen && "text-foreground/70",
  );
}

// Nút mở menu trên thanh nav: cùng khuôn h-9 rounded-lg với các nút ghost bên phải header.
export default function NavTrigger({ label, isOpen, hasIndicator, buttonRef, className, ...buttonProps }: NavTriggerProps) {
  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      aria-expanded={isOpen}
      className={cn(
        "h-9 min-h-9 shrink-0 gap-1 rounded-lg px-3 py-0 whitespace-nowrap hover:bg-foreground/5",
        getTriggerStateClasses(isOpen),
        className,
      )}
      {...buttonProps}
    >
      {label}
      {hasIndicator ? <span className="size-1.5 rounded-full bg-brand" aria-label="có sự kiện sắp diễn ra" /> : null}
      <ChevronDown
        className={cn("size-4 shrink-0 text-muted transition-transform duration-150", isOpen && "rotate-180")}
        aria-hidden
      />
    </Button>
  );
}
