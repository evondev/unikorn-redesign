import { ListCard } from "@/components/list-card";
import { formatNumber } from "@/utils";

import { upcomingContests } from "../constants/sidebar";

// Cuộc thi chuyển từ đầu bảng tin sang cột phải: vẫn thấy ngay, không chiếm chỗ của dòng tin.
export default function ContestsCard() {
  return (
    <ListCard title="Cuộc thi sắp diễn ra" actionLabel="Xem tất cả">
      <ul className="divide-y divide-border border-t border-border">
        {upcomingContests.map((contest) => (
          <li key={contest.id} className="relative flex items-center gap-3 px-5 py-3">
            <img
              src={contest.imageUrl}
              alt=""
              loading="lazy"
              className="size-12 shrink-0 rounded-xl bg-foreground/5 object-cover ring-1 ring-border"
            />
            <div className="min-w-0 flex-1">
              <a
                href="#"
                title={contest.title}
                className="block truncate text-sm font-medium text-foreground outline-hidden after:absolute after:inset-0 hover:underline underline-offset-4"
              >
                {contest.title}
              </a>
              <p className="text-xs text-muted tabular-nums">{contest.opensLabel}</p>
              <p className="text-xs text-muted">{`${formatNumber(contest.followerCount)} người theo dõi`}</p>
            </div>
          </li>
        ))}
      </ul>
    </ListCard>
  );
}
