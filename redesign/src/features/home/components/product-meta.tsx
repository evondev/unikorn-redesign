import { Star } from "lucide-react";

import type { Product } from "@/types/product";
import { formatRating } from "@/utils";

interface ProductMetaProps {
  product: Product;
}

// Dòng phụ: sao + số đánh giá · giá · nền tảng. Màn hẹp bỏ số đánh giá và nền tảng để dòng giữ một hàng.
export default function ProductMeta({ product }: ProductMetaProps) {
  const hasRating = product.rating !== null;

  return (
    <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-muted">
      {hasRating ? (
        <>
          <span className="inline-flex items-center gap-1 text-foreground">
            <Star className="size-3.5 fill-current text-amber-500 dark:text-amber-400" aria-hidden />
            {formatRating(product.rating ?? 0)}
          </span>
          <span className="hidden sm:inline">{`(${product.reviewCount})`}</span>
        </>
      ) : (
        <span>Chưa có đánh giá</span>
      )}
      <span aria-hidden="true">·</span>
      <span>{product.price}</span>
      <span className="hidden sm:contents">
        <span aria-hidden="true">·</span>
        <span>{product.platform}</span>
      </span>
    </p>
  );
}
