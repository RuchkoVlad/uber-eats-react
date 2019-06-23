import React from 'react';
import './Choose.css';
import {Card} from "../Card/Card";
import {Search} from "../Search/Search";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export function Choose() {

    const restaurants = [
        {
            title: 'Макдоналдс',
            categories: '₴₴ • Бургеры',
            time: '25 - 35 Min',
        },
        {
            title: 'WOKWEI',
            categories: '₴ • Китайська • Азіатська',
            time: '40 - 50 Min',
        },
        {
            title: 'YIZHA',
            categories: '₴₴₴ • Американська • Бургери • Вулична їжа',
            time: '35 - 45 Min',
        },
        {
            title: 'Musafir (вул. Саксаганського)',
            categories: '₴₴ • Близькосхідна',
            time: '30 - 40 Min',
        },
        {
            title: 'WOKWEI',
            categories: '₴ • Китайська • Азіатська',
            time: '40 - 50 Min',
        },
        {
            title: 'Milk Bar',
            categories: '₴₴ • Десерти • Європейська',
            time: '25 - 35 Min',
        },
        {
            title: 'Mimosa Brooklyn Pizza',
            categories: '₴₴ • Італійська • Піца • Американськ',
            time: '15 - 25 Min',
        },
        {
            title: 'To Be',
            categories: '₴₴ • Японська • Азіатська • Суші',
            time: '25 - 35 Min',
        },
        {
            title: 'Druzi Cafe (вул. Прорізна)',
            categories: '₴₴ • Американська • Сучасна європейська • У...',
            time: '30 - 40 Min',
        },
    ];

    return (
            <div className="choose__wrapper">
                <div className="choose">
                    <Search/>
                    <span className="choose__title">Kyiv Restaurants</span>

                    <ul className="choose__cards">
                        {restaurants.map(({title, categories, time}, i) => {
                            return (
                                <Link to ='/restaurant' className='router-link'>
                                <Card key={i}
                                      title={title}
                                      categories={categories}
                                      time={time}
                                />
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
            );
}