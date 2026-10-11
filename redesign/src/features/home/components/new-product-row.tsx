import type { Product } from "../types";
import ProductTile from "./product-tile";

interface NewProductRowProps {
  product: Product;
}

export default function NewProductRow({ product }: NewProductRowProps) {
  return (
    <li className="relative flex items-center gap-3 px-5 py-3">
      <ProductTile productId={product.id} name={product.name} />
      <div className="min-w-0 flex-1">
        <a
          href="#"
          className="block truncate text-sm font-medium text-foreground outline-hidden after:absolute after:inset-0"
        >
          {product.name}
        </a>
        <p className="mt-0.5 line-clamp-2 text-sm text-muted text-pretty">{product.tagline}</p>
      </div>
      <span className="shrink-0 text-xs text-muted">{product.launchedLabel}</span>
    </li>
  );
}
