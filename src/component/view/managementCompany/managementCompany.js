import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

import "./managementCompany.css";

const ManagementCompanyView = (props) => {
  let [managementCompany, setManagementCompany] = useState([]);
  let managementCompanyList = props.ManagementCompany.slice().reverse();

  if (managementCompany.length === 0) {
    managementCompany = managementCompanyList;
  } else {
    managementCompanyList = managementCompany;
  }

  return (
    <>
      <div className="tenantview">
        <h1 className="page-title">Management Company List</h1>
        <SearchInput
          filteringData={props.ManagementCompany.map((arg) => {
            return {
              search1: arg.managementCompany_companyID,
              search2: arg.managementCompany_name,
              search3: arg.managementCompany_MobileNumber,
              ID: arg._id,
            };
          })}
          setFilteredData={setManagementCompany}
          allData={props.ManagementCompany.slice().reverse()}
        />

        <div style={{ overflowX: "auto" }}>
          <table id="managementcompany-table">
            <thead>
              <tr>
                <th>ID Number</th>
                <th>company id</th>
                <th>company name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Contact Email</th>
                <th>Remarks</th>
              </tr>
            </thead>
            {managementCompanyList.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg.managementCompany_companyID}</td>
                    <td>{arg.managementCompany_name}</td>
                    <td>{arg.managementCompany_area + ',' + arg.managementCompany_city}</td>
                    <td>{arg.managementCompany_phoneNo}</td>
                    <td>{arg.managementCompany_email}</td>

                    <td>
                      <Link to={`/managementCompany/${arg._id}`}>
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

export default ManagementCompanyView;
