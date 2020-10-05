import React from "react"
import Navbar from "../../shared/navbar"
import{setLocalStorage} from "../../const/tokenStorage"

const Homepage=()=>{
    let logout=()=>{
        localStorage.clear()
        setTimeout(() => {
            window.location.reload()
        }, 1000);
    }
    return(
        <div>
    
        <Navbar/>
       <button onClick={()=>logout()}>erase/logout</button>
        </div>
    )
}
export default Homepage