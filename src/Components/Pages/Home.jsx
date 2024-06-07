import React, { useEffect, useState } from "react";
import Filter from "../Layout/Nav/Filter";
import PizzaBlock from "../Layout/PizzaBlock";
import PizzaBlockSceleton from "../Skeleton/PizzaBlockSkeleton";

const Home = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://666001a65425580055b1b88f.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setItems(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container">
            <Filter />
            <h2 className="content__title">Все пиццы</h2>
            <ul className="content__items">
                {isLoading
                    ? [...Array(6)].map((_, index) => {
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
