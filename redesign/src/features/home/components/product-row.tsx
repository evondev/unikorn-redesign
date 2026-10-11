import type { Product } from "../types";
import ProductMeta from "./product-meta";
import ProductTile from "./product-tile";

interface ProductRowProps {
  product: Product;
}

// Dòng sản phẩm trong câu chuyện: cả dòng là link, nên có nền rê (I9).
export default function ProductRow({ product }: ProductRowProps) {
  return (
    <li>
      <a
        href="#"
        className="flex items-start gap-3 rounded-xl px-3 py-3 outline-hidden transition-colors hover:bg-item-hover"
      >
        <ProductTile productId={product.id} name={product.name} />
        <div className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-foreground" title={product.name}>
            {product.name}
          </span>
          <span className="mt-0.5 line-clamp-2 block text-sm text-muted text-pretty">{product.tagline}</span>
          <ProductMeta product={product} />
        </div>
      </a>
    </li>
  );
}
