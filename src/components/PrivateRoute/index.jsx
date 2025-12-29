import { useCurrentUser, useFetching } from "@/features/auth";
import { Navigate, Outlet, useLocation } from "react-router";
import Loading from "../Loading";

function PrivateRoute() {
  const currentUser = useCurrentUser();
  const { pathname } = useLocation();
  const fetching = useFetching();
  if (fetching) {
    return <div>Loading...</div>;
  }
  if (!currentUser)
    return <Navigate to={`/login?continue=${encodeURIComponent(pathname)}`} />;
  return <Outlet />;
}

export default PrivateRoute;
