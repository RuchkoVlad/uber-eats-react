import React from "react";
import "./RestaurantChoose.css";
import { MenuCard } from "../MenuCard/MenuCard";

export function RestaurantChoose() {
  return (
    <ul className="choose__first-line">
      <span className="choose__title">Закуски</span>
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
      <MenuCard />
    </ul>
  );
}
