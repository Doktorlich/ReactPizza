import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Filter from "../Layout/Sort/Filter/Filter";
import PizzaBlock from "../Layout/PizzaBlock";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton";
import Sorting from "../Layout/Sort/Sorting/Sorting";
import Pagination from "../Pagination/Pagination";
import SearchContext from "../../Storage/SearchContext";
//клиент-серверная библиотека для выполнения HTTP-запросов
import axios from "axios";
import debounce from "lodash.debounce";
import { useSelector, useDispatch } from "react-redux";
import { setFilterValue, setPagCurrent } from "../../Redux/slices/filterSlice";

const PROPERTIES_SORT = [
    { sortOrder: "asc", title: "rating" },
    { sortOrder: "desc", title: "rating" },
    { sortOrder: "asc", title: "price" },
    { sortOrder: "desc", title: "price" },
    { sortOrder: "asc", title: "title" },
    { sortOrder: "desc", title: "title" },
];
const Home = () => {
    const { valueSearch } = useContext(SearchContext);
    const dispatch = useDispatch();
    // логика redux для категорий
    const { filterValue, sortingValue, pagCurrent } = useSelector(state => state.filter);

    // состояния для работы с fetch
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // ! ПАГИНАЦИЯ
    const number = 4;
    const amountPages = Math.ceil(items.length / number);
    const startIndex = (pagCurrent - 1) * number;
    const endIndex = startIndex + number;
    const DataPerPage = items.slice(startIndex, endIndex);

    // ! работа с AXIOS
    const url = "https://666001a65425580055b1b88f.mockapi.io/items";
    const search = valueSearch ? `&search=${valueSearch}` : `&search=`;

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(
                filterValue == 0
                    ? url + `?order=${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${PROPERTIES_SORT[+sortingValue].title}` + search
                    : url + `?${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${PROPERTIES_SORT[+sortingValue].title}&category=${filterValue}` + search,
            )
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log("error", error);
            });
        window.scrollTo(0, 0);
    }, [filterValue, sortingValue, valueSearch]);

    // ! другая логика

    const pizzaItems = DataPerPage.map(pizza => {
        return <PizzaBlock key={pizza.id} {...pizza} />;
    });

    const skeletons = [...Array(number)].map((_, index) => {
        return <PizzaBlockSkeleton key={index} />;
    });
    return (
        <div className="container">
            <div className="content__top">
                <Filter onValueChange={id => dispatch(setFilterValue(id))} filterValue={filterValue} setPagCurrent={setPagCurrent} />

                <Sorting />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <ul className="content__items">{isLoading ? skeletons : pizzaItems}</ul>
            <Pagination amountPages={amountPages} pagCurrent={pagCurrent} setPagCurrent={setPagCurrent} endIndex={endIndex} />
        </div>
    );
};

export default Home;
