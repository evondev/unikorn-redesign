export type PreviewViewerRole = "guest" | "maker";

// Chưa nối đăng nhập: vai người xem đọc từ ?vai=maker để xem trước phần chỉ maker thấy. Nối đăng nhập thì bỏ hàm này.
export function getPreviewViewerRole(search: string): PreviewViewerRole {
  return new URLSearchParams(search).get("vai") === "maker" ? "maker" : "guest";
}
