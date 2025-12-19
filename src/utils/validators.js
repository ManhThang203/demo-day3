import { object, string, ref } from "yup";

export const registerSchema = object({
  firstName: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Ít nhất phải 2 ký tự"),
  lastName: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Ít nhất phải 2 ký tự"),
  email: string().email("Sai định dạng email"),
  password: string().min(8, "Mật khẩu cần ít nhất 8 ký tự"),
  //   password_confirmation: string().test(
  //     "password_confirmation",
  //     "Nhập lại mất khẩu, Không khớp",
  //     (value, context) => {
  //       return value === context.parent.password;
  //     }
  //   ),
  password_confirmation: string().oneOf(
    [ref("password")],
    "Nhập lại mất khẩu, Không khớp"
  ),
});
