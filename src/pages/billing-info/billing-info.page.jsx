import React, { useState } from "react";
import "./billing-page.styles.scss";

const BillingInfoPage = () => (
  <div className="page page__billing-info">
    <div className="page__inner">
      <div className="page__section">
        <div className="page__section-body">
          <BillingInfoForm />
        </div>
      </div>
      <div className="page__section"></div>
    </div>
  </div>
);

const BillingInfoForm = (props) => {
  const [editMode, setEditMode] = useState(false);

  const [data, setData] = useState({
    country: "ukraine",
    cityRegion: "sumy region",
    district: "romny",
    settlement: "kozhyce",
    street: "yevhena konovaltsia, 24k",
    zip: "09876",
    fullName: "Dmytro Anatolijovych Makarenko",
    ukrainianName: "Дмитро Анатолійович Макаренко",
    individualTaxNumber: "987644232",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <form className="form billing-info-form">
      <div className="form__header">
        <h3 className="form__header-title">My billing data</h3>
        {!editMode && (
          <button
            className="btn btn-outline-success btn-edit"
            type="button"
            onClick={() => setEditMode(true)}
          >
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <div className="form__body">
        <FormInput
          label="Country"
          name="country"
          value={data["country"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="City/Region"
          name="cityRegion"
          value={data["cityRegion"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="District"
          name="district"
          value={data["district"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="Settlement"
          name="settlement"
          value={data["settlement"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="Street"
          name="street"
          value={data["street"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="Zip"
          name="zip"
          value={data["zip"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="Full Name"
          name="fullName"
          value={data["fullName"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="Ukrainian Name"
          name="ukrainianName"
          value={data["ukrainianName"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
        <FormInput
          label="Individual Tax Number"
          name="individualTaxNumber"
          value={data["individualTaxNumber"]}
          onChange={handleChange}
          editMode={editMode}
          required
        />
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

const FormInput = (props) => {
  const { label, name, value, onChange, required, editMode } = props;

  return (
    <div className="form__item">
      <span className="form__item-label">{label}</span>
      {editMode ? (
        <input
          className="form__item-input"
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      ) : (
        <span className="form__item-value">{value}</span>
      )}
    </div>
  );
};

const capitalizeFirstLetters = (word) =>
  word
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    .split(/(?=[A-Z])/)
    .join(" ");

export default BillingInfoPage;
