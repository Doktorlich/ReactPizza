import React, { useState } from "react";

import Sorting from "./Sorting/Sorting";
import Category from "./Category/Category";

import SelectCategory from "../SelectCategory/SelectCategory";

const CATEGORIES = [
    { id: 0, title: "Все" },
    { id: 1, title: "Мясные" },
    { id: 2, title: "Вегетарианская" },
    { id: 3, title: "Гриль" },
    { id: 4, title: "Острые" },
    { id: 5, title: "Закрытые" },
];
const Filter = () => {
    const [activeIndexFilter, setActiveIndexFilter] = useState(0);
    const changeCategoryHandler = function (event) {
        if (event.target.hasAttribute("id")) {
            setActiveIndexFilter(event.target.id);
        }
        return;
    };
    const createCategoryList = () => {
        return;
    };
    return (
        <div className="content__top">
            <div className="categories">
                <SelectCategory categoriesData={CATEGORIES} />
                <ul className="ul-filter" onClick={changeCategoryHandler}>
                    {CATEGORIES.map((category) => (
                        <Category
                            key={category.id}
                            id={category.id}
                            className={
                                activeIndexFilter.toString() === category.id.toString()
                                    ? "active"
                                    : ""
                            }
                            title={category.title}
                        />
                    ))}
                </ul>
            </div>
            <Sorting />
        </div>
    );
};

export default Filter;
