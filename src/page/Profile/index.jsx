import { useCurrentUser } from "@/features/auth";

function Profile() {
  const current = useCurrentUser();
  return <p>{JSON.stringify(current)}</p>;
}

export default Profile;
