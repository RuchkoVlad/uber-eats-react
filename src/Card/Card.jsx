import React from 'react';
import './Card.css';
import wokwei from './img/wokwei.png'

export function Card(props) {

    return (

        <li className="card">
            <a href="" className=" card card__link">
                <img src={wokwei} alt="food_picture"/>
                <span className="card__restaurant ">{props.title}</span>
                <span className="card__category">{props.categories}</span>
                <span className="card__time">{props.time}</span>
            </a>
        </li>
        );
}