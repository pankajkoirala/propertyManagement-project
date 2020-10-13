import React from "react";
import "./homepage.css";
import Navbar from "../../shared/navbar";
import VIDEO from "../../assets/video.gif";
import { setLocalStorage } from "../../const/tokenStorage";

const Homepage = () => {
  // // let logout=()=>{
  // //     localStorage.clear()
  // //     setTimeout(() => {
  // //         window.location.reload()
  // //     }, 1000);
  // }
  return (
    <div className="row">
      <div className="col-2 navBar">
        <Navbar />
      </div>

      <div className="col-9 bodydisplay">
        
        <div className="">
          <div className="row">
            <div className="col-md-3">
              <h4>expanse</h4>
            </div>
            <div className="col-md-3">
              <h4>maintanance</h4>
            </div>
            <div className="col-md-3">
              <h4>income</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <h4>expanse</h4>
            </div>
            <div className="col-md-3">
              <h4>maintanance</h4>
            </div>
            <div className="col-md-3">
              <h4>income</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;

//    <div className="logoutCss"><button className="m-5"onClick={()=>logout()}>Logout</button> </div>
