import React, { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import "./add-billing-method.styles.scss";
import Button from "../../components/button/button.component";

const AddBillingMethodPage = () => {
  const [step, setStep] = useState(1);

  const handleStepUp = (e) => "next" && step !== 3 && setStep(step + 1)
  const handleStepDown = () => step !== 1 && setStep(step - 1)

  const enableAddButton = () => {
    console.log(document.querySelectorAll("[required]"))
  }

  enableAddButton() 
  return (
    <div className="add-billing-method-page card m-3">
      <div className="card-header">
        <div className="header-part">
          <span className={`number ${step === 1 ? "number--active" : ''}`}>1</span>Add new payment method
        </div>
        <div className="header-part">
          <span className={`number ${step === 2 ? "number--active" : ''}`}>2</span>Add bank of benificiary
        </div>
        <div className="header-part">
          <span className={`number ${step === 3 ? "number--active" : ''}`}>3</span>Add corresponded bank
        </div>
      </div>
      <div className="card-body">
        <form className="form" action="#" method="post">
          {step === 1 && <div className="step-1">
            <h2 className="step-header">Add new payment method</h2>
            <div className="row">
              <FormInput
                classes="col-sm"
                label="Payment method"
                value="Bank account"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="Create a name"
                value="Ukrsyb FOP"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="IBAN"
                value="__ __ __ __ __"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="Bank name"
                value="Ukrsybbank"
                editMode
              />
            </div>
            <div className="row">
              <FormInput
                classes="col-sm-6"
                label="Full name (latin Ukrainian language)"
                value="Dmytro  Anatoliievych Makarenko"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="Country"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="City(region)"
                value="Select"
                editMode
                required
              />
            </div>
            <div className="row">
              <FormInput
                classes="col-sm"
                label="District"
                value="Select"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="ZIP"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="Street"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="Individual tax number"
                value="Select"
                editMode
                required
              />
            </div>
          </div>}
          {step === 2 && <div className="step-2">
            <h2 className="step-header">Add bank of beneficiary</h2>
            <div className="row">
              <FormInput
                classes="col-sm"
                label="Country"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="City(region)"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="District"
                value="Select"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="ZIP"
                value="Select"
                editMode
                required
              />
            </div>
            <div className="row">
              <FormInput
                classes="col-sm"
                label="Settlement"
                value="Select"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="Street"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="SWIFT"
                value="Select"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="IBAN"
                value="Select"
                editMode
              />
            </div>
          </div>}
          {step === 3 && <div className="step-3">
            <h2 className="step-header">Add correspondent bank</h2>
            <div className="row">
              <FormInput
                classes="col-sm"
                label="Country"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="City(region)"
                value="Select"
                editMode
                required
              />
              <FormInput
                classes="col-sm"
                label="District"
                value="Select"
                editMode
              />
              <FormInput
                classes="col-sm"
                label="ZIP"
                value="Select"
                editMode
                required
              />
            </div>
            <div className="row">
              <FormInput
                classes="col-sm-3"
                label="Settlement"
                value="Select"
                editMode
              />
              <FormInput
                classes="col-sm-3"
                label="Street"
                value="Select"
                editMode
                required
              />
            </div>
          </div>}
          <div className="form-footer">
            <Button disabled={step === 1 && true} onclick={() => handleStepDown()} color="primary" type="button" outline value="Prev" icon={<i class="fa fa-chevron-left" aria-hidden="true"></i>} />
            <Button onclick={() => handleStepUp()} color="primary" type="button" value="Next" reversed icon={<i class="fa fa-chevron-right" aria-hidden="true"></i>} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBillingMethodPage;
