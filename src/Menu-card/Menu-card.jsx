import React from 'react'
import './Menu-card.css'
import dish from './img/dish.png'

export function MenuCard() {
    return(
        <li>
            <a href="javascript:void(0)" className="menu-card">
                <div className="menu-card__left">
                    <span className="menu-card__title">Сельдь на бородинском хлебе</span>
                    <span className="menu-card__consist">С яйцом и огурцом</span>
                    <span className="menu-card__price">240 &#8372;</span>
                </div>
                <img src={dish} alt=""/>
            </a>
        </li>
    );
}