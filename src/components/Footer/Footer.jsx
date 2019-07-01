import React from "react";
import "./Footer.css";
import whiteLogo from "./img/white-logo.svg";

export function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <img src={whiteLogo} alt="logo" />
      </div>
    </div>
  );
}
