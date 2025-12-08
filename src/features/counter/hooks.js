import { useSelector } from "react-redux";
import { selectCounter } from "./select";

export const useProduct = () => {
  const product = useSelector(selectCounter);
  return product;
};
