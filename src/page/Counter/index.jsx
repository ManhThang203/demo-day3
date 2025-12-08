import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmout,
  useProduct,
} from "@/features/counter";

export function Counter() {
  const count = useProduct();
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
