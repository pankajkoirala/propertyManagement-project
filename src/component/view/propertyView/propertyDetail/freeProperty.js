import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import "./property.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const FreePropertyView = (props) => {
  let occupied = props.propertyData.filter(
    (arg) => arg.property_status === "free"
  );
  let w = occupied.filter(
    (arg) =>
      arg !==
      props.lease.map((arg) => arg.property.map((arg) => arg.referenceNO))
  );

  console.log(w);
  return (
    <div className="row m-5">
      {occupied.map((arg, index) => {
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
                <Link to="/lease">
                  <button className="mx-2">Add lease</button>
                </Link>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default FreePropertyView;
