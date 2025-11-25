import { configureStore } from "@reduxjs/toolkit";

import counterSlice, { reducerPath } from "@/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    // lấy giá trị biến reducerPath làm key lên phải viết []
    [reducerPath]: counterSlice,
  },
});
