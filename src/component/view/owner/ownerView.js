import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopNavBar from "../../../shared/topNavBar";
import SearchInput from "./../../../shared/filterListData";

const OwnerView = (props) => {
  let [owners, setOwners] = useState([]);
  let ownerList = props.ownersData;

  if (owners.length === 0) {
    owners = ownerList;
  } else {
    ownerList = owners;
  }
  return (
    <>
      <TopNavBar/>
      <div className="tenantview">
        <h1 className="text-center">owner List</h1>
        <SearchInput
          filteringData={props.ownersData.map((arg) => {
            return {
              search1:
                arg.owner_firstName + arg.owner_middleName + arg.owner_lastName,
              search2: arg.owner_phoneNo,
              search3: arg.owner_ID,
              ID: arg._id,
            };
          })}
          setFilteredData={setOwners}
          allData={props.ownersData}
        />

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th>Ticket id</th>
              <th>Name</th>
              <th>contact no</th>
              <th>email ID</th>
              <th>property</th>
              <th>detail view</th>
            </tr>
          </thead>
          {ownerList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg?.owner_ID}</td>
                  <td>
                    {arg?.owner_firstName +
                      " " +
                      arg?.owner_middleName +
                      " " +
                      arg?.owner_lastName}
                  </td>

                  <td>{arg?.owner_phoneNo}</td>
                  <td>{arg?.owner_email}</td>
                  <td>
                    {arg?.owner_property?.property_type +
                      "-" +
                      arg?.owner_property?.referenceNO}
                  </td>

                  <td>
                    <Link to={`/ownerDetail/${arg._id}`}>
                      {" "}
                      <button className="success ml-3">View Detail</button>
                    </Link>{" "}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
};

export default OwnerView;
