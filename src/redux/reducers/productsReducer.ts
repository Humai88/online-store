import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Category } from "../../grapgQL/CategoriesResponseType";
import { ProductItem } from "../../grapgQL/PDPResponseType";
import { Product } from "../../grapgQL/PLPResponseType";
import {
  GET_CATEGORIES,
  GET_CURRENCIES,
  GET_PRODUCTS_BY_CATEGORY_TITLE,
  GET_PRODUCT_BY_ID,
} from "../../grapgQL/queries";
import {
  ProductsActionTypes,
  getCategoriesAC,
  getProductsByCategoryAC,
  getProductByIdAC,
  getCurrenciesAC,
} from "../actions/productsActions";
import {
  GET_CATEGORIES_LIST,
  GET_CURRENCIES_LIST,
  GET_PRODUCTS_BY_CATEGORY,
  GET_SINGLE_PRODUCT_BY_ID,
  SET_CURRENT_CURRENCY,
} from "../actions/types";
import { ThunkType } from "../store/store";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const initialState: ProductsStateType = {
  categories: [],
  products: [],
  product: {
    id: "",
    name: "",
    inStock: false,
    prices: [],
    gallery: [],
    description: "",
    category: "",
    attributes: [],
    brand: "",
  },
  currencies: [],
  currentCurrency: "USD",
};

export const productsReducer = (
  state = initialState,
  action: ProductsActionTypes
): ProductsStateType => {
  switch (action.type) {
    case GET_CATEGORIES_LIST:
      return { ...state, categories: action.payload.categories };
    case GET_PRODUCTS_BY_CATEGORY:
      return { ...state, products: action.payload.products };
    case GET_SINGLE_PRODUCT_BY_ID:
      return { ...state, product: action.payload.product };
    case GET_CURRENCIES_LIST:
      return { ...state, currencies: action.payload.currencies };
    case SET_CURRENT_CURRENCY:
      return { ...state, currentCurrency: action.payload.currency };
    default:
      return state;
  }
};

// Thunks
export const getCategoriesTC = (): ThunkType => (dispatch) => {
  client
    .query({
      query: GET_CATEGORIES,
    })
    .then((res) => {
      dispatch(getCategoriesAC(res.data.categories));
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
export const getCurrenciesTC = (): ThunkType => (dispatch) => {
  client
    .query({
      query: GET_CURRENCIES,
    })
    .then((res) => {
      dispatch(getCurrenciesAC(res.data.currencies));
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
export const getProductsByCategoryTC =
  (category: string): ThunkType =>
  (dispatch) => {
    client
      .query({
        query: GET_PRODUCTS_BY_CATEGORY_TITLE,
        variables: { category },
      })
      .then((res) => {
        dispatch(getProductsByCategoryAC(res.data.category.products));
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
export const getProductByIdTC =
  (id: string): ThunkType =>
  (dispatch) => {
    client
      .query({
        query: GET_PRODUCT_BY_ID,
        variables: { id },
      })
      .then((res) => {
        dispatch(getProductByIdAC(res.data.product));
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
// Types
export type ProductsStateType = {
  categories: Category[];
  products: Product[];
  product: ProductItem;
  currencies: string[];
  currentCurrency: string;
};
