import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";

import type { NavMenu } from "@/types/navigation";

import NavPanel from "./nav-panel";
import NavTrigger from "./nav-trigger";

interface NavMenuItemProps {
  menu: NavMenu;
  isOpen: boolean;
  isFullWidth?: boolean;
  itemRef: (itemElement: HTMLElement | null) => void;
  onTriggerClick: () => void;
  onTriggerPointerEnter: (event: ReactPointerEvent) => void;
  onPanelPointerEnter: (event: ReactPointerEvent) => void;
  onPointerLeave: (event: ReactPointerEvent) => void;
  children: ReactNode;
}

// <li> không relative: panel định vị theo khung header (NavPanel), còn nút và panel vẫn chung một cha
// để rê từ nút xuống panel, Tab từ nút vào panel đều không rời mục.
export default function NavMenuItem({
  menu,
  isOpen,
  isFullWidth,
  itemRef,
  onTriggerClick,
  onTriggerPointerEnter,
  onPanelPointerEnter,
  onPointerLeave,
  children,
}: NavMenuItemProps) {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = `nav-panel-${menu.id}`;

  return (
    <li ref={itemRef} onPointerLeave={onPointerLeave}>
      <NavTrigger
        buttonRef={triggerRef}
        label={menu.label}
        hasIndicator={menu.hasIndicator}
        isOpen={isOpen}
        aria-controls={panelId}
        onClick={onTriggerClick}
        onPointerEnter={onTriggerPointerEnter}
      />
      <NavPanel
        id={panelId}
        label={menu.label}
        isOpen={isOpen}
        align={isFullWidth ? "container" : "trigger"}
        anchorRef={triggerRef}
        onPointerEnter={onPanelPointerEnter}
      >
        {children}
      </NavPanel>
    </li>
  );
}
