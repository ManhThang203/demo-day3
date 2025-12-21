import { EMAIL_REGEX } from "@/utils/validators";
import { useEffect } from "react";
import * as authServices from "@/services/product/currentServices";
export const useDebounceCheckEmail = ({
  setError,
  trigger,
  watch,
  delay = 600,
}) => {
  const email = watch("email");
  useEffect(() => {
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
  }, [setError, trigger, delay, watch, email]);
};
