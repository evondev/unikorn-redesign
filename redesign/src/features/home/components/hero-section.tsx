import { pageContainerClassName } from "@/constants/layout";
import { cn } from "@/utils/cn";

import SearchForm from "./search-form";

export default function HeroSection() {
  return (
    <section className={cn(pageContainerClassName, "pt-10 pb-12 sm:pt-16")}>
      <p className="flex items-center gap-2 text-sm font-medium text-muted">
        <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
        2.000+ sản phẩm do người Việt làm ra
      </p>
      <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">Hôm nay bạn cần làm gì?</h1>
      <p className="mt-2 max-w-[55ch] text-sm text-muted text-pretty sm:text-base">
        Chọn một việc bên dưới hoặc gõ điều bạn cần. App nào ở đây cũng do người Việt làm, được cộng đồng chấm điểm
        thật.
      </p>
      <SearchForm />
    </section>
  );
}
