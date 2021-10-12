import React from "react";
import "./custom-form-field.styles.scss";

const CustomFormField = (props) => {
  return (
    <div className="form-group">
      <label className="form-label">{props.label}</label>

      {props.options && (
        <select
          name="payment-method"
          className={`form-select ${props.classes ? props.classes : ""}`}
        >
          {props.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
      {props.type && (
        <input
          className={`form-control ${props.classes}`}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
        />
      )}
    </div>
  );
};

export default CustomFormField;
