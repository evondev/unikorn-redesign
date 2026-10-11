import { RefreshCw } from "lucide-react";

import { ProductTile } from "@/components/product-tile";
import { getProduct } from "@/utils";

import type { UpdateFeedItem } from "../types";
import FeedItemHeader from "./feed-item-header";

interface UpdateGroupItemProps {
  item: UpdateFeedItem;
}

// Cập nhật phiên bản trong ngày gộp lại, mỗi bản một dòng: tên app, số phiên bản, một câu thay đổi chính.
// Changelog đầy đủ nằm ở trang sản phẩm, bấm dòng để mở. Màn hẹp câu thay đổi chỉ một dòng để mỗi dòng gọn hai hàng chữ. Dòng có padding 12px nên danh sách thụt 40px
// (52 - 12) để ô app thẳng cột với thân các mục khác.
export default function UpdateGroupItem({ item }: UpdateGroupItemProps) {
  return (
    <article>
      <FeedItemHeader
        leading={
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-foreground/5 text-muted">
            <RefreshCw className="size-4" aria-hidden />
          </span>
        }
        postedLabel={item.postedLabel}
        postedAtFull={item.postedAtFull}
      >
        <span className="font-medium text-foreground">{`${item.updates.length} sản phẩm`}</span> vừa cập nhật
      </FeedItemHeader>

      <ul className="mt-2 flex flex-col gap-1 sm:pl-10">
        {item.updates.map((update) => {
          const product = getProduct(update.productId);

          return (
            <li key={update.id}>
              <a
                href="#"
                className="flex items-start gap-3 rounded-xl px-3 py-2.5 outline-hidden transition-colors hover:bg-item-hover"
              >
                <ProductTile productId={product.id} name={product.name} className="size-8 rounded-lg text-xs" />
                <div className="min-w-0 flex-1">
                  <p className="flex min-w-0 items-center gap-2">
                    <span className="truncate text-sm font-medium text-foreground" title={product.name}>
                      {product.name}
                    </span>
                    <span className="shrink-0 rounded-md bg-foreground/5 px-1.5 py-0.5 text-xs font-medium tabular-nums text-foreground/70">
                      {update.version}
                    </span>
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-sm text-muted text-pretty sm:line-clamp-2" title={update.summary}>
                    {update.summary}
                  </p>
                </div>
                <span className="hidden shrink-0 pt-0.5 text-xs text-muted sm:block">{update.postedLabel}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
