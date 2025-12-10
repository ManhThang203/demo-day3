import { addressApi } from "@/features/address/provincesSlice";
import { authSlide } from "@/features/auth";

import { counterSlide } from "@/features/counter";
import { productSlide } from "@/features/product";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

/**
 * + ConfigureStore có các  Default middleware
 * + configureStore là 1 cái trính wrap nó bao bọc createStore
 * + Khi thêm addresApi thì sẽ có middleware riêng biệt. Vì vậy sẽ bị ghi đè các middleware khác trong configureStore
 * **/

const rootReducer = combineReducers({
  [counterSlide.reducerPath]: counterSlide.reducer,
  [productSlide.reducerPath]: productSlide.reducer,
  [addressApi.reducerPath]: addressApi.reducer,
  [authSlide.reducerPath]: authSlide.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    addressApi.middleware,
  ],
});
const persistor = persistStore(store);
setupListeners(store.dispatch);

export { store, persistor };

window.store = store;
