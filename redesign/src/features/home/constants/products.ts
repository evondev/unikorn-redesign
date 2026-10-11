import type { Product } from "../types";

// Tên và câu giới thiệu lấy từ unikorn.vn. Số sao, lượt đánh giá, lượt bình chọn, giá, nền tảng là SỐ GIẢ.
const productList: Product[] = [
  { id: "litekey", name: "LiteKey", tagline: "Bộ gõ tiếng Việt cho macOS, nhẹ, nhanh, gõ đúng từng dấu", price: "Miễn phí", platform: "macOS", rating: 4.9, reviewCount: 38, voteCount: 212 },
  { id: "zocotev", name: "Zocotev", tagline: "Phụ đề, dịch, lồng tiếng toàn tự động trên máy tính", price: "Có gói trả phí", platform: "Windows, macOS", rating: 4.8, reviewCount: 21, voteCount: 176 },
  { id: "folderloom", name: "Folderloom", tagline: "Folders, Prompts, Search, Export & Continue Across AI Chats", price: "Miễn phí", platform: "Tiện ích Chrome", rating: 4.7, reviewCount: 12, voteCount: 98 },
  { id: "ai-cho-moi-nguoi", name: "AI Cho Mọi Người", tagline: "Hiểu AI qua hình ảnh và ví dụ đơn giản", price: "Miễn phí", platform: "Web", rating: 5.0, reviewCount: 9, voteCount: 147 },
  { id: "lawshield", name: "LawShield", tagline: "AI pháp lý cho doanh nghiệp Việt Nam", price: "Có gói trả phí", platform: "Web", rating: 4.6, reviewCount: 4, voteCount: 15, launchedLabel: "Hôm nay" },
  { id: "coc-vu", name: "Cốc Vũ", tagline: "Tiếng Trung HSK 3.0 đúng cấp, dùng được ngay", price: "Có gói trả phí", platform: "iOS, Android", rating: 4.9, reviewCount: 64, voteCount: 301 },
  { id: "eduquiz", name: "EduQuiz", tagline: "Học Ngay - Nền tảng Học & Luyện thi Online DCSoft Edu", price: "Miễn phí", platform: "Web", rating: 5.0, reviewCount: 17, voteCount: 88 },
  { id: "uspark", name: "Uspark", tagline: "Tìm gia sư hợp với con bạn", price: "Miễn phí", platform: "Web", rating: 4.6, reviewCount: 5, voteCount: 41 },
  { id: "scholarlearn", name: "ScholarLearn", tagline: "AI - Powered Learning Platform", price: "Có gói trả phí", platform: "Web", rating: null, reviewCount: 0, voteCount: 12 },
  { id: "savving", name: "Savving", tagline: "Tài chính rõ ràng", price: "Miễn phí", platform: "iOS, Android", rating: 5.0, reviewCount: 46, voteCount: 269 },
  { id: "hoantien365", name: "HoanTien365", tagline: "Mua sắm nhận hoàn tiền cao nhất", price: "Miễn phí", platform: "Web, Android", rating: 4.9, reviewCount: 92, voteCount: 412 },
  { id: "tichluy", name: "Tichluy.vn - Hoàn tiền mua sắm từ 2016", tagline: "Ứng dụng hoàn tiền cashback từ 2016", price: "Miễn phí", platform: "Web, iOS, Android", rating: 5.0, reviewCount: 58, voteCount: 473 },
  { id: "gap-mon", name: "Gắp món", tagline: "Tìm món ngon, tạo menu và quyết định bữa ăn vui hơn", price: "Miễn phí", platform: "Web", rating: 5.0, reviewCount: 78, voteCount: 356 },
  { id: "the-meal", name: "the Meal", tagline: "Trợ lý dinh dưỡng thông minh", price: "Có gói trả phí", platform: "iOS, Android", rating: 4.8, reviewCount: 19, voteCount: 169 },
  { id: "so-tiem-chung", name: "Sổ Tiêm Chủng Gia Đình", tagline: "Family Care - Tra cứu thông tin vaccine online", price: "Miễn phí", platform: "Web", rating: 4.7, reviewCount: 3, voteCount: 35 },
  { id: "petter", name: "Petter", tagline: "Mái ấm cho thú cưng", price: "Miễn phí", platform: "Web", rating: 4.5, reviewCount: 4, voteCount: 27 },
  { id: "health-reminder", name: "Health Reminder", tagline: "Nhắc uống nước, đứng dậy và nghỉ giải lao khi làm việc", price: "Miễn phí", platform: "macOS, Windows", rating: 4.9, reviewCount: 53, voteCount: 322 },
  { id: "runny-ai", name: "Runny AI", tagline: "Trợ lý chạy bộ thông minh", price: "Có gói trả phí", platform: "iOS, Android", rating: 4.6, reviewCount: 8, voteCount: 63 },
  { id: "so-tay-y-te", name: "Sổ Tay Y Tế Khẩn Cấp", tagline: "Sơ cứu trong 60 giây", price: "Miễn phí", platform: "iOS, Android", rating: 4.8, reviewCount: 6, voteCount: 34 },
  { id: "dietfit-ai", name: "Dietfit AI", tagline: "Dinh dưỡng và theo dõi cân nặng cá nhân hoá cho người Việt", price: "Có gói trả phí", platform: "iOS, Android", rating: 4.4, reviewCount: 2, voteCount: 29 },
  { id: "hoa-giay", name: "Hoa Giấy", tagline: "Bốn mùa phố cũ", price: "Trả phí", platform: "Windows, macOS", rating: 4.9, reviewCount: 14, voteCount: 156 },
  { id: "poke-finder", name: "Poke Finder", tagline: "Thu phục Pokémon trên browser", price: "Miễn phí", platform: "Web", rating: 5.0, reviewCount: 11, voteCount: 87 },
  { id: "who-is-napoleon", name: "Who Is Napoleon?", tagline: "Ram, seize the podium, become Napoleon and rewrite the rules", price: "Miễn phí", platform: "Web", rating: 5.0, reviewCount: 26, voteCount: 118 },
  { id: "dockz", name: "Dockz", tagline: "Ứng dụng Docker native cho Mac Apple Silicon, chỉ ~8 MB và mã nguồn mở", price: "Miễn phí", platform: "macOS", rating: 4.9, reviewCount: 31, voteCount: 245 },
  { id: "termward", name: "termward", tagline: "An SSH manager that keeps watch.", price: "Miễn phí", platform: "macOS, Linux", rating: 4.7, reviewCount: 7, voteCount: 14, launchedLabel: "2 ngày trước" },
  { id: "sameko-dev-cpp", name: "Sameko Dev C++", tagline: "Dev C++ phiên bản nhanh và đẹp hơn, tuỳ chỉnh giao diện tuỳ ý", price: "Miễn phí", platform: "Windows", rating: 4.8, reviewCount: 22, voteCount: 213 },
  { id: "seo-tu-dong", name: "SEO tự động", tagline: "SEO tự động bằng AI cho website Việt Nam", price: "Có gói trả phí", platform: "Web", rating: 4.7, reviewCount: 35, voteCount: 280 },
  { id: "chatgptx", name: "ChatGPTx", tagline: "Vibecoding với ChatGPT Web thông qua MCP", price: "Miễn phí", platform: "Tiện ích Chrome", rating: null, reviewCount: 0, voteCount: 15, launchedLabel: "Hôm qua" },
  { id: "aifree-dev", name: "aifree.dev", tagline: "Mọi ưu đãi AI miễn phí, kèm điều kiện rõ ràng", price: "Miễn phí", platform: "Web", rating: null, reviewCount: 0, voteCount: 15, launchedLabel: "Hôm nay" },
  { id: "ecbot", name: "Ecbot", tagline: "AI Agent Messaging Framework For Business", price: "Có gói trả phí", platform: "Web", rating: null, reviewCount: 0, voteCount: 13, launchedLabel: "2 ngày trước" },
];

export const productsById: Record<string, Product> = Object.fromEntries(
  productList.map((product) => [product.id, product]),
);
