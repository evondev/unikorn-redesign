// Người làm ra hoạt động. Không có ảnh thì avatar rơi về chữ cái đầu.
export interface FeedActor {
  id: string;
  name: string;
  photoUrl?: string;
  level?: number;
}
