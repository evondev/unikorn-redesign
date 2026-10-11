import { needGroups } from "@/constants/need-groups";

import type { Need, NeedStoryContent } from "../types";

const needStories: Record<string, NeedStoryContent> = {
  "di-lam": {
    storyTitle: "Bớt việc lặt vặt mỗi ngày",
    story: "Gõ tiếng Việt không lỗi dấu, làm phụ đề video trong vài phút, sắp lại mớ đoạn chat AI. Những việc nhỏ ngốn cả buổi chiều, đã có người Việt làm app để gỡ giúp bạn.",
    photoId: "1497032628192-86f99bcd76bc",
    productIds: ["litekey", "zocotev", "folderloom", "ai-cho-moi-nguoi"],
  },
  "hoc-tap": {
    storyTitle: "Học thêm mà không phải dò cả buổi",
    story: "Luyện HSK đúng cấp, ôn thi ngay trên điện thoại, tìm gia sư hợp với con. App nào ở đây cũng có giao diện tiếng Việt.",
    photoId: "1543269865-cbf427effbad",
    productIds: ["coc-vu", "eduquiz", "uspark", "scholarlearn"],
  },
  "tien-nong": {
    storyTitle: "Tiền vào tiền ra, nhìn là rõ",
    story: "Ghi chi tiêu trong vài giây, mua sắm online mà còn được hoàn lại một phần tiền. Ba app được cộng đồng chấm cao nhất ở nhóm này.",
    photoId: "1579621970563-ebec7560ff3e",
    productIds: ["savving", "hoantien365", "tichluy"],
  },
  "gia-dinh": {
    storyTitle: "Hôm nay ăn gì, nhà mình cần gì",
    story: "Gợi ý thực đơn cho bữa cơm, tra lịch tiêm của con, tìm chỗ gửi thú cưng khi cả nhà đi vắng.",
    photoId: "1556909114-f6e7ad7d3136",
    productIds: ["gap-mon", "the-meal", "so-tiem-chung", "petter"],
  },
  "suc-khoe": {
    storyTitle: "Ngồi máy cả ngày mà vẫn khỏe",
    story: "Nhắc uống nước và đứng dậy đúng lúc, trợ lý chạy bộ, sổ sơ cứu mở ra là dùng được ngay khi cần.",
    photoId: "1571019613454-1cb2f99b2d8b",
    productIds: ["health-reminder", "runny-ai", "so-tay-y-te", "dietfit-ai"],
  },
  "giai-tri": {
    storyTitle: "Nghỉ tay một chút",
    story: "Game nhỏ do người Việt làm, chơi ngay trên trình duyệt hoặc tải về máy. Có cả một game ấm áp về bốn mùa phố cũ.",
    photoId: "1493711662062-fa541adb3fc8",
    productIds: ["hoa-giay", "poke-finder", "who-is-napoleon"],
  },
  builder: {
    storyTitle: "Đồ nghề builder Việt làm cho nhau",
    story: "Docker gọn nhẹ cho Mac, quản lý SSH, IDE C++ tuỳ biến, SEO tự động bằng AI. Công cụ do chính người làm sản phẩm viết ra.",
    photoId: "1517694712202-14dd9538aa97",
    productIds: ["dockz", "termward", "sameko-dev-cpp", "seo-tu-dong"],
  },
};

export const needs: Need[] = needGroups.map((needGroup) => ({ ...needGroup, ...needStories[needGroup.id] }));
