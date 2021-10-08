import React from 'react';

const FormInput = (props) => 
      <div className="form__item">
        <span className="form__item-label">
          {props.label}
          {props.required && <span className="form__item-required"> *</span>}
        </span>
  
        {props.editMode ? (
          <input
            className="form__item-input"
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            required={props.required}
          />
        ) : (
          <span className="form__item-value">{props.value}</span>
        )}
      </div>
    


  export default FormInput;