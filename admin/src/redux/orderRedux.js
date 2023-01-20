import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //get all
        getOrderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrderSuccess: (state, action) => {
          state.isFetching = false;
          state.orders = action.payload;
        },
        getOrderFailure: (state) => {
          state.isFetching = false;
          state.error = true;
        },
        //delete
        deleteOrderStart: (state) => {
          state.isFetching = true;
          state.error = false;
        },
        deleteOrderSuccess: (state, action) => {
          state.isFetching = false;
          state.orders.splice(
            state.orders.findIndex((item) => item._id === action.payload),1
          );
        },
        deleteOrdertFailure: (state) => {
          state.isFetching = false;
          state.error = true;
        },
            //UPDATE 
        updateOrderStart: (state) => {
          state.isFetching = true;
          state.error = false;
        },
        updateOrderSuccess: (state, action) => {
          state.isFetching = false;
          state.orders[
            state.orders.findIndex((item) => item._id === action.payload.id)
          ] = action.payload.product;
        },
        updateOrderFailure: (state) => {
          state.isFetching = false;
          state.error = true;
        },
    },
});

export const { getOrderStart, getOrderSuccess, getOrderFailure, deleteOrderStart, deleteOrderSuccess, deleteOrderFailure, updateOrderStart, updateOrderSuccess, updateOrderFailure } = 
    orderSlice.actions;
export default orderSlice.reducer;