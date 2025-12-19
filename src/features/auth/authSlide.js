import { getCurrentUser } from "@/services/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const authSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, actions) => {
      state.currentUser = actions.payload;
    });
    builder.addCase(getCurrentUser.rejected, (state) => {
      state.currentUser = null;
    });
  },
});

export const { setCurrentUser } = authSlide.actions;

export const { reducerPath } = authSlide;
