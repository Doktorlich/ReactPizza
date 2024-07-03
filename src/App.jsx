import React from "react";
import Header from "./Components/Layout/Header";

import Cart from "./Components/Pages/Cart";
import Home from "./Components/Pages/Home";
import NotFound from "./Components/Pages/NotFound";
import InfoPizza from "./Components/Layout/InfoPizza/InfoPizza";

import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/not-found" element={<NotFound />} />
                    <Route path="/pizza/:id" element={<InfoPizza />} />
                    <Route path="*" element={<div>Not found</div>} />
                </Routes>
            </div>
        </div>
    );
}
export default App;
