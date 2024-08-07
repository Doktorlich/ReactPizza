import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Filter from "../Layout/Sort/Filter/Filter";
import PizzaBlock from "../Layout/PizzaBlock";
import PizzaBlockSkeleton from "../Skeleton/PizzaBlockSkeleton";
import Sorting from "../Layout/Sort/Sorting/Sorting";
import Pagination from "../Pagination/Pagination";

import { useSelector, useDispatch } from "react-redux";
import { setFilterValue, setFilters, setPagCurrent } from "../../Redux/slices/filterSlice";
import qs from "qs";
import { setItems, fetchPizzaElement } from "../../Redux/slices/pizzaSlice";

const PROPERTIES_SORT = [
    { sortOrder: "asc", title: "rating" },
    { sortOrder: "desc", title: "rating" },
    { sortOrder: "asc", title: "price" },
    { sortOrder: "desc", title: "price" },
    { sortOrder: "asc", title: "title" },
    { sortOrder: "desc", title: "title" },
];

const Home = () => {
    const navigate = useNavigate();
    const { valueSearch } = useSelector((state) => state.search);
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    // логика redux для категорий
    const { filterValue, sortingValue, pagCurrent } = useSelector((state) => state.filter);
    const { items, status: isLoading } = useSelector((state) => state.pizzaElement);

    // состояния для работы с fetch
    // const [items, setItems] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // ! ПАГИНАЦИЯ
    const number = 4;
    const amountPages = Math.ceil(items.length / number);
    const startIndex = (pagCurrent - 1) * number;
    const endIndex = startIndex + number;
    const DataPerPage = items.slice(startIndex, endIndex);
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            // console.log("spread", ...params);
            dispatch(
                setFilters({
                    ...params,
                }),
            );
            isSearch.current = true;
        }

        // return () => {};
    }, []);
    // ! работа с AXIOS

    const fetchPizzas = async () => {
        const search = valueSearch ? `&search=${valueSearch}` : `&search=`;

        dispatch(fetchPizzaElement({ PROPERTIES_SORT, filterValue, sortingValue, pagCurrent, valueSearch, search }));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!isSearch.current) {
            fetchPizzas();
        }
        isSearch.current = false;
    }, [filterValue, sortingValue, valueSearch, pagCurrent]);

    // ! работа с адресной строкой браузера через библиотеку QS

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                filterValue,
                sortingValue,
                valueSearch,
                pagCurrent,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;

        // return () => {};
    }, [filterValue, sortingValue, valueSearch, pagCurrent]);

    // ! другая логика

    const pizzaItems = DataPerPage.map((pizza) => {
        return <PizzaBlock key={pizza.id} {...pizza} />;
    });

    const skeletons = [...Array(number)].map((_, index) => {
        return <PizzaBlockSkeleton key={index} />;
    });

    return (
        <div className="container">
            <div className="content__top">
                <Filter onValueChange={(id) => dispatch(setFilterValue(id))} filterValue={filterValue} setPagCurrent={setPagCurrent} />

                <Sorting />
            </div>
            <h2 className="content__title">Все пиццы</h2>

            <ul className="content__items">{isLoading == "loading" ? skeletons : pizzaItems}</ul>
            <Pagination amountPages={amountPages} pagCurrent={pagCurrent} setPagCurrent={setPagCurrent} endIndex={endIndex} />
        </div>
    );
};

export default Home;
