import React from "react";
import IconMinusSvg from "../../Svg/IconMinusSvg";
import IconPlusSvg from "../../Svg/IconPlusSvg";
import IconCrossSvg from "../../Svg/IconCrossSvg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, removeProduct, minusProduct } from "../../../Redux/slices/cartSlice";

const CartItem = ({ id, title, price, imageUrl, sizes, type, count }) => {
    // const { items, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const addProductHandler = () => {
        dispatch(
            addProduct({
                id,
            }),
        );
    };
    const minusProductHandler = () => {
        dispatch(minusProduct(id));
    };
    const removeProductHandler = () => {
        dispatch(removeProduct(id));
    };
    return (
        <li className="cart__item">
            <div className="cart__item-img">
                {/* картинка пиццы */}
                <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
            </div>
            {/* параметры пицц: title,sizes,types */}
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>
                    {type}, {sizes} см.
                </p>
            </div>
            <div className="cart__item-count">
                {/* прибавить пиццу */}
                <div className="button button--outline button--circle cart__item-count-minus" onClick={minusProductHandler}>
                    <IconMinusSvg />
                </div>
                {/* количество пицц */}
                <b>{count}</b>
                {/* убавить количество пицц */}
                <div className="button button--outline button--circle cart__item-count-plus" onClick={addProductHandler}>
                    <IconPlusSvg />
                </div>
            </div>
            {/* элемент с ценой пиццы */}
            <div className="cart__item-price">
                <b>{price * count} ₽</b>
            </div>
            {/* иконка удаления элемента */}
            <div className="cart__item-remove" onClick={removeProductHandler}>
                <div className="button button--outline button--circle">
                    <IconCrossSvg />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
