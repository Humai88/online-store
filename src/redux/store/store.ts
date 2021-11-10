import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { CartActionTypes } from "../actions/cartActions";
import { ProductsActionTypes } from "../actions/productsActions";
import { cartReducer } from "../reducers/cartReducer";
import { productsReducer } from "../reducers/productsReducer";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
// Types
export type AppStore = ReturnType<typeof reducers>;
export type AppActionsType = ProductsActionTypes | CartActionTypes;

export type ThunkType = ThunkAction<void, AppStore, unknown, AppActionsType>;
