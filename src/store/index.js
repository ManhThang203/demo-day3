import { addressApi } from "@/features/address/provincesSlice";
import { counterSlide } from "@/features/counter";
import { productSlide } from "@/features/product";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

/**
 * + ConfigureStore có các  Default middleware
 * + Khi thêm addresApi thì sẽ có middleware riêng biệt. Vì vậy sẽ bị ghi đè các middleware khác trong configureStore
 * **/

export const store = configureStore({
  reducer: {
    [counterSlide.reducerPath]: counterSlide.reducer,
    [productSlide.reducerPath]: productSlide.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
  },

  middleware: (getDefautlmiddleware) => [
    ...getDefautlmiddleware(),
    addressApi.middleware,
  ],
});

setupListeners(store.dispatch);

window.store = store;
