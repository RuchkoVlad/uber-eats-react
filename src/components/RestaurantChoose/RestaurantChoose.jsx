import React from "react";
import "./RestaurantChoose.css";
import { MenuCard } from "../MenuCard/MenuCard";
import { restaurantMenu } from "../MenuCard/infoRestaurant";

export function RestaurantChoose(props) {
  return (
    <ul className="restaurant-choose">
      {restaurantMenu.sections.map(section => {
        return (
          <div className="restaurant-choose__type" key={section.title}>
            <h4 className="restaurant-choose__title " id={`${section.title}`}>
              {section.title}
            </h4>
            <div>
              <div className="restaurant-choose__dish ">
                {section.itemUuids.map(itemUuid => {
                  return (
                    <MenuCard
                      key={itemUuid}
                      id={itemUuid}
                      orders={props.orders}
                      setOrders={props.setOrders}
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
