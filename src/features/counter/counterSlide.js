import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlide = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmout(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmout } = counterSlide.actions;

export const { reducerPath } = counterSlide;
