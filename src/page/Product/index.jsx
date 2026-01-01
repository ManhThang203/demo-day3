import Button from "@/components/Button";
import { Link } from "react-router";
import useInfiniteScroll from "react-infinite-scroll-hook";
import Loading from "@/components/Loading";
import { useLoadItems } from "@/hooks";

function Product() {
  const { loading, products, hasNextPage, error, loadMore } = useLoadItems();

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: Boolean(error) || !hasNextPage,
    rootMargin: "0px 0px 200px 0px",
  });

  return (
    <div>
      <h1>Product List</h1>

      <Link to="/province">
        <Button outline>province</Button>
      </Link>

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

      {hasNextPage && <Loading ref={infiniteRef} loading={loading} />}
    </div>
  );
}

export default Product;
