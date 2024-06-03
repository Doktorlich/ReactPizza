import Header from "./Components/Layout/Header/Header";
import Filter from "./Components/Layout/Nav/Filter";
import PizzaBlock from "./Components/Layout/PizzaBlock/PizzaBlock";
import "./scss/app.scss";

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
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                            <PizzaBlock />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
