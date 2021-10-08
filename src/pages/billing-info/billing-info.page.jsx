import React from "react";
import "./billing-page.styles.scss";
import BillingInfoForm from "../../components/form/form.component";

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

export default BillingInfoPage;
