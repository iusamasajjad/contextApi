import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext/globalContext";

const About =()=>{
    const {state}=useContext(GlobalContext)
    return(
        <div>
            <Link to="/">
        <h3>Home</h3>
        </Link>
            <h1>All Records</h1>
            {state?.addData?.map((single,index)=>
            <p>{single}</p>
            )}
            
        </div>
    )
}
export default About;