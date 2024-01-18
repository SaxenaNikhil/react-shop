export default function cartBuyButton ({title="Buy Now"}) {

    const buy = () => {
        console.log("Buying Now!");
    }

    return (
        <button onClick={buy} className="btn btn-success d-block w-100 fw-bold mt-3">
            {title}
        </button>
    )
}