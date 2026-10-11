import type { Product } from "../types";
import ProductTile from "./product-tile";
import VoteButton from "./vote-button";

interface RankedProductRowProps {
  product: Product;
  rank: number;
}

// Tên là link phủ cả dòng (after:inset-0) để vùng bấm đủ lớn ở điện thoại; nút bình chọn nổi trên nó.
export default function RankedProductRow({ product, rank }: RankedProductRowProps) {
  return (
    <li className="relative flex items-center gap-3 px-5 py-3">
      <span className="w-4 shrink-0 text-sm font-semibold tabular-nums text-muted">{rank}</span>
      <ProductTile productId={product.id} name={product.name} />
      <div className="min-w-0 flex-1">
        <a
          href="#"
          title={product.name}
          className="block truncate text-sm font-medium text-foreground outline-hidden after:absolute after:inset-0"
        >
          {product.name}
        </a>
        <p className="mt-0.5 line-clamp-2 text-sm text-muted text-pretty">{product.tagline}</p>
      </div>
      <VoteButton product={product} />
    </li>
  );
}
