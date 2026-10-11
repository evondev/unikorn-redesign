import { cn } from "@/utils/cn";

import { ProductTile } from "@/components/product-tile";
import { StarRating } from "@/components/star-rating";
import { getInitial, getProduct, getProductTone } from "@/utils";

import type { Review } from "../types";

interface ReviewCardProps {
  review: Review;
}

// Thẻ đánh giá: sản phẩm được đánh giá → số sao → lời người dùng → ai viết, khi nào.
// Mượn khuôn bình luận (comment-thread.md): avatar 32px, tên text-sm font-medium, thời gian text-xs có giờ đủ ở title.
export default function ReviewCard({ review }: ReviewCardProps) {
  const product = getProduct(review.productId);

  return (
    <li className="min-w-0">
      <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-5">
        <a href="#" className="flex min-w-0 items-center gap-2 outline-hidden hover:underline underline-offset-4">
          <ProductTile productId={product.id} name={product.name} className="size-8 rounded-lg text-xs" />
          <span className="truncate text-sm font-medium text-foreground" title={product.name}>
            {product.name}
          </span>
        </a>

        <div className="mt-4">
          <StarRating rating={review.rating} />
        </div>
        <p className="mt-2 line-clamp-3 text-sm text-foreground text-pretty" title={review.text}>{review.text}</p>

        <footer className="mt-auto flex items-center gap-3 pt-5">
          <span
            className={cn(
              "inline-flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ring-1",
              getProductTone(review.authorId),
            )}
            aria-hidden="true"
          >
            {getInitial(review.authorName)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-foreground">{review.authorName}</p>
            <p className="text-xs text-muted">
              <time title={review.postedAtFull}>{review.postedLabel}</time>
            </p>
          </div>
        </footer>
      </article>
    </li>
  );
}
