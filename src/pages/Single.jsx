import { useParams } from "react-router-dom"
import data from "../data"
import ProductButton from "../components/products/productButton"
import Line from "../components/extra/Line"
import Products from "../components/products/Products"

export default function Single() {

    const { id } = useParams()

    const product = data.find((product) => product.id === +id)
    // console.log(product)

    return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6">
                    <img src={require(`../images/${product.id}.jpg`)}
                        alt=""
                        className="card-img-top mb-5 mb-md-0 p-0 p-lg-5" 
                    />
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fs-1 fw-bold">{product.name}</h2>
                    <div className="fs-5 mb-2">{product.price}</div>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem non officiis deserunt quas amet alias sapiente dolorum sed est, aliquid eum, delectus quidem eos quaerat dolor nostrum voluptatum iste laboriosam!
                    </p>
                    <ProductButton/>
                </div>
            </div>
            <Line/>
            {/* Here we are showing the similar products not based on the suggestions but basically we have trimmed the list of products for now for temporary suggestion will implement this feature through the reducer redux concept. */}
            <h2 className="text-white my-4 text-center">Similar Products like This</h2>
            <Products products={data.slice(0,4)}/>
        </div>
    )
}