import { useEffect } from "react";

export const useConfirmPassword = ({ watch, trigger, setError }) => {
  const password = watch("password");
  useEffect(() => {
    const confirmation = watch("password_confirmation");
    // Nếu mà confirmation có nội dung và nội dung khác với password
    if (confirmation && password !== confirmation) {
      trigger("password_confirmation");
    } else {
      setError("password_confirmation");
    }
  }, [password, setError, trigger, watch]);
};
