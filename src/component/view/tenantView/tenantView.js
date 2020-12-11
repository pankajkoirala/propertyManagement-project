import React, { useState } from "react";
import "./tenantView.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

const TenantView = (props) => {
  let [tenents, setTenents] = useState([]);
  let tenentList = props.tenant.slice().reverse();

  if (tenents.length === 0) {
    tenents = tenentList;
  } else {
    tenentList = tenents;
  }

  return (
    <>
      <div className="tenantview">
        <div className="page-title">
          <h1>Tenant View</h1>
        </div>
        <SearchInput
          className="search-field"
          filteringData={props.tenant.map((arg) => {
            return {
              search1: arg.tenant_Name,
              search2: arg.company_Name,
              search3: arg.TenantId,
              ID: arg._id,
            };
          })}
          setFilteredData={setTenents}
          allData={props.tenant.slice().reverse()}
        />
        <table id="tenantview-table">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>tenent ID</th>
              <th> Name</th>
              <th>Tenant Type</th>
              <th>Company Name</th>
              <th>Contact Email</th>
              <th>Remarks</th>
            </tr>
          </thead>
          {tenentList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.TenantId}</td>

                  <td>{arg.TenentType}</td>
                  <td>{arg.tenant_Name}</td>
                  <td>{arg.tenant_phoneNo}</td>
                  <td>{arg.tenant_email}</td>

                  <td>
                    <Link to={`/tanent/${arg._id}`}>
                      <button className="view-btn">View Detail</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default TenantView;
