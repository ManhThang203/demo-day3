import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList as getProductList } from "@/services/product";
import { selectLoading, selectProduct } from "./select";

export const useFetchProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
};

export const useProudtList = () => {
  const product = useSelector(selectProduct);
  return product;
};

export const useLoading = () => {
  const loading = useSelector(selectLoading);
  return loading;
};
