import React from "react";
import "./button.styles.scss";

const Button = ({
  classes,
  type,
  onclick,
  disabled,
  icon,
  value,
  href,
  target,
  color,
  outline,
  reversed,
}) =>
  href ? (
    <a
      className={`button ${color ? `button-${color}` : ""} ${
        outline ? `button-${color}-outline` : ""
      } ${reversed ? `button-reversed` : ""} ${classes ? classes : ""}`.trim()}
      href={href}
      target={target}
    >
      {icon && <ButtonIcon children={icon} />}
      {value}
    </a>
  ) : (
    <button
      className={`button ${color ? `button-${color}` : ""} ${
        outline ? `button-${color}-outline` : ""
      } ${reversed ? `button-reversed` : ""} ${classes ? classes : ""}`.trim()}
      type={type}
      onClick={(e) => onclick && onclick(e)}
      disabled={disabled}
    >
      {icon && <ButtonIcon children={icon} />}
      {value}
    </button>
  );

const ButtonIcon = (props) => (
  <div className="button-icon">{props.children}</div>
);

export default Button;
