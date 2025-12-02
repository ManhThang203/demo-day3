import { useFetchProductList, useProductList } from "@/features/product";

function Product() {
  useFetchProductList();
  const product = useProductList();
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {product.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Product;
