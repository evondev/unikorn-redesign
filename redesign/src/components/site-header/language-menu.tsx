import { Check, ChevronDown, Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/button";
import { languageOptions } from "@/constants/nav-items";
import { cn } from "@/utils/cn";

// Chỉ giao diện: đổi ngôn ngữ chưa gọi gì, nối i18n ở handleSelect.
// Cùng khuôn với ThemeMenu: nút ghost mở menu canh phải, mục đang chọn có dấu ✓.
export default function LanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState(languageOptions[0].code);
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

  function handleSelect(languageCode: string) {
    setSelectedCode(languageCode);
    setIsOpen(false);
  }

  return (
    <div ref={menuRootRef} className="relative">
      <Button
        variant="ghost"
        icon={Languages}
        aria-label="Ngôn ngữ"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((isMenuOpen) => !isMenuOpen)}
        className="h-9 min-h-9 shrink-0 gap-1.5 rounded-lg px-3 py-0 whitespace-nowrap text-foreground/70 uppercase aria-expanded:bg-foreground/5 aria-expanded:text-foreground"
      >
        {selectedCode}
        <ChevronDown className="size-4 shrink-0 text-muted" aria-hidden />
      </Button>

      <div
        role="menu"
        aria-label="Ngôn ngữ"
        className={cn(
          "absolute top-full right-0 z-50 mt-2 min-w-48 origin-top-right rounded-2xl border border-border bg-surface-overlay p-1 shadow-popover",
          "transition-[opacity,scale,translate,display] transition-discrete motion-reduce:transition-[opacity,display]",
          isOpen &&
            "flex translate-y-0 scale-100 flex-col gap-1 opacity-100 duration-150 ease-out starting:-translate-y-1 starting:scale-95 starting:opacity-0",
          !isOpen && "hidden scale-95 opacity-0 duration-100 ease-in",
        )}
      >
        {languageOptions.map((languageOption) => {
          const isSelected = languageOption.code === selectedCode;

          return (
            <Button
              key={languageOption.code}
              variant="ghost"
              role="menuitemradio"
              aria-checked={isSelected}
              onClick={() => handleSelect(languageOption.code)}
              className="min-h-10 w-full justify-start gap-2.5 rounded-xl px-3 py-2.5 text-left font-normal text-foreground hover:bg-item-hover focus-visible:bg-item-hover"
            >
              <span className="flex-1">{languageOption.label}</span>
              {isSelected ? <Check className="size-4 shrink-0 text-foreground" aria-hidden /> : null}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
