import { Briefcase, CodeXml, CookingPot, Gamepad2, GraduationCap, HeartPulse, Wallet } from "lucide-react";

import type { NeedGroup } from "@/types/need-group";

// Số sản phẩm của Sức khỏe, Giải trí, Cho người làm sản phẩm lấy từ site; các nhóm còn lại là số giả.
export const needGroups: NeedGroup[] = [
  { id: "di-lam", icon: Briefcase, name: "Đi làm & văn phòng", productCount: 186, audience: "Cho dân văn phòng" },
  {
    id: "hoc-tap",
    icon: GraduationCap,
    name: "Học tập",
    productCount: 142,
    audience: "Cho học sinh, sinh viên, phụ huynh",
  },
  { id: "tien-nong", icon: Wallet, name: "Tiền nong & chi tiêu", productCount: 64, audience: "Cho người giữ ví trong nhà" },
  { id: "gia-dinh", icon: CookingPot, name: "Bếp núc & gia đình", productCount: 58, audience: "Cho người lo việc nhà" },
  { id: "suc-khoe", icon: HeartPulse, name: "Sức khỏe", productCount: 55, audience: "Cho người ngồi máy cả ngày" },
  { id: "giai-tri", icon: Gamepad2, name: "Giải trí", productCount: 155, audience: "Cho giờ nghỉ tay" },
  { id: "builder", icon: CodeXml, name: "Cho người làm sản phẩm", productCount: 197, audience: "Cho dev, builder, startup" },
];
