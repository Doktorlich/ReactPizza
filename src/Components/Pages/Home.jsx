import React, { useEffect, useState } from "react";
import Filter from "../Layout/Sort/Filter/Filter";
import PizzaBlock from "../Layout/PizzaBlock";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton";
import Sorting from "../Layout/Sort/Sorting/Sorting";
import Pagination from "../Pagination/Pagination";
// const PROPERTIES_SORT = ["rating", "price", "title"];
const PROPERTIES_SORT = [
    { sortOrder: "asc", title: "rating" },
    { sortOrder: "desc", title: "rating" },
    { sortOrder: "asc", title: "price" },
    { sortOrder: "desc", title: "price" },
    { sortOrder: "asc", title: "title" },
    { sortOrder: "desc", title: "title" },
];
const Home = ({ valueSearch, setValueSearch }) => {
    // состояния для работы с fetch
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // состояния для хранения данных их компонентов filter и  sorting
    const [filterValue, setFilterValue] = useState(0);
    const [sortingValue, setSortingValue] = useState(0);
    const url = "https://666001a65425580055b1b88f.mockapi.io/items";
    const search = valueSearch ? `&search=${valueSearch}` : "&search=";
    //  состояние дляпагинации
    const [pagCurrent, setPagCurrent] = useState("1");
    // переменная с помощью которой задаем количество отображаемых элементов на одной странице
    const nmbr = 4;
    // делим длинну массива элементов на число отображаемых элементов, и округляем в большую сторону
    const amountPages = Math.ceil(items.length / nmbr);
    const startIndex = (pagCurrent - 1) * nmbr;
    const endIndex = startIndex + nmbr;
    const DataPerPage = items.slice(startIndex, endIndex);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            filterValue == 0
                ? url + `?order=${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${PROPERTIES_SORT[+sortingValue].title}` + search
                : url + `?${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${PROPERTIES_SORT[+sortingValue].title}&category=${filterValue}` + search,
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [filterValue, sortingValue, valueSearch]);
    // функция для изменения состояния фильтр компонента
    const filterValueHandler = function (id) {
        setFilterValue(id);
    };
    // функция для изменения состояния компонента сортировки
    const sortingValueHandler = function (value) {
        setSortingValue(value);
    };

    const pizzaItems = DataPerPage.map((pizza) => {
        return <PizzaBlock key={pizza.id} {...pizza} />;
    });

    const skeletons = [...Array(12)].map((_, index) => {
        return <PizzaBlockSkeleton key={index} />;
    });
    return (
        <div className="container">
            <div className="content__top">
                <Filter
                    onValueChange={(value) => {
                        filterValueHandler(value);
                    }}
                    filterValue={filterValue}
                    setPagCurrent={setPagCurrent}
                />

                <Sorting
                    onValueChange={(value) => {
                        sortingValueHandler(value);
                    }}
                    sortingValue={sortingValue}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <ul className="content__items">{isLoading ? skeletons : pizzaItems}</ul>
            <Pagination amountPages={amountPages} pagCurrent={pagCurrent} setPagCurrent={setPagCurrent} endIndex={endIndex} />
        </div>
    );
};

export default Home;
