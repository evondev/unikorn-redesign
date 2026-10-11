import type { FeedActor } from "../types";

interface ActorLinkProps {
  actor: FeedActor;
}

// Tên người trong câu đầu mục: chữ đậm, rê vào gạch chân để biết bấm được. Có cấp độ thì nhãn "Lv.2" nhỏ,
// viền mảnh, chữ phụ: đủ để cộng đồng nhận ra người lâu năm mà không nặng hơn tên.
export default function ActorLink({ actor }: ActorLinkProps) {
  return (
    <>
      <a href="#" className="font-medium text-foreground underline-offset-4 outline-hidden hover:underline">
        {actor.name}
      </a>
      {actor.level ? (
        <span
          title={`Cấp độ ${actor.level}`}
          className="mx-1 inline-block rounded-md px-1 align-[1px] text-xs leading-4 font-medium whitespace-nowrap text-muted ring-1 ring-border-strong"
        >
          {`Lv.${actor.level}`}
        </span>
      ) : null}
    </>
  );
}
