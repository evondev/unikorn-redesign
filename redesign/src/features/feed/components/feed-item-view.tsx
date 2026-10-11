import type { FeedItem } from "../types";
import LaunchItem from "./launch-item";
import ReviewGroupItem from "./review-group-item";
import TalkItem from "./talk-item";
import UpdateGroupItem from "./update-group-item";

interface FeedItemViewProps {
  item: FeedItem;
}

export default function FeedItemView({ item }: FeedItemViewProps) {
  if (item.kind === "launch") return <LaunchItem item={item} />;

  if (item.kind === "review") return <ReviewGroupItem item={item} />;

  if (item.kind === "update") return <UpdateGroupItem item={item} />;

  return <TalkItem item={item} />;
}
