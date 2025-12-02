import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmout,
  useCounter,
} from "@/features/counter";

export function Counter() {
  const count = useCounter();
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
          +5
        </button>
      </div>
    </div>
  );
}

export default Counter;
