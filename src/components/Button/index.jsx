import clsx from "clsx";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function Button({
  primary = false,
  outline = false,
  children,
  icon,
  href,
  size = "medium",
  onClick,
  className,
  leftIcon = icon,
  rightIcon,
  loading = false,
  disabled,
  ...passProp
}) {
  const shouldDisabled = disabled || loading;
  const classNames = clsx(style.btn, style[size], className, {
    [style.primary]: primary,
    [style.outline]: outline,
    [style.disabled]: shouldDisabled,
  });
  const Component = href ? "a" : "button";
  const handleClick = (e) => {
    if (shouldDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick(e);
  };
  return (
    <Component {...passProp} className={classNames} onClick={handleClick}>
      <div
        className={clsx(style.inner, {
          [style.hidden]: loading,
        })}
      >
        {leftIcon && <FontAwesomeIcon icon={leftIcon} className={style.icon} />}
        <span>{children}</span>
        {rightIcon && (
          <FontAwesomeIcon icon={rightIcon} className={style.icon} />
        )}
      </div>
      {loading && (
        <FontAwesomeIcon className={style.loading} icon={faSpinner} spin />
      )}
    </Component>
  );
}

Button.prototype = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  passProp: PropTypes.string,
  icon: PropTypes.obj,
  leftIcon: PropTypes.obj,
  loading: PropTypes.bool,
};

export default Button;
