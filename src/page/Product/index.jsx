import { selectList as selectProductList } from "@/features/product/productSlice";
import { getList as getProductList } from "@/services/product/productServices";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const product = useSelector(selectProductList);
  console.log(product);
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
