// Trạng thái của một danh sách lấy qua mạng. Chưa nối dữ liệu nên trang luôn truyền "ready".
export type ListStatus = "ready" | "loading" | "empty" | "error";
