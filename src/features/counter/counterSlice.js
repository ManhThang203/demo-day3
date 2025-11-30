import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlide = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Tại sao các case có tham số state lại có thể gọi được state
    // Vì sử dụng thư viện immer
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

// createSlice sẽ trả về 1 obj Slide và trong obj có action
export const { increment, decrement, incrementByAmout } = counterSlide.actions;

export const { reducerPath } = counterSlide;

export const selectCounter = (state) => state.counter.value;

export default counterSlide;
