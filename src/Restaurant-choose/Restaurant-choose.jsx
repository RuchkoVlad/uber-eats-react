import React from 'react';
import './Restaurant-choose.css'
import {MenuCard} from "../Menu-card/Menu-card";

export function RestaurantChoose() {
    return (
        <ul className="choose__first-line">
            <span className="choose__title">Закуски</span>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
            <MenuCard/>
        </ul>
    );
}