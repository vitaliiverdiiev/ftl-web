import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <header className="header">
    <Link className="logo" to="/">
      Faster than light
    </Link>
    <nav className="nav">
      {/* <NavLink className="nav__link" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="nav__link" to="/billing-information">
        Billing
      </NavLink>
      <NavLink className="nav__link" to="/buttons">
        Buttons
      </NavLink> */}
      <NavLink className="nav__link" to="/add-billing-method">
        Add billing method
      </NavLink>
    </nav>
  </header>
);

export default Header;
