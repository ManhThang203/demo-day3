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
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.list = action.payload.items;
      state.loading = false;
    });
    builder.addCase(getList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setList } = productSlide.actions;

export const { reducerPath } = productSlide;

export default productSlide;
