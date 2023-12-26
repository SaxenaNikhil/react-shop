import { useNavigate } from "react-router-dom"

export default function Product ({product={}}) {

    const nav = useNavigate()

    return (
        <li onClick={()=>nav(`/single/${product.id}`)}>
            {product.name}
        </li>
    )
}