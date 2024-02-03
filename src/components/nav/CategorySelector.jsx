import { useSelector } from 'react-redux'

export default function CategorySelector() {
    
    //Here we are basically destructuring the categories and selectedCategory to get the values
    //Here we are getting values of categories and selectedCategory by using the useSelector hook
    const { categories, selectedCategory } = useSelector(state => state.products)

    return (
        //since we are using bootstrap in this application so we will use the bootstrap classes
        <div className="dropdown mb-3 mb-lg-0">
            <button 
            className="btn btn-outline-success text-white dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            >
                { selectedCategory }
            </button>
            <ul className="dropdown-menu">
                {categories.map ((category, i) => (
                    <li key={i}>
                        <a href="#" className="dropdown-item pointer">{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}