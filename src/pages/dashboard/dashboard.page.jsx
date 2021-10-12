import React from "react";
import "./dashboard.styles.scss";
import Chart from "../../components/chart/chart.component";
import Range from "../../components/range/range.component";

const DashboardPage = () => (
  <div className="dashboard">
   <div className="card card-1"></div>
   <div className="card card-2"></div>
   <div className="card card-3">
     <Chart />
     <Range />
   </div>
   <div className="card card-4"></div>
  </div>
);
export default DashboardPage;
