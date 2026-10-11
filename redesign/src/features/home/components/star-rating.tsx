import { Star } from "lucide-react";

import { cn } from "@/utils/cn";

interface StarRatingProps {
  rating: number;
}

const starCount = 5;

// Năm sao, sao đạt tô hổ phách, sao chưa đạt là lớp phủ mờ theo màu chữ (tự đúng ở cả hai theme).
export default function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} trên ${starCount} sao`}>
      {Array.from({ length: starCount }, (_, index) => (
        <Star
          key={index}
          aria-hidden
          className={cn(
            "size-4 fill-current",
            index < rating && "text-amber-500 dark:text-amber-400",
            index >= rating && "text-foreground/15",
          )}
        />
      ))}
    </div>
  );
}
