import React from "react";
import "./RestaurantChoose.css";
import { MenuCard } from "../MenuCard/MenuCard";
import { restaurantMenu } from "../MenuCard/infoRestaurant";

export function RestaurantChoose(props) {
  return (
    <ul className="restaurant-choose">
      {restaurantMenu.sections.map(section => {
        return (
          <div className="restaurant-choose__type">
            <h4 className="restaurant-choose__title " id={`${section.title}`}>
              {section.title}
            </h4>
            <div key={section.title}>
              <div className="restaurant-choose__dish ">
                {section.itemUuids.map(itemUuid => {
                  return (
                    <MenuCard
                      key={itemUuid}
                      id={itemUuid}
                      order={props.order}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
