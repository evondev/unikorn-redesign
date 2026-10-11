import { productsById } from "@/constants/products";

export function getProduct(productId: string) {
  const product = productsById[productId];

  if (!product) throw new Error(`Không có sản phẩm "${productId}" trong dữ liệu mẫu`);

  return product;
}
