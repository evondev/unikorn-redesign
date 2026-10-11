import { useState } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import {
  DrumBackdrop,
  HeroSection,
  MakerSection,
  NeedMapSection,
  NeedStory,
  ReviewsSection,
  ThisWeekSection,
} from "../components";
import { needs } from "../constants/needs";

// Phương án D: bản đồ bấm chọn. Bấm ô việc nào thì câu chuyện của nhóm đó hiện ngay bên dưới.
export default function HomePage() {
  const [selectedNeedId, setSelectedNeedId] = useState(needs[0].id);

  const selectedNeed = needs.find((need) => need.id === selectedNeedId) ?? needs[0];

  return (
    <>
      {/* Dải đỏ sẫm phủ header + hero, nhạt dần về nền trang; trống đồng nằm dưới nội dung (isolate + -z-10).
          overflow-x-clip chứ không overflow-hidden: hidden biến khối này thành khung cuộn, header mất sticky. */}
      <div className="relative isolate overflow-x-clip bg-[image:var(--hero-band)] bg-size-[100%_560px] bg-no-repeat">
        <DrumBackdrop />
        <SiteHeader />
        <main>
          <HeroSection />
          <NeedMapSection selectedNeedId={selectedNeedId} onSelectNeed={setSelectedNeedId} />
          <NeedStory need={selectedNeed} />
          <ThisWeekSection />
          <ReviewsSection />
          <MakerSection />
        </main>
      </div>
      <SiteFooter />
    </>
  );
}
