import { Menu, Plus, Search } from "lucide-react";
import { useCallback, useState } from "react";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { ThemeMenu } from "@/components/theme-menu";
import { pageContainerClassName } from "@/constants/layout";
import { navMenus } from "@/constants/nav-items";
import { useHeaderMenu } from "@/hooks/use-header-menu";
import { cn } from "@/utils/cn";

import LanguageMenu from "./language-menu";
import MobileDrawer from "./mobile-drawer";
import NavMenuContent from "./nav-menu-content";
import NavMenuItem from "./nav-menu-item";

// Hàng nút bên phải (layouts/app.md): cùng h-9 rounded-lg, gap-2; "Đăng sản phẩm" là nút viền,
// vì nút đặc duy nhất của trang chủ là nút Tìm ở hero.
export default function SiteHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const {
    openMenuId,
    handleTriggerClick,
    handleTriggerPointerEnter,
    handlePanelPointerEnter,
    handlePointerLeave,
    registerItem,
  } = useHeaderMenu();

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <>
      {/* Header trong mờ để hoa văn trống đồng phía sau còn thấy (P8: kính chỉ có nghĩa khi phía sau có hình).
          Trình duyệt không có backdrop-filter thì về nền đặc. Khung relative để panel menu canh theo khung. */}
      <header className="sticky top-0 z-40 border-b border-border bg-header supports-[backdrop-filter]:bg-header/75 supports-[backdrop-filter]:backdrop-blur-md">
        <div className={cn(pageContainerClassName, "relative flex h-16 items-center gap-2")}>
          <Button
            variant="ghost"
            icon={Menu}
            aria-label="Mở menu"
            onClick={() => setIsDrawerOpen(true)}
            className="size-9 min-h-9 rounded-lg p-0 text-foreground/80 xl:hidden [&>svg]:size-5"
          />
          <Logo />

          <nav className="ml-4 hidden xl:block" aria-label="Điều hướng chính">
            <ul className="flex items-center gap-1">
              {navMenus.map((navMenu) => (
                <NavMenuItem
                  key={navMenu.id}
                  menu={navMenu}
                  isOpen={openMenuId === navMenu.id}
                  isFullWidth={navMenu.id === "products"}
                  itemRef={registerItem(navMenu.id)}
                  onTriggerClick={() => handleTriggerClick(navMenu.id)}
                  onTriggerPointerEnter={(event) => handleTriggerPointerEnter(navMenu.id, event)}
                  onPanelPointerEnter={handlePanelPointerEnter}
                  onPointerLeave={handlePointerLeave}
                >
                  <NavMenuContent menuId={navMenu.id} />
                </NavMenuItem>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            {/* Dưới sm bỏ nút tìm: trang chủ đã có ô tìm ở hero, giữ thì header 375px tràn ngang. */}
            <Button
              variant="ghost"
              icon={Search}
              aria-label="Tìm kiếm"
              title="Tìm kiếm (⌘K)"
              className="hidden size-9 min-h-9 rounded-lg p-0 sm:inline-flex"
            />
            <div className="hidden xl:block">
              <LanguageMenu />
            </div>
            <ThemeMenu />
            <Button variant="ghost" className="h-9 min-h-9 shrink-0 rounded-lg px-3 py-0 whitespace-nowrap text-foreground/70">
              Đăng nhập
            </Button>
            <Button variant="outline" icon={Plus} className="hidden h-9 min-h-9 shrink-0 rounded-lg px-3 py-0 whitespace-nowrap sm:inline-flex">
              Đăng sản phẩm
            </Button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
