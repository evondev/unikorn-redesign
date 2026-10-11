import { Button } from "@/components/button";
import { ListError } from "@/components/list-error";
import type { ListStatus } from "@/types/list-status";

import type { FeedFilterId, FeedItem, FeedTabId } from "../types";
import FeedItemView from "./feed-item-view";
import FeedSkeletonItem from "./feed-skeleton-item";

interface FeedListProps {
  status: ListStatus;
  activeTabId: FeedTabId;
  activeFilterId: FeedFilterId;
  activeFilterLabel: string;
  items: FeedItem[];
  onClearFilter: () => void;
  onRetry?: () => void;
  onSignIn?: () => void;
}

const skeletonItemCount = 3;
const frameClassName = "rounded-2xl border border-border bg-surface";

// Một khung, các mục chia bằng đường kẻ (F3). Năm trạng thái: có dữ liệu, đang tải, rỗng, lỗi, và
// "Đang theo dõi" khi chưa đăng nhập. Câu rỗng và câu lỗi cùng py để khung không co giãn khi đổi qua lại.
export default function FeedList({
  status,
  activeTabId,
  activeFilterId,
  activeFilterLabel,
  items,
  onClearFilter,
  onRetry,
  onSignIn,
}: FeedListProps) {
  if (status === "loading") {
    return (
      <div className={frameClassName}>
        <ul aria-busy="true" className="divide-y divide-border">
          {Array.from({ length: skeletonItemCount }, (_, index) => (
            <FeedSkeletonItem key={index} />
          ))}
        </ul>
        <span className="sr-only" role="status">
          Đang tải bảng tin
        </span>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={frameClassName}>
        <ListError text="Không tải được bảng tin" onRetry={onRetry} />
      </div>
    );
  }

  if (activeTabId === "following") {
    return (
      <div className={frameClassName}>
        <div className="flex flex-col items-center gap-3 px-4 py-6 text-center">
          <p className="max-w-[48ch] text-sm text-muted text-pretty">
            Đăng nhập để xem hoạt động của những người và sản phẩm bạn theo dõi.
          </p>
          <Button variant="outline" onClick={onSignIn}>
            Đăng nhập
          </Button>
        </div>
      </div>
    );
  }

  const isFiltered = activeFilterId !== "all";

  if (status === "empty" || items.length === 0) {
    return (
      <div className={frameClassName}>
        <p className="px-4 py-6 text-center text-sm text-muted text-pretty">
          {isFiltered ? `Chưa có hoạt động nào ở mục ${activeFilterLabel}.` : "Chưa có hoạt động nào."}{" "}
          {isFiltered ? (
            <Button
              variant="ghost"
              onClick={onClearFilter}
              className="inline h-auto min-h-0 p-0 align-baseline font-medium text-foreground underline-offset-4 hover:bg-transparent hover:underline"
            >
              Xoá lọc
            </Button>
          ) : null}
        </p>
      </div>
    );
  }

  return (
    <div className={frameClassName}>
      <ul className="divide-y divide-border">
        {items.map((item) => (
          <li key={item.id} className="p-4 sm:p-5">
            <FeedItemView item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
