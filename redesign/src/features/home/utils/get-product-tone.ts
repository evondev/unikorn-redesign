import { productTones } from "../constants/product-tones";

// Cùng một sản phẩm luôn ra cùng một sắc, ở mọi khối, mọi lần tải.
export function getProductTone(productId: string) {
  let hash = 0;

  for (let i = 0; i < productId.length; i++) {
    hash = (hash * 31 + productId.charCodeAt(i)) | 0;
  }

  return productTones[Math.abs(hash) % productTones.length];
}
