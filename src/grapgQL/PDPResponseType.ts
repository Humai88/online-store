export interface PDPQueryResponse {
  product: ProductItem;
}
export interface ProductItem {
  id: string;
  name: string;
  inStock: boolean;
  prices: Price[];
  gallery: string[];
  description: string;
  category: string;
  attributes: AttributeSet[];
  brand: string;
}

interface Price {
  currency: string;
  amount: number;
}

export interface AttributeSet {
  name: string;
  type: string;
  items: Attribute[];
}
export interface Attribute {
  displayValue: string;
}
