export interface Review {
  id: string;
  productId: string;
  authorId: string;
  authorName: string;
  rating: number;
  text: string;
  postedLabel: string;
  postedAtFull: string;
}
