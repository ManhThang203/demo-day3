import { object, string, ref, addMethod } from "yup";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// kiểm tra khi nhập input đó có đúng định dạng email hay không
addMethod(string, "email", function (message) {
  return this.matches(EMAIL_REGEX, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

export const registerSchema = object({
  firstName: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Ít nhất phải 2 ký tự"),
  lastName: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Ít nhất phải 2 ký tự"),
  email: string().email("Sai định dạng email"),
  password: string()
    .required("Mật khẩu là bặt buộc")
    .matches(
      PASSWORD_REGEX,
      "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
    ),
  password_confirmation: string()
    .required("nhập lại mật khẩu là bặt buộc")
    .oneOf([ref("password")], "Nhập lại mất khẩu, Không khớp"),
});
