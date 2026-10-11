export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: string;
  platform: string;
  rating: number | null;
  reviewCount: number;
  voteCount: number;
  launchedLabel?: string;
}
