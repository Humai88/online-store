import { Category } from "../../grapgQL/CategoriesResponseType";
import { Product } from "../../grapgQL/ProductResponseType";

import {
  ADD_TO_CART,
  ADJUST_QUANTITY,
  GET_CATEGORIES_LIST,
  GET_CURRENCIES_LIST,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SINGLE_PRODUCT_BY_ID,
  REMOVE_FROM_CART,
  SET_CURRENT_CURRENCY,
} from "./types";

export const getCategoriesAC = (categories: Category[]) => {
  return { type: GET_CATEGORIES_LIST, payload: { categories } } as const;
};
export const getProductsByCategoryAC = (products: Product[]) => {
  return { type: GET_PRODUCTS_BY_CATEGORY, payload: { products } } as const;
};
export const getProductByIdAC = (product: Product) => {
  return { type: GET_SINGLE_PRODUCT_BY_ID, payload: { product } } as const;
};
export const getCurrenciesAC = (currencies: []) => {
  return { type: GET_CURRENCIES_LIST, payload: { currencies } } as const;
};
export const setCurrentCurrencyAC = (currency: string) => {
  return { type: SET_CURRENT_CURRENCY, payload: { currency } } as const;
};
export const addProductToCartAC = (productId: string) => {
  return { type: ADD_TO_CART, payload: { productId } } as const;
};
export const removeProductFromCartAC = (productId: string) => {
  return { type: REMOVE_FROM_CART, payload: { productId } } as const;
};
export const adjustQuantityAC = (productId: string, value: number) => {
  return { type: ADJUST_QUANTITY, payload: { productId, value } } as const;
};
export type ProductsActionTypes =
  | ReturnType<typeof getCategoriesAC>
  | ReturnType<typeof getProductsByCategoryAC>
  | ReturnType<typeof getProductByIdAC>
  | ReturnType<typeof getCurrenciesAC>
  | ReturnType<typeof setCurrentCurrencyAC>
  | ReturnType<typeof addProductToCartAC>
  | ReturnType<typeof removeProductFromCartAC>
  | ReturnType<typeof adjustQuantityAC>;
