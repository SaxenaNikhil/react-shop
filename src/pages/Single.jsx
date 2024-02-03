import { useParams } from "react-router-dom"
import ProductButton from "../components/products/productButton"
import Line from "../components/extra/Line"
import Products from "../components/products/Products"
import { useSelector } from 'react-redux'

export default function Single() {

    const { id } = useParams()

    //Extracting the single and singleSimilarProducts from the productSlice state using the useSelector.
    const { single, singleSimilarProducts } = useSelector(state => state.products)

    return (
        <div>
            <div id="single" className="row justify-content-center align-items-center text-white mx-auto">
                <div className="col-md-6">
                    <img src={require(`../images/${single.id}.jpg`)}
                        alt=""
                        className="card-img-top mb-5 mb-md-0 p-0 p-lg-5" 
                    />
                </div>
                <div className="col-md-6 text-center text-md-start">
                    <h2 className="fs-1 fw-bold">{single.name}</h2>
                    <div className="fs-5 mb-2">{single.price}</div>
                    <p className="lead">
                        {single.description}
                    </p>
                    <ProductButton/>
                </div>
            </div>
            <Line/>
            {/* Here we are showing the similar products not based on the suggestions but basically we have trimmed the list of products for now for temporary suggestion will implement this feature through the reducer redux concept. */}
            <h2 className="text-white my-4 text-center">Similar Products like This</h2>
            <Products products={singleSimilarProducts}/>
        </div>
    )
}