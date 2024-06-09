import pizzaLogo from "../../../Assets/img/pizza-logo.svg";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import IconCartSvg from "../../Svg/IconCartSvg";
const Header = ({ valueSearch, setValueSearch }) => {
    return (
        <header className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={pizzaLogo} alt="Pizza logo" />
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <Search valueSearch={valueSearch} setValueSearch={setValueSearch} />
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span className="total-amount">520 ₽</span>
                        <div className="button__delimiter"></div>
                        <IconCartSvg />
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
