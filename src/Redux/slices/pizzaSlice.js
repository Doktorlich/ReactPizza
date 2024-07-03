import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: "loading",
};

const type = "pizzaElement/fetchPizzaElementStatus";
const callback = async (parametrs) => {
    const { PROPERTIES_SORT, filterValue, sortingValue, search } = parametrs;
    const url = "https://666001a65425580055b1b88f.mockapi.io/items";
    const response = await axios.get(
        filterValue == 0
            ? url + `?order=${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${PROPERTIES_SORT[+sortingValue].title}` + search
            : url + `?${PROPERTIES_SORT[+sortingValue].sortOrder}&orderBy=${PROPERTIES_SORT[+sortingValue].title}&category=${filterValue}` + search,
    );

    return response.data;
};
const options = {};

export const fetchPizzaElement = createAsyncThunk(type, callback, options);

const pizzaSlice = createSlice({
    name: "pizzaElement",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
        setIsLoading(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzaElement.pending, (state) => {
            state.items = [];
            state.status = "loading";
        });
        builder.addCase(fetchPizzaElement.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "success";
        });
        builder.addCase(fetchPizzaElement.rejected, (state) => {
            state.status = "ERROR";
            state.items = [];
        });
    },
});
export const { setItems, setIsLoading } = pizzaSlice.actions;
export default pizzaSlice.reducer;
