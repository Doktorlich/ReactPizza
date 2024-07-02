import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    valueSearch: "",
    searchState: "",
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setValueSearch(state, action) {
            state.valueSearch = action.payload;
        },
        setSearchState(state, action) {
            state.searchState = action.payload;
        },
    },
});

export const { setValueSearch, setSearchState } = searchSlice.actions;
export default searchSlice.reducer;
