// import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { actions as productsActions } from '../../global/slices/productsSlice'

export default function SearchBar () {

    //here we will work later on the search product functionality implementation using the redux

    //here useState returns an array which we can destructure it in a set of variable, so we will take getter as 'text' and setter as 'setText' 
    //here setText is a function
    //here text variable get the current value
    //state variable will change when we will re-render the component
    // const [text, setText] = useState("")
    // console.log(text);

    const { searchTerm } =  useSelector(state => state.products) 

    const dispatch = useDispatch()

    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-0 ms-lg-3">
            <input 
                type="search"
                placeholder="Search Products"
                className="form-control ms-md-auto me-2"
                //Here we are using the dispatch to give what user has typed in inside of e.target.value through actions to pass the input to setSearchTerm as payload
                onChange={(e) => { dispatch(productsActions.setSearchTerm(e.target.value)) }}
                value={searchTerm}
            />
        </form>
    )
}