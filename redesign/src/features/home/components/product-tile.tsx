import { cn } from "@/utils/cn";

import { getInitial, getProductTone } from "../utils";

interface ProductTileProps {
  productId: string;
  name: string;
  className?: string;
}

// Chưa có logo thật: ô chữ cái vuông bo góc, sắc theo id sản phẩm (components/avatar.md).
export default function ProductTile({ productId, name, className }: ProductTileProps) {
  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold ring-1",
        getProductTone(productId),
        className,
      )}
      aria-hidden="true"
    >
      {getInitial(name)}
    </span>
  );
}
