import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
function TextInput({
  label,
  name,
  type = "text",
  register,
  errors,
  required,
  placeholder,
  showTogglePassword = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  // Kiểm tra showTogglePassword và type(có phải là password không)
  // Nếu true kiểm tra tiêp điể kiện showPassword. Nếu đúng chuyển thành text nếu sai chuyển password
  // Nếu điều kiện ngoài showTogglePassword và type(có phải là password không) trả về false thì dữ nguyên type của nó
  const inputType =
    showTogglePassword && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}

      <br />
      <div className={styles.inner}>
        <input
          id={name}
          type={inputType}
          {...register(name, { required })}
          placeholder={placeholder}
        />
        {showTogglePassword && type === "password" && (
          <span
            className={styles.eye}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        )}
      </div>
      {errors && <p>{errors.message}</p>}
    </div>
  );
}

TextInput.prototype = {
  required: PropTypes.func.isRequired,
  showTogglePassword: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default TextInput;
