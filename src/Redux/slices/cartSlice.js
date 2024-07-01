import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
    count: 0,
};

const updateCountPrise = function (state) {
    state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price * obj.count, 0);
    state.count = state.items.reduce((acc, item) => acc + item.count, 0);
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action) {
            // state.items.push(action.payload);
            const findItem = state.items.find(item => item.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            updateCountPrise(state);
        },

        minusProduct(state, action) {
            const findItem = state.items.find(item => item.id === action.payload);
            if (findItem && findItem.count > 1) {
                findItem.count--;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
            updateCountPrise(state);
        },
        removeProduct(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);

            updateCountPrise(state);
        },
        clearItems(state) {
            state.items = [];
            updateCountPrise(state);
        },
    },
});

export const { addProduct, removeProduct, clearItems, minusProduct } = cartSlice.actions;
export default cartSlice.reducer;
