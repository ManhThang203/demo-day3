import { setCurrentUser, useCurrentUser } from "@/features/auth";
import Button from "@/components/Button";
import * as authServices from "@/services/product/currentServices";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
function Header() {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await authServices.logout();
    } catch (error) {
      console.log(error);
    } finally {
      localStorage.clear();
      navigate("/login");
      dispatch(setCurrentUser(null));
    }
  };
  return (
    <>
      <motion.h1 animate={{ x: 100 }}>Header</motion.h1>
      {currentUser ? (
        <>
          <p>{currentUser?.email}</p>
          <Button outline onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Link to="/register">
            <Button outline>Register</Button>
          </Link>
        </>
      )}
    </>
  );
}

export default Header;
