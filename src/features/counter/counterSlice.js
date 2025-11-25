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
    // tại sao state lại gọi được value ?
    // Vì nó sẽ tự sử dụng thư viện immer
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

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { reducerPath } = counterSlice;

// Tại sao lại export reducer
// - bản chất thì 1 con counterSlice chính là reducer

export default counterSlice.reducer;

console.log(counterSlice);
