import { getList } from "@/services/product/productServices";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    setList(state, action) {
      // Đã sử dụng thư viện immer lên có thể gán thẳng giá trị vào obj mà không bị re-render
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload.items;
      state.loading = true;
    });
  },
});

export const { setList } = productSlide.actions;

export const { reducerPath } = productSlide;

export const selectProduct = (state) => state.product.list;
export const selectLoading = (state) => state.product.loading;

export default productSlide;
