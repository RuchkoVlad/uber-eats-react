import React from "react";
import "./CabinetButton.css";
import basket from "./img/basketbasket.svg";

export function CabinetButton() {
  return (
    <div className="cabinet-button">
      <button className="cabinet-button__wrapper">Sign In</button>
      <button className="cabinet-button cabinet-button--black">Register</button>
      <a href="https://www.ubereats.com/ru-UA/checkout/">
        <img src={basket} alt="basket" />
      </a>
    </div>
  );
}
