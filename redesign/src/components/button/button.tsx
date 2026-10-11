import type { LucideIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/utils/cn";

// Bốn dạng, hết (components/button.md). Cỡ khác thì truyền className, không thêm prop size.
type ButtonVariant = "outline" | "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  icon?: LucideIcon;
}

function getVariantClasses(variant: ButtonVariant) {
  return cn(
    variant === "outline" && "border border-border-strong bg-surface text-foreground hover:bg-button-hover",
    variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary-hover",
    variant === "secondary" && "bg-secondary text-foreground hover:bg-secondary-hover",
    variant === "ghost" && "bg-transparent text-muted hover:bg-foreground/5 hover:text-foreground",
  );
}

export default function Button({
  variant = "outline",
  icon: Icon,
  type = "button",
  className,
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl",
        "min-h-10 px-4 py-2 text-sm font-medium transition-colors",
        "max-w-full text-center leading-tight [overflow-wrap:anywhere]",
        "outline-hidden",
        "disabled:cursor-not-allowed disabled:not-aria-busy:opacity-50",
        getVariantClasses(variant),
        className,
      )}
      {...buttonProps}
    >
      {Icon ? <Icon className="size-4 shrink-0" aria-hidden /> : null}
      {children}
    </button>
  );
}
