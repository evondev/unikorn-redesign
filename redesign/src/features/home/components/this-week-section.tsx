import { pageContainerClassName } from "@/constants/layout";
import { cn } from "@/utils/cn";

import { newLaunchProductIds, topThisWeekProductIds } from "../constants/home-lists";
import type { ListStatus } from "../types";
import { getProduct } from "../utils";
import ListCard from "./list-card";
import NewProductRow from "./new-product-row";
import RankedProductRow from "./ranked-product-row";
import StatusList from "./status-list";

interface ThisWeekSectionProps {
  status?: ListStatus;
}

const listClassName = "divide-y divide-border border-t border-border";
const skeletonRowClassName = "flex items-start gap-3 px-5 py-3";

export default function ThisWeekSection({ status = "ready" }: ThisWeekSectionProps) {
  return (
    <section className={cn(pageContainerClassName, "mt-16")}>
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold text-foreground">Tuần này trên Unikorn</h2>
        <p className="max-w-[60ch] text-sm text-muted text-pretty">
          11.200 thành viên bình chọn và đánh giá mỗi ngày. Đây là những gì đang được dùng nhiều và vừa ra mắt.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <ListCard title="Được bình chọn nhiều" actionLabel="Bảng xếp hạng">
          <StatusList
            status={status}
            listClassName={listClassName}
            skeletonRowCount={topThisWeekProductIds.length}
            skeletonRowClassName={skeletonRowClassName}
            emptyText="Tuần này chưa có sản phẩm nào được bình chọn."
            errorText="Không tải được bảng bình chọn"
          >
            {topThisWeekProductIds.map((productId, index) => (
              <RankedProductRow key={productId} product={getProduct(productId)} rank={index + 1} />
            ))}
          </StatusList>
        </ListCard>

        <ListCard title="Mới ra mắt" actionLabel="Xem tất cả">
          <StatusList
            status={status}
            listClassName={listClassName}
            skeletonRowCount={newLaunchProductIds.length}
            skeletonRowClassName={skeletonRowClassName}
            emptyText="Chưa có sản phẩm mới trong 7 ngày qua."
            errorText="Không tải được sản phẩm mới"
          >
            {newLaunchProductIds.map((productId) => (
              <NewProductRow key={productId} product={getProduct(productId)} />
            ))}
          </StatusList>
        </ListCard>
      </div>
    </section>
  );
}
