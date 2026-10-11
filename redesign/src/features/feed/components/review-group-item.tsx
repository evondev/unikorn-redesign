import { Heart, Link2, Star } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { ProductTile } from "@/components/product-tile";
import { StarRating } from "@/components/star-rating";
import { TextLink } from "@/components/text-link";
import { formatRating, getProduct } from "@/utils";

import type { ReviewFeedItem } from "../types";
import ActorLink from "./actor-link";
import FeedItemHeader from "./feed-item-header";
import ItemActionButton from "./item-action-button";
import ReviewerAvatars from "./reviewer-avatars";

interface ReviewGroupItemProps {
  item: ReviewFeedItem;
}

// Nhiều đánh giá cho một app gộp thành một mục: app được đánh giá → lời người dùng thật → link xem hết.
// Một người đánh giá thì không ghi tên dưới trích dẫn (đã có ở đầu mục).
export default function ReviewGroupItem({ item }: ReviewGroupItemProps) {
  const product = getProduct(item.productId);
  const { latestReview } = item;
  const otherReviewerCount = item.reviewCount - 1;
  const hasOtherReviewers = otherReviewerCount > 0;
  const likeLabel = item.likeCount > 0 ? `Thích · ${item.likeCount}` : "Thích";

  return (
    <article>
      <FeedItemHeader
        leading={<ReviewerAvatars firstReviewer={latestReview.author} secondReviewer={item.otherReviewers[0]} />}
        postedLabel={item.postedLabel}
        postedAtFull={item.postedAtFull}
      >
        <ActorLink actor={latestReview.author} />
        {hasOtherReviewers ? ` và ${otherReviewerCount} người khác` : null} đã đánh giá
      </FeedItemHeader>

      <div className="mt-3 sm:pl-[52px]">
        {/* Cả hàng app là một link (cao 40px), không chỉ dòng tên cao 20px. */}
        <a href="#" className="group flex items-center gap-3 outline-hidden">
          <ProductTile productId={product.id} name={product.name} />
          <span className="min-w-0 flex-1">
            <span
              title={product.name}
              className="block truncate text-sm font-medium text-foreground underline-offset-4 group-hover:underline"
            >
              {product.name}
            </span>
            <span className="mt-0.5 flex items-center gap-1 text-xs text-muted">
              <Star className="size-3.5 fill-current text-amber-500 dark:text-amber-400" aria-hidden />
              <span className="text-foreground">{formatRating(product.rating ?? latestReview.rating)}</span>
              <span>{`· ${product.reviewCount} đánh giá`}</span>
            </span>
          </span>
        </a>

        <blockquote className="mt-3 rounded-xl bg-background p-4">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <StarRating rating={latestReview.rating} />
            <p className="text-sm font-semibold text-foreground">{latestReview.title}</p>
          </div>
          <p className="mt-2 text-sm text-foreground/80 text-pretty">{`“${latestReview.text}”`}</p>
          {hasOtherReviewers ? (
            <footer className="mt-3 flex items-center gap-2 text-xs text-muted">
              <Avatar
                seed={latestReview.author.id}
                name={latestReview.author.name}
                photoUrl={latestReview.author.photoUrl}
                className="size-5 text-xs"
              />
              {latestReview.author.name}
            </footer>
          ) : null}
        </blockquote>

        <div className="mt-3 flex items-center justify-between gap-2">
          {hasOtherReviewers ? <TextLink>{`Xem cả ${item.reviewCount} đánh giá`}</TextLink> : <span />}
          <div className="flex items-center gap-1">
            <ItemActionButton icon={Heart} label={likeLabel} />
            <ItemActionButton icon={Link2} label="Chép link" isIconOnly />
          </div>
        </div>
      </div>
    </article>
  );
}
