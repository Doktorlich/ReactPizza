import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterValue: 0,
    sortingValue: 0,
    sortName: "популярности",
    visibleElem: false,
    pagCurrent: 1,
};
export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilterValue(state, action) {
            state.filterValue = action.payload;
        },
        setSortingValue(state, action) {
            state.sortingValue = action.payload;
        },
        setSortName(state, action) {
            state.sortName = action.payload;
        },

        setVisibleElem(state, action) {
            state.visibleElem = action.payload;
        },
        setPagCurrent(state, action) {
            state.pagCurrent = action.payload;
        },
        setFilters(state, action) {
            state.filterValue = +action.payload.filterValue;
            state.sortingValue = +action.payload.sortingValue;
            state.pagCurrent = +action.payload.pagCurrent;
        },
    },
});
export const { setFilterValue, setSortingValue, setSortName, setVisibleElem, setPagCurrent, setFilters } = filterSlice.actions;

export default filterSlice.reducer;

//
// setSortingValue
// (!visibleElem)
