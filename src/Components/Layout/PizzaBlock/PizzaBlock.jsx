import React, { useState } from "react";
import "./PizzaBlock.scss";

const PizzaBlock = (props) => {
    const [amountOrders, setAmountOrders] = useState(0);
    const addAmountOrdersHandler = function (prevState) {
        setAmountOrders(amountOrders + 1);
    };
    const [activeSizePizza, setActiveSizePizza] = useState(0);
    const [activeTypesPizza, setActiveTypesPizza] = useState(0);

    const typesName = ["тонкое", "традиционное"];
    return (
        <>
            <li className="pizza-block">
                <img className="pizza-block__image" src={props.imageUrl} alt="Pizza" />
                <h4 className="pizza-block__title">{props.title}</h4>
                <div className="pizza-block__selector">
                    <ul>
                        {props.types.map((type, index) => (
                            <li
                                key={type}
                                onClick={() => setActiveTypesPizza(type)}
                                className={activeTypesPizza === index ? "active" : ""}
                            >
                                {typesName[type]}
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {props.sizes.map((size, index) => (
                            <li
                                key={size}
                                onClick={() => setActiveSizePizza(index)}
                                className={activeSizePizza === index ? "active" : ""}
                            >
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__bottom">
                    <p className="pizza-block__price">от {props.price} ₽</p>
                    <button
                        className="button button--outline button--add"
                        onClick={addAmountOrdersHandler}
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        <i>{amountOrders}</i>
                    </button>
                </div>
            </li>
        </>
    );
};

export default PizzaBlock;
