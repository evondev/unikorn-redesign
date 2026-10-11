import type { FeedActor } from "../types";

// Tên lấy từ bảng tin unikorn.vn. Ảnh chân dung từ randomuser.me là ảnh mẫu; người không ảnh thì avatar
// rơi về chữ cái (ca biên S8). Cấp độ (Lv.) theo site gốc; người chưa lên cấp thì không có nhãn. Thay bằng ảnh thật của thành viên trước khi chạy thật.
const portraitBaseUrl = "https://randomuser.me/api/portraits";

export const feedActors: Record<string, FeedActor> = {
  minhtc: { id: "minhtc", name: "minhtc", photoUrl: `${portraitBaseUrl}/men/32.jpg`, level: 2 },
  giangNam: { id: "giang-nam", name: "Giang Nam" },
  quocAnh: { id: "nguyen-quoc-anh", name: "Nguyễn Quốc Anh", photoUrl: `${portraitBaseUrl}/men/46.jpg`, level: 3 },
  noLikeCamry: { id: "no-like-camry", name: "No Like Camry", photoUrl: `${portraitBaseUrl}/men/75.jpg`, level: 2 },
  binUseGoogle: { id: "bin-use-google", name: "Bin Use Google", photoUrl: `${portraitBaseUrl}/men/11.jpg` },
  baoTruong: { id: "bao-truong", name: "Bảo Trương" },
  thuemin: { id: "thuemin-beauty-lala", name: "Thuemin Beauty Lala" },
  lanPham: { id: "lan-pham", name: "Lan Phạm", photoUrl: `${portraitBaseUrl}/women/44.jpg` },
  hoangSen: { id: "hoang-sen", name: "hoang sen", photoUrl: `${portraitBaseUrl}/women/68.jpg` },
  luyenJohn: { id: "luyen-john", name: "Luyện John" },
  donAnh: { id: "don-anh-nguyen", name: "Đôn Anh Nguyễn", photoUrl: `${portraitBaseUrl}/men/52.jpg`, level: 4 },
  binhHua: { id: "binh-hua", name: "Binh Hua", photoUrl: `${portraitBaseUrl}/men/22.jpg` },
  thuTrang: { id: "thu-trang", name: "Thu Trang", photoUrl: `${portraitBaseUrl}/women/21.jpg` },
  minhKhoa: { id: "minh-khoa", name: "Minh Khoa" },
  quanTang: { id: "quan-tang", name: "quan tang" },
  ngocHa: { id: "ngoc-ha", name: "Ngọc Hà", photoUrl: `${portraitBaseUrl}/women/57.jpg` },
  xanhCard: { id: "xanhcard", name: "XanhCard" },
  quangVu: { id: "tran-quang-vu", name: "Tran Quang Vu", photoUrl: `${portraitBaseUrl}/men/64.jpg` },
  dcsoft: { id: "dcsoft", name: "DCSoft" },
  alexHua: { id: "alex-hua", name: "Alex Hua", photoUrl: `${portraitBaseUrl}/men/36.jpg` },
  liamTran: { id: "liam-tran", name: "Liam Tran", photoUrl: `${portraitBaseUrl}/men/85.jpg` },
  quyetTran: { id: "quyet-tran", name: "Quyết Trần" },
  vuVy: { id: "quoc-vu-vy", name: "Quốc Vũ Vy", photoUrl: `${portraitBaseUrl}/women/12.jpg` },
};
