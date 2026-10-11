export function formatNumber(value: number) {
  return value.toLocaleString("vi-VN");
}

// 4.9 -> "4,9"
export function formatRating(rating: number) {
  return rating.toFixed(1).replace(".", ",");
}
