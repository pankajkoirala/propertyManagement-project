import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

import {
  Table,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "./property.css";

const PropertyView = (props) => {
  let [properties, setProperties] = useState([]);
  let [propertySort, setPropertySort] = useState(true);

  let propertyList = props.propertyData.slice().reverse();

  if (properties.length === 0) {
    properties = propertyList;
  } else {
    propertyList = properties;
  }

  return (
    <>
      <div className=" m-5">
        <div className="d-flex justify-content-between">
          <SearchInput
            filteringData={props.propertyData.map((arg) => {
              return {
                search1: arg.property_community,
                search2: arg.property_type,
                search3: arg.referenceNO,
                ID: arg._id,
              };
            })}
            setFilteredData={setProperties}
            allData={props.propertyData}
          />
          <Button onClick={() => setPropertySort(!propertySort)}>Sort</Button>
        </div>

        {propertySort === true ? (
          <table id="propertyview-table">
            <thead>
              <tr>
                <th>ID Number</th>
                <th>Property ID</th>
                <th> Property Type</th>
                <th>Investment</th>
                <th>Community</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            {propertyList.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg.referenceNO}</td>
                    <td>{arg.property_type}</td>
                    <td>{arg.property_price}</td>
                    <td>{arg.property_community}</td>
                    <td>
                      {props.LeasePropertyId.some(
                        (arg1) => arg1 === arg._id
                      ) === true ? (
                        <span className="text-danger font-weight-bold">
                          Occupied
                        </span>
                      ) : (
                        <span className="text-success font-weight-bold">
                          Vacant
                        </span>
                      )}
                    </td>

                    <td>
                      <Link to={`/propertyDetail/${arg._id}`}>
                        {" "}
                        <button className="view-btn">View Detail</button>
                      </Link>{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <div className="d-flex flex-wrap">
            {propertyList.map((arg1) => {
              return (
                <div style={{ width: "400px", margin: "10px" }}>
                  <Card>
                    <CardBody>
                      <CardTitle tag="h5">Card title</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Card subtitle
                      </CardSubtitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button>Button</Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyView;
