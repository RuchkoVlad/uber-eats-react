import React from "react";
import "./RestaurantChoose.css";
import { MenuCard } from "../MenuCard/MenuCard";
import { restaurantMenu } from "../MenuCard/infoRestaurant";

export function RestaurantChoose() {
  return (
    <ul className="restaurant-choose">
      {restaurantMenu.sections.map((section, i) => {
        return (
          <div className="restaurant-choose__type">
            <span className="restaurant-choose__title " id={`${section.title}`}>
              {section.title}
            </span>
            <div key={i}>
              <div className="restaurant-choose__dish ">
                {section.itemUuids.map((item, i) => {
                  return <MenuCard key={i} id={item} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
