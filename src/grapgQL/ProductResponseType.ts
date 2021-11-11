export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  prices: Price[];
  brand: string;
  attributes: AttributeSet[];
  description: string;
  category: string;
}
export interface PDPQueryResponse {
  product: Product;
}

export interface AttributeSet {
  name: string;
  type: string;
  items: Attribute[];
}
export interface Attribute {
  displayValue: string;
}
interface Price {
  currency: string;
  amount: number;
}
