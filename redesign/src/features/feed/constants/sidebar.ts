import { ChevronUp, MessagesSquare, RefreshCw, Rocket } from "lucide-react";

import { getPhotoUrl } from "@/utils";

import type { TodayStat, TrendingProduct, UpcomingContest, WeeklyMember } from "../types";
import { feedActors } from "./feed-actors";

// Số trong hôm nay, điểm thịnh hành, điểm thành viên lấy theo site gốc lúc chụp; số người theo dõi cuộc thi là SỐ GIẢ.
// "0 thảo luận" giữ nguyên để thấy ca số 0.
export const todayStats: TodayStat[] = [
  { id: "launches", icon: Rocket, label: "Ra mắt", value: 2 },
  { id: "votes", icon: ChevronUp, label: "Bình chọn", value: 22 },
  { id: "talks", icon: MessagesSquare, label: "Thảo luận", value: 0 },
  { id: "updates", icon: RefreshCw, label: "Cập nhật", value: 4 },
];

export const trendingProducts: TrendingProduct[] = [
  { productId: "hoantien365", pointGain: 82 },
  { productId: "savving", pointGain: 53 },
  { productId: "gap-mon", pointGain: 41 },
  { productId: "seo-tu-dong", pointGain: 35 },
  { productId: "ai-cho-moi-nguoi", pointGain: 34 },
];

// Ảnh bìa cuộc thi là ảnh mẫu Unsplash, thay bằng ảnh bìa thật.
export const upcomingContests: UpcomingContest[] = [
  {
    id: "tools-for-builders",
    title: "Tools for Builders",
    imageUrl: getPhotoUrl("1580894894513-541e068a3e2b", 160),
    followerCount: 139,
    opensLabel: "Nhận đề sau 07:10:11",
  },
  {
    id: "weird-and-wonderful",
    title: "The Weird and Wonderful",
    imageUrl: getPhotoUrl("1522542550221-31fd19575a2d", 160),
    followerCount: 75,
    opensLabel: "Mở đăng ký 20/10",
  },
];

export const weeklyMembers: WeeklyMember[] = [
  { member: feedActors.dcsoft, productCount: 2, pointGain: 2100 },
  { member: feedActors.alexHua, productCount: 2, pointGain: 1000 },
  { member: feedActors.liamTran, productCount: 0, pointGain: 618 },
  { member: feedActors.quyetTran, productCount: 0, pointGain: 550 },
  { member: feedActors.vuVy, productCount: 1, pointGain: 497 },
];
