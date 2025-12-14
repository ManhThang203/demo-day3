import { useCurrent } from "@/features/auth";
import Button from "../Button";
import { Link } from "react-router";

function Header() {
  const currentUser = useCurrent();
  console.log(currentUser);
  return (
    <div>
      <h1>Header</h1>
      {currentUser ? (
        <p>{currentUser.email}</p>
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
