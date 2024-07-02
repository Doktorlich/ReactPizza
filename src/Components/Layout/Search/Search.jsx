import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "./Search.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setSearchState, setValueSearch } from "../../../Redux/slices/searchSlice";

const Search = () => {
    const dispatch = useDispatch();
    const { valueSearch, searchState } = useSelector((state) => state.search);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setValueSearch(searchState));
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchState, setValueSearch]);

    const inputRef = useRef();

    const changeValueSearchHandler = function (event) {
        dispatch(setSearchState(event.target.value));
    };

    const returnFocusInputHandler = () => {
        inputRef.current.focus();
        dispatch(setSearchState(""));
    };

    return (
        <div className={styled["search-block"]}>
            <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" className={styled.search}>
                <title />
                <path d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z" />
            </svg>
            <input ref={inputRef} placeholder="Search pizza" className={styled.input} onChange={changeValueSearchHandler} value={searchState} />
            {valueSearch && (
                <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg" className={styled.clear} onClick={returnFocusInputHandler}>
                    <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
                    <path d="M0 0h48v48H0z" fill="none" />
                </svg>
            )}
        </div>
    );
};

export default Search;
