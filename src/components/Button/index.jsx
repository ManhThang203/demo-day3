import clsx from "clsx";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({
  primary = false,
  outline = false,
  children,
  href,
  size = "medium",
  className,
  icon,
  loading,
  leftIcon = icon,
  rightIcon,
  disabled,
  onClick,
  ...passProp
}) {
  const classNames = clsx(styles.btn, styles[size], className, {
    [styles.primary]: primary,
    [styles.outline]: outline,
    [styles.disabled]: disabled,
  });
  const Component = href ? "a" : "button";
  const shouldDisabled = disabled || loading;
  const handelClick = (e) => {
    if (shouldDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick(e);
  };
  return (
    <Component {...passProp} className={classNames} onClick={handelClick}>
      <div
        className={clsx(styles.inner, {
          [styles.hidden]: loading,
        })}
      >
        {leftIcon && <FontAwesomeIcon icon={leftIcon}></FontAwesomeIcon>}
        {children}
        {rightIcon && <FontAwesomeIcon icon={rightIcon}></FontAwesomeIcon>}
      </div>
      {disabled && (
        <FontAwesomeIcon
          className={styles.icon}
          icon={icon}
          spin
        ></FontAwesomeIcon>
      )}
    </Component>
  );
}
Button.prototype = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  href: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  passProp: PropTypes.string,
  icon: PropTypes.func,
  leftIcon: PropTypes.func,
  rightIcon: PropTypes.func,
};

export default Button;
