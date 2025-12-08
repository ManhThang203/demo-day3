import { useFetchProductList, useProudtList } from "@/features/product";
import { Link } from "react-router";

function Product() {
  useFetchProductList();
  const product = useProudtList();
  return (
    <>
      <h1>Product List</h1>
      <Link to="/address/provinces">List 1</Link>
      <ul>
        {product.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Product;
