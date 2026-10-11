import type { LucideIcon } from "lucide-react";

// Một nhóm việc: dùng chung cho bản đồ ở trang chủ và menu "Sản phẩm" trên header.
export interface NeedGroup {
  id: string;
  icon: LucideIcon;
  name: string;
  productCount: number;
  audience: string;
}
