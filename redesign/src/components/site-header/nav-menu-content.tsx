import type { NavMenuId } from "@/types/navigation";

import CommunityMenu from "./community-menu";
import EventsMenu from "./events-menu";
import LeaderboardMenu from "./leaderboard-menu";
import ProductsMenu from "./products-menu";

interface NavMenuContentProps {
  menuId: NavMenuId;
}

export default function NavMenuContent({ menuId }: NavMenuContentProps) {
  if (menuId === "products") return <ProductsMenu />;
  if (menuId === "leaderboard") return <LeaderboardMenu />;
  if (menuId === "community") return <CommunityMenu />;

  return <EventsMenu />;
}
