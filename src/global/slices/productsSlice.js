import { createSlice } from "@reduxjs/toolkit";
import data  from "../../data";

//This the product store

//here reducer is the entire reducer written below with the state. Here state is the initialState 
//here action are written inside the reducers which are basically the addProduct and clearProducts
export const { actions, reducer } = createSlice({
    //this is the name of the slice
    name : "products",
    //Here the productsFromSearch is pointed to the data that we have, which is kind of replacement for the data from the API
    //this initial state hold all our data from the list of data that we have
    initialState : {
        products : data,
        productsFromSearch : data
    },
    //these actions will update the state
    reducers : {
        //payload is basically what the user passes in 
        //here this function will take the state and the payload
        addProduct (state, { payload }) {
            state.products.push(payload)
        },
        //as we just need to clear the products so we will only take the state as there is no use of payload
        clearProducts (state) {
            state.products = []
        }
    }
})