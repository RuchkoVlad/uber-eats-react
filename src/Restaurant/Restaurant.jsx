import React from 'react';
import './Resataurant.css';
import {Header} from "../Header/Header";
import {PresentationCard} from "../Presentation-card/Presentation-card";
import {RestaurantNavigation} from "../Restaurant-navigation/Restaurant-navigation";
import {RestaurantChoose} from "../Restaurant-choose/Restaurant-choose";

export function Restaurant() {
    return (
        <div>
            <Header/>
            <PresentationCard/>
            <RestaurantNavigation/>
            <RestaurantChoose/>
        </div>
    );
}
