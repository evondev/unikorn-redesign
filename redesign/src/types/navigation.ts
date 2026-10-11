import type { LucideIcon } from "lucide-react";

export type NavMenuId = "products" | "leaderboard" | "community" | "events";

export interface NavMenu {
  id: NavMenuId;
  label: string;
  hasIndicator?: boolean;
}

export interface NavLinkItem {
  label: string;
  description: string;
  href: string;
  icon?: LucideIcon;
  isNew?: boolean;
}

export interface NavLinkGroup {
  title: string;
  items: NavLinkItem[];
}

export interface TrendingCategory {
  name: string;
  newProductCount: number;
  href: string;
}

export interface FeaturedEvent {
  title: string;
  day: string;
  month: string;
  summary: string;
  href: string;
}

export interface LanguageOption {
  code: string;
  label: string;
}

export interface FooterLinkGroup {
  title: string;
  links: string[];
}
