import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList as getProductList } from "@/services/product";
import { selectLoading, selectPagination, selectProduct } from "./select";

export const useFetchProductList = ({ limit, page } = {}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList({ limit, page }));
  }, [dispatch, limit, page]);
};

export const useProudtList = () => {
  const product = useSelector(selectProduct);
  return product;
};

export const useLoading = () => {
  const loading = useSelector(selectLoading);
  return loading;
};

export const usePagination = () => {
  const Pagination = useSelector(selectPagination);
  return Pagination;
};
