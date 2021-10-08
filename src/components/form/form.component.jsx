import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import employeeBillingInformation from "../../assets/data/employee-billing-information";
import { capitalizeFirstLetters } from "../../utils/textModifiers";
import "./form.styles.scss";

const BillingInfoForm = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [billingInformation, setBillingInformation] = useState(employeeBillingInformation);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBillingInformation({
      ...billingInformation,
      [name]: value,
    });
  };

  return (
    <form className="form">
      <div className="form__header">
        <h3 className="form__header-title">My billing data</h3>
        {!editMode && (
          <button
            className="btn btn-outline-success btn-edit"
            type="button"
            onClick={() => setEditMode(true)}
          >
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <div className="form__body">
        {Object.entries(billingInformation).map(([key, value]) => (
          <FormInput
            key={key}
            label={capitalizeFirstLetters(key)}
            name={key}
            value={value}
            onChange={handleChange}
            editMode={editMode}
            required
          />
        ))}
      </div>
      <div className="form__footer">
        {editMode && (
          <button
            className="form__btn btn btn-success"
            type="button"
            onClick={() => setEditMode(false)}
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
};

export default BillingInfoForm;
