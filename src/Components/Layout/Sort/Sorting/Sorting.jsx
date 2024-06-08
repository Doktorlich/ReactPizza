import React, { useState } from "react";
import IconArrowSort from "../../../../Assets/Arrow/IconArrowSort";

// const LIST_SORT = ["популярности", "цене", "алфавиту"];
const LIST_SORT = [
    { arrow: <IconArrowSort rotate="0" />, title: "популярности" },
    { arrow: <IconArrowSort rotate="180" />, title: "популярности" },
    { arrow: <IconArrowSort rotate="0" />, title: "цене" },
    { arrow: <IconArrowSort rotate="180" />, title: "цене" },
    { arrow: <IconArrowSort rotate="0" />, title: "алфавиту" },
    { arrow: <IconArrowSort rotate="180" />, title: "алфавиту" },
];

const Sorting = ({ sortingValue, onValueChange }) => {
    const [visibleElem, setVisibleElem] = useState(false);
    const [sortName, setSortName] = useState("популярности");

    const showSortBlockHandler = function (event) {
        setVisibleElem(!visibleElem);
        setSortName(event.target.innerText);
    };

    return (
        <div className="sort">
            <div className="sort__label">
                <b>Сортировка по:</b>
                <span onClick={showSortBlockHandler}>{sortName}</span>
            </div>
            {visibleElem && (
                <div className="sort__popup" onClick={showSortBlockHandler}>
                    <ul>
                        {LIST_SORT.map((elemSort, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    onValueChange(index);
                                }}
                                className={sortingValue === index ? "active" : ""}
                            >
                                {elemSort.arrow}
                                {elemSort.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sorting;
// rating - популярности
// price  - цене
// title - алфавиту
