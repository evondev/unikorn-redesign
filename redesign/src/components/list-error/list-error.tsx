import { RotateCw } from "lucide-react";

import { Button } from "@/components/button";

interface ListErrorProps {
  text: string;
  onRetry?: () => void;
}

// Lỗi tải hai tầng + nút Thử lại viền (empty-state.md). Cùng py-6 với câu rỗng để khung không co giãn.
export default function ListError({ text, onRetry }: ListErrorProps) {
  return (
    <div role="alert" className="flex flex-col items-center gap-3 py-6 text-center">
      <div>
        <p className="text-sm font-medium text-red-600 dark:text-red-400">{text}</p>
        <p className="mt-1 text-sm text-muted">Mất kết nối mạng</p>
      </div>
      <Button variant="outline" icon={RotateCw} onClick={onRetry}>
        Thử lại
      </Button>
    </div>
  );
}
