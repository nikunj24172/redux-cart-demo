import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import productReducer from "../reducers/productReducer";
import {thunk} from "redux-thunk";
import cartReducer from "../reducers/cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart:cartReducer
});

// 👇 Redux DevTools setup
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
