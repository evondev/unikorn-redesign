import { LayoutGrid, Layers } from "lucide-react";

import type { LanguageOption, NavLinkItem, NavMenu } from "@/types/navigation";

// Bốn mục nav thay bảy mục của site gốc: Feed, Talks gộp vào Cộng đồng; Contests và Future Builders Meetup
// gộp vào Sự kiện; Khám phá cũ chia về Sản phẩm (bộ sưu tập) và Cộng đồng (nhà sáng tạo, hunter, blog, đánh giá).
export const navMenus: NavMenu[] = [
  { id: "products", label: "Sản phẩm" },
  { id: "leaderboard", label: "Bảng xếp hạng" },
  { id: "community", label: "Cộng đồng" },
  { id: "events", label: "Sự kiện", hasIndicator: true },
];

export const allCategoriesLink: NavLinkItem = {
  label: "Tất cả danh mục",
  description: "Hơn 90 danh mục trong 18 nhóm",
  href: "#",
  icon: LayoutGrid,
};

export const collectionsLink: NavLinkItem = {
  label: "Bộ sưu tập",
  description: "App được cộng đồng gom theo chủ đề",
  href: "#",
  icon: Layers,
};

export const languageOptions: LanguageOption[] = [
  { code: "vi", label: "Tiếng Việt" },
  { code: "en", label: "English" },
];
