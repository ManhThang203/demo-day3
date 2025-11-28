import { getList } from "@/services/product/productServices";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Tại các action có tham số state lại có thể gọi được hàm value vì nó sử dụng thư viện immer
    setList(state, action) {
      state.value = action.payload;
    },
  },
  // extraReducers là 1 hàm và nhận builder
  // addCase chờ 1 api gọi song nó lại gọi 1 hàm (reducer) thực hiện lấy action
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload.items;
    });
  },
});

export const { setList } = productSlice.actions;

export const { reducerPath } = productSlice;

export const selectList = (state) => state.product.list;

// bản chất counterSlice là 1 reducer
export default productSlice;
