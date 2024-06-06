import React from "react";
import imgCart from "../../../Assets/img/empty-cart.png";
import { Link } from "react-router-dom";
const NotFoundBlock = () => {
    return (
        <div className="container container--cart">
            <section className="cart cart--empty">
                <h2>
                    Корзина пустая <span>😕</span>
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={imgCart} alt="Empty cart" />
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </section>
        </div>
    );
};

export default NotFoundBlock;
