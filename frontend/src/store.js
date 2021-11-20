import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productsReducer";
import {
  userActiveReducer,
  userDetailsReducer,
  userSigninReducer,
  userSignupReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
import { orderListReducer } from "./reducers/orderReducer";
import { orderCreateReducer } from "./reducers/orderReducer";

const reducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  userActive: userActiveReducer,
  userDetails: userDetailsReducer,
  productsReducer: productListReducer,
  orderReducer: orderListReducer,
  orderCreateReducer: orderCreateReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  userSignin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
