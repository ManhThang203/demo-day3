import { useSelector } from "react-redux";
import { selectCount } from "./selects";

export const useCounter = () => {
  const counter = useSelector(selectCount);
  return counter;
};
