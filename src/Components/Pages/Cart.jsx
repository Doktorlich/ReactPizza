import React from "react";
import { Link } from "react-router-dom";
// icons
import IconCartSvg from "../Svg/IconCartSvg";
import IconCartBoxSvg from "../Svg/IconCartBoxSvg";
import IconArrowSvg from "../Svg/Arrow/IconArrowSvg";
import IconMinusSvg from "../Svg/IconMinusSvg";
import IconPlusSvg from "../Svg/IconPlusSvg";
import IconCrossSvg from "../Svg/IconCrossSvg";
import { useSelector } from "react-redux";

const Cart = () => {
    const { items, totalPrice } = useSelector(state => state.cart);
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
                    <button className="cart__clear">
                        <IconCartBoxSvg />
                        <span>Очистить корзину</span>
                    </button>
                </div>

                <ul className="content-cart__items">
                    <li className="cart__item">
                        <div className="cart__item-img">
                            {/* картинка пиццы */}
                            <img
                                className="pizza-block__image"
                                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                                alt="Pizza"
                            />
                        </div>
                        {/* параметры пицц: title,sizes,types */}
                        <div className="cart__item-info">
                            <h3>Сырный цыпленок</h3>
                            <p>тонкое тесто, 26 см.</p>
                        </div>
                        <div className="cart__item-count">
                            {/* прибавить пиццу */}
                            <div className="button button--outline button--circle cart__item-count-minus">
                                <IconMinusSvg />
                            </div>
                            {/* количество пицц */}
                            <b>2</b>
                            {/* убавить количество пицц */}
                            <div className="button button--outline button--circle cart__item-count-plus">
                                <IconPlusSvg />
                            </div>
                        </div>
                        {/* элемент с ценой пиццы */}
                        <div className="cart__item-price">
                            <b>770 ₽</b>
                        </div>
                        {/* иконка удаления элемента */}
                        <div className="cart__item-remove">
                            <div className="button button--outline button--circle">
                                <IconCrossSvg />
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        {/* общее количество пицц */}
                        <span>
                            Всего пицц: <b>{items.length} шт.</b>
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
