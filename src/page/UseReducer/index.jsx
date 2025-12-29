import { useReducer } from "react";

import reducer, { initState } from "./reducer";

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() =>
            dispatch({
              type: "Increment",
            })
          }
        >
          Increment
        </button>
        <span>{state.count}</span>
        <button
          aria-label="Decrement value"
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() =>
            dispatch({
              type: "incrementByAmout",
              payload: 5,
            })
          }
        >
          +5
        </button>
      </div>
    </div>
  );
}

export default UseReducer;

/**
 * + useReducer trả về 2 giá trị là dispatch và giá trị khởi tạo
 * + UseReducer khác với redux ở chỗ là redux sẽ trả về reducer với giá trị là defaul value
 * + Còn UseReducer chỉ trả về giá trị khởi tạo trong lần đầu.Không gọi reducer trong lần đầu tiên
 * + Nếu dispatch khác các type trong UseReducer thì sẽ báo lỗi
 * **/
