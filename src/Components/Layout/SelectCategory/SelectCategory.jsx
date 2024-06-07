import React from "react";

const SelectCategory = ({ categoriesData }) => {
    return (
        <select className="burger-menu">
            {categoriesData.map((category) => (
                <option key={category.id} className="burger-menu__elem" value={category.title}>
                    {category.title}
                </option>
            ))}
        </select>
    );
};

export default SelectCategory;
