import type { Review } from "../types";

// Nội dung phỏng theo đánh giá trên unikorn.vn; thời gian, số sao là giả.
// Có ca biên: một đánh giá dài (cắt 3 dòng), một đánh giá chỉ một chữ, một đánh giá 4 sao.
export const latestReviews: Review[] = [
  {
    id: "review-poke-finder",
    productId: "poke-finder",
    authorId: "luyen-john",
    authorName: "Luyện John",
    rating: 5,
    text: "Bình thường ngồi đọc docs buồn ngủ, mà cái này vui nên ngồi lâu hơn hẳn. Ước có thêm chế độ chơi với bạn bè để thi xem ai bắt được nhiều hơn, với lại cho lưu bộ sưu tập lên tài khoản để đổi máy không mất.",
    postedLabel: "2 ngày trước",
    postedAtFull: "20:14, 09/10/2026",
  },
  {
    id: "review-gap-mon",
    productId: "gap-mon",
    authorId: "tai-hoa",
    authorName: "Tài Hoa",
    rating: 4,
    text: "Tối nào cũng mở ra chọn món, nhà mình đỡ cãi nhau vụ ăn gì hẳn. Mong có thêm món chay.",
    postedLabel: "3 ngày trước",
    postedAtFull: "18:02, 08/10/2026",
  },
  {
    id: "review-tichluy",
    productId: "tichluy",
    authorId: "hieu-minh",
    authorName: "Hiếu Minh",
    rating: 5,
    text: "Ok",
    postedLabel: "1 tuần trước",
    postedAtFull: "09:45, 04/10/2026",
  },
];
