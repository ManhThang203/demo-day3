import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import * as authServices from "@/services/product/currentServices";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/utils/validators";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    resolver: yupResolver(registerSchema),
  });
  const onSubmit = async (data) => {
    const { access_token } = await authServices.register(data);

    if (access_token) {
      localStorage.setItem("accessToken", access_token);
      navigate("/login");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          lable="firstName"
          name="firstName"
          type="text"
          register={register}
          errors={errors.firstName}
          required="Vui lòng nhập trường này"
          placeholder="Enter firstName..."
        />
        <br />
        <TextInput
          lable="lastName"
          name="lastName"
          type="text"
          register={register}
          errors={errors.lastName}
          required="Vui lòng nhập trường này"
          placeholder="Enter lastName..."
        />
        <br />
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
          type="password"
          register={register}
          errors={errors.password}
          required="Vui lòng nhập trường này"
          placeholder="Enter password..."
        />
        <br />
        <TextInput
          lable="password_confirmation"
          name="password_confirmation"
          type="password"
          register={register}
          errors={errors.password_confirmation}
          required="Vui lòng nhập trường này"
          placeholder="Enter password_confirmation..."
        />
        <br />
        <Button outline>Register</Button>
      </form>
    </div>
  );
}

export default Register;
