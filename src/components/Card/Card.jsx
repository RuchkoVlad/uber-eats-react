import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <li className="card">
      <a href="" className=" card card__link">
        <img className="card__img" src={props.imageUrl} alt="food_picture" />
        <span className="card__restaurant">{props.title}</span>
        <span className="card__category">
          {props.priceBucket}{" "}
          {props.categories.map(category => {
            return " • " + category.keyName;
          })}
        </span>

        <span className="card__time">
          {props.etaRange.min} - {props.etaRange.max} Min
        </span>
      </a>
    </li>
  );
}
