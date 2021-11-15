import { Attribute } from "./../../grapgQL/ProductResponseType";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Category } from "../../grapgQL/CategoriesResponseType";
import { Product } from "../../grapgQL/ProductResponseType";
import * as queryes from "../../grapgQL/queries";
import {
  ProductsActionTypes,
  getCategoriesAC,
  getProductsByCategoryAC,
  getProductByIdAC,
  getCurrenciesAC,
} from "../actions/shopActions";
import * as types from "../actions/types";
import { ThunkType } from "../store/store";
import { setAppStatusAC } from "../actions/appActions";

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
    selectedAttr: [],
  },
  currencies: [],
  currentCurrency: "USD",
  cart: [],
  totalCount: 0,
  totalPrice: 0,
};

export const shopReducer = (
  state = initialState,
  action: ProductsActionTypes
): ProductsStateType => {
  switch (action.type) {
    case types.GET_CATEGORIES_LIST:
      return { ...state, categories: action.payload.categories };
    case types.GET_PRODUCTS_BY_CATEGORY:
      return { ...state, products: action.payload.products };
    case types.GET_SINGLE_PRODUCT_BY_ID:
      return { ...state, product: action.payload.product };
    case types.GET_CURRENCIES_LIST:
      return { ...state, currencies: action.payload.currencies };
    case types.SET_CURRENT_CURRENCY:
      return { ...state, currentCurrency: action.payload.currency };
    case types.ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod.id === action.payload.productId
      );
      const inCart = state.cart.some(
        (prod) => prod.id === action.payload.productId
      );
      return item
        ? {
            ...state,
            cart: inCart
              ? state.cart.map((p) =>
                  p.id === action.payload.productId
                    ? {
                        ...p,
                        gallery: p.gallery.map((img) => img),
                        prices: p.prices.map((p) => ({ ...p })),
                        attributes: p.attributes.map((attr) => {
                          return {
                            ...attr,
                            items: attr.items.map((i) => ({ ...i })),
                          };
                        }),
                        qty: p.qty + 1,
                      }
                    : p
                )
              : [...state.cart, { ...item, qty: 1 }],
          }
        : state;
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.productId),
      };
    case types.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((p) =>
          p.id === action.payload.productId
            ? {
                ...p,
                gallery: p.gallery.map((img) => img),
                prices: p.prices.map((p) => ({ ...p })),
                attributes: p.attributes.map((attr) => {
                  return {
                    ...attr,
                    items: attr.items.map((i) => ({ ...i })),
                  };
                }),
                qty: action.payload.value < 0 ? 0 : action.payload.value,
              }
            : p
        ),
      };
    case types.TOTAL_ITEMS_COUNT:
      return {
        ...state,
        totalCount: action.payload.productsInCart.reduce((a, b) => {
          return a + b.qty;
        }, 0),
      };
    case types.TOTAL_PRICE:
      return {
        ...state,
        totalPrice:
          action.payload.productsInCart.length > 0
            ? action.payload.productsInCart
                .map((p) => {
                  return (
                    p.prices
                      .filter((i) => {
                        return i.currency === action.payload.currentCurrency;
                      })
                      .reduce((c, b) => {
                        return c + b.amount;
                      }, 0) * p.qty
                  );
                })
                .reduce((p, a) => {
                  return p + a;
                })
            : 0,
      };
    case types.SET_SELECTED_ATTR:
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.productId
            ? {
                ...p,
                gallery: p.gallery.map((img) => img),
                prices: p.prices.map((p) => ({ ...p })),
                attributes: p.attributes.map((attr) => {
                  const selected = attr.items.find(
                    (i) =>
                      i.displayValue === action.payload.displayValue &&
                      i.displayValue + attr.name.split(" ").join("") ===
                        action.payload.id
                  );
                  return {
                    ...attr,
                    items: selected
                      ? [selected]
                      : attr.items.map((i) => ({ ...i })),
                  };
                }),
              }
            : p
        ),
      };
    default:
      return state;
  }
};

// Thunks
export const getCategoriesTC = (): ThunkType => (dispatch) => {
  dispatch(setAppStatusAC("loading"));
  client
    .query({
      query: queryes.GET_CATEGORIES,
    })
    .then((res) => {
      dispatch(getCategoriesAC(res.data.categories));
    })
    .catch((err) => {
      console.log("err:", err);
    })
    .finally(() => {
      dispatch(setAppStatusAC("succeeded"));
    });
};
export const getCurrenciesTC = (): ThunkType => (dispatch) => {
  dispatch(setAppStatusAC("loading"));
  client
    .query({
      query: queryes.GET_CURRENCIES,
    })
    .then((res) => {
      dispatch(getCurrenciesAC(res.data.currencies));
    })
    .catch((err) => {
      console.log("err:", err);
    })
    .finally(() => {
      dispatch(setAppStatusAC("succeeded"));
    });
};
export const getProductsByCategoryTC =
  (category: string): ThunkType =>
  (dispatch) => {
    dispatch(setAppStatusAC("loading"));
    client
      .query({
        query: queryes.GET_PRODUCTS_BY_CATEGORY_TITLE,
        variables: { category },
      })
      .then((res) => {
        dispatch(getProductsByCategoryAC(res.data.category.products));
      })
      .catch((err) => {
        console.log("err:", err);
      })
      .finally(() => {
        dispatch(setAppStatusAC("succeeded"));
      });
  };
export const getProductByIdTC =
  (id: string): ThunkType =>
  (dispatch) => {
    dispatch(setAppStatusAC("loading"));
    client
      .query({
        query: queryes.GET_PRODUCT_BY_ID,
        variables: { id },
      })
      .then((res) => {
        dispatch(getProductByIdAC(res.data.product));
      })
      .catch((err) => {
        console.log("err:", err);
      })
      .finally(() => {
        dispatch(setAppStatusAC("succeeded"));
      });
  };
// Types
export type ProductsStateType = {
  categories: Category[];
  products: Product[];
  product: Product;
  currencies: string[];
  currentCurrency: string;
  cart: CartItemType[];
  totalCount: number;
  totalPrice: number;
};
export interface CartItemType extends Product {
  qty: number;
}
