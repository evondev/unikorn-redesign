import { cn } from "@/utils/cn";

const pulseClassName = "animate-pulse bg-foreground/5 motion-reduce:animate-none";

// Khung chờ đúng hình thẻ đánh giá thật: dòng sản phẩm, hàng sao, hai dòng chữ, chân thẻ có avatar (loading.md).
export default function ReviewCardSkeleton() {
  return (
    <li className="flex flex-col rounded-2xl border border-border bg-surface p-5">
      <div className="flex items-center gap-2">
        <div className={cn("size-8 rounded-lg", pulseClassName)} />
        <div className={cn("h-3 w-1/3 rounded-full", pulseClassName)} />
      </div>
      <div className={cn("mt-4 h-4 w-24 rounded-full", pulseClassName)} />
      <div className={cn("mt-3 h-3 w-full rounded-full", pulseClassName)} />
      <div className={cn("mt-2 h-3 w-3/5 rounded-full", pulseClassName)} />
      <div className="flex items-center gap-3 pt-5">
        <div className={cn("size-8 rounded-full", pulseClassName)} />
        <div className={cn("h-3 w-1/4 rounded-full", pulseClassName)} />
      </div>
    </li>
  );
}
