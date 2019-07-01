import React from "react";
import "./Resataurant.css";
import { Header } from "../Header/Header";
import { PresentationCard } from "../PresentationCard/PresentationCard";
import { RestaurantNavigation } from "../RestaurantNavigation/RestaurantNavigation";
import { RestaurantChoose } from "../RestaurantChoose/RestaurantChoose";

export function Restaurant() {
  return (
    <div>
      <Header />
      <PresentationCard />
      <RestaurantNavigation />
      <RestaurantChoose />
    </div>
  );
}
