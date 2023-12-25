import Products from "../components/products/Products";
import data from "../data";

export default function Home() {
    return (
        <div>
            <h1> Home Component! </h1>
            <Products products={data}/>
        </div>
    )
}