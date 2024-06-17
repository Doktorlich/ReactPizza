import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterValue: 0,
    sortingValue: 0,
    sortName: "популярности",
    visibleElem: false,
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
    },
});
export const { setFilterValue, setSortingValue, setSortName, setVisibleElem } = filterSlice.actions;

export default filterSlice.reducer;

//
// setSortingValue
// (!visibleElem)
