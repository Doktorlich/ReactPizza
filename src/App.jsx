import Header from "./Components/Layout/Header/Header";
import Filter from "./Components/Layout/Nav/Filter";
import PizzaBlock from "./Components/Layout/PizzaBlock/PizzaBlock";
import "./scss/app.scss";
// import pizzas from "./Assets/pizza.json";
import { useEffect, useState } from "react";
function App() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://666001a65425580055b1b88f.mockapi.io/items")
            .then((res) => {
                return res.json();
            })
            .then((items) => {
                setItems(items);
                console.log(items);
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
                            {items.map((pizza) => {
                                return (
                                    <PizzaBlock
                                        key={pizza.id}
                                        {...pizza}

                                        //* Передаем все свойства из массива

                                        // title={pizza.title}
                                        // price={pizza.price}
                                        // imageUrl={pizza.imageUrl}
                                        // types={pizza.types}
                                        // sizes={pizza.sizes}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
