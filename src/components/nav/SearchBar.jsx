// import { useState } from "react"
import { useSelector } from 'react-redux'

export default function SearchBar () {

    //here we will work later on the search product functionality implementation using the redux

    //here useState returns an array which we can destructure it in a set of variable, so we will take getter as 'text' and setter as 'setText' 
    //here setText is a function
    //here text variable get the current value
    //state variable will change when we will re-render the component
    // const [text, setText] = useState("")
    // console.log(text);

    const { searchTerm } =  useSelector(state => state.products) 

    return (
        <form onSubmit={(e) => e.preventDefault()} className="d-flex ms-0 ms-lg-3">
            <input 
                type="text"
                placeholder="Search Products"
                className="form-control ms-md-auto me-2"
                // here we will keep track of items we will be searching so we will be using the useState hooks
                onChange={() => {}}
                value={searchTerm}
            />
        </form>
    )
}