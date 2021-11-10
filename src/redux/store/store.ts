import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { ShoppingActionTypes } from "../actions/shoppingActions";
import { ProductsActionTypes } from "../actions/productsActions";
import { shoppingReducer } from "../reducers/shoppingReducer";
import { productsReducer } from "../reducers/productsReducer";

const reducers = combineReducers({
  products: productsReducer,
  shop: shoppingReducer,
});
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducers, enhancer);

export default store;
// Types
export type AppStore = ReturnType<typeof reducers>;
export type AppActionsType = ProductsActionTypes | ShoppingActionTypes;

export type ThunkType = ThunkAction<void, AppStore, unknown, AppActionsType>;
