import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext/globalContext";
import { useContext, useEffect, useState } from "react";

const Home = ()=>{
    const {state, addRecords}= useContext(GlobalContext);
    const [getValue,setGetValue]=useState();
    console.log("getValue",getValue);
    useEffect(()=>{

    },[])
    return(
    <div>
        <div>
        <Link to="/">
        <h3>Home</h3>
        </Link>
        <Link to="/About">
        <h3>About</h3>
        </Link>
        </div>
        <div>
            {state?.data}
            <input onChange={(event)=>setGetValue(event.target.value)}  />
            <button onClick={()=>{addRecords(getValue)}}>Add Record</button>
        </div>
    </div>
    )
}
export default Home;