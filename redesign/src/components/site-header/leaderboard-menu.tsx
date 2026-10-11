import { leaderboardGroups } from "@/constants/nav-menus";

import MenuLink from "./menu-link";

// Tám bảng của site gốc chia hai cột theo thứ được xếp hạng; mô tả viết đủ câu, không cắt "…".
export default function LeaderboardMenu() {
  return (
    <div className="grid w-[600px] grid-cols-2 gap-2 p-2">
      {leaderboardGroups.map((leaderboardGroup) => (
        <section key={leaderboardGroup.title} aria-label={leaderboardGroup.title}>
          <p className="px-3 py-2 text-xs font-medium text-muted">{leaderboardGroup.title}</p>
          <ul className="flex flex-col gap-1">
            {leaderboardGroup.items.map((item) => (
              <li key={item.label}>
                <MenuLink item={item} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
