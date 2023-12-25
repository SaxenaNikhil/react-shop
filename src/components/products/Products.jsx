export default function Products ({products=[]}) {
    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li>{product.name}</li>
                ))}
            </ul>
        </div>
    )
}