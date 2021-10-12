import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./add-billing-method.styles.scss";
import CustomFormField from "../../components/custom-form-field/custom-form-field.component";
import { countries } from "../../utils/data/countries";

const chevronLeftIcon = (
  <i className="fa fa-chevron-left" aria-hidden="true"></i>
);
const chevronRightIcon = (
  <i className="fa fa-chevron-right" aria-hidden="true"></i>
);

const AddBillingMethodPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [step] = useState([
    {
      stepNumber: 1,
      stepTitle: "Add new payment method",
    },
    {
      stepNumber: 2,
      stepTitle: "Add bank of beneficiary",
    },
    {
      stepNumber: 3,
      stepTitle: "Add correspondent bank",
    },
  ]);

  function handleSteps(e) {
    e.target.innerText.toLowerCase() === "prev" &&
      currentStep !== 1 &&
      setCurrentStep(currentStep - 1);
    e.target.innerText.toLowerCase() === "next" &&
      currentStep !== step.length &&
      setCurrentStep(currentStep + 1);
  }

  return (
    <div className="card">
      <div className="card-header">
        {step.map(({ stepNumber, stepTitle }) => (
          <div
            key={stepNumber}
            className={`step step-${stepNumber} ${
              stepNumber === currentStep ? "step--active" : ""
            }`}
          >
            <span className="step-number">{stepNumber}</span>
            <span className="step-title">{stepTitle}</span>
          </div>
        ))}
      </div>
      <div className="card-body">
        <form className="form" action="#" method="post">
          <h3 className="form-header">{step[currentStep - 1].stepTitle}</h3>
          {currentStep === 1 && (
            <>
              <div className="row">
                <div className="col-3">
                  <label className="form-label">Payment method</label>
                  <select className="form-select">
                    <option value="bank account">Bank account</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">Create a name</label>
                  <input
                    className="form-control"
                    type="text"
                    value="Ukrsyb FOP"
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">IBAN</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="__ __ __ __ __ __ __ __"
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Bank name</label>
                  <select className="form-select">
                    <option value="ukrsybbank">Ukrsybbank</option>
                    <option value="monobank">Monobank</option>
                    <option value="privat bank">Privat bank</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-6">
                  <label className="form-label">
                    Full name (latin Ukrainian language)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    value="Dmytro  Anatoliievych Makarenko"
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Country</label>
                  <select className="form-select">
                    {countries.map((option) => (
                      <option
                        key={option.code}
                        value={option.name}
                        selected={option.name === "Ukraine" && option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">City(region)</label>
                  <select className="form-select">
                    <option value="kyiv" selected>
                      Kyiv
                    </option>
                    <option value="lviv">Lviv</option>
                    <option value="odessa">Odessa</option>
                  </select>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <label className="form-label">District</label>
                  <select className="form-select">
                    <option value="pecherski">Pecherski</option>
                    <option value="golosievski">Golosievski</option>
                    <option value="shevchenkovski" selected>
                      Shevchenkovski
                    </option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">ZIP</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="_ _ _ _ _"
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Street</label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label className="form-label">Individual tax number</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="_ _ _ _ _ _ _ _"
                  />
                </div>
              </div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="row">
                <div className="col-3">
                  <label className="form-label">Country</label>
                  <select className="form-select">
                    {countries.map((option) => (
                      <option
                        key={option.code}
                        value={option.name}
                        selected={option.name === "Ukraine" && option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">City(region)</label>
                  <select className="form-select">
                    <option value="kyiv" selected>
                      Kyiv
                    </option>
                    <option value="lviv">Lviv</option>
                    <option value="odessa">Odessa</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">District</label>
                  <select className="form-select">
                    <option value="pecherski">Pecherski</option>
                    <option value="golosievski">Golosievski</option>
                    <option value="shevchenkovski" selected>
                      Shevchenkovski
                    </option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">ZIP</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="_ _ _ _ _"
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <label className="form-label">Settlement</label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label className="form-label">Street</label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label className="form-label">SWIFT</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="__ __ __ __"
                    value="KJHGFRSD"
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">IBAN</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="__ __ __ __"
                    value="UA9876423164420953"
                  />
                </div>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="row">
                <div className="col-3">
                  <label className="form-label">Country</label>
                  <select className="form-select">
                    {countries.map((option) => (
                      <option
                        key={option.code}
                        value={option.name}
                        selected={option.name === "Ukraine" && option.name}
                      >
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">City(region)</label>
                  <select className="form-select">
                    <option value="kyiv" selected>
                      Kyiv
                    </option>
                    <option value="lviv">Lviv</option>
                    <option value="odessa">Odessa</option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">District</label>
                  <select className="form-select">
                    <option value="pecherski">Pecherski</option>
                    <option value="golosievski">Golosievski</option>
                    <option value="shevchenkovski" selected>
                      Shevchenkovski
                    </option>
                  </select>
                </div>
                <div className="col-3">
                  <label className="form-label">ZIP</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="_ _ _ _ _"
                  />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-3">
                  <label className="form-label">Settlement</label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
                <div className="col-3">
                  <label className="form-label">Street</label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
              </div>
            </>
          )}
          <div className="form-actions">
            <Button
              value="prev"
              icon={chevronLeftIcon}
              color="primary"
              type="button"
              outline
              onclick={(e) => handleSteps(e)}
              disabled={currentStep === 1 && true}
            />
            <Button
              value="next"
              icon={chevronRightIcon}
              type="button"
              color="primary"
              onclick={(e) => handleSteps(e)}
              reversed
            />
          </div>
        </form>
      </div>
      <div className="card-bottom"></div>
    </div>
  );
};

export default AddBillingMethodPage;
