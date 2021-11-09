import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { CartActionTypes } from "../actions/cartActions";
import { cartReducer } from "../reducers/cartReducer";

const reducers = combineReducers({
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
// Types
export type AppStore = ReturnType<typeof reducers>;
export type AppActionsType = CartActionTypes;

export type ThunkType = ThunkAction<void, AppStore, unknown, AppActionsType>;
// @ts-ignore
window.store = store; // for dev
