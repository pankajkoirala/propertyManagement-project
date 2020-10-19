import React from "react";
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
  return (
    <div className="row m-5">
      {props.propertyData.map((arg, index) => {
        return (
          <div key={index}>
            <Card className="propertyCard">
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
        );
      })}
    </div>
  );
};

export default PropertyView;
