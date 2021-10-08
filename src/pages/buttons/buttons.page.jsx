import React from "react";
import Button from "../../components/button/button.component";
import "./buttons.styles.scss";

const petPawIcon = <i class="fa fa-paw" aria-hidden="true"></i>;
const alertMessage = () => alert("The button was clicked");

const ButtonsPage = () => (
  <div className="">
    <div className="buttons">
      <div className="row-primary mr-2">
        <Button
          value="Button"
          icon={petPawIcon}
          classes="button-success mb-2"
        />
        <Button
          value="Button"
          icon={petPawIcon}
          classes="button-success button-reversed mb-2"
        />
        <Button value="Button" classes="button-success-outline mb-2" />
      </div>
      <div className="row-secondary mr-2">
        <Button
          value="Button"
          icon={petPawIcon}
          classes="button-secondary mb-2"
          onclick={alertMessage}
        />
        <Button
          value="Button"
          icon={petPawIcon}
          classes="button-secondary button-reversed mb-2"
          disabled
        />
        <Button value="Button" classes="button-secondary-outline mb-2" />
      </div>
      <div className="row-error">
        <Button value="Button" icon={petPawIcon} classes="button-error mb-2" />
        <Button
          value="Button"
          icon={petPawIcon}
          classes="button-error button-reversed mb-2"
          disabled
        />
        <Button value="Button" classes="button-error-outline mb-2" />
      </div>
    </div>
  </div>
);

export default ButtonsPage;
