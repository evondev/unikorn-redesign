import type { FeedFilterId, FeedItem } from "../types";

export function filterFeedItems(items: FeedItem[], filterId: FeedFilterId) {
  if (filterId === "all") return items;

  return items.filter((item) => item.kind === filterId);
}
