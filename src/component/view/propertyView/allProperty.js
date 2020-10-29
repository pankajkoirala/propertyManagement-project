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

const PropertyView = (props) => {
  const[selectProperty,setSelectProperty]=useState(props.propertyData)
  //freeProperty
 let freeProperty=()=>{
  let freeproperty=props.propertyData.filter((arg)=>arg.property_status==="free")
  setSelectProperty(freeproperty)
 }
//all property
let AllProperty=()=>{
  setSelectProperty(props.propertyData)
}
  return (
    <div className=" m-5">
      <div>
      <button onClick={()=>freeProperty()}>freeprop</button>
      <button onClick={()=>AllProperty()}>AllProperty</button>

   <Link to="/leaseProperty"><button> lease property  </button></Link> 
   </div>
   <div className="d-flex flex-wrap">
      {selectProperty.map((arg, index) => {
        return (
          <div key={index} >
            <div>
            <Card className=" propertyCard">
              <FontAwesomeIcon
                onClick={() => props.DeletProperty(arg._id)}
                className="mx-2"
                icon={faWindowClose}
              />

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
