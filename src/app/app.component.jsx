import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../sections/header/header.section";
import BillingInfoPage from "../pages/billing-info/billing-info.page";
import DashboardPage from "../pages/dashboard/dashboard.page";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/billing-information" component={BillingInfoPage} />
    </Switch>
  </>
);

export default App;
