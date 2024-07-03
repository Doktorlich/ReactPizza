import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const InfoPizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState();
    useEffect(() => {
        async function fetchPizza() {
            try {
                const { data } = await axios.get("https://666001a65425580055b1b88f.mockapi.io/items/" + id);
                setPizza(data);
            } catch (error) {
                console.log("ERROR", error);
            }
        }
        fetchPizza();
        // return () => {};
    }, []);
    if (!pizza) {
        return "Загрузка...";
    }
    return (
        <div className="container">
            <img src={pizza.imageUrl} />
            <h2>{pizza.title}</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque id, culpa labore hic tempore placeat vel laboriosam obcaecati blanditiis mollitia at debitis quae
                aspernatur, quibusdam eum sunt, voluptas ratione itaque?
            </p>
            <p>{pizza.price} ₽</p>
        </div>
    );
};

export default InfoPizza;
