import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import * as authServices from "@/services/product/currentServices";
import { useNavigate } from "react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/utils/validators";
import { useConfirmPassword } from "@/hooks";
import { useDebounceCheckEmail } from "@/hooks/useDebounceCheckEmail";

function Register() {
  const navigate = useNavigate();
  const {
    register,
    trigger,
    watch,
    setError,
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
  useDebounceCheckEmail({ setError, trigger, watch });
  useConfirmPassword({ trigger, watch, setError });

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="firstName"
          name="firstName"
          type="text"
          register={register}
          errors={errors.firstName}
          required="Vui lòng nhập trường này"
          placeholder="Enter firstName..."
        />
        <br />
        <TextInput
          label="lastName"
          name="lastName"
          type="text"
          register={register}
          errors={errors.lastName}
          required="Vui lòng nhập trường này"
          placeholder="Enter lastName..."
        />
        <br />
        <TextInput
          label="email"
          name="email"
          type="text"
          register={register}
          errors={errors.email}
          required="Vui lòng nhập trường này"
          placeholder="Enter email..."
        />
        <br />
        <TextInput
          label="password"
          name="password"
          type="password"
          register={register}
          errors={errors.password}
          required="Vui lòng nhập trường này"
          placeholder="Enter password..."
        />
        <br />
        <TextInput
          label="password_confirmation"
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
