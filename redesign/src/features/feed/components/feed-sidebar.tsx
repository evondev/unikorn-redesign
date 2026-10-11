import ComposeCard from "./compose-card";
import ContestsCard from "./contests-card";
import TodayStatsCard from "./today-stats-card";
import TrendingCard from "./trending-card";
import WeeklyMembersCard from "./weekly-members-card";

// Cột phụ: số của hôm nay → app đang lên → cuộc thi → người nổi bật → đăng bài (việc của builder, xếp cuối).
// Màn hẹp xuống dưới dòng tin.
export default function FeedSidebar() {
  return (
    <aside className="flex min-w-0 flex-col gap-3" aria-label="Tóm tắt cộng đồng">
      <TodayStatsCard />
      <TrendingCard />
      <ContestsCard />
      <WeeklyMembersCard />
      <ComposeCard />
    </aside>
  );
}
