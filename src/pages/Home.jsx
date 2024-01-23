import Products from "../components/products/Products";
import { useSelector } from 'react-redux'

//useSelector will allow us to select something from our state given in the productsSlice store

export default function Home() {

    //Here we are extracting element from the global state using the useSelector hook
    //Here we are destructuring the productsFromSearch from the store
    //Here state is the entire global state mentioned in the application and state.products refer to the global folder index.js products which is basically the entire state mentioned in the productsSlice
    const { productsFromSearch } = useSelector((state) => state.products)

    return (
        //Now here the home page data is coming from the redux store 
        <Products products={productsFromSearch}/>
    )
}