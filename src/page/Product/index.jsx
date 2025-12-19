import Button from "@/components/Button";
import { useFetchProductList, useProudtList } from "@/features/product";
import { Link } from "react-router";

function Product() {
  useFetchProductList();
  const product = useProudtList();

  return (
    <>
      <h1>Product List</h1>
      <Link to="/province">
        <Button outline>province</Button>
      </Link>
      <ul>
        {product.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Product;
