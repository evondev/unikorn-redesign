import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface TextLinkProps {
  href?: string;
  className?: string;
  children: ReactNode;
}

// "Xem tất cả", "Xem 186 sản phẩm": link chữ h-8, không padding ngang, không màu nhấn, không icon (I7).
export default function TextLink({ href = "#", className, children }: TextLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-8 shrink-0 items-center text-sm font-medium text-foreground/70 underline-offset-4 outline-hidden hover:text-foreground hover:underline",
        className,
      )}
    >
      {children}
    </a>
  );
}
