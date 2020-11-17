import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import "./property.css";

const PropertyView = (props) => {
  return (
    <div className=" m-5">
      <div className="d-flex flex-wrap">
        {props.propertyData.map((arg, index) => {
          return (
            <div key={index}>
              <div>
                <Card className=" propertyCard">
                  <CardImg
                    className="Propertyimage"
                    src={arg.photo}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>id:{arg._id}</CardTitle>
                    <CardTitle>Name:{arg.property_type}</CardTitle>

                    <CardSubtitle>
                      <span>
                        Status:
                        {props.LeasePropertyId.some(
                          (arg1) => arg1 === arg._id
                        ) === true ? (
                          <span className="text-danger font-weight-bold">
                            occupied
                          </span>
                        ) : (
                          <span className="text-success font-weight-bold">
                            free
                          </span>
                        )}
                      </span>
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
