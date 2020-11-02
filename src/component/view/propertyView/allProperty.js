import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./property.css";

const PropertyView = (props) => {;


  return (
    <div className=" m-5">
      <div>
      

   <Link to="/leaseProperty"><button> lease property  </button></Link> 
   </div>
   <div className="d-flex flex-wrap">
      {props.propertyData.map((arg, index) => {
        return (
          <div key={index} >
            <div>
            <Card className=" propertyCard">
             

              <CardImg
                className="Propertyimage"
                src={arg.photo}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Name:{arg.property_type}</CardTitle>
                <CardSubtitle>
                  <span>Status:{arg.property_status}</span>
                </CardSubtitle>
                <CardText>
                  Location:{arg.city}
                  {arg.country}
                </CardText>
                <Link to={`/propertyDetail/${arg._id}`}>
                  <button className="mx-2">view detail</button>
                </Link>
           
              </CardBody>
            </Card>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default PropertyView;
