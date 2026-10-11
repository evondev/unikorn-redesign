import type { NeedGroup } from "@/types/need-group";

// Một nhóm việc trên bản đồ: phần chung (tên, icon, số app) ở src/constants/need-groups.ts,
// phần riêng trang chủ là câu chuyện và vài sản phẩm tiêu biểu.
export interface NeedStoryContent {
  storyTitle: string;
  story: string;
  photoId: string;
  productIds: string[];
}

export interface Need extends NeedGroup, NeedStoryContent {}
