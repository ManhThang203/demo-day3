import { EMAIL_REGEX } from "@/utils/validators";
import { useEffect } from "react";
import * as authServices from "@/services/product/currentServices";
export const useDebounceCheckEmail = ({
  watch,
  trigger,
  setError,
  delay = 600,
}) => {
  const email = watch("email");
  useEffect(() => {
    // Nếu input email ko có nội dung hoặc không đúng định dạng email thì return luôn
    if (!email && !EMAIL_REGEX.test(email)) return;

    if (email && EMAIL_REGEX.test(email)) {
      const timer = setTimeout(() => {
        authServices.checkExistsEmail(email).then((exists) => {
          if (exists) {
            setError("email", {
              type: "check-email",
              message: "Email đã tồn tại, chọn email khác",
            });
          }
        });
      }, delay);
      return () => clearTimeout(timer);
    }
    if (email) trigger("email");
  }, [delay, email, setError, trigger]);
};
