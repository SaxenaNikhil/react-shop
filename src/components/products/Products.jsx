import Product from "./Product";

export default function Products ({products=[]}) {
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))}
            </ul>
        </div>
    )
}