import React from "react";
import "./form-input.styles.scss";

const FormInput = ({
  wrapperClasses,
  label,
  value,
  type,
  placeholder,
  required,
  name,
  onchange,
}) => {
  return (
    <div className={`form-item form-group ${wrapperClasses}`}>
      <label className="form-label">
        {label} {required && <span className="form-required">*</span>}
      </label>
      <input
        className="form-control"
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={(e) => onchange && onchange(e)}
        required={required}
      />
    </div>
  );
};

export default FormInput;
