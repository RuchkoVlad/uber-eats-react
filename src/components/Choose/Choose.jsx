import React from "react";
import "./Choose.css";
import { Card } from "../Card/Card";
import { Search } from "../Search/Search";
import { Link } from "react-router-dom";
import { restaurants } from "../Restaurant/info.js";

export function Choose() {
  return (
    <div className="choose__wrapper">
      <div className="choose">
        <Search />
        <span className="choose__title">Kyiv Restaurants</span>

        <ul className="choose__cards">
          {restaurants.map((restaurant, i) => {
            return (
              <Link to="/restaurant" className="choose__router-link">
                <Card
                  key={i}
                  title={restaurant.title}
                  categories={restaurant.categories}
                  priceBucket={restaurant.priceBucket}
                  etaRange={restaurant.etaRange}
                  imageUrl={restaurant.imageUrl}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
