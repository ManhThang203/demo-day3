import { useCurrentUser } from "@/features/auth";
import { Navigate, Outlet, useLocation } from "react-router";

function PrivateRoute() {
  const currentUser = useCurrentUser();
  const { pathname } = useLocation();
  if (!currentUser)
    return <Navigate to={`/login?continue=${encodeURIComponent(pathname)}`} />;
  return <Outlet />;
}

export default PrivateRoute;
