import React, { useState } from "react";

import "./billing-info.styles.scss";

const BillingInfoPage = () => {
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
    <section className="billing">
      <div className="billing-data">
        <h3 className="section__title">My billing data</h3>
        {!editMode && (
          <button className="edit" onClick={() => setEditMode(true)}>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        )}
        <form className="billing-form">
          <div className="billing-form__body">
            {Object.entries(data).map(([key, value]) => (
              <FormItem
                value={value.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())}
                editMode={editMode}
                label={key.split(/(?=[A-Z])/).join(" ")}
                handleChange={handleChange}
              />
            ))}
          </div>
          {editMode && (
            <button type="button" class="btn btn-success" onClick={() => setEditMode(false)}>
              Save
            </button>
          )}
        </form>
      </div>
      <div className="payment-methods"></div>
    </section>
  );
};

const FormItem = (props) => (
  <div className="billing-form__item">
    <label>{props.label}</label>
    {props.editMode ? (
      <input
        className="billing-form__input"
        type="text"
        value={props.value}
        onChange={props.handleChange}
      />
    ) : (
      <span className="billing-form__item-text">{props.value}</span>
    )}
  </div>
);

const capitalizeFirstLetters = (word) =>
  word.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

export default BillingInfoPage;
