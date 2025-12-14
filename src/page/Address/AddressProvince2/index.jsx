import { useGetProvincesQuery } from "@/features/address/provincesSlice";
import { Link } from "react-router";

function AddressProvince2() {
  const { data } = useGetProvincesQuery();

  return (
    <>
      <h1>Provinces</h1>
      <Link to="/address/provinces">list 1</Link>
      <br />
      <Link to="/product">product</Link>
      <ul>
        {data?.map((p) => (
          <li key={p.province_id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AddressProvince2;
