import Loading from "@/components/Loading";
import {
  useFetchProductList,
  useLoading,
  usePagination,
  useProudtList,
} from "@/features/product";
import { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";

function Product() {
  const [page, setPage] = useState(1);

  const { last_page } = usePagination();
  console.log(last_page);
  const products = useProudtList();
  const loading = useLoading();

  // gọi API mỗi khi page thay đổi
  useFetchProductList({ page });

  // còn page tiếp theo không?
  // Nếu last_page có giá trị (không phải null hoặc undefined), dùng giá trị đó
  // Nếu last_page là null hoặc undefined, dùng Infinity (vô cực)
  const hasNextPage = page <= (last_page ?? Infinity);

  // hàm load thêm data
  const loadMore = useCallback(() => {
    if (loading || !hasNextPage) return;
    setPage((prev) => prev + 1);
  }, [loading, hasNextPage]);

  const refresh = useCallback(() => {
    setPage(1);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Product List</title>
        <meta name="description" content="Description of products list" />
      </Helmet>

      <InfiniteScroll
        dataLength={products.length}
        next={loadMore}
        hasMore={hasNextPage}
        loader={<Loading type="load-more" />}
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={<Loading type="refresh" delay={100} />}
        releaseToRefreshContent={<Loading type="refresh" delay={100} />}
      >
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default Product;
