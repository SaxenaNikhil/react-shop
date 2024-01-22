import { configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./slices/productsSlice";

//Here we will configure our store with the help of configure store object

const store =  configureStore({
    //this will take reducer
    reducer : {
        //inside this we have 2 reducer, first is the products and second is the cart
        products : productsReducer,
        // cart : "y"
    }
});

export default store;