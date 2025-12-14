import { getCurrentUser } from "@/services/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setcurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(getCurrentUser.rejected, (state) => {
      state.currentUser = null;
    });
  },
});

export const { setcurrentUser } = authSlice.actions;
