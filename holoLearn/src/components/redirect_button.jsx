import { useNavigate } from "react-router-dom";

export default function RedirectButton({path, text}){
const navigate = useNavigate()

function handleSubmit(){
    navigate(path)
}

return(
    <button className="buttonRedirect" type="submit" onClick={handleSubmit}>{text}</button>
)
}