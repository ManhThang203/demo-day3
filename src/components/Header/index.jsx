import { setcurrentUser, useCurrent } from "@/features/auth";
import Button from "../Button";
import { Link, useNavigate } from "react-router";
import * as authService from "@/services/product";
import { useDispatch } from "react-redux";

function Header() {
  const currentUser = useCurrent();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.clear();
      dispatch(setcurrentUser(null));
      navigate("/login");
    }
  };
  return (
    <div>
      <h1>Header</h1>
      {currentUser ? (
        <>
          <p>{currentUser.email}</p>
          <Button onClick={handleLogout} outline>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link to="login">
            <Button outline>Sign In</Button>
          </Link>
          <Link to="register">
            <Button outline>Sign Up</Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Header;
