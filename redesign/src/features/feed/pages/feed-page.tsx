import { useState } from "react";

import { Button } from "@/components/button";
import { DrumBackdrop } from "@/components/drum-backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageContainerClassName } from "@/constants/layout";
import { cn } from "@/utils";

import {
  AnnouncementBanner,
  FeedFilterChips,
  FeedIntro,
  FeedList,
  FeedSidebar,
  FeedTabs,
  TodayStatsLine,
} from "../components";
import { feedFilters } from "../constants/feed-filters";
import { feedItems } from "../constants/feed-items";
import type { FeedFilterId, FeedTabId } from "../types";
import { filterFeedItems, getPreviewStatus, getPreviewViewerRole } from "../utils";

// Một cột tin + cột phụ bên phải. Việc chính (xem app mới, đọc đánh giá thật) nằm ở cột tin;
// cuộc thi, thịnh hành, thành viên nổi bật lùi sang cột phụ. Tab "Nổi bật" chưa có dữ liệu riêng nên
// đang dùng chung danh sách với "Mới nhất": nối API thì đổi ở đây.
export default function FeedPage() {
  const [activeTabId, setActiveTabId] = useState<FeedTabId>("latest");
  const [activeFilterId, setActiveFilterId] = useState<FeedFilterId>("all");
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const status = getPreviewStatus(window.location.search);
  // Banner "Mời cà phê" nói với maker (nút Bật nhận cà phê), khách thường không cần thấy.
  const isMakerViewer = getPreviewViewerRole(window.location.search) === "maker";
  const visibleItems = filterFeedItems(feedItems, activeFilterId);
  const activeFilterLabel = feedFilters.find((filter) => filter.id === activeFilterId)?.label ?? "";
  const hasMoreItems = status === "ready" && activeTabId !== "following" && visibleItems.length > 0;

  return (
    <>
      <div className="relative isolate overflow-x-clip bg-[image:var(--hero-band)] bg-size-[100%_560px] bg-no-repeat">
        <DrumBackdrop />
        <SiteHeader />
        <main className={cn(pageContainerClassName, "pt-8 pb-16 sm:pt-10")}>
          <FeedIntro />
          <div className="mt-3">
            <TodayStatsLine />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0">
              <FeedTabs activeTabId={activeTabId} onTabChange={setActiveTabId} />
              <div className="mt-4">
                <FeedFilterChips activeFilterId={activeFilterId} onFilterChange={setActiveFilterId} />
              </div>

              {isMakerViewer && isBannerVisible ? (
                <div className="mt-4">
                  <AnnouncementBanner onDismiss={() => setIsBannerVisible(false)} />
                </div>
              ) : null}

              <div className="mt-4">
                <FeedList
                  status={status}
                  activeTabId={activeTabId}
                  activeFilterId={activeFilterId}
                  activeFilterLabel={activeFilterLabel}
                  items={visibleItems}
                  onClearFilter={() => setActiveFilterId("all")}
                />
              </div>

              {hasMoreItems ? (
                <div className="mt-3 flex justify-center">
                  <Button variant="ghost">Xem hoạt động cũ hơn</Button>
                </div>
              ) : null}
            </div>

            <FeedSidebar />
          </div>
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
