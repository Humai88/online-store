import { Category } from "../../grapgQL/CategoriesResponseType";
import { Attribute, Product } from "../../grapgQL/ProductResponseType";
import { CartItemType } from "../reducers/shopReducer";
import * as types from "./types";

export const getCategoriesAC = (categories: Category[]) => {
  return { type: types.GET_CATEGORIES_LIST, payload: { categories } } as const;
};
export const getProductsByCategoryAC = (products: Product[]) => {
  return {
    type: types.GET_PRODUCTS_BY_CATEGORY,
    payload: { products },
  } as const;
};
export const getProductByIdAC = (product: Product) => {
  return {
    type: types.GET_SINGLE_PRODUCT_BY_ID,
    payload: { product },
  } as const;
};
export const getCurrenciesAC = (currencies: []) => {
  return { type: types.GET_CURRENCIES_LIST, payload: { currencies } } as const;
};
export const setCurrentCurrencyAC = (currency: string) => {
  return { type: types.SET_CURRENT_CURRENCY, payload: { currency } } as const;
};
export const addProductToCartAC = (productId: string) => {
  return { type: types.ADD_TO_CART, payload: { productId } } as const;
};
export const removeProductFromCartAC = (productId: string) => {
  return { type: types.REMOVE_FROM_CART, payload: { productId } } as const;
};
export const adjustQuantityAC = (productId: string, value: number) => {
  return {
    type: types.ADJUST_QUANTITY,
    payload: { productId, value },
  } as const;
};
export const setTotalItemsCountAC = (productsInCart: CartItemType[]) => {
  return {
    type: types.TOTAL_ITEMS_COUNT,
    payload: { productsInCart },
  } as const;
};
export const setTotalPriceAC = (
  productsInCart: CartItemType[],
  currentCurrency: string
) => {
  return {
    type: types.TOTAL_PRICE,
    payload: { productsInCart, currentCurrency },
  } as const;
};
export const setSelectedAttributesAC = (
  productId: string,
  displayValue: string,
  id: string
) => {
  return {
    type: types.SET_SELECTED_ATTR,
    payload: { productId, displayValue, id },
  } as const;
};
// Разобраться здесь

export type ProductsActionTypes =
  | ReturnType<typeof getCategoriesAC>
  | ReturnType<typeof getProductsByCategoryAC>
  | ReturnType<typeof getProductByIdAC>
  | ReturnType<typeof getCurrenciesAC>
  | ReturnType<typeof setCurrentCurrencyAC>
  | ReturnType<typeof addProductToCartAC>
  | ReturnType<typeof removeProductFromCartAC>
  | ReturnType<typeof adjustQuantityAC>
  | ReturnType<typeof setTotalItemsCountAC>
  | ReturnType<typeof setTotalPriceAC>
  | ReturnType<typeof setSelectedAttributesAC>;
