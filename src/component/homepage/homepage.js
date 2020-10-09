import React from "react"
import "./homepage.css"
import Navbar from "../../shared/navbar"
import{setLocalStorage} from "../../const/tokenStorage"
import ENTRYFORM from "../../component/entryForm/employeeEntryForm/employeeEntryForm.js"


const Homepage=()=>{
    // // let logout=()=>{
    // //     localStorage.clear()
    // //     setTimeout(() => {
    // //         window.location.reload()
    // //     }, 1000);
    // }
    return(
        
        <div className="row">
          
            <div className="col-2 navBar">
                <Navbar/>
            </div>
            <div className="col-9 bodydisplay"> <ENTRYFORM/></div>
        </div>
        
    )
}
export default Homepage




               
            //    <div className="logoutCss"><button className="m-5"onClick={()=>logout()}>Logout</button> </div>