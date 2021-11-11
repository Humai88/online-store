import { Product } from "./PLPResponseType";

export interface PDPQueryResponse {
  product: ProductItem;
}
export interface ProductItem extends Product {
  description: string;
  category: string;
}
export interface CartItem extends ProductItem {
  qty: number;
}

export interface AttributeSet {
  name: string;
  type: string;
  items: Attribute[];
}
export interface Attribute {
  displayValue: string;
}
