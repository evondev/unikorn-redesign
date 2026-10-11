import {
  BookOpen,
  ChartLine,
  Coffee,
  Flame,
  Heart,
  MessagesSquare,
  Newspaper,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

import type { FeaturedEvent, NavLinkGroup, NavLinkItem, TrendingCategory } from "@/types/navigation";

// Tên danh mục đổi sang tiếng Việt dễ hiểu (Desktop Utilities → Tiện ích máy tính); số mới lấy từ site gốc.
export const trendingCategories: TrendingCategory[] = [
  { name: "Game", newProductCount: 11, href: "#" },
  { name: "Tiện ích máy tính", newProductCount: 11, href: "#" },
  { name: "Trợ lý AI", newProductCount: 8, href: "#" },
  { name: "Tiện ích trình duyệt", newProductCount: 8, href: "#" },
  { name: "Công cụ cho dev", newProductCount: 5, href: "#" },
  { name: "Công cụ học tập", newProductCount: 4, href: "#" },
  { name: "Ngoại ngữ", newProductCount: 3, href: "#" },
];

// Tám bảng của site gốc, chia theo thứ được xếp: sản phẩm hay con người.
export const leaderboardGroups: NavLinkGroup[] = [
  {
    title: "Xếp hạng sản phẩm",
    items: [
      { label: "Sản phẩm được chọn", description: "Cộng đồng bình chọn nhiều nhất", href: "#", icon: Trophy },
      { label: "Số liệu thật", description: "Theo lượt truy cập và sao GitHub", href: "#", icon: ChartLine },
      { label: "Phản hồi nhanh", description: "Maker trả lời góp ý nhanh nhất", href: "#", icon: Zap },
    ],
  },
  {
    title: "Xếp hạng thành viên",
    items: [
      { label: "Nhà sáng tạo bền bỉ", description: "Ra mắt sản phẩm đều đặn", href: "#", icon: ShieldCheck },
      { label: "Thành viên năng nổ", description: "Điểm hoạt động cao nhất", href: "#", icon: Users },
      { label: "Người góp sức", description: "Góp ý được maker nhận và làm", href: "#", icon: Heart },
      { label: "Tiếp sức", description: "Ủng hộ maker nhiều nhất", href: "#", icon: Coffee },
      { label: "Chuỗi ngày kiên trì", description: "Ghé Unikorn liền mạch nhiều ngày", href: "#", icon: Flame },
    ],
  },
];

export const communityLinks: NavLinkItem[] = [
  { label: "Bảng tin", description: "Maker kể chuyện làm sản phẩm", href: "#", icon: Newspaper, isNew: true },
  { label: "Thảo luận", description: "Hỏi đáp, chia sẻ kinh nghiệm", href: "#", icon: MessagesSquare },
  { label: "Đánh giá", description: "Người dùng chấm và nhận xét app", href: "#", icon: Star },
  { label: "Blog", description: "Bài viết tổng hợp từ Unikorn", href: "#", icon: BookOpen },
  { label: "Nhà sáng tạo", description: "Những người làm ra sản phẩm", href: "#", icon: Rocket },
  { label: "Hunter", description: "Người tìm và giới thiệu app hay", href: "#", icon: Search },
];

// Ngày, chỗ ngồi, hạn cuộc thi là số giả. Hai cuộc thi cùng loại nên không icon (F17).
export const featuredEvent: FeaturedEvent = {
  title: "Future Builders Meetup",
  day: "25",
  month: "Th10",
  summary: "Gặp builder Việt tại TP.HCM · còn 42 chỗ",
  href: "#",
};

export const contestLinks: NavLinkItem[] = [
  { label: "Tools for Builders", description: "Đang nhận bài · còn 12 ngày", href: "#" },
  { label: "The Weird and Wonderful", description: "Đang chấm · có kết quả 30/10", href: "#" },
];
