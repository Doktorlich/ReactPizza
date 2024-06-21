import React, { useState } from "react";
import styled from "./Pagination.module.scss";
import { useDispatch } from "react-redux";
import { setPagCurrent } from "../../Redux/slices/filterSlice";

const Pagination = ({ amountPages, endIndex, pagCurrent  }) => {
    const dispatch = useDispatch();
    const movingLeft = function () {
        dispatch(setPagCurrent(+pagCurrent === 1 ? pagCurrent : +pagCurrent - 1));
    };
    const amountElemPag = document.querySelectorAll("#pag-elem").length;
    const movingRight = function () {
        dispatch(setPagCurrent(+pagCurrent === amountElemPag ? pagCurrent : +pagCurrent + 1));
    };

    return (
        amountPages > 1 && (
            <ul className={styled["pagination"]}>
                <li onClick={movingLeft}>&laquo;</li>
                {Array.from({ length: amountPages }, (_, index) => index + 1).map(page => {
                    return (
                        <li
                            key={page}
                            id="pag-elem"
                            onClick={() => {
                                dispatch(setPagCurrent(page));
                            }}
                            className={+pagCurrent === +page ? styled["active"] : ""}
                        >
                            {page}
                        </li>
                    );
                })}
                <li onClick={movingRight}>&raquo;</li>
            </ul>
        )
    );
};

export default Pagination;
