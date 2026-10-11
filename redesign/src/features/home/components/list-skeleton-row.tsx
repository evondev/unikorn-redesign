import { cn } from "@/utils/cn";

import { skeletonTitleWidths } from "../constants/skeleton";

interface ListSkeletonRowProps {
  index: number;
  className: string;
}

// Khung chờ đúng hình dòng thật: cùng ô 40px, cùng padding (loading.md).
export default function ListSkeletonRow({ index, className }: ListSkeletonRowProps) {
  const pulseClassName = "animate-pulse bg-foreground/5 motion-reduce:animate-none";

  return (
    <li className={className}>
      <div className={cn("size-10 shrink-0 rounded-xl", pulseClassName)} />
      <div className="min-w-0 flex-1 space-y-2 py-1">
        <div className={cn("h-3 rounded-full", skeletonTitleWidths[index % skeletonTitleWidths.length], pulseClassName)} />
        <div className={cn("h-3 w-4/5 rounded-full", pulseClassName)} />
      </div>
    </li>
  );
}
