import Loading from "../Loading";
import Button from "../Button";
import { useCurrent } from "@/features/auth";

function Header() {
  const user = useCurrent();
  console.log(user);
  return (
    <div>
      <h1>Header</h1>
      {user ? (
        <p>{user.email}</p>
      ) : (
        <div>
          <Button outline>Sign In</Button>
          <Button outline>Sign Up</Button>
        </div>
      )}
    </div>
  );
}

export default Header;
