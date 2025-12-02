import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList as getProductList } from "@/services/product/productServices";
import { selectLoadingProduct, selectProductList } from "./selects";

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
  const loading = useSelector(selectLoadingProduct);
  return loading;
};
