export default function CategorySelector() {
    const title = "All"
    const categories = ["All", "Jackets", "Scarfs", "Gloves", "Hats", "Socks"]

    return (
        //since we are using bootstrap in this application so we will use the bootstrap classes
        <div className="dropdown mb-3 mb-lg-0">
            <button 
            className="btn btn-outline-success text-white dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            >
                { title }
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