import Button from "@/components/Button";
import { useGetProvincesQuery } from "@/features/address/provincesSlice";
import { Link } from "react-router";

function AddressProvince2() {
  const { data } = useGetProvincesQuery();

  return (
    <>
      <h1>Province 2</h1>
      <Link to="/province">
        <Button outline>Province 1</Button>
      </Link>
      <ul>
        {data?.map((p) => (
          <li key={p.province_id}>{p.name}</li>
        ))}
      </ul>
    </>
  );
}

export default AddressProvince2;
