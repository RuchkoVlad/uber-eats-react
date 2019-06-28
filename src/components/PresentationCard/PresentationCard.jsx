import React from 'react'
import './PresentationCard.css'

export function PresentationCard() {
    return (
        <div className="presentation-card">
            <div className="presentation-card__wrapper">
                <div className="presentation-card__background">
                    <span className="presentation-card__title">Трактир «Пушкин»</span>
                    <div className="presentation-card__footer">
                        <span className="presentation-card__price">₴₴₴ • Европейская</span>
                        <span className="presentation-card__time">40 - 50 Min</span>
                    </div>
                </div>
            </div>
        </div>
    );
}