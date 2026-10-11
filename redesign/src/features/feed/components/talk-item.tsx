import { Bookmark, Eye, Heart, Link2, MessageCircle } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { formatNumber } from "@/utils";

import type { TalkFeedItem } from "../types";
import ActorLink from "./actor-link";
import FeedItemHeader from "./feed-item-header";
import ItemActionButton from "./item-action-button";

interface TalkItemProps {
  item: TalkFeedItem;
}

// Thảo luận: tiêu đề và hai dòng mở đầu bên trái, ảnh vuông nhỏ bên phải (không có ảnh thì chữ giãn hết hàng).
export default function TalkItem({ item }: TalkItemProps) {
  const commentLabel = item.commentCount > 0 ? `${item.commentCount} bình luận` : "Bình luận";
  const likeLabel = item.likeCount > 0 ? `Thích · ${item.likeCount}` : "Thích";

  return (
    <article>
      <FeedItemHeader
        leading={<Avatar seed={item.actor.id} name={item.actor.name} photoUrl={item.actor.photoUrl} />}
        postedLabel={item.postedLabel}
        postedAtFull={item.postedAtFull}
      >
        <ActorLink actor={item.actor} /> mở một thảo luận
      </FeedItemHeader>

      <div className="mt-3 sm:pl-[52px]">
        <div className="flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="line-clamp-2 text-base font-semibold text-foreground text-pretty">
              <a href="#" className="underline-offset-4 outline-hidden hover:underline">
                {item.title}
              </a>
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-foreground/80 text-pretty">{item.excerpt}</p>
            <p className="mt-2 flex flex-wrap gap-x-2 text-xs text-muted">
              {item.topics.map((topic) => (
                <span key={topic}>{`#${topic}`}</span>
              ))}
            </p>
          </div>
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt=""
              loading="lazy"
              className="size-20 shrink-0 rounded-xl bg-foreground/5 object-cover ring-1 ring-border sm:size-24"
            />
          ) : null}
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ItemActionButton icon={MessageCircle} label={commentLabel} />
            <span className="hidden items-center gap-1.5 text-sm text-muted tabular-nums sm:inline-flex">
              <Eye className="size-4" aria-hidden />
              {`${formatNumber(item.viewCount)} lượt xem`}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <ItemActionButton icon={Heart} label={likeLabel} />
            <ItemActionButton icon={Bookmark} label="Lưu" isIconOnly />
            <ItemActionButton icon={Link2} label="Chép link" isIconOnly />
          </div>
        </div>
      </div>
    </article>
  );
}
