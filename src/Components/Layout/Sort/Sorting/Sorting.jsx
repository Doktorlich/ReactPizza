import React, { useEffect, useRef, useState } from "react";
import IconArrowSort from "../../../Svg/Arrow/IconArrowSort";

// const LIST_SORT = ["популярности", "цене", "алфавиту"];
const LIST_SORT = [
    { arrow: <IconArrowSort rotate="0" />, title: "популярности" },
    { arrow: <IconArrowSort rotate="180" />, title: "популярности" },
    { arrow: <IconArrowSort rotate="0" />, title: "цене" },
    { arrow: <IconArrowSort rotate="180" />, title: "цене" },
    { arrow: <IconArrowSort rotate="0" />, title: "алфавиту" },
    { arrow: <IconArrowSort rotate="180" />, title: "алфавиту" },
];

import { useSelector, useDispatch } from "react-redux";
import { setSortName, setSortingValue, setVisibleElem } from "../../../../Redux/slices/filterSlice";

const Sorting = () => {
    const dispatch = useDispatch();
    const { visibleElem, sortingValue, sortName } = useSelector(state => state.filter);
    const sortRef = useRef();
    //popup
    const showSortBlockHandler = function (event) {
        dispatch(setVisibleElem(!visibleElem));
        dispatch(setSortName(event.target.innerText));
    };
    const valueChangeHandler = value => {
        dispatch(setSortingValue(value));
    };
    useEffect(() => {
        const clickOutside = event => {
            if (!event.composedPath().includes(sortRef.current)) {
                dispatch(setVisibleElem(false));
            }
        };
        document.body.addEventListener("click", clickOutside);

        return () => {
            document.body.removeEventListener("click", clickOutside);
        };
    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <b>Сортировка по:</b>
                <span onClick={showSortBlockHandler}>{sortName}</span>
            </div>
            {visibleElem && (
                <div className="sort__popup" onClick={showSortBlockHandler}>
                    <ul>
                        {LIST_SORT.map((elemSort, index) => (
                            <li key={index} onClick={() => valueChangeHandler(index)} className={sortingValue === index ? "active" : ""}>
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

