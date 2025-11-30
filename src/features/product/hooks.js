import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList as getProductList } from "@/services/product/productServices";
import { selectLoading, selectProduct } from "@/features/product/productSlice";

/**
 * Custom hook để fetch danh sách sản phẩm khi component được mount.
 * - useEffect chạy 1 lần khi component render lần đầu
 * - dispatch action getProductList() để gọi API lấy danh sách sản phẩm từ service
 */
export const useFetchProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Gửi action gọi API lấy danh sách sản phẩm
    dispatch(getProductList());
  }, [dispatch]); // đưa dispatch vào dependency theo khuyến cáo của react-hooks
};

/**
 * Custom hook để lấy dữ liệu product từ Redux store
 * - selectProduct là selector trả về state.product
 */
export const useProductList = () => {
  const product = useSelector(selectProduct);
  return product;
};

/**
 * Custom hook để lấy trạng thái loading từ Redux store
 * - selectLoading lấy state.loading trong slice product
 * - Hữu ích để hiển thị UI chờ khi fetch data
 */
export const useLoading = () => {
  const loading = useSelector(selectLoading);
  return loading;
};
