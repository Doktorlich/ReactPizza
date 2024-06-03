import React, { useState } from "react";
import "./Filter.scss";
import Sorting from "./Sorting/Sorting";
import Category from "./Category/Category";

const CATEGORIES = [
    { id: 0, title: "Все" },
    { id: 1, title: "Мясные" },
    { id: 2, title: "Вегетарианская" },
    { id: 3, title: "Гриль" },
    { id: 4, title: "Острые" },
    { id: 5, title: "Закрытые" },
];

const Filter = () => {
    const [activeIndexFilter, setActiveIndexFilter] = useState("0");
    const changeCategoryHandler = function (event) {};
    return (
        <div className="content__top">
            <div className="categories">
                <ul className="ul-filter" onClick={changeCategoryHandler}>
                    {/* className="active" */}
                    {CATEGORIES.map((category) => {
                        return (
                            <Category
                                key={category.id}
                                li={{ id: category.id, title: category.title }}
                            />
                        );
                    })}
                </ul>
            </div>
            <Sorting />
        </div>
    );
};

export default Filter;
