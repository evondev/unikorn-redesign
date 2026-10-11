import { useState } from "react";

import { cn, getInitial, getProductTone } from "@/utils";

interface AvatarProps {
  seed: string;
  name: string;
  photoUrl?: string;
  className?: string;
}

// components/avatar.md: có ảnh thì ảnh tròn; không có hay ảnh lỗi thì chữ cái đầu trên nền nhạt cùng sắc,
// sắc theo id (seed) chứ không theo tên. Cỡ mặc định 40px, truyền className để đổi.
export default function Avatar({ seed, name, photoUrl, className }: AvatarProps) {
  const [hasPhotoError, setHasPhotoError] = useState(false);

  if (photoUrl && !hasPhotoError) {
    return (
      <img
        src={photoUrl}
        alt=""
        onError={() => setHasPhotoError(true)}
        className={cn("size-10 shrink-0 rounded-full object-cover ring-1 ring-border", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ring-1",
        getProductTone(seed),
        className,
      )}
      aria-hidden="true"
    >
      {getInitial(name)}
    </span>
  );
}
