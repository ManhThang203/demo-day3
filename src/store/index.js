/**
 * + ConfigureStore có các  Default middleware
 * + configureStore là 1 cái trính wrap nó bao bọc createStore
 * + Khi thêm addresApi thì sẽ có middleware riêng biệt. Vì vậy sẽ bị ghi đè các middleware khác trong configureStore
 * **/

import { addressApi } from "@/features/address/provincesSlice";
import { authSlide } from "@/features/auth";
import { counterSlide } from "@/features/counter";
import { productSlide } from "@/features/product";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

// Mã hóa base64
const secretKey = btoa("my-super-secret-key");

const transforms = import.meta.env.DEV
  ? []
  : [
      encryptTransform({
        secretKey: [atob(secretKey)],
        onError: function () {},
      }),
    ];

const persistConfig = {
  key: "root",
  storage,
  blacklist: [productSlide.reducerPath],
  transforms,
};

const authPersistConfig = {
  key: authSlide.reducerPath,
  storage: storage,
  blacklist: ["fetching"],
  transforms,
};

const rootReducer = combineReducers({
  [authSlide.reducerPath]: persistReducer(authPersistConfig, authSlide.reducer),
  [counterSlide.reducerPath]: counterSlide.reducer,
  [productSlide.reducerPath]: productSlide.reducer,
  [addressApi.reducerPath]: addressApi.reducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    addressApi.middleware,
  ],
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export { store, persistor };

window.store = store;
