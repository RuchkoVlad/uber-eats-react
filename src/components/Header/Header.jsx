import React from "react";
import "./Header.css";
import { CabinetButton } from "../CabinetButton/CabinetButton";
import logo from "./img/logologo1.svg";

export function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <a href="#">
          <img src={logo} alt="logo" className="logo header__logo" />
        </a>
        <div className="header__order-info">
          <button className="header__order-time">ASAP</button>
          <span className="header__span">to</span>
          <label className="header__label">
            <input
              type="text"
              className="header__input"
              placeholder="ul. Tarasivska St, 16"
            />
          </label>
        </div>
        <CabinetButton />
      </div>
    </div>
  );
}
