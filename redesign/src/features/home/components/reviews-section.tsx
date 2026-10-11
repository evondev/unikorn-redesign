import { ListError } from "@/components/list-error";
import { TextLink } from "@/components/text-link";
import { pageContainerClassName } from "@/constants/layout";
import type { ListStatus } from "@/types/list-status";
import { cn } from "@/utils/cn";

import { latestReviews } from "../constants/reviews";
import ReviewCard from "./review-card";
import ReviewCardSkeleton from "./review-card-skeleton";

interface ReviewsSectionProps {
  status?: ListStatus;
}

// 1 cột tới lg: ở 768 ba cột hẹp làm mỗi thẻ dài 10–11 dòng chữ.
const gridClassName = "grid grid-cols-1 gap-3 lg:grid-cols-3";

// "Mọi người nói gì": cho thấy điểm khác biệt "người dùng thật chấm điểm" ngay trên trang chủ.
export default function ReviewsSection({ status = "ready" }: ReviewsSectionProps) {
  return (
    <section className={cn(pageContainerClassName, "mt-16")}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold text-foreground">Mọi người nói gì</h2>
          <p className="mt-1 max-w-[60ch] text-sm text-muted text-pretty">
            Đánh giá thật từ thành viên Unikorn, đã dùng app rồi mới chấm.
          </p>
        </div>
        <TextLink>Xem tất cả đánh giá</TextLink>
      </div>

      <div className="mt-5">
        {status === "loading" ? (
          <>
            <ul aria-busy="true" className={gridClassName}>
              {latestReviews.map((review) => (
                <ReviewCardSkeleton key={review.id} />
              ))}
            </ul>
            <span className="sr-only" role="status">
              Đang tải đánh giá
            </span>
          </>
        ) : null}
        {status === "empty" ? <p className="py-6 text-center text-sm text-muted">Chưa có đánh giá nào.</p> : null}
        {status === "error" ? <ListError text="Không tải được đánh giá" /> : null}
        {status === "ready" ? (
          <ul className={gridClassName}>
            {latestReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
