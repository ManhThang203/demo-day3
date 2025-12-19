import PropTypes from "prop-types";

function TextInput({
  lable,
  name,
  type = "text",
  register,
  errors,
  required,
  placeholder,
}) {
  return (
    <>
      {lable && <lable>{lable}</lable>}
      <br />
      <input
        id={name}
        type={type}
        {...register(name, { required })}
        placeholder={placeholder}
      />
      {errors && <p>{errors.message}</p>}
    </>
  );
}

TextInput.prototype = {
  required: PropTypes.func.isRequired,
  lable: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default TextInput;
