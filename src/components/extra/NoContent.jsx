import { useNavigate } from "react-router-dom"

//Here in the NoContent there are two props where we have passed their default values here.
export default function NoContent({ text="abc", btnText="xyz" }){

    const nav = useNavigate()

    return (
        <div className="text-white text-center my-5 mx-auto p-0 p-md-5 rounded">
            <h2>{text}</h2>
            <button onClick={()=>nav("/")} className="btn btn-success btn-lg mt-3">
                {btnText}
            </button>
        </div>
    )
}