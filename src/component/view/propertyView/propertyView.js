import React from 'react'
import "./propertyView.css"
import { Link } from "react-router-dom";
import Image from "../../../assets/sample.jpg"
import Filter from "../../filter.js"

let a = [1,2,3,4,5,6,7,8, 9,10,11,12,13,14,15,16,17,18,19,20]

const PropertyView=()=>{
  return ( 
  
  <div className="row m-5">
  
             <div className="col-12"> 
                <Filter/>
             </div>
                {a.map(()=>{

                  return(
<div className="property-card">
                    <div className="card-contents mt-5">
                      <div className="image">
                        <img
                          src={Image}
                          alt="recently added"
                        /> 
                        
                      </div>
                      <div className="property-desc">
                        <h5>House</h5>
                        <p>For: me</p>
                        <p>
                          <i className="fa fa-map-marker"></i> Anamnagar
                        </p>
                        <p>
                          Rs. <b>500</b> per Month
                        </p>
                        <p>
                         Status <b>Occupied</b> per Month
                        </p>
                        {/* <Link to={link + "/" + id}> */}
                          <button
                            // id="card-button"
                            // onClick={() => handleDetailsCardClick(id, type)}
                            >
                            View Details
                          </button>
                        {/* </Link> */}
                      </div> 
                    </div>
                  </div>
                  )
                })}
                 
    </div>
    
    )
}


export default PropertyView