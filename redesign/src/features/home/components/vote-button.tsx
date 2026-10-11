import { ChevronUp } from "lucide-react";

import { Button } from "@/components/button";

import type { Product } from "../types";
import { formatNumber } from "../utils";

interface VoteButtonProps {
  product: Product;
  onVote?: () => void;
}

// relative z-10: nằm trên link phủ cả dòng, bấm nút không mở trang sản phẩm.
export default function VoteButton({ product, onVote }: VoteButtonProps) {
  return (
    <Button
      variant="outline"
      icon={ChevronUp}
      onClick={onVote}
      aria-label={`Bình chọn ${product.name}, ${product.voteCount} lượt`}
      className="relative z-10 h-10 min-h-10 min-w-16 shrink-0 gap-1 px-3 py-0 tabular-nums"
    >
      {formatNumber(product.voteCount)}
    </Button>
  );
}
