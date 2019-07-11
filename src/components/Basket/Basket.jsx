import React from "react";
import "./Basket.css";


export function Basket(props) {
  return (
    <div className="basket">
      <div className="basket__wrapper">
        <div className="basket__top">
          <div className="basket__header">
            <svg width="24px" height="24px" fill="none" viewBox="0 0 24 24">
              <path
                d="m16.9999 7.00065v-4.16667h-9.99998v4.16667h-4.16667v9.16665c0 2.75 2.25 5 5 5h8.33335c2.75 0 5-2.25 5-5v-9.16665zm-7.49998-1.66667h4.99998v1.66667h-4.99998zm9.16668 10.83332c0 1.4167-1.0833 2.5-2.5 2.5h-8.33335c-1.41667 0-2.5-1.0833-2.5-2.5v-6.66665h13.33335z"
                fill="#1F1F1F"
              ></path>
            </svg>
            <span className="basket__order-amount">
              Ваш заказ
            </span>
            <a href="#" onClick={() => props.close(false)}>
            <svg
              width="24px"
              height="24px"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z"
                fill="#1F1F1F"
              ></path>
            </svg>
            </a>
          </div>

          <div className="basket__main">
            <div className="basket__choose">
              <select className="basket__select">
                <option>Удалить</option>
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
              <span className="basket__dish">Tombik Turkish з куркою</span>
              {/*{props.orders.map( (order)=> {*/}
              {/*  return(*/}
              {/*      <span className="basket__price">440,00грн.{prop.price}</span>*/}
              {/*  )*/}
              {/*})}*/}
            </div>
          </div>
        </div>
        <div className=" basket__payment">
          <div className="basket__amount-dishes">4</div>
          <span className="basket__next-step">Далее: оплата</span>
          <span className="basket__price basket__price--payment">
            440,00грн.
          </span>
        </div>
      </div>
    </div>
  );
}
