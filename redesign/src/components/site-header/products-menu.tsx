import { ChevronRight, Flame } from "lucide-react";

import { needGroups } from "@/constants/need-groups";
import { allCategoriesLink, collectionsLink } from "@/constants/nav-items";
import { trendingCategories } from "@/constants/nav-menus";

import NeedGroupLink from "./need-group-link";

// Menu lớn của "Sản phẩm": bên trái là danh mục đang lên (như cột Xu hướng của site gốc), bên phải là
// bảy nhóm việc của bản đồ ở trang chủ thay cho bốn danh mục kỹ thuật. Panel rộng nên khe quanh mục p-2.
export default function ProductsMenu() {
  return (
    <div className="flex gap-2 p-2">
      <section className="flex w-64 shrink-0 flex-col rounded-xl bg-foreground/[0.03] p-2" aria-labelledby="trending-title">
        <p id="trending-title" className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted">
          <Flame className="size-4 text-brand" aria-hidden />
          Đang lên tuần này
        </p>
        <ul className="flex flex-col gap-1">
          {trendingCategories.map((trendingCategory) => (
            <li key={trendingCategory.name}>
              <a
                href={trendingCategory.href}
                className="flex min-h-10 w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm text-foreground outline-hidden transition-colors hover:bg-item-hover focus-visible:bg-item-hover"
              >
                <span className="min-w-0">{trendingCategory.name}</span>
                <span className="shrink-0 text-xs font-medium tabular-nums text-success">
                  {`+${trendingCategory.newProductCount} mới`}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex min-w-0 flex-1 flex-col" aria-labelledby="need-groups-title">
        <p id="need-groups-title" className="px-3 py-2 text-xs font-medium text-muted">
          Tìm theo việc bạn cần
        </p>
        <ul className="grid grid-cols-2 gap-1">
          {needGroups.map((needGroup) => (
            <li key={needGroup.id}>
              <NeedGroupLink
                icon={needGroup.icon}
                title={needGroup.name}
                description={`${needGroup.audience} · ${needGroup.productCount} sản phẩm`}
                href="#"
              />
            </li>
          ))}
          <li>
            <NeedGroupLink
              icon={allCategoriesLink.icon}
              title={allCategoriesLink.label}
              description={allCategoriesLink.description}
              href={allCategoriesLink.href}
              isDashed
            />
          </li>
        </ul>

        <a
          href={collectionsLink.href}
          className="mt-auto flex min-h-12 items-center gap-3 rounded-xl border border-border px-3 py-2.5 outline-hidden transition-colors hover:bg-item-hover focus-visible:bg-item-hover"
        >
          {collectionsLink.icon ? <collectionsLink.icon className="size-4 shrink-0 text-muted" aria-hidden /> : null}
          <span className="min-w-0 flex-1 text-sm">
            <span className="font-medium text-foreground">{collectionsLink.label}</span>
            <span className="text-muted">{` · ${collectionsLink.description}`}</span>
          </span>
          <ChevronRight className="size-4 shrink-0 text-muted" aria-hidden />
        </a>
      </section>
    </div>
  );
}
