import React from "react";

const Category = (props) => {
    return <li {...props.li}>{props.li.title}</li>;
};

export default Category;
