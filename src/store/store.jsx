import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import { clientReducer } from "./reducers/clientReducer";
import { productReducer } from "./reducers/productReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";

// Reducerları birleştir
const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

// Store oluştur ve middleware'leri ekle
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));