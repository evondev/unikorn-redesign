import { pageContainerClassName } from "@/constants/layout";

import { needs } from "../constants/needs";
import AllCategoriesTile from "./all-categories-tile";
import NeedTile from "./need-tile";

interface NeedMapSectionProps {
  selectedNeedId: string;
  onSelectNeed: (needId: string) => void;
}

export default function NeedMapSection({ selectedNeedId, onSelectNeed }: NeedMapSectionProps) {
  return (
    <section className={pageContainerClassName}>
      <h2 className="text-xl font-semibold text-foreground">Bản đồ theo việc</h2>
      <p className="mt-1 text-sm text-muted text-pretty">Chọn một việc để xem câu chuyện và app hợp với nó.</p>

      {/* Màn hẹp: hàng lướt ngang, ô 136px để ô thứ ba ló ra báo còn nữa (R6). Từ md: lưới 4 cột, máy có chuột không phải cuộn ngang. */}
      <div className="mt-5">
        <div className="scrollbar-clean overflow-x-auto py-1 md:overflow-visible">
          <div role="group" aria-label="Chọn nhóm việc" className="flex gap-3 px-1 md:grid md:grid-cols-4 md:px-0">
            {needs.map((need) => (
              <NeedTile key={need.id} need={need} isSelected={need.id === selectedNeedId} onSelect={onSelectNeed} />
            ))}
            <AllCategoriesTile />
          </div>
        </div>
      </div>
    </section>
  );
}
