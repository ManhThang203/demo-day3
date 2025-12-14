import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";
import * as authService from "@/services/product/currentUserServices";
import { useNavigate } from "react-router";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "Thang",
      lastName: "Manh",
      email: "manhthang0101@gmail.com",
      password: "123456789",
      password_confirmation: "123456789",
    },
  });

  const onSubmit = async (data) => {
    const { access_token } = await authService.register(data);
    if (access_token) {
      localStorage.setItem("token", access_token);
      navigate("/login");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="firstName"
          name="firstName"
          type="text"
          register={register}
          placeholder="Enter firstName..."
          required="Vui long nhập trường này"
          errors={errors.firstName}
        />
        <TextInput
          label="lastName"
          name="lastName"
          type="text"
          register={register}
          placeholder="Enter lastName..."
          required="Vui long nhập trường này"
          errors={errors.lastName}
        />
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
        <TextInput
          label="password_confirmation"
          name="password_confirmation"
          type="text"
          register={register}
          placeholder="Enter password_confirmation..."
          required="Vui long nhập trường này"
          errors={errors.password_confirmation}
        />

        <Button outline>Submit</Button>
      </form>
    </>
  );
}

export default Register;
