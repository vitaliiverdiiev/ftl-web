import React from "react";
import Button from "../../components/button/button.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./buttons.styles.scss";

const petPawIcon = <i class="fa fa-paw" aria-hidden="true"></i>;
const alertMessage = () => alert("The button was clicked");

const ButtonsPage = () => (
  <div className="">
    <div className="buttons">
      <div className="row-primary mr-2">
        <CustomButton value="Button" color="success" type="submit" reversed icon target="_blank" />
      </div>
    </div>
  </div>
);

export default ButtonsPage;
