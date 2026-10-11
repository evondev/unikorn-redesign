import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { needGroups } from "@/constants/need-groups";
import { allCategoriesLink, collectionsLink, languageOptions, navMenus } from "@/constants/nav-items";
import { communityLinks, contestLinks, featuredEvent, leaderboardGroups } from "@/constants/nav-menus";
import type { NavMenuId } from "@/types/navigation";
import { cn } from "@/utils/cn";

import MobileNavLink from "./mobile-nav-link";
import MobileNavSection from "./mobile-nav-section";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const leaderboardLinks = leaderboardGroups.flatMap((leaderboardGroup) => leaderboardGroup.items);

// Panel trượt từ trái (layouts/overlay.md): vào 500ms, ra 350ms; bấm lớp phủ hay Esc thì đóng, không nút ✕.
// Bốn nhóm như nav desktop, mở/đóng tại chỗ; "Sản phẩm" mở sẵn vì đó là lối vào chính của người mới.
export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [expandedMenuIds, setExpandedMenuIds] = useState<NavMenuId[]>(["products"]);
  const [selectedLanguageCode, setSelectedLanguageCode] = useState(languageOptions[0].code);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  function toggleMenu(menuId: NavMenuId) {
    setExpandedMenuIds((currentMenuIds) =>
      currentMenuIds.includes(menuId)
        ? currentMenuIds.filter((currentMenuId) => currentMenuId !== menuId)
        : [...currentMenuIds, menuId],
    );
  }

  function renderMenuLinks(menuId: NavMenuId) {
    if (menuId === "products") {
      return (
        <>
          {needGroups.map((needGroup) => (
            <MobileNavLink
              key={needGroup.id}
              label={needGroup.name}
              href="#"
              icon={needGroup.icon}
              meta={String(needGroup.productCount)}
            />
          ))}
          <MobileNavLink label={allCategoriesLink.label} href={allCategoriesLink.href} icon={allCategoriesLink.icon} />
          <MobileNavLink label={collectionsLink.label} href={collectionsLink.href} icon={collectionsLink.icon} />
        </>
      );
    }

    if (menuId === "leaderboard") {
      return leaderboardLinks.map((leaderboardLink) => (
        <MobileNavLink key={leaderboardLink.label} label={leaderboardLink.label} href={leaderboardLink.href} icon={leaderboardLink.icon} />
      ));
    }

    if (menuId === "community") {
      return communityLinks.map((communityLink) => (
        <MobileNavLink
          key={communityLink.label}
          label={communityLink.label}
          href={communityLink.href}
          icon={communityLink.icon}
          isNew={communityLink.isNew}
        />
      ));
    }

    return (
      <>
        <MobileNavLink
          label={featuredEvent.title}
          href={featuredEvent.href}
          meta={`${featuredEvent.day} ${featuredEvent.month}`}
        />
        {contestLinks.map((contestLink) => (
          <MobileNavLink key={contestLink.label} label={contestLink.label} href={contestLink.href} />
        ))}
      </>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[65] bg-black/60 transition-opacity duration-350 nav:hidden",
          isOpen && "opacity-100",
          !isOpen && "pointer-events-none opacity-0",
        )}
      />
      <aside
        aria-label="Menu"
        inert={!isOpen}
        className={cn(
          "fixed inset-y-0 left-0 z-[70] flex w-80 max-w-[85vw] flex-col border-r border-border bg-surface-overlay shadow-modal",
          "transition-transform ease-[cubic-bezier(0.32,0.72,0,1)] nav:hidden",
          isOpen && "translate-x-0 duration-500",
          !isOpen && "-translate-x-full duration-350",
        )}
      >
        <div className="box-content flex h-16 shrink-0 items-center border-b border-border px-4">
          <Logo />
        </div>

        <nav className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Điều hướng chính">
          {navMenus.map((navMenu) => (
            <MobileNavSection
              key={navMenu.id}
              id={navMenu.id}
              label={navMenu.label}
              isExpanded={expandedMenuIds.includes(navMenu.id)}
              onToggle={() => toggleMenu(navMenu.id)}
            >
              {renderMenuLinks(navMenu.id)}
            </MobileNavSection>
          ))}
        </nav>

        <div className="flex shrink-0 flex-col gap-3 border-t border-border p-4">
          {/* Hai ngôn ngữ: hai nút cạnh nhau, không cần mở menu trong panel. */}
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm text-muted">Ngôn ngữ</span>
            <div className="flex gap-1 rounded-lg bg-foreground/5 p-1">
              {languageOptions.map((languageOption) => {
                const isSelected = languageOption.code === selectedLanguageCode;

                return (
                  <Button
                    key={languageOption.code}
                    variant="ghost"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedLanguageCode(languageOption.code)}
                    className={cn(
                      "h-8 min-h-8 rounded-md px-3 py-0",
                      isSelected && "bg-surface text-foreground hover:bg-surface",
                    )}
                  >
                    {languageOption.label}
                  </Button>
                );
              })}
            </div>
          </div>
          <Button variant="primary" icon={Plus}>
            Đăng sản phẩm
          </Button>
        </div>
      </aside>
    </>
  );
}
