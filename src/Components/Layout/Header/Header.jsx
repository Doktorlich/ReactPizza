import IconCartSvg from "../../../Assets/IconCartSvg";
import pizzaLogo from "../../../Assets/img/pizza-logo.svg";
import "./Header.scss";
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={pizzaLogo} alt="Pizza logo" />

                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <a href="/cart.html" className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <IconCartSvg />
                        <span>3</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
