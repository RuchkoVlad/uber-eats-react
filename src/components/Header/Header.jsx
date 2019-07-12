import React from "react";
import "./Header.css";
import { CabinetButton } from "../CabinetButton/CabinetButton";
import logo from "./img/logologo1.svg";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <div className="header">
      <div className="header__wrapper">
        <Link to="/">
          <a href="#">
            <img src={logo} alt="logo" className="logo header__logo" />
          </a>
        </Link>
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
        <CabinetButton open={props.open} />
      </div>
    </div>
  );
}
