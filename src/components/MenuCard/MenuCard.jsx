import React from "react";
import "./MenuCard.css";
import { restaurantMenu } from "./infoRestaurant";

export function MenuCard(props) {
  let dishPhoto = restaurantMenu.items[props.id].imageUrl;
  return (
    <li>
      <a href="javascript:void(0)" className="menu-card">
        <div className="menu-card__left">
          <span className="menu-card__title">
            {restaurantMenu.items[props.id].title}
          </span>
          <span className="menu-card__consist">
            {restaurantMenu.items[props.id].itemDescription}
          </span>
          <span className="menu-card__price">
            {restaurantMenu.items[props.id].price / 100} &#8372;
          </span>
        </div>
        {dishPhoto && (
          <img
            className="menu-card__img"
            src={restaurantMenu.items[props.id].imageUrl}
            alt=""
          />
        )}
      </a>
    </li>
  );
}
