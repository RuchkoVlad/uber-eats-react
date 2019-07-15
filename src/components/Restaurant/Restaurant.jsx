import React from "react";
import "./Resataurant.css";
import { PresentationCard } from "../PresentationCard/PresentationCard";
import { RestaurantNavigation } from "../RestaurantNavigation/RestaurantNavigation";
import { RestaurantChoose } from "../RestaurantChoose/RestaurantChoose";

export function Restaurant(props) {
  return (
    <div>
      <PresentationCard />
      <RestaurantNavigation />
      <RestaurantChoose orders={props.orders} setOrders={props.setOrders}/>
    </div>
  );
}
