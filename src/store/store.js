import counterSlide from "@/features/counter/counterSlice";
import productSlide from "@/features/product/productSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    [counterSlide.reducerPath]: counterSlide.reducer,
    [productSlide.reducerPath]: productSlide.reducer,
  },
});

export default store;
