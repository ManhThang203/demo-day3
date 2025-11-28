import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "@/features/counter/counterSlice";
import productSlice from "@/features/product/productSlice";

const store = configureStore({
  reducer: {
    [counterSlice.reducerPath]: counterSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer,
  },
});

export default store;
