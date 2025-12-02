import { configureStore } from "@reduxjs/toolkit";

import "@/features/counter";
import { counterSlide } from "@/features/counter";
import { productSlide } from "@/features/product";

export const store = configureStore({
  reducer: {
    [counterSlide.reducerPath]: counterSlide.reducer,
    [productSlide.reducerPath]: productSlide.reducer,
  },
});
