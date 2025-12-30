import { getList } from "@/services/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  pagination: {
    last_page: 0,
  },
  loading: false,
};

export const productSlide = createSlice({
  name: "product",
  initialState,
  reducers: {
    setList(state, action) {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      const { items, pagination } = action.payload;
      state.payload = state.loading = false;
      state.list = [...state.list, ...items];
      state.pagination = pagination;
    });
    builder.addCase(getList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setList } = productSlide.actions;

export const { reducerPath } = productSlide;
