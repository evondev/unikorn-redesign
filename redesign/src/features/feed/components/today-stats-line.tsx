import { formatNumber } from "@/utils";

import { todayStats } from "../constants/sidebar";

// Dưới lg cột phụ rơi xuống sau dòng tin, gần như không ai cuộn tới: số của hôm nay lên đầu trang thành một dải
// bốn ô thấp (không icon, không tiêu đề khung). Một dòng chữ không vừa 375px, mục cuối rớt dòng (R3).
// Từ lg dải này ẩn, số nằm ở khung "Hôm nay trên Unikorn" của cột phụ.
export default function TodayStatsLine() {
  return (
    <section aria-labelledby="today-stats-line-title" className="lg:hidden">
      <h2 id="today-stats-line-title" className="text-xs font-medium text-muted">
        Hôm nay trên Unikorn
      </h2>
      <dl className="mt-1.5 grid grid-cols-4 divide-x divide-border rounded-2xl border border-border bg-surface">
        {todayStats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center px-1 py-2.5">
            {/* dt đứng trước dd trong HTML, order-last đưa nhãn xuống dưới số. */}
            <dt className="order-last text-xs text-muted">{stat.label}</dt>
            <dd className="text-base font-semibold text-foreground tabular-nums">{formatNumber(stat.value)}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
