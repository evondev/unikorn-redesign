import { cn } from "@/utils";

const pulseClassName = "animate-pulse bg-foreground/5 motion-reduce:animate-none";

// Khung chờ đúng hình mục ra mắt: đầu mục, ô app + hai dòng, đoạn mô tả, hai ảnh (loading.md).
export default function FeedSkeletonItem() {
  return (
    <li className="p-4 sm:p-5">
      <div className="flex items-center gap-3">
        <div className={cn("size-10 shrink-0 rounded-full", pulseClassName)} />
        <div className="min-w-0 flex-1 space-y-2">
          <div className={cn("h-3 w-1/2 rounded-full", pulseClassName)} />
          <div className={cn("h-3 w-20 rounded-full", pulseClassName)} />
        </div>
      </div>
      <div className="mt-4 sm:pl-[52px]">
        <div className="flex items-start gap-3">
          <div className={cn("size-12 shrink-0 rounded-xl", pulseClassName)} />
          <div className="min-w-0 flex-1 space-y-2 py-1">
            <div className={cn("h-3 w-1/3 rounded-full", pulseClassName)} />
            <div className={cn("h-3 w-3/4 rounded-full", pulseClassName)} />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <div className={cn("aspect-[16/10] w-[calc(50%-4px)] rounded-xl sm:w-60", pulseClassName)} />
          <div className={cn("aspect-[16/10] w-[calc(50%-4px)] rounded-xl sm:w-60", pulseClassName)} />
        </div>
      </div>
    </li>
  );
}
