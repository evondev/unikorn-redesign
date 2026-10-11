import { Check, Moon, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/button";
import { themeOptions } from "@/constants/theme-options";
import { useTheme } from "@/hooks/use-theme";
import type { ThemePreference } from "@/types/theme";
import { cn } from "@/utils/cn";

// Nút đổi giao diện trên header (M31): icon Mặt trời / Mặt trăng mở menu ba mục, mục đang chọn có dấu ✓.
// Menu theo layouts/overlay.md: khung rounded-2xl p-1, mục min-h-10 rounded-xl, mọc ra từ nút
// (150ms vào, 100ms ra), bấm ngoài hay Esc thì đóng.
export default function ThemeMenu() {
  const { preference, isDark, changePreference } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!menuRootRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleSelect(nextPreference: ThemePreference) {
    changePreference(nextPreference);
    setIsOpen(false);
  }

  return (
    <div ref={menuRootRef} className="relative">
      <Button
        variant="ghost"
        icon={isDark ? Moon : Sun}
        aria-label="Giao diện"
        title="Giao diện"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((isMenuOpen) => !isMenuOpen)}
        className="size-9 min-h-9 rounded-lg p-0 aria-expanded:bg-foreground/5 aria-expanded:text-foreground"
      />

      {/* Giữ trong DOM, ẩn bằng display + transition-discrete để lúc ra vẫn chạy hết chuyển động;
          lúc vào lấy điểm đầu từ @starting-style (starting:). Giảm chuyển động thì chỉ còn mờ dần. */}
      <div
        role="menu"
        aria-label="Giao diện"
        className={cn(
          "absolute top-full right-0 z-50 mt-2 min-w-48 origin-top-right rounded-2xl border border-border bg-surface-overlay p-1 shadow-popover",
          "transition-[opacity,scale,translate,display] transition-discrete motion-reduce:transition-[opacity,display]",
          isOpen &&
            "flex translate-y-0 scale-100 flex-col gap-1 opacity-100 duration-150 ease-out starting:-translate-y-1 starting:scale-95 starting:opacity-0",
          !isOpen && "hidden scale-95 opacity-0 duration-100 ease-in",
        )}
      >
        {themeOptions.map((themeOption) => {
          const isSelected = themeOption.value === preference;

          return (
            <Button
              key={themeOption.value}
              variant="ghost"
              role="menuitemradio"
              aria-checked={isSelected}
              icon={themeOption.icon}
              onClick={() => handleSelect(themeOption.value)}
              className="min-h-10 w-full justify-start gap-2.5 rounded-xl px-3 py-2.5 text-left font-normal text-foreground hover:bg-item-hover focus-visible:bg-item-hover [&>svg:first-child]:text-muted"
            >
              <span className="flex-1">{themeOption.label}</span>
              {isSelected ? <Check className="size-4 shrink-0 text-foreground" aria-hidden /> : null}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
