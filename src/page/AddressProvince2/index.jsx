import Loading from "@/components/Loading";
import { useGetProvincesQuery } from "@/features/address/provincesSlice";
import { Link } from "react-router";

function AddressProvince2() {
  const { isLoading, data } = useGetProvincesQuery();

  return (
    <>
      <h1>Provinces List</h1>
      <Link to="/address/provinces">List 1</Link>
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

export default AddressProvince2;
