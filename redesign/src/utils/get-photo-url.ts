// Ảnh mẫu từ Unsplash cho câu chuyện từng nhóm việc. Thay bằng ảnh của Unikorn trước khi chạy thật.
export function getPhotoUrl(photoId: string, width = 900) {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=80&auto=format&fit=crop`;
}
