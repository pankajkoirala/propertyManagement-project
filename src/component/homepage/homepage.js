import React from "react"
import "./homepage.css"
import Navbar from "../../shared/navbar"
import INCOME from "../../assets/income.PNG"
import Maintainance from "../../assets/maintinance.PNG"
import Occupancy from "../../assets/occupancy.PNG"
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
            
            <div className="col-9 bodydisplay"> <h1>DashBoard</h1>
            <div className="row m-3">
              <div className="col-4">
                    <img src={INCOME} alt="Income" />
              </div>
              <div className="col-4"> <img src={Maintainance} alt="Income" /></div>
              <div className="col-4"><img src={INCOME} alt="Income" /></div>
            </div>
            <div className="row m-3">
              <div className="col-4"><img src={Maintainance} alt="Income" /></div>
              <div className="col-4"><img src={INCOME} alt="Income" /></div>
              <div className="col-4"><img src={Maintainance} alt="Income" /></div>
            </div>
            <div className="row m-2">
              <div className="col-10"><img src={Occupancy} alt="Income" /></div>
            </div>
            <div className="row m-3">
              <div className="col-5"><img src={Maintainance} alt="Income" /></div>
              <div className="col-5"><img src={INCOME} alt="Income" /></div>
             
            </div>
          </div>
        </div>
        
    )
}
export default Homepage




               
            //    <div className="logoutCss"><button className="m-5"onClick={()=>logout()}>Logout</button> </div>