import { Product } from './../../../models/product';
 
export const createProduct = (_, params) => {
  return Product.query().insert(params.product);
} 