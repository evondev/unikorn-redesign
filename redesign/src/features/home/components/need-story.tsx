import { TextLink } from "@/components/text-link";
import { pageContainerClassName } from "@/constants/layout";
import { cn } from "@/utils/cn";

import type { ListStatus, Need } from "../types";
import { formatNumber, getPhotoUrl, getProduct } from "../utils";
import ProductRow from "./product-row";
import StatusList from "./status-list";

interface NeedStoryProps {
  need: Need;
  status?: ListStatus;
}

// Câu chuyện của nhóm việc đang chọn: tiêu đề, một đoạn kể, ảnh, và 3–4 app tiêu biểu.
export default function NeedStory({ need, status = "ready" }: NeedStoryProps) {
  const isLoading = status === "loading";

  return (
    <section className={cn(pageContainerClassName, "mt-10")} aria-live="polite">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-medium text-muted">
            <need.icon className="size-4" aria-hidden />
            {need.name}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-foreground text-balance">{need.storyTitle}</h2>
          <p className="mt-1 max-w-[60ch] text-sm text-muted text-pretty">{need.story}</p>
        </div>
        <TextLink>{`Xem ${formatNumber(need.productCount)} sản phẩm`}</TextLink>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {isLoading ? (
          <div className="aspect-[16/9] w-full animate-pulse rounded-2xl bg-foreground/5 motion-reduce:animate-none lg:aspect-auto lg:h-full" />
        ) : (
          <img
            src={getPhotoUrl(need.photoId)}
            alt=""
            loading="lazy"
            className="aspect-[16/9] w-full rounded-2xl object-cover ring-1 ring-border lg:aspect-auto lg:h-full lg:min-h-[260px]"
          />
        )}

        <div className="rounded-2xl border border-border bg-surface p-2">
          <StatusList
            status={status}
            listClassName="flex flex-col gap-1"
            skeletonRowCount={need.productIds.length}
            skeletonRowClassName="flex items-start gap-3 px-3 py-3"
            emptyText="Chưa có sản phẩm nào ở nhóm này."
            errorText="Không tải được sản phẩm của nhóm này"
          >
            {need.productIds.map((productId) => (
              <ProductRow key={productId} product={getProduct(productId)} />
            ))}
          </StatusList>
        </div>
      </div>
    </section>
  );
}
