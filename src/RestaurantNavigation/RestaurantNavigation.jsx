import React from 'react';
import './RestaurantNavigation.css';

export function RestaurantNavigation() {
    return (
        <>
            <nav className="restaurant-navigation__nav">
                <ul className="restaurant-navigation">
                    <li><a className="restaurant-navigation__item" href="javascript:void(0)">Закуски</a></li>
                    <li><a className="restaurant-navigation__item" href="javascript:void(0)">Салаты</a></li>
                    <li><a className="restaurant-navigation__item" href="javascript:void(0)">Супы</a></li>
                    <li><a className="restaurant-navigation__item" href="javascript:void(0)">Горячие блюда</a></li>
                    <li><a className="restaurant-navigation__item" href="javascript:void(0)">Гарниры</a></li>
                    <li><a className="restaurant-navigation__item" href="javascript:void(0)">Десерты</a></li>
                </ul>
            </nav>
        </>
    );
}