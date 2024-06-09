import { useState } from "react";
import Header from "./Components/Layout/Header";

import Cart from "./Components/Pages/Cart";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";

import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

function App() {
    const [valueSearch, setValueSearch] = useState("");

    return (
        <>
            <div className="wrapper">
                <Header valueSearch={valueSearch} setValueSearch={setValueSearch} />
                <div className="content">
                    <Routes>
                        <Route
                            path=""
                            element={
                                <Home valueSearch={valueSearch} setValueSearch={setValueSearch} />
                            }
                        />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/not-found" element={<NotFound />} />
                        <Route path="*" element={<div>Not found</div>} />
                    </Routes>
                </div>
            </div>
        </>
    );
}
export default App;
