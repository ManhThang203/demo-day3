import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectProductList } from "./select";
import { useEffect } from "react";
import { getList as getProductList } from "@/services/product/productServices";

export const useFetchProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
};

export const useProductList = () => {
  const product = useSelector(selectProductList);
  return product;
};

export const useLoading = () => {
  const loading = useSelector(selectLoading);
  return loading;
};
