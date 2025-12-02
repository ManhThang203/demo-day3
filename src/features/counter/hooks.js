import { useSelector } from "react-redux";
import { selectCount } from "./select";

export const useCounter = () => {
  const counter = useSelector(selectCount);
  return counter;
};
