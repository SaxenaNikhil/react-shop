import { createSlice } from "@reduxjs/toolkit";
import data  from "../../data";
import { uniq } from 'lodash';
import { loremIpsum } from 'lorem-ipsum'

//updating the data description to the random lorem ipsum text
data.forEach(d => d.description = loremIpsum())

//Working on the categories
const DEFAULT_CATEGORY = "All"

//Now on this we will call a sort() function which will sort the element in a alphabetical order
//Here uniq is a method which creates a duplicate free array
const categories = (uniq(data.map((product) => product.category))).sort()

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
        productsFromSearch : data,
        categories : [DEFAULT_CATEGORY, ...categories],
        selectedCategory : DEFAULT_CATEGORY,
        single : data[0],
        singleSimilarProducts : data.slice(0, 4),
        searchTerm : ""
    },
    //these actions will update the state
    reducers : {
        // Here in the second argument from action we are destructuring the payload only. For now payload basically is what the user types in.
        // Here in the arguments state basically is the whole initial state mentioned above
        //Here this setSearchTerm store will receive the actions dispatched from the searchBar input on change
        // Here this function for the search part of the application
        setSearchTerm (state, {payload:searchTerm}) {
            //Here we have reassigned the payload to the searchTerm
            state.searchTerm = searchTerm
        }
    }
})