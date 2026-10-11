import { IconFacebook, IconX } from "@/components/icons";
import { Logo } from "@/components/logo";
import { footerCommunityLinks, footerExploreLinks, footerLegalLinks, partnerNames } from "@/constants/footer-links";
import { pageContainerClassName } from "@/constants/layout";
import { cn } from "@/utils/cn";

import FooterLinkList from "./footer-link-list";

const socialLinkClassName =
  "inline-flex size-9 items-center justify-center rounded-lg text-muted outline-hidden hover:bg-foreground/5 hover:text-foreground";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <div className={cn(pageContainerClassName, "py-10")}>
        <p className="text-sm text-muted">Đồng hành cùng sản phẩm xây dựng bởi người Việt</p>
        <ul className="mt-3 grid grid-cols-3 gap-x-6 gap-y-2 sm:grid-cols-6">
          {partnerNames.map((partnerName) => (
            <li key={partnerName} className="truncate text-sm font-semibold text-muted">
              {partnerName}
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <Logo />
            <p className="max-w-[40ch] text-sm text-muted">
              Nền tảng khám phá và chia sẻ các sản phẩm công nghệ do người Việt xây dựng.
            </p>
          </div>

          {/* Màn hẹp: Khám phá + Pháp lý chung một cột, Cộng đồng cột kia (không cột nào lẻ hàng).
              Từ lg: lg:contents trải ba nhóm thành ba cột, Pháp lý về cuối. */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-1 lg:col-span-3 lg:grid-cols-3">
            <div className="flex flex-col gap-8 lg:contents">
              <FooterLinkList group={footerExploreLinks} />
              <div className="lg:order-last">
                <FooterLinkList group={footerLegalLinks} />
              </div>
            </div>
            <FooterLinkList group={footerCommunityLinks} />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-sm text-muted">© 2026 Unikorn.vn</p>
          <div className="flex items-center gap-1">
            <a href="#" aria-label="X (Twitter)" className={socialLinkClassName}>
              <IconX className="size-4" aria-hidden />
            </a>
            <a href="#" aria-label="Facebook" className={socialLinkClassName}>
              <IconFacebook className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
