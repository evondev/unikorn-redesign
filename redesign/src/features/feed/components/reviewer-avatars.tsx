import { Avatar } from "@/components/avatar";

import type { FeedActor } from "../types";

interface ReviewerAvatarsProps {
  firstReviewer: FeedActor;
  secondReviewer?: FeedActor;
}

// Nhiều người cùng đánh giá: avatar người mới nhất 40px, người thứ hai 20px ghim góc dưới phải.
// Giữ trong ô 40px để thân mục thẳng cột với các mục khác (avatar chồng ngang sẽ rộng hơn 40px).
export default function ReviewerAvatars({ firstReviewer, secondReviewer }: ReviewerAvatarsProps) {
  return (
    <span className="relative size-10 shrink-0">
      <Avatar seed={firstReviewer.id} name={firstReviewer.name} photoUrl={firstReviewer.photoUrl} />
      {secondReviewer ? (
        <Avatar
          seed={secondReviewer.id}
          name={secondReviewer.name}
          photoUrl={secondReviewer.photoUrl}
          className="absolute right-0 bottom-0 size-5 translate-x-1/4 translate-y-1/4 text-xs ring-2 ring-surface"
        />
      ) : null}
    </span>
  );
}
