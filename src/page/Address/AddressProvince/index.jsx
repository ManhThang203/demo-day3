import { useGetProvincesQuery } from "@/features/address/provincesSlice";
import { Link } from "react-router";

function AddressProvince() {
  const { data } = useGetProvincesQuery();

  return (
    <>
      <h1>Provinces</h1>
      <Link to="/address/provinces2">List 2</Link>
      <br />
      <ul>
        {data?.map((p) => (
          <li key={p.province_id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AddressProvince;
