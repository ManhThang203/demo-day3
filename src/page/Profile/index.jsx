import { useCurrent } from "@/features/auth";

function Profile() {
  const current = useCurrent();
  return <p>{JSON.stringify(current)}</p>;
}

export default Profile;
