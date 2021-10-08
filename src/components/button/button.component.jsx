import React from "react";
import "./button.styles.scss";

const Button = ({ classes, type, onclick, disabled, icon, value }) => (
  <button
    className={`button ${classes}`}
    type={type}
    onClick={() => onclick && onclick()}
    disabled={disabled && true}
  >
    {icon && <ButtonIcon children={icon} />}
    {value}
  </button>
);

const ButtonIcon = (props) => (
  <div className="button-icon">{props.children}</div>
);

export default Button;
