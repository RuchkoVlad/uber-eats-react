import React from "react";
import "./MenuCard.css";
import {restaurantMenu} from "./infoRestaurant";

export function MenuCard(props) {
    let dishPhoto = restaurantMenu.items[props.id].imageUrl;
    console.log(props.orders);
    let newOrdersArray = [...props.orders];
    // сделать
    // новый
    // массив

    let isInBasket = newOrdersArray.findIndex((order) => {
        return (order.nameDish.uuid === props.id)
    });

    function addToBasket() {

        if (isInBasket !== -1) {
            newOrdersArray[isInBasket].count++;
        } else {
            newOrdersArray.push({
                nameDish: restaurantMenu.items[props.id],
                count: 1
            });
        }
        props.setOrders([...newOrdersArray]);
    }
    // если isInBasket !== -1 то рендерим зеленую
    return (
        <li>
            <button
                className="menu-card"
                onClick={
                    ()=> addToBasket()
                    // props.orders.push(restaurantMenu.items[props.id])
                }
            >
                <div className="menu-card__left">
          <span className="menu-card__title">
            {restaurantMenu.items[props.id].title}
          </span>
                    <span className="menu-card__consist">
            {restaurantMenu.items[props.id].itemDescription}
          </span>
                    <span className="menu-card__price">
            {restaurantMenu.items[props.id].price / 100} &#8372;
          </span>
                </div>
                {dishPhoto && (
                    <img
                        className="menu-card__img"
                        src={restaurantMenu.items[props.id].imageUrl}
                        alt=""
                    />
                )}
            </button>
        </li>
    );
}
