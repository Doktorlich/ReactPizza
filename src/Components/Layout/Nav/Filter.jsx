import React from "react";
import "./Filter.scss";
import Sorting from "./Sorting/Sorting";
const Filter = () => {
    return (
        <div className="content__top">
            <div className="categories">
                <ul>
                    <li className="active">Все</li>
                    <li>Мясные</li>
                    <li>Вегетарианская</li>
                    <li>Гриль</li>
                    <li>Острые</li>
                    <li>Закрытые</li>
                </ul>
            </div>
            <Sorting />
        </div>
    );
};

export default Filter;
