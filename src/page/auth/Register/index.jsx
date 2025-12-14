import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };
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

        <Button outline>Submit</Button>
      </form>
    </>
  );
}

export default Register;
