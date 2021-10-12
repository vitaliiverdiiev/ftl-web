import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({
  href,
  color,
  outline,
  reversed,
  classes,
  target,
  type,
  onclick,
  disabled,
  icon,
  value
}) => {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      className={`button ${color ? `button-${color}` : ""} ${
        outline ? `button-${color}-outline` : ""
      } ${reversed ? `button-reversed` : ""} ${
        classes ? classes : ""
      }`.trim()}
      href={href}
      target={target}
      type={type}
      onClick={() => onclick && onclick()}
      disabled={disabled}
    >
      {icon && <ButtonIcon children={icon} />}
      {value}
    </Tag>
  );
};

const ButtonIcon = ({children}) => (
  <span className="button-icon">{children}</span>
);

export default CustomButton;
