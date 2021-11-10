import { CartActionTypes } from "../actions/cartActions";
import { ADD_PRODUCT } from "../actions/types";

const initialState: CartStateType = {
  products: [],
  totalAmount: 0,
};

export const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartStateType => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, ...action.payload.product };
    default:
      return state;
  }
};

// Types
export type CartStateType = {
  products: ProductCartItem[];
  totalAmount: number;
};
export interface PDPQueryResponse {
  product: ProductCartItem;
}
export interface ProductCartItem {
  id: string;
  name: string;
  prices: Price[];
  gallery: string[];
  attributes: AttributeSet[];
  brand: string;
}

export interface Price {
  currency: string;
  amount: number;
}

export interface AttributeSet {
  items: Attribute[];
}
export interface Attribute {
  displayValue: string;
}
