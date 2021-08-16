import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

import "./property.css";

const PropertyView = (props) => {
  let [properties, setProperties] = useState([]);

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
                search3: arg.unitNo,
                search4: arg.property_name,

                ID: arg._id,
              };
            })}
            setFilteredData={setProperties}
            allData={props.propertyData}
          />
        </div>

        <div style={{ overflowX: "auto" }}>
          <table id="propertyview-table">
            <thead>
              <tr>
                <th>ID Number</th>
                <th>Property ID</th>
                <th>Property Name</th>
                <th> Property Type</th>
                <th>Investment</th>
                <th>Unit No</th>
                <th>Community</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            {propertyList.map((arg, index) => {
              console.log("🚀 ~ file: allProperty.js ~ line 51 ~ {propertyList.map ~ arg", arg)
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg.referenceNO || '-'}</td>
                    <td>{arg.property_name || '-'}</td>
                    <td>{arg.property_type || '-'}</td>
                    <td>{arg.property_price || '-'}</td>
                    <td>{arg.unitNo || '-'}</td>
                    <td>{arg.property_community || '-'}</td>
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
        </div>
      </div>
    </>
  );
};

export default PropertyView;
