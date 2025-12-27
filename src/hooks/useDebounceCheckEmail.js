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
    // 1. Email rỗng → không làm gì
    if (!email) return;

    // 2. Email sai định dạng → trigger validate
    if (!EMAIL_REGEX.test(email)) {
      trigger("email");
      return;
    }

    // 3. Email đúng định dạng → debounce gọi API
    const timer = setTimeout(() => {
      authServices.checkExistsEmail(email).then((exists) => {
        if (exists) {
          setError("email", {
            type: "check-email",
            message: "Email đã tồn tại, chọn email khác",
          });
        } else {
          setError("email", null);
        }
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [email, delay, trigger, setError]);
};
