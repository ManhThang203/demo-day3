import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
// CreateSlice trả về 1 slice
// Trong Object slice có thuộc tính action
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

console.log(counterSlice);
