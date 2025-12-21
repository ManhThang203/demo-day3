import { useEffect } from "react";

export const useConfirmPassword = ({ watch, trigger, setError }) => {
  const password = watch("password");

  useEffect(() => {
    const confirmation = watch("password_confirmation");
    // Nếu confirmation không rỗng và password khác confirmation
    if (confirmation && password !== confirmation) {
      trigger("password_confirmation");
    } else {
      setError("password_confirmation", null);
    }
  }, [password, setError, trigger, watch]);
};
