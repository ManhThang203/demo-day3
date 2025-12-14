import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import * as authService from "@/services/product/currentUserServices";
import { useNavigate, useSearchParams } from "react-router";
import { useCurrent } from "@/features/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Login() {
  const navigate = useNavigate();
  const currentUser = useCurrent();
  const dispatch = useDispatch();
  const [params] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "manhthang0101@gmail.com",
      password: "123456789",
    },
  });

  useEffect(() => {
    if (currentUser) {
      // Nếu không có path tồn tại thì đá về trang chủ
      const continuePath = params.get("continue") || "/";
      navigate(continuePath);
    }
  }, [currentUser, navigate, params]);

  const onSubmit = async (data) => {
    const { access_token } = await authService.login(data);
    if (access_token) {
      localStorage.setItem("token", access_token);
      dispatch(authService.getCurrentUser());
    }
  };
  console.log(params.get("continue"));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="email"
          name="email"
          type="text"
          register={register}
          placeholder="Enter email..."
          required="Vui long nhập trường này"
          errors={errors.email}
        />

        <TextInput
          label="password"
          name="password"
          type="text"
          register={register}
          placeholder="Enter password..."
          required="Vui long nhập trường này"
          errors={errors.password}
        />

        <Button outline>Login</Button>
      </form>
    </>
  );
}

export default Login;
