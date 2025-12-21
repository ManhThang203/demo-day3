// import { checkExistsEmail } from "@/services/product";
// import { checkExistsEmail } from "@/services/product";
import { object, string, ref, addMethod } from "yup";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
  password: string().min(8, "Mật khẩu cần ít nhất 8 ký tự"),

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
