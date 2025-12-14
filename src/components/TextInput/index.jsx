import PropTypes from "prop-types";

function TextInput({
  label,
  name,
  type = "text",
  register,
  placeholder,
  required,
  errors,
}) {
  return (
    <div>
      {label && <label>{label}</label>}
      <br />
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required })}
      />
      {errors && <p>{errors.message}</p>}
    </div>
  );
}

TextInput.prototype = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.object,
  errors: PropTypes.object,
};

export default TextInput;
