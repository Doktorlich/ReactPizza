import React from "react";

const Category = (props) => {
    return (
        <li id={props.id} className={props.className}>
            {props.title}
        </li>
    );
};

export default Category;
