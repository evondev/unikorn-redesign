import { Avatar } from "@/components/avatar";
import { ListCard } from "@/components/list-card";
import { formatNumber } from "@/utils";

import { weeklyMembers } from "../constants/sidebar";

// Người chưa có sản phẩm vẫn có dòng phụ, để các dòng cao bằng nhau.
export default function WeeklyMembersCard() {
  return (
    <ListCard title="Thành viên của tuần" actionLabel="Xem tất cả">
      <ul className="divide-y divide-border border-t border-border">
        {weeklyMembers.map(({ member, productCount, pointGain }) => (
          <li key={member.id} className="relative flex items-center gap-3 px-5 py-3">
            <Avatar seed={member.id} name={member.name} photoUrl={member.photoUrl} className="size-8 text-xs" />
            <div className="min-w-0 flex-1">
              <a
                href="#"
                title={member.name}
                className="block truncate text-sm font-medium text-foreground outline-hidden after:absolute after:inset-0 hover:underline underline-offset-4"
              >
                {member.name}
              </a>
              <p className="text-xs text-muted">{productCount > 0 ? `${productCount} sản phẩm` : "Chưa có sản phẩm"}</p>
            </div>
            <span className="shrink-0 text-xs font-medium text-success tabular-nums">
              {`+${formatNumber(pointGain)} điểm`}
            </span>
          </li>
        ))}
      </ul>
    </ListCard>
  );
}
