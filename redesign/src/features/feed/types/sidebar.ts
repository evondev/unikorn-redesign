import type { LucideIcon } from "lucide-react";

import type { FeedActor } from "./feed-actor";

export interface TodayStat {
  id: string;
  icon: LucideIcon;
  label: string;
  value: number;
}

export interface TrendingProduct {
  productId: string;
  pointGain: number;
}

export interface UpcomingContest {
  id: string;
  title: string;
  imageUrl: string;
  followerCount: number;
  opensLabel: string;
}

export interface WeeklyMember {
  member: FeedActor;
  productCount: number;
  pointGain: number;
}
