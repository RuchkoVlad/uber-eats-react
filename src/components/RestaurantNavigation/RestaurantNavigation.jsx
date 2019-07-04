import React from "react";
import "./RestaurantNavigation.css";
import {restaurantMenu} from "../MenuCard/infoRestaurant";

export function RestaurantNavigation() {
  return (
    <>
      <nav className="restaurant-navigation">
        <ul className="restaurant-navigation__nav">
          {restaurantMenu.sections.map((section, i)=> {
            return (
                <li key={i} >
                  <a
                      className="restaurant-navigation__item"
                      href={`#${section.title}`}
                  >
                    {section.title}
                  </a>
                </li>
            )
          })}
        </ul>
      </nav>
    </>
  );
}
