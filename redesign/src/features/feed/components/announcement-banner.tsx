import { Info, X } from "lucide-react";

import { Button } from "@/components/button";

interface AnnouncementBannerProps {
  onEnable?: () => void;
  onDismiss: () => void;
}

// Banner tông thông tin (banner.md): chỉ icon và tiêu đề mang màu chữ chính, mô tả foreground/80,
// nút viền chỉ chữ và ✕ chung một cụm căn giữa khối chữ. Nằm thẳng trên nền trang nên nền là surface.
export default function AnnouncementBanner({ onEnable, onDismiss }: AnnouncementBannerProps) {
  return (
    <div role="status" className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 sm:flex-row">
      <div className="flex min-w-0 flex-1 gap-3">
        <Info className="mt-0.5 size-5 shrink-0 text-muted" aria-hidden />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-foreground">Unikorn vừa có “Mời cà phê”</p>
          <p className="mt-0.5 text-sm text-foreground/80 text-pretty">
            Người dùng gửi maker một khoản nhỏ để cảm ơn khi thấy sản phẩm hữu ích. Không phải quyên góp, chỉ là cách
            nói “cái này hay” rõ ràng hơn.
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-1 self-end sm:self-center">
        <Button variant="outline" onClick={onEnable} className="h-9 min-h-9 rounded-lg px-3 py-0 whitespace-nowrap">
          Bật nhận cà phê
        </Button>
        <Button
          variant="ghost"
          icon={X}
          onClick={onDismiss}
          aria-label="Đóng thông báo"
          title="Đóng thông báo"
          className="size-9 min-h-9 rounded-lg p-0"
        />
      </div>
    </div>
  );
}
