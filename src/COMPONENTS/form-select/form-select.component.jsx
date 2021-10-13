import React from "react";
import "./form-select.styles.scss";

const FormSelect = ({
  wrapperClasses,
  label,
  options,
  required,
  name,
  onchange,
}) => {
  return (
    <div className={`form-group form-item ${wrapperClasses}`}>
      <label className="form-label">
        {label} {required && <span className="form-required">*</span>}
      </label>
      <div className="form-select">
        <select
          className="form-control"
          name={name}
          onChange={(e) => onchange && onchange(e)}
          required={required}
        >
          <option></option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
