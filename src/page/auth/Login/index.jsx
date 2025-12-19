import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import * as authServices from "@/services/product/currentServices";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useCurrentUser } from "@/features/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const currentUser = useCurrentUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "manhthang99@gmail.com",
      password: "123456789",
    },
  });

  useEffect(() => {
    if (currentUser) {
      const continuePath = params.get("continue") || "/";
      navigate(continuePath);
    }
  }, [currentUser, navigate, params]);
  const onSubmit = async (data) => {
    const { access_token, refresh_token } = await authServices.login(data);
    if (access_token) {
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      dispatch(authServices.getCurrentUser());
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          lable="email"
          name="email"
          type="text"
          register={register}
          errors={errors.email}
          required="Vui lòng nhập trường này"
          placeholder="Enter email..."
        />
        <br />
        <TextInput
          lable="password"
          name="password"
          type="text"
          register={register}
          errors={errors.password}
          required="Vui lòng nhập trường này"
          placeholder="Enter password..."
        />
        <br />
        <Button outline>Login</Button>
      </form>
    </div>
  );
}

export default Login;
