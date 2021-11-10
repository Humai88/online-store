export interface PLPQueryResponse {
  category: Category;
}
export interface Category {
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  inStock: boolean;
  gallery: string[];
  prices: Price[];
  brand: string;
}

interface Price {
  currency: string;
  amount: number;
}
