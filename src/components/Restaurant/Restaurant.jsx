import React from "react";
import "./Resataurant.css";
import { PresentationCard } from "../PresentationCard/PresentationCard";
import { RestaurantNavigation } from "../RestaurantNavigation/RestaurantNavigation";
import { RestaurantChoose } from "../RestaurantChoose/RestaurantChoose";

export function Restaurant() {
  return (
    <div>
      <PresentationCard />
      <RestaurantNavigation />
      <RestaurantChoose />
    </div>
  );
}
