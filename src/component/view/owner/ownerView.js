import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

import "./ownerview.css";

const OwnerView = (props) => {
  let [owners, setOwners] = useState([]);
  let ownerList = props.ownersData.slice().reverse();

  if (owners.length === 0) {
    owners = ownerList;
  } else {
    ownerList = owners;
  }
  return (
    <>
      <div className="tenantview">
        <h1 className="page-title">Owner List</h1>
        <SearchInput
          filteringData={props?.ownersData.map((arg) => {
            return {
              search1: arg.owner_Name,
              search2: arg.owner_phoneNo,
              search3: arg.owner_ID,
              ID: arg._id,
            };
          })}
          setFilteredData={setOwners}
          allData={props.ownersData.slice().reverse()}
        />

        <div style={{ overflowX: "auto" }}>
          <table id="ownerview-table">
            <thead>
              <tr>
                <th>SN</th>
                <th>Ticket id</th>
                <th>Name</th>
                <th>contact no</th>
                <th>email ID</th>
                <th>detail view</th>
              </tr>
            </thead>
            {ownerList.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg?.owner_ID}</td>
                    <td>{arg?.owner_Name}</td>

                    <td>{arg?.owner_phoneNo}</td>
                    <td>{arg?.owner_email}</td>

                    <td>
                      <Link to={`/ownerDetail/${arg._id}`}>
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

export default OwnerView;
