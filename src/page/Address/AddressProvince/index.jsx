import Button from "@/components/Button";
import { useGetProvincesQuery } from "@/features/address/provincesSlice";
import { Link } from "react-router";

function AddressProvince() {
  const { data } = useGetProvincesQuery();
  return (
    <>
      <h1>Province</h1>
      <Link to="/province2">
        <Button outline>Province 2</Button>
      </Link>
      <br />
      <br />
      <Link to="/product">
        <Button outline>Product</Button>
      </Link>
      <ul>
        {data?.map((p) => (
          <li key={p.province_id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AddressProvince;
