import Button from "@/components/Button";
import Loading from "@/components/Loading";
import {
  useFetchProductList,
  useLoading,
  useProudtList,
} from "@/features/product";
import { useState } from "react";
import { Link } from "react-router";
import { Waypoint } from "react-waypoint";

function Product() {
  const [page, setPage] = useState(1);

  useFetchProductList({ page });
  const product = useProudtList();
  const isloading = useLoading();
  return (
    <div>
      <h1>Product List</h1>
      <Link to="/province">
        <Button outline>province</Button>
      </Link>
      <div>
        <ul>
          {product.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
          <Waypoint bottomOffset={-100} onEnter={() => setPage(page + 1)} />
        </ul>
      </div>
      {isloading && <div>Loading...</div>}
    </div>
  );
}
export default Product;
