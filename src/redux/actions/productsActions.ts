import { Category } from "../../grapgQL/CategoriesResponseType";
import { ProductItem } from "../../grapgQL/PDPResponseType";
import { Product } from "../../grapgQL/PLPResponseType";
import {
  GET_CATEGORIES_LIST,
  GET_CURRENCIES_LIST,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SINGLE_PRODUCT_BY_ID,
  SET_CURRENT_CURRENCY,
} from "./types";

export const getCategoriesAC = (categories: Category[]) => {
  return { type: GET_CATEGORIES_LIST, payload: { categories } } as const;
};
export const getProductsByCategoryAC = (products: Product[]) => {
  return { type: GET_PRODUCTS_BY_CATEGORY, payload: { products } } as const;
};
export const getProductByIdAC = (product: ProductItem) => {
  return { type: GET_SINGLE_PRODUCT_BY_ID, payload: { product } } as const;
};
export const getCurrenciesAC = (currencies: []) => {
  return { type: GET_CURRENCIES_LIST, payload: { currencies } } as const;
};
export const setCurrentCurrencyAC = (currency: string) => {
  return { type: SET_CURRENT_CURRENCY, payload: { currency } } as const;
};
export type ProductsActionTypes =
  | ReturnType<typeof getCategoriesAC>
  | ReturnType<typeof getProductsByCategoryAC>
  | ReturnType<typeof getProductByIdAC>
  | ReturnType<typeof getCurrenciesAC>
  | ReturnType<typeof setCurrentCurrencyAC>;
