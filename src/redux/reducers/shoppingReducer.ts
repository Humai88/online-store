import { ShoppingActionTypes } from "../actions/shoppingActions";
import { ADD_TO_CART } from "../actions/types";

const initialState: ShoppingStateType = {
  cart: [],
};

export const shoppingReducer = (
  state = initialState,
  action: ShoppingActionTypes
): ShoppingStateType => {
  switch (action.type) {
    case ADD_TO_CART:
    // return { ...state, ...action.payload.productId };
    default:
      return state;
  }
};

// Types
export type ShoppingStateType = {
  cart: ProductCartItem[];
};

export interface ProductCartItem {
  qty: number;
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
