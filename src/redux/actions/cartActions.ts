import { ProductItem } from "../../grapgQL/PDPResponseType";
import { ADD_PRODUCT } from "./types";

export const addProductToCartAC = (product: ProductItem) => {
  return { type: ADD_PRODUCT, payload: { product } } as const;
};
export type CartActionTypes = ReturnType<typeof addProductToCartAC>;
