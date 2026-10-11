import { ListCard } from "@/components/list-card";
import { ProductTile } from "@/components/product-tile";
import { formatNumber, getProduct } from "@/utils";

import { trendingProducts } from "../constants/sidebar";

// Điểm tăng trong ngày là số so sánh nên đứng mép phải, xanh như mọi số "tăng" của site (M7).
export default function TrendingCard() {
  return (
    <ListCard title="Đang thịnh hành" actionLabel="Bảng xếp hạng">
      <ul className="divide-y divide-border border-t border-border">
        {trendingProducts.map((trendingProduct) => {
          const product = getProduct(trendingProduct.productId);

          return (
            <li key={product.id} className="relative flex items-center gap-3 px-5 py-3">
              <ProductTile productId={product.id} name={product.name} className="size-8 rounded-lg text-xs" />
              <div className="min-w-0 flex-1">
                <a
                  href="#"
                  title={product.name}
                  className="block truncate text-sm font-medium text-foreground outline-hidden after:absolute after:inset-0 hover:underline underline-offset-4"
                >
                  {product.name}
                </a>
                <p className="line-clamp-1 text-xs text-muted">{product.tagline}</p>
              </div>
              <span className="shrink-0 text-xs font-medium text-success tabular-nums">
                {`+${formatNumber(trendingProduct.pointGain)} điểm`}
              </span>
            </li>
          );
        })}
      </ul>
    </ListCard>
  );
}
