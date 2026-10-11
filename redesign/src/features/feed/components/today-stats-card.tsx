import { ListCard } from "@/components/list-card";
import { formatNumber } from "@/utils";

import { todayStats } from "../constants/sidebar";

// Bốn số của hôm nay trong một khung, chia ô bằng đường kẻ (charts.md: một khung, không bốn card rời).
// Chỉ hiện từ lg; màn hẹp đã có dòng gọn ở đầu trang (TodayStatsLine).
export default function TodayStatsCard() {
  return (
    <ListCard title="Hôm nay trên Unikorn" className="hidden lg:block">
      <dl className="grid grid-cols-4 divide-x divide-border border-t border-border">
        {todayStats.map((stat) => {
          const StatIcon = stat.icon;

          return (
            <div key={stat.id} className="flex flex-col items-center gap-1 px-1 py-4">
              <StatIcon className="size-4 text-muted" aria-hidden />
              {/* dt đứng trước dd trong HTML, order-last đưa nhãn xuống dưới số. */}
              <dt className="order-last text-xs text-muted">{stat.label}</dt>
              <dd className="text-lg font-semibold text-foreground tabular-nums">{formatNumber(stat.value)}</dd>
            </div>
          );
        })}
      </dl>
    </ListCard>
  );
}
