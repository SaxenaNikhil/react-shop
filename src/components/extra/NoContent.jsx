export default function NoContent({ text="abc", btnText="xyz" }){
    return (
        <div className="text-white text-center my-5 mx-auto p-0 p-md-5 rounded">
            <h2>{text}</h2>
            <button className="btn btn-success btn-lg mt-3">
                {btnText}
            </button>
        </div>
    )
}