import React from "react"
import "./homepage.css"
import Navbar from "../../shared/navbar"
import VIDEO from "../../assets/video.gif"
import{setLocalStorage} from "../../const/tokenStorage"



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
            
            <div className="col-9 bodydisplay">  This is body display in dashboard. Displayed will be as per the button clicked on the left corner. <div className="video">
            <video autoPlay="autoplay" loop={true}>
              <source
                src={<VIDEO/>}
                type="video/gif"
              />
              Your browser does not support HTML5 video.
            </video>
          </div></div>
        </div>
        
    )
}
export default Homepage




               
            //    <div className="logoutCss"><button className="m-5"onClick={()=>logout()}>Logout</button> </div>