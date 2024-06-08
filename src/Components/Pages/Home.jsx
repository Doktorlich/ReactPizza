import React, { useEffect, useState } from "react";
import Filter from "../Layout/Sort/Filter/Filter";
import PizzaBlock from "../Layout/PizzaBlock";
import PizzaBlockSceleton from "../Skeleton/PizzaBlockSkeleton";
import Sorting from "../Layout/Sort/Sorting/Sorting";
// const PROPERTIES_SORT = ["rating", "price", "title"];
const PROPERTIES_SORT = [
    { sortOrder: "asc", title: "rating" },
    { sortOrder: "desc", title: "rating" },
    { sortOrder: "asc", title: "price" },
    { sortOrder: "desc", title: "price" },
    { sortOrder: "asc", title: "title" },
    { sortOrder: "desc", title: "title" },
];
const Home = () => {
    // состояния для работы с fetch
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // состояния для хранения данных их компонентов filter и  sorting
    const [filterValue, setFilterValue] = useState(0);
    const [sortingValue, setSortingValue] = useState(0);
    const url = "https://666001a65425580055b1b88f.mockapi.io/items";

    // ?sortBy=price&
    useEffect(() => {
        setIsLoading(true);
        fetch(
            filterValue == 0
                ? url +
                      `?order=${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${
                          PROPERTIES_SORT[+sortingValue].title
                      }`
                : url +
                      `?${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${
                          PROPERTIES_SORT[+sortingValue].title
                      }&category=${filterValue}`,
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [filterValue, sortingValue]);
    // функция для изменения состояния фильтр компонента
    const filterValueHandler = function (id) {
        setFilterValue(id);
    };
    // функция для изменения состояния компонента сортировки
    const sortingValueHandler = function (value) {
        setSortingValue(value);
        console.log(sortingValue);
    };

    return (
        <div className="container">
            <div className="content__top">
                <Filter
                    onValueChange={(value) => {
                        filterValueHandler(value);
                    }}
                    filterValue={filterValue}
                />

                <Sorting
                    onValueChange={(value) => {
                        sortingValueHandler(value);
                    }}
                    sortingValue={sortingValue}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <ul className="content__items">
                {isLoading
                    ? [...Array(12)].map((_, index) => {
                          return <PizzaBlockSceleton key={index} />;
                      })
                    : items.map((pizza) => {
                          return <PizzaBlock key={pizza.id} {...pizza} />;
                      })}
            </ul>
        </div>
    );
};

export default Home;
