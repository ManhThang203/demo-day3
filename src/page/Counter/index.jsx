import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByMout,
  useCounter,
} from "@/features/counter";

import icons from "@/assets/images";

export function Counter() {
  const count = useCounter();
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(incrementByMout(5))}
      >
        +5
      </button>
      <img src={icons.avatar400} alt="" />
    </div>
  );
}

export default Counter;
