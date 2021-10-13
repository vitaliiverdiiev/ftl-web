import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../sections/header/header.section";
import BillingInfoPage from "../pages/billing-info/billing-info.page";
import DashboardPage from "../pages/dashboard/dashboard.page";
import ButtonsPage from "../pages/buttons/buttons.page";
import AddBillingMethodPage from "../pages/add-billing-method/add-billing-method.page";

const App = () => (
  <>
    <Header />
    <Switch>
      {/* <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/billing-information" component={BillingInfoPage} />
      <Route exact path="/buttons" component={ButtonsPage} />
    /> */}
      <Route
        exact
        path="/add-billing-method"
        component={AddBillingMethodPage}
      />
      <Route exact path="*" component={AddBillingMethodPage} />
    </Switch>
  </>
);

export default App;
