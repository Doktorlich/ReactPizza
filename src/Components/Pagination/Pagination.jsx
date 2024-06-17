import React, { useState } from "react";
import styled from "./Pagination.module.scss";

const Pagination = ({ amountPages, endIndex, pagCurrent, setPagCurrent }) => {
    const movingLeft = function () {
        setPagCurrent(+pagCurrent === 1 ? pagCurrent : +pagCurrent - 1);
    };
    const amountElemPag = document.querySelectorAll("#pag-elem").length;
    const movingRight = function () {
        setPagCurrent(+pagCurrent === amountElemPag ? pagCurrent : +pagCurrent + 1);
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
                                setPagCurrent(page);
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
