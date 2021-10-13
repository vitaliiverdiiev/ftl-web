import React, { useEffect, useState } from "react";
import FormInput from "../../COMPONENTS/form-input/form-input.component";
import FormSelect from "../../COMPONENTS/form-select/form-select.component";
import Button from "../../components/button/button.component";
import "./add-billing-method.styles.scss";

const chevronLeftIcon = (
  <i className="fa fa-chevron-left" aria-hidden="true"></i>
);
const chevronRightIcon = (
  <i className="fa fa-chevron-right" aria-hidden="true"></i>
);

const AddBillingMethodPage = (props) => {
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

  const checkIfRequiredFieldsFilled = () => {
    const checker = [];
    document.querySelectorAll("[required]").forEach((field) => {
      field.value.length > 0 ? checker.push(true) : checker.push(false);
    });

    if (!checker.includes(false)) {
      return setRequiredFilled(false);
    }

    return setRequiredFilled(true);
  };

  const [newPaymentMethod, setNewPaymentMethod] = useState({
    paymentMethod: {
      paymentMethod: "",
      createAName: "",
      iban: "",
      bankName: "",
      fullName: "",
      country: "",
      cityRegion: "",
      district: "",
      zip: "",
      street: "",
      individualTaxNumber: "",
    },
    bankOfBeneficiary: {
      country: "",
      cityRegion: "",
      district: "",
      zip: "",
      settlement: "",
      street: "",
      swift: "",
      iban: "",
    },
    correspondentBank: {
      country: "",
      cityRegion: "",
      district: "",
      zip: "",
      settlement: "",
      street: "",
    },
  });

  const handleChange = (e, step) => {
    const { name, value } = e.target;
    setNewPaymentMethod({
      ...newPaymentMethod,
      [step]: {
        ...newPaymentMethod[step],
        [name]: value,
      },
    });
  };

  const [requiredFilled, setRequiredFilled] = useState(false);

  const stepHandler = (e) => {
    e.preventDefault();

    if (e.target.innerText.toLowerCase() === "prev" && currentStep !== 1)
      setCurrentStep(currentStep - 1);
    if (
      e.target.innerText.toLowerCase() === "next" &&
      currentStep < step.length
    )
      setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    checkIfRequiredFieldsFilled();
  }, ...document.querySelectorAll(["required"]));

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
        <form action="#">
          {currentStep === 1 && (
            <>
              <div className="form-card form-card-1">
                <div className="row mb-3">
                  <FormSelect
                    wrapperClasses="col-3"
                    label="Payment method"
                    options={["Bank account", "Cash"]}
                    name="paymentMethod"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                    required
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="Create a name"
                    placeholder="Ukrsyb FOP"
                    name="createAName"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="IBAN"
                    placeholder="_ _ _ _ _ _ _ _"
                    name="iban"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="Bank name"
                    options={["Ukrsyb bank", "Monobank", "Privat bank"]}
                    name="bankName"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                  />
                </div>
                <div className="row mb-3">
                  <FormInput
                    wrapperClasses="col-6"
                    label="Full name (latin Ukrainian language)"
                    placeholder="Dmytro Anatoliievych Makarenko"
                    name="fullName"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="Country"
                    options={["Ukraine", "Denmark", "Japan"]}
                    name="country"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                    required
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="City (region)"
                    options={["Kyiv", "Odessa", "Lviv"]}
                    name="cityRegion"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                    required
                  />
                </div>
                <div className="row mb-3">
                  <FormSelect
                    wrapperClasses="col-3"
                    label="District"
                    options={["Holosiivskii", "Desnyanskii", "Shevchenkovskii"]}
                    name="district"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                  />
                  <FormInput
                    label="ZIP"
                    wrapperClasses="col-3"
                    placeholder="_ _ _ _ _"
                    name="zip"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                    required
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="Street"
                    placeholder="Select"
                    name="street"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                    required
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="Individual tax number"
                    placeholder="_ _ _ _ _ _ _ _"
                    name="individualTaxNumber"
                    onchange={(e) => handleChange(e, "paymentMethod")}
                    required
                  />
                </div>
              </div>
            </>
          )}
          {currentStep === 2 && (
            <>
              <div className="form-card form-card-1">
                <div className="row mb-3">
                  <FormSelect
                    wrapperClasses="col-3"
                    label="Country"
                    options={["Ukraine", "Denmark", "Japan"]}
                    name="country"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                    required
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="City (region)"
                    options={["Kyiv", "Odessa", "Lviv"]}
                    name="cityRegion"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                    required
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="District"
                    options={["Holosiivskii", "Desnyanskii", "Shevchenkovskii"]}
                    name="district"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                  />
                  <FormInput
                    label="ZIP"
                    wrapperClasses="col-3"
                    placeholder="_ _ _ _ _"
                    name="zip"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                    required
                  />
                </div>
                <div className="row mb-3">
                  <FormInput
                    wrapperClasses="col-3"
                    label="Settlment"
                    placeholder="Select"
                    name="settlement"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="Street"
                    placeholder="Select"
                    name="street"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                    required
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="SWIFT"
                    placeholder="KJHGFRSD"
                    name="swift"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                  />
                  <FormInput
                    wrapperClasses="col-3"
                    label="IBAN"
                    placeholder="UA9876423164420953"
                    name="iban"
                    onchange={(e) => handleChange(e, "bankOfBeneficiary")}
                  />
                </div>
              </div>
            </>
          )}
          {currentStep === 3 && (
            <>
              <div className="form-card form-card-1">
                <div className="row mb-3">
                  <FormSelect
                    wrapperClasses="col-3"
                    label="Country"
                    options={["Ukraine", "Denmark", "Japan"]}
                    name="country"
                    onchange={(e) => handleChange(e, "correspondentBank")}
                    required
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="City (region)"
                    options={["Kyiv", "Odessa", "Lviv"]}
                    name="cityRegion"
                    onchange={(e) => handleChange(e, "correspondentBank")}
                    required
                  />
                  <FormSelect
                    wrapperClasses="col-3"
                    label="District"
                    options={["Holosiivskii", "Desnyanskii", "Shevchenkovskii"]}
                    name="district"
                    onchange={(e) => handleChange(e, "correspondentBank")}
                  />
                  <FormInput
                    label="ZIP"
                    wrapperClasses="col-3"
                    placeholder="_ _ _ _ _"
                    name="zip"
                    onchange={(e) => handleChange(e, "correspondentBank")}
                    required
                  />
                </div>
                <div className="row mb-3">
                  <FormInput
                    label="Settlment"
                    wrapperClasses="col-3"
                    placeholder="Input"
                    name="settlement"
                    onchange={(e) => handleChange(e, "correspondentBank")}
                  />
                  <FormSelect
                    label="Street"
                    wrapperClasses="col-3"
                    options={["Saksaganskogo", "Zhilyanskaya"]}
                    name="street"
                    onchange={(e) => handleChange(e, "correspondentBank")}
                    required
                  />
                </div>
              </div>
            </>
          )}
          <div className="form-actions">
            <Button
              color="primary"
              outline
              value="Prev"
              icon={chevronLeftIcon}
              onclick={stepHandler}
              disabled={currentStep === 1}
            />
            <Button
              color="primary"
              value={currentStep < step.length ? "Next" : "Add method"}
              icon={chevronRightIcon}
              onclick={(e) => {
                e.preventDefault();
                currentStep < step.length
                  ? stepHandler(e)
                  : console.log(newPaymentMethod);
                checkIfRequiredFieldsFilled();
              }}
              disabled={requiredFilled}
              reversed
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBillingMethodPage;
