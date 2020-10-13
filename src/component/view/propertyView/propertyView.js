import React from "react";
import "./propertyView.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose
} from "@fortawesome/free-solid-svg-icons";


const PropertyView = (props) => {
  console.log(props.propertyData);
  return (
    <div className="row m-5">
      {props.propertyData.map((arg, index) => {
        return (
          <div key={index} className="property-card">
            <div className="card-contents">
           
              <FontAwesomeIcon onClick={()=>props.DeletProperty(arg._id)} className="mx-2" icon={faWindowClose} />
              <div className="image">
                <img src={arg.photo} alt="recently added" />
              </div>
              <div className="property-desc">
        <h5>{arg.property_type}</h5>
        <p>For: {arg.property_status}</p>
                <p>
                  <i className="fa fa-map-marker"></i> {arg.country},{arg.city}
                </p>
                <p>
        Rs. <b>{arg.property_price}</b> per Month
                </p>
                {/* <Link to={link + "/" + id}> */}

                <Link to={`/propertyDetail/${arg._id}`}>
                  {" "}
                  <button>view detail</button>{" "}
                </Link>

                {/* </Link> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyView;
