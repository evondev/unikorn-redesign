import type { FeedItemKind } from "./feed-item";

export type FeedTabId = "latest" | "featured" | "following";

export type FeedFilterId = "all" | FeedItemKind;

export interface FeedTab {
  id: FeedTabId;
  label: string;
}

export interface FeedFilter {
  id: FeedFilterId;
  label: string;
}
