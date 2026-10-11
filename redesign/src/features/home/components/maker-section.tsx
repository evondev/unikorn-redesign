import { Plus } from "lucide-react";

import { Button } from "@/components/button";
import { pageContainerClassName } from "@/constants/layout";
import { cn } from "@/utils/cn";

import { makerEvents } from "../constants/maker-events";
import MakerEventCard from "./maker-event-card";

export default function MakerSection() {
  return (
    <section className={cn(pageContainerClassName, "mt-16")}>
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border bg-surface p-5 sm:p-8 lg:grid-cols-2 lg:gap-10">
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted">Dành cho người làm sản phẩm</p>
          <h2 className="mt-2 text-xl font-semibold text-foreground text-balance">
            Bạn đang làm app? Đưa nó tới đúng người cần.
          </h2>
          <p className="mt-2 max-w-[55ch] text-sm text-muted text-pretty">
            1.300 nhà sáng tạo đã đăng hơn 2.000 sản phẩm. Đăng lên, xếp vào đúng nhóm việc, nhận bình chọn và góp ý
            thật từ người dùng.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Button variant="primary" icon={Plus}>
              Đăng sản phẩm
            </Button>
            <Button variant="outline">Cách Unikorn hoạt động</Button>
          </div>
        </div>

        <ul className="flex flex-col gap-3">
          {makerEvents.map((makerEvent) => (
            <MakerEventCard key={makerEvent.title} event={makerEvent} />
          ))}
        </ul>
      </div>
    </section>
  );
}
