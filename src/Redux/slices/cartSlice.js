import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
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
            state.totalPrice = state.items.reduce((acc, obj) => acc + obj.price, 0);
        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id === action.payload);
        },
        clearItems(state) {
            state.items = [];
        },
    },
});
console.log();
export const { addProduct, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
