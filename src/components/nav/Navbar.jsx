import CartButton from "./CartButton"
import CategorySelector from "./CategorySelector"
import SearchBar from "./SearchBar"


//a function is a component which returns JSX
export default function Navbar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom">
            <div className="container-fluid px-md-5">
                <span id="name" className="navbar-brand fw-bold pointer">
                    React Shop
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <CategorySelector/>
                    {/* <SearchBar/>
                    <CartButton/> */}
                </div>
            </div>
        </nav>
    )
}