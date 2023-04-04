import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/products-reducer";
import uiReducer from "./reducers/ui-reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  ui: uiReducer,
});

export const store = createStore(rootReducer);
