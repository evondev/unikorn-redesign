import { Bookmark, Link2, MessageCircle } from "lucide-react";

import { Avatar } from "@/components/avatar";
import { ProductTile } from "@/components/product-tile";
import { VoteButton } from "@/components/vote-button";
import { getProduct } from "@/utils";

import type { LaunchFeedItem } from "../types";
import { getNeedGroup } from "../utils";
import ActorLink from "./actor-link";
import FeedItemHeader from "./feed-item-header";
import ItemActionButton from "./item-action-button";

interface LaunchItemProps {
  item: LaunchFeedItem;
}

// Ra mắt sản phẩm: mục nặng nhất bảng tin. Tên app, câu giới thiệu và nút bình chọn đứng đầu; nhóm việc
// bằng lời thường (không hashtag kỹ thuật) để người không rành công nghệ biết app này giúp việc gì.
export default function LaunchItem({ item }: LaunchItemProps) {
  const product = getProduct(item.productId);
  const needGroup = getNeedGroup(item.needGroupId);
  const NeedIcon = needGroup.icon;
  const hasScreenshots = item.screenshotUrls.length > 0;
  const commentLabel = item.commentCount > 0 ? `${item.commentCount} bình luận` : "Bình luận";

  return (
    <article>
      <FeedItemHeader
        leading={<Avatar seed={item.actor.id} name={item.actor.name} photoUrl={item.actor.photoUrl} />}
        postedLabel={item.postedLabel}
        postedAtFull={item.postedAtFull}
      >
        <ActorLink actor={item.actor} /> ra mắt sản phẩm mới
      </FeedItemHeader>

      <div className="mt-3 sm:pl-[52px]">
        <div className="flex items-center gap-3">
          <ProductTile productId={product.id} name={product.name} className="size-12 text-base" />
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-foreground">
              <a href="#" className="underline-offset-4 outline-hidden hover:underline">
                {product.name}
              </a>
            </h3>
            <p className="mt-0.5 line-clamp-2 text-sm text-muted text-pretty">{product.tagline}</p>
          </div>
          <VoteButton product={product} />
        </div>

        <p className="mt-3 line-clamp-3 text-sm text-foreground/80 text-pretty">{item.description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
          <a
            href="#"
            className="inline-flex h-8 items-center gap-1.5 rounded-full bg-foreground/5 px-3 font-medium text-foreground/80 outline-hidden transition-colors hover:bg-foreground/10 hover:text-foreground"
          >
            <NeedIcon className="size-3.5 shrink-0" aria-hidden />
            {needGroup.name}
          </a>
          {/* Nền tảng và giá chung một cụm không xuống dòng: dấu · không rơi ra cuối dòng ở màn hẹp. */}
          <span className="whitespace-nowrap">{`${product.platform} · ${product.price}`}</span>
        </div>

        {/* Dải ảnh nhỏ cao ~150px: đủ thấy app trông ra sao mà không lấn tên app và nút bình chọn. */}
        {hasScreenshots ? (
          <div className="mt-3 flex gap-2">
            {item.screenshotUrls.map((screenshotUrl, index) => (
              <img
                key={screenshotUrl}
                src={screenshotUrl}
                alt={`Ảnh ${index + 1} của ${product.name}`}
                loading="lazy"
                className="aspect-[16/10] w-[calc(50%-4px)] rounded-xl bg-foreground/5 object-cover ring-1 ring-border sm:w-60"
              />
            ))}
          </div>
        ) : null}

        <div className="mt-3 flex items-center justify-between gap-2">
          <ItemActionButton icon={MessageCircle} label={commentLabel} />
          <div className="flex items-center gap-1">
            <ItemActionButton icon={Bookmark} label="Lưu" isIconOnly />
            <ItemActionButton icon={Link2} label="Chép link" isIconOnly />
          </div>
        </div>
      </div>
    </article>
  );
}
