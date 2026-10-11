import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

import type { NavMenuId } from "@/types/navigation";

// Rê vào chờ 100ms mới mở (lướt ngang qua không bật), rời đi chờ 250ms mới đóng
// để kéo chuột chéo xuống panel không tắt giữa chừng (layouts/overlay.md, Menu con).
const hoverOpenDelayMs = 100;
const hoverCloseDelayMs = 250;

function isMousePointer(event: ReactPointerEvent) {
  return event.pointerType === "mouse";
}

// Một menu mở một lúc. Chuột: rê để mở. Bấm: mở/đóng. Esc hoặc bấm ra ngoài mục đang mở: đóng.
export function useHeaderMenu() {
  const [openMenuId, setOpenMenuId] = useState<NavMenuId | null>(null);
  const isOpenedByHoverRef = useRef(false);
  const openTimerRef = useRef<number | undefined>(undefined);
  const closeTimerRef = useRef<number | undefined>(undefined);
  const itemRefs = useRef<Partial<Record<NavMenuId, HTMLElement | null>>>({});

  const clearTimers = useCallback(() => {
    window.clearTimeout(openTimerRef.current);
    window.clearTimeout(closeTimerRef.current);
  }, []);

  const closeMenu = useCallback(() => {
    clearTimers();
    setOpenMenuId(null);
  }, [clearTimers]);

  useEffect(() => {
    if (!openMenuId) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape" || !openMenuId) return;

      const itemElement = itemRefs.current[openMenuId];
      const isFocusInItem = itemElement?.contains(document.activeElement) ?? false;

      closeMenu();
      if (isFocusInItem) itemElement?.querySelector<HTMLButtonElement>("[aria-expanded]")?.focus();
    }

    function handlePointerDown(event: PointerEvent) {
      if (!openMenuId || itemRefs.current[openMenuId]?.contains(event.target as Node)) return;

      closeMenu();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openMenuId, closeMenu]);

  useEffect(() => clearTimers, [clearTimers]);

  function handleTriggerClick(menuId: NavMenuId) {
    clearTimers();

    // Rê vào đã mở rồi bấm tiếp thì giữ mở, không tắt ngay dưới tay người dùng.
    if (openMenuId === menuId && isOpenedByHoverRef.current) {
      isOpenedByHoverRef.current = false;
      return;
    }

    isOpenedByHoverRef.current = false;
    setOpenMenuId((currentMenuId) => (currentMenuId === menuId ? null : menuId));
  }

  function handleTriggerPointerEnter(menuId: NavMenuId, event: ReactPointerEvent) {
    if (!isMousePointer(event)) return;

    clearTimers();

    // Đang có menu mở thì chuyển ngay sang menu mới, như thanh menu của máy tính.
    if (openMenuId) {
      isOpenedByHoverRef.current = true;
      setOpenMenuId(menuId);
      return;
    }

    openTimerRef.current = window.setTimeout(() => {
      isOpenedByHoverRef.current = true;
      setOpenMenuId(menuId);
    }, hoverOpenDelayMs);
  }

  function handlePanelPointerEnter(event: ReactPointerEvent) {
    if (!isMousePointer(event)) return;

    window.clearTimeout(closeTimerRef.current);
  }

  function handlePointerLeave(event: ReactPointerEvent) {
    if (!isMousePointer(event)) return;

    window.clearTimeout(openTimerRef.current);
    // Menu mở bằng bấm thì không tự đóng khi chuột rời đi.
    if (!isOpenedByHoverRef.current) return;

    closeTimerRef.current = window.setTimeout(() => setOpenMenuId(null), hoverCloseDelayMs);
  }

  // Gắn lên phần tử bọc cả nút mở lẫn panel của một mục.
  function registerItem(menuId: NavMenuId) {
    return (itemElement: HTMLElement | null) => {
      itemRefs.current[menuId] = itemElement;
    };
  }

  return {
    openMenuId,
    closeMenu,
    handleTriggerClick,
    handleTriggerPointerEnter,
    handlePanelPointerEnter,
    handlePointerLeave,
    registerItem,
  };
}
