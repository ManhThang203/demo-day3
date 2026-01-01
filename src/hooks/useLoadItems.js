import {
  useFetchProductList,
  useLoading,
  usePagination,
  useProudtList,
} from "@/features/product";
import { useState, useCallback } from "react";

export function useLoadItems() {
  const [page, setPage] = useState(1);

  const { last_page } = usePagination();
  const products = useProudtList();
  const loading = useLoading();

  // gọi API mỗi khi page thay đổi
  useFetchProductList({ page });

  // còn page tiếp theo không?
  // Nếu last_page có giá trị (không phải null hoặc undefined), dùng giá trị đó
  // Nếu last_page là null hoặc undefined, dùng Infinity (vô cực)
  const hasNextPage = page < (last_page ?? Infinity);

  // hàm load thêm data
  const loadMore = useCallback(() => {
    if (loading || !hasNextPage) return;
    setPage((prev) => prev + 1);
  }, [loading, hasNextPage]);

  return {
    loading,
    products,
    hasNextPage,
    loadMore,
    error: null, // nếu chưa có error handling
  };
}
