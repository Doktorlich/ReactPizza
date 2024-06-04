import Header from "./Components/Layout/Header/Header";
import Filter from "./Components/Layout/Nav/Filter";
import PizzaBlock from "./Components/Layout/PizzaBlock/PizzaBlock";
import "./scss/app.scss";
import pizzas from "./Assets/pizza.json";
function App() {
    return (
        <>
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Filter />
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizzas.map((pizza) => {
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
