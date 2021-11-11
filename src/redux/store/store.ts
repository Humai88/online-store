import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { ProductsActionTypes } from "../actions/shopActions";
import { shopReducer } from "../reducers/shopReducer";

const reducers = combineReducers({
  products: shopReducer,
});
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducers, enhancer);

export default store;
// Types
export type AppStore = ReturnType<typeof reducers>;
export type AppActionsType = ProductsActionTypes;

export type ThunkType = ThunkAction<void, AppStore, unknown, AppActionsType>;
