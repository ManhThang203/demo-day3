import { useCurrent } from "@/features/auth";
import { Navigate, Outlet, useLocation } from "react-router";

function PrivateRoute() {
  const CurrentUser = useCurrent();
  // Lấy ra đường dẫn mà mã hóa
  const { pathname } = useLocation();

  if (!CurrentUser) {
    // Navigate là 1 component dùng để chuyển trang thông qua render
    // Nếu sử dụng useNavige thì phải sử lý khi click hoặc trong useEffect
    return <Navigate to={`/login?continue=${encodeURIComponent(pathname)}`} />;
  }
  return <Outlet />;
}

export default PrivateRoute;
