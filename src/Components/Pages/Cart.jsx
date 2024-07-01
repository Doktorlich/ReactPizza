import React from "react";
import { Link } from "react-router-dom";
// icons
import IconCartSvg from "../Svg/IconCartSvg";
import IconCartBoxSvg from "../Svg/IconCartBoxSvg";
import IconArrowSvg from "../Svg/Arrow/IconArrowSvg";

import { useDispatch, useSelector } from "react-redux";

import { clearItems } from "../../Redux/slices/cartSlice";
import NotFoundBlock from "../Layout/NotFoundBlock/NotFoundBlock";
import CartItem from "../Layout/CartItem/CartItem";

const Cart = () => {
    const { items, totalPrice, count } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const clearCartHandler = () => {
        if (window.confirm("Вы хотите полностью очистить список товаров из корзины?")) {
            dispatch(clearItems(""));
        }
    };
    if (totalPrice === 0) {
        return <NotFoundBlock />;
    }
    return (
        <section className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    {/* картинка корзины */}
                    <h2 className="content__title">
                        <IconCartSvg />
                        Корзина
                    </h2>
                    {/* картинка-кнопка по очистке всей корзины */}
                    <button className="cart__clear" onClick={clearCartHandler}>
                        <IconCartBoxSvg />
                        <span>Очистить корзину</span>
                    </button>
                </div>

                <ul className="content-cart__items">
                    {items.map(item => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                </ul>

                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        {/* общее количество пицц */}
                        <span>
                            Всего пицц: <b>{count} шт.</b>
                        </span>
                        {/* сумма в деньгах пицц */}
                        <span>
                            Сумма заказа: <b>{totalPrice} ₽</b>
                        </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        {/* ссылка возврата на главную страницу  */}
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <IconArrowSvg />
                            <span>Вернуться назад</span>
                        </Link>
                        {/* кнопка оплаты */}
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
