import Header from "./Components/Layout/Header/Header";
import Filter from "./Components/Layout/Nav/Filter";
import PizzaBlock from "./Components/Layout/PizzaBlock/PizzaBlock";
import PizzaBlockSceleton from "./Components/Skeleton/PizzaBlockSceleton";
import "./scss/app.scss";
// import pizzas from "./Assets/pizza.json";
import { useEffect, useState } from "react";
function App() {
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
    }, []);
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
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
                </div>
            </div>
        </>
    );
}

export default App;
