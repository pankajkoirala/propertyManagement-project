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
  console.log(occupied);
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
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Link to={`/propertyDetail/${arg._id}`}>
                  {" "}
                  <button className="mx-2">view detail</button>{" "}
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
