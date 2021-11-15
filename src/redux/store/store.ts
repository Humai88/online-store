import { applyMiddleware, compose } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { AppActionTypes } from "../actions/appActions";
import { ProductsActionTypes } from "../actions/shopActions";
import { appReducer } from "../reducers/appReducer";
import { shopReducer } from "../reducers/shopReducer";

const reducers = combineReducers({
  products: shopReducer,
  app: appReducer,
});
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
const store = createStore(reducers, enhancer);

export default store;
// Types
export type AppStore = ReturnType<typeof reducers>;
export type AppActionsType = ProductsActionTypes | AppActionTypes;

export type ThunkType = ThunkAction<void, AppStore, unknown, AppActionsType>;
