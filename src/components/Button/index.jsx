import clsx from "clsx";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Button({
  primary = false,
  outline = false,
  children,
  size = "medium",
  passProp,
  className,
  href,
  icon,
  leftIcon = icon,
  rightIcon,
  loading,
  disabled,
  onClick,
}) {
  const Component = href ? "a" : "button";
  const classNames = clsx(style.btn, style[size], className, {
    [style.primary]: primary,
    [style.outline]: outline,
    [style.disabled]: disabled,
  });
  const shouldDisabled = loading || disabled;
  return (
    <Component {...passProp} className={classNames} onClick={onClick}>
      <div
        className={clsx(style.inner, {
          [style.hidden]: shouldDisabled,
        })}
      >
        {leftIcon && <FontAwesomeIcon icon={leftIcon}></FontAwesomeIcon>}
        {children}
        {rightIcon && <FontAwesomeIcon icon={rightIcon}></FontAwesomeIcon>}
      </div>
      {shouldDisabled && (
        <FontAwesomeIcon
          className={style.icon}
          icon={icon}
          spin
        ></FontAwesomeIcon>
      )}
    </Component>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  passProp: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.func,
  rightIcon: PropTypes.func,
  onClick: PropTypes.func,
};

export default Button;
