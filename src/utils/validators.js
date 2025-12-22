// import { checkExistsEmail } from "@/services/product";
// import { checkExistsEmail } from "@/services/product";
import { object, string, ref, addMethod } from "yup";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

addMethod(string, "email", function (message) {
  return this.matches(EMAIL_REGEX, {
    message,
    name: "email",
    excludeEmptyString: true,
  });
});

// let timer;

// const debounceCheckExistsEmail = (email) => {
//   return new Promise((resolve, reject) => {
//     clearTimeout(timer);
//     timer = setTimeout(async () => {
//       try {
//         const exists = await checkExistsEmail(email);
//         resolve(exists);
//       } catch (error) {
//         reject(error);
//       }
//     }, 600);
//   });
// };

export const registerSchema = object({
  firstName: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Ít nhất phải 2 ký tự"),
  lastName: string()
    .required("Tên người dùng là bắt buộc")
    .min(2, "Ít nhất phải 2 ký tự"),
  email: string().email("Sai định dạng email"),
  /** cách 1 để check xem gọi dự email sau 1 khoản thời gian sử dụng kĩ thuật debounce **/
  // .test(
  //   "email",
  //   "Email đã tồn tại, chọn email khác",
  //   async (value, context) => {
  //     if (!value) return false;
  //     try {
  //       // string().email().validate(context.parent.email) đây là 1 Promise
  //       await string().email().validate(context.parent.email);
  //       const exists = await debounceCheckExistsEmail(value);
  //       return !exists;
  //       // eslint-disable-next-line no-unused-vars
  //     } catch (error) {
  //       return false;
  //     }
  //   }
  // ),
  password: string()
    .required("Mật khẩu là bặt buộc")
    .matches(
      PASSWORD_REGEX,
      "Mật khẩu phải có ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt"
    ),

  /** Cách 1 **/

  //   password_confirmation: string().test(
  //     "password_confirmation",
  //     "Nhập lại mất khẩu, Không khớp",
  //     (value, context) => {
  //       return value === context.parent.password;
  //     }
  //   ),

  /** Cách 2 **/

  password_confirmation: string().oneOf(
    [ref("password")],
    "Nhập lại mất khẩu, Không khớp"
  ),
});
