import React from 'react'
import "./propertyView.css"
import { Link } from "react-router-dom";



const PropertyView=()=>{
  return ( 
  
  <div className="row m-5">
  
             <div> 
                   
             </div>
    
                 <div className="property-card">
                    <div className="card-contents">
                      <div className="image">
                        {/* <img
                          src={https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1522708323590-d24dbb6b0267%3Fixlib%3Drb-1.2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fapartment&tbnid=gwdYLdav5UDpxM&vet=12ahUKEwjA09_b5KvsAhVqALcAHfoICmAQMygBegUIARC3AQ..i&docid=ElXNO4r_cLkkKM&w=1000&h=667&q=apartment%20photos&ved=2ahUKEwjA09_b5KvsAhVqALcAHfoICmAQMygBegUIARC3AQ}
                          alt="recently added"
                        /> */}
                        
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
    </div>
    
    )
}


export default PropertyView