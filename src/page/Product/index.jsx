import Loading from "@/components/Loading";
import {
  useFetchProductList,
  useLoading,
  useProductList,
} from "@/features/product/hooks";

function Product() {
  useFetchProductList();
  const product = useProductList();
  const loading = useLoading();
  return (
    <>
      <h1>Product List</h1>
      {loading ? (
        <ul>
          {product.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </>
  );
}
export default Product;
