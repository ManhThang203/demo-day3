import Loading from "@/components/Loading";
import { useGetProvincesQuery } from "@/features/address/provincesSlice";
import { Link } from "react-router";

function AddressProvince() {
  const { isLoading, data } = useGetProvincesQuery();

  return (
    <>
      <h1>Provinces List</h1>
      <Link to="/address/provinces2">List 2</Link>
      <br />
      <Link to="/product">Product</Link>
      {isLoading ? (
        <div>...loading</div>
      ) : (
        <ul>
          {data.map((p) => (
            <li key={p.province_id}>{p.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AddressProvince;
