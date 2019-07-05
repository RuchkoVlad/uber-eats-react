import React from "react";
import "./CabinetButton.css";
import basket from "./img/basketbasket.svg";

export function CabinetButton(props)  {
        return(
            <div className="cabinet-button">
                <button className="cabinet-button__wrapper">Sign In</button>
                <button className="cabinet-button cabinet-button--black">Register</button>
                <a  href="javascript: void(0)" onClick={()=>props.open(true)}>
                    <img src={basket} alt="basket" />
                </a>
            </div>
        )
            ;
    }

