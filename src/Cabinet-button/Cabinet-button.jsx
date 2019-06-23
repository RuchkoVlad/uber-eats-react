import React from 'react';
import './Cabinet-button.css';
import basket from "./img/basketbasket.svg";

export function CabinetButton() {
    return (<div className="cabinet-button__wrapper">
        <button className="cabinet-button">Sign In</button>
        <button className="cabinet-button cabinet-button--black">Register</button>
        <a href="https://www.ubereats.com/ru-UA/checkout/">
            <img src={basket} alt="basket"/>
        </a>
    </div>);
}