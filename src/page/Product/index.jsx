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
  console.log(loading);
  return (
    <>
      <h1>Product List</h1>
      {loading ? (
        <Loading />
      ) : (
        <ul>
          {product.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Product;
