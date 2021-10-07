import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./app/app.component.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import "./index.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
