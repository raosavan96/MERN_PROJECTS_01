import { configureStore } from "@reduxjs/toolkit";
import addCartReducer from "../Features/CartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    addcart: addCartReducer
  }
});
