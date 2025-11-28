import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Tại các action có tham số state lại có thể gọi được hàm value vì nó sử dụng thư viện immer
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

export const { increment, decrement, incrementByAmout } = counterSlice.actions;

export const { reducerPath } = counterSlice;

export const selectCounter = (state) => state.counter.value;

// bản chất counterSlice là 1 reducer
export default counterSlice;
