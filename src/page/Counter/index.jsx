import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmout,
  selectCounter,
} from "@/features/counter/counterSlice";

export function Counter() {
  const count = useSelector(selectCounter);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
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
          onClick={() => dispatch(incrementByAmout(5))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
