import React, { useState } from "react";
import "./tenantView.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";
import TopNavBar from "../../../shared/topNavBar";

const TenantView = (props) => {
  let [tenents, setTenents] = useState([]);
  let tenentList = props.tenant;

  if (tenents.length === 0) {
    tenents = tenentList;
  } else {
    tenentList = tenents;
  }

  return (
    <>
      <TopNavBar/>
      <div className="tenantview">
        <h1 className="text-center">Tenant View</h1>
        <SearchInput
          filteringData={props.tenant.map((arg) => {
            return {
              search1: arg.tenant_Name,
              search2: arg.company_Name,
              search3: arg.TenantId,
              ID: arg._id,
            };
          })}
          setFilteredData={setTenents}
          allData={props.tenant}
        />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>tenent ID</th>
              <th> Name</th>
              <th>Company Name</th>
              <th>Contact Number</th>
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

                  <td>{arg.tenant_Name}</td>
                  <td>{arg.company_Name}</td>
                  <td>{arg.tenant_phoneNo}</td>
                  <td>{arg.tenant_email}</td>

                  <td>
                    <Link to={`/tanent/${arg._id}`}>
                      <button className="success ml-3">View Detail</button>
                    </Link>
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

export default TenantView;
