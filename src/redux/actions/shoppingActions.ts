import { ProductCartItem } from "../reducers/shoppingReducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addProductToCartAC = (productId: string) => {
  return { type: ADD_TO_CART, payload: { productId } } as const;
};
export const removeProductFromCartAC = (productId: string) => {
  return { type: REMOVE_FROM_CART, payload: { productId } } as const;
};
export const adjustQuantityAC = (productId: string, value: number) => {
  return { type: REMOVE_FROM_CART, payload: { productId, value } } as const;
};
export const loadCurrentProductAC = (product: ProductCartItem) => {
  return { type: REMOVE_FROM_CART, payload: { product } } as const;
};
export type ShoppingActionTypes =
  | ReturnType<typeof addProductToCartAC>
  | ReturnType<typeof removeProductFromCartAC>
  | ReturnType<typeof adjustQuantityAC>
  | ReturnType<typeof adjustQuantityAC>;
