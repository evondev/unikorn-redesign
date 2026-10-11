import type { ListStatus } from "@/types/list-status";

const previewStatuses: Record<string, ListStatus> = {
  "dang-tai": "loading",
  rong: "empty",
  loi: "error",
};

// Chưa nối dữ liệu: trạng thái bảng tin đọc từ ?tt= để xem trước (dang-tai, rong, loi). Nối API thì bỏ hàm này.
export function getPreviewStatus(search: string): ListStatus {
  const statusParam = new URLSearchParams(search).get("tt") ?? "";

  return previewStatuses[statusParam] ?? "ready";
}
