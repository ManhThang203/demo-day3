import Button from "@/components/Button";

import {
  useFetchProductList,
  useLoading,
  usePagination,
  useProudtList,
} from "@/features/product";
import { useInfiniteScroll } from "@/hooks";

import { useCallback, useRef, useState } from "react";
import { Link } from "react-router";

function Product() {
  const [page, setPage] = useState(1);
  const { last_page } = usePagination();
  const product = useProudtList();
  const isloading = useLoading();

  const lastItem = useRef();
  console.log(lastItem.current);

  // hook call api danh sách các page
  useFetchProductList({ page });

  // ghi nhớ hàm handleLoadMore tranh bị re-render lại
  const handleLoadMore = useCallback(() => {
    if (isloading || page >= last_page) return;
    setPage(page + 1);
  }, [isloading, last_page, page]);

  // useInfinifyLoad({
  //   bottomOffset: -200,
  //   onEnd: handleLoadMore,
  // });

  // hook sử dùng để load dữ liệu
  useInfiniteScroll({
    targetRef: lastItem,
    onLoadMore: handleLoadMore,
    enabled: product.length > 0,
  });

  return (
    <div>
      <h1>Product List</h1>
      <Link to="/province">
        <Button outline>province</Button>
      </Link>
      <div>
        <ul>
          {product.map((p) => (
            <li ref={lastItem} key={p.id}>
              {p.title}
            </li>
          ))}
          {/* <Waypoint bottomOffset={-100} onEnter={handleLoadMore} /> */}
        </ul>
      </div>
      {isloading && <div>Loading...</div>}
    </div>
  );
}
export default Product;
