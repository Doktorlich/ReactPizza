import pizzaLogo from "../../../Assets/img/pizza-logo.svg";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import IconCartSvg from "../../Svg/IconCartSvg";
import { useSelector } from "react-redux";

const Header = () => {
    const { items, totalPrice, count } = useSelector((state) => state.cart);
    const { pathname } = useLocation();
    console.log(pathname);
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

                {pathname === "/cart" ? (
                    ""
                ) : (
                    <>
                        
                        <Search />
                        <div className="header__cart">
                            <Link to="/cart" className="button button--cart">
                                <span className="total-amount">{totalPrice} ₽</span>
                                <div className="button__delimiter"></div>
                                <IconCartSvg />
                                <span>{count}</span>
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
