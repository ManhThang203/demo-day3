import { getCurrentUser } from "@/services/product";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  fetching: true,
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
    builder.addCase(getCurrentUser.pending, (state) => {
      state.fetching = true;
    });
    builder.addCase(getCurrentUser.fulfilled, (state, actions) => {
      state.currentUser = actions.payload;
      state.fetching = false;
    });
    builder.addCase(getCurrentUser.rejected, (state) => {
      console.log("rejected");
      state.currentUser = null;
      state.fetching = false;
    });
  },
});

export const { setCurrentUser } = authSlide.actions;

export const { reducerPath } = authSlide;
