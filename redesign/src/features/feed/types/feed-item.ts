import type { FeedActor } from "./feed-actor";

export type FeedItemKind = "launch" | "review" | "update" | "talk";

interface FeedItemBase {
  id: string;
  postedLabel: string;
  postedAtFull: string;
}

export interface LaunchFeedItem extends FeedItemBase {
  kind: "launch";
  actor: FeedActor;
  productId: string;
  needGroupId: string;
  description: string;
  screenshotUrls: string[];
  commentCount: number;
}

export interface FeedReview {
  id: string;
  author: FeedActor;
  rating: number;
  title: string;
  text: string;
}

// Nhiều đánh giá cho cùng một app gộp thành một mục, chỉ hiện đánh giá mới nhất.
export interface ReviewFeedItem extends FeedItemBase {
  kind: "review";
  productId: string;
  latestReview: FeedReview;
  otherReviewers: FeedActor[];
  reviewCount: number;
  likeCount: number;
}

export interface ProductUpdate {
  id: string;
  productId: string;
  version: string;
  summary: string;
  postedLabel: string;
}

// Các bản cập nhật trong cùng một ngày gộp thành một mục gọn, mỗi bản một dòng.
export interface UpdateFeedItem extends FeedItemBase {
  kind: "update";
  updates: ProductUpdate[];
}

export interface TalkFeedItem extends FeedItemBase {
  kind: "talk";
  actor: FeedActor;
  title: string;
  excerpt: string;
  topics: string[];
  imageUrl?: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
}

export type FeedItem = LaunchFeedItem | ReviewFeedItem | UpdateFeedItem | TalkFeedItem;
