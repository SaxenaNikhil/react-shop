import { createSlice } from "@reduxjs/toolkit";

//This the product store

//here reducer is the entire reducer written below with the state. Here state is the initialState 
//here action are written inside the reducers which are basically the addProduct and clearProducts
export const { actions, reducer } = createSlice({
    //this is the name of the slice
    name : "products",
    //this initial state hold all our data
    initialState : {
        products : ["socks", "shoes"]
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