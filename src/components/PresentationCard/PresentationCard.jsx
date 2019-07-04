import React from "react";
import "./PresentationCard.css";
import {restaurantMenu} from "../MenuCard/infoRestaurant";

export function PresentationCard() {
  const background =`url(${restaurantMenu.largeImageUrl})`;

  return (
    <div className="presentation-card"  style={{ background: background, backgroundPosition: `center center` }}>
      <div className="presentation-card__wrapper">
        <div className="presentation-card__background">
          <span className="presentation-card__title">{restaurantMenu.title}</span>
          <div className="presentation-card__footer">
            <span className="presentation-card__price">{restaurantMenu.priceBucket} • {restaurantMenu.categories}</span>
            <span className="presentation-card__time">{restaurantMenu.etaRange.min} - {restaurantMenu.etaRange.max} Min</span>
          </div>
        </div>
      </div>
    </div>
  );
}
