import type { FeedFilter, FeedTab } from "../types";

export const feedTabs: FeedTab[] = [
  { id: "latest", label: "Mới nhất" },
  { id: "featured", label: "Nổi bật" },
  { id: "following", label: "Đang theo dõi" },
];

// Lọc theo loại hoạt động, chọn một. "Tất cả" là mặc định.
export const feedFilters: FeedFilter[] = [
  { id: "all", label: "Tất cả" },
  { id: "launch", label: "Ra mắt" },
  { id: "review", label: "Đánh giá" },
  { id: "update", label: "Cập nhật" },
  { id: "talk", label: "Thảo luận" },
];
