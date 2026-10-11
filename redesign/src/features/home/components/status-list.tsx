import type { ReactNode } from "react";

import { ListError } from "@/components/list-error";
import type { ListStatus } from "@/types/list-status";

import ListSkeletonRow from "./list-skeleton-row";

interface StatusListProps {
  status: ListStatus;
  listClassName: string;
  skeletonRowCount: number;
  skeletonRowClassName: string;
  emptyText: string;
  errorText: string;
  onRetry?: () => void;
  children: ReactNode;
}

// Một danh sách, bốn trạng thái: có dữ liệu, đang tải, rỗng, lỗi (I19).
export default function StatusList({
  status,
  listClassName,
  skeletonRowCount,
  skeletonRowClassName,
  emptyText,
  errorText,
  onRetry,
  children,
}: StatusListProps) {
  if (status === "loading") {
    return (
      <>
        <ul aria-busy="true" className={listClassName}>
          {Array.from({ length: skeletonRowCount }, (_, index) => (
            <ListSkeletonRow key={index} index={index} className={skeletonRowClassName} />
          ))}
        </ul>
        <span className="sr-only" role="status">
          Đang tải
        </span>
      </>
    );
  }

  if (status === "empty") return <p className="py-6 text-center text-sm text-muted">{emptyText}</p>;

  if (status === "error") return <ListError text={errorText} onRetry={onRetry} />;

  return <ul className={listClassName}>{children}</ul>;
}
