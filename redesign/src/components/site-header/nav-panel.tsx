import { useLayoutEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode, RefObject } from "react";

import { cn } from "@/utils/cn";

type NavPanelAlign = "trigger" | "container";

interface NavPanelProps {
  id: string;
  label: string;
  isOpen: boolean;
  align: NavPanelAlign;
  anchorRef?: RefObject<HTMLElement | null>;
  className?: string;
  onPointerEnter: (event: ReactPointerEvent) => void;
  children: ReactNode;
}

// Cùng cách với ThemeMenu (layouts/overlay.md, Chuyển động): giữ trong DOM, ẩn bằng display + transition-discrete.
// Vào: mờ + phóng từ 95% + dịch 4px từ phía nút, 150ms ease-out (điểm đầu ở starting:). Ra: mờ + thu 95%, 100ms ease-in.
function getOpenStateClasses(isOpen: boolean) {
  return cn(
    isOpen &&
      "block translate-y-0 scale-100 opacity-100 duration-150 ease-out starting:-translate-y-1 starting:scale-95 starting:opacity-0",
    !isOpen && "hidden scale-95 opacity-0 duration-100 ease-in",
  );
}

// Panel nằm ngay sau nút mở trong DOM (Tab đi thẳng vào), nhưng định vị theo khung header:
// "trigger" bám mép trái nút, sát mép phải khung thì lùi vào; "container" trải hết bề ngang khung.
export default function NavPanel({
  id,
  label,
  isOpen,
  align,
  anchorRef,
  className,
  onPointerEnter,
  children,
}: NavPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Đo sau khi panel đã hiện (display block) nên offsetWidth là bề rộng thật, không phải 0.
  useLayoutEffect(() => {
    const panelElement = panelRef.current;
    const anchorElement = anchorRef?.current;
    const containerElement = panelElement?.offsetParent as HTMLElement | null;

    if (!isOpen || align !== "trigger" || !panelElement || !anchorElement || !containerElement) return;

    const containerPadding = parseFloat(getComputedStyle(containerElement).paddingRight);
    const maxLeft = containerElement.clientWidth - containerPadding - panelElement.offsetWidth;

    panelElement.style.left = `${Math.max(containerPadding, Math.min(anchorElement.offsetLeft, maxLeft))}px`;
  }, [isOpen, align, anchorRef]);

  return (
    <div
      ref={panelRef}
      id={id}
      role="region"
      aria-label={label}
      onPointerEnter={onPointerEnter}
      className={cn(
        "absolute top-full z-50 mt-1 rounded-2xl border border-border bg-surface-overlay shadow-popover",
        "transition-[opacity,scale,translate,display] transition-discrete motion-reduce:transition-[opacity,display]",
        align === "trigger" && "origin-top-left",
        align === "container" && "inset-x-4 origin-top sm:inset-x-6",
        getOpenStateClasses(isOpen),
        className,
      )}
    >
      {children}
    </div>
  );
}
