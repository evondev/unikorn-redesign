import { communityLinks } from "@/constants/nav-menus";

import MenuLink from "./menu-link";

// Feed, Talks của site gốc (đổi sang Bảng tin, Thảo luận) cùng các mục người của menu Khám phá cũ.
export default function CommunityMenu() {
  return (
    <ul className="grid w-[540px] grid-cols-2 gap-1 p-2">
      {communityLinks.map((communityLink) => (
        <li key={communityLink.label}>
          <MenuLink item={communityLink} />
        </li>
      ))}
    </ul>
  );
}
