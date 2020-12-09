import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

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
        <h1 className="text-center">Management Company List</h1>
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

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>company id</th>
              <th>company name</th>
              <th>registration num</th>
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
                  <td>{arg.managementCompany_Registeration_Number}</td>
                  <td>{arg.managementCompany_phoneNo}</td>
                  <td>{arg.managementCompany_email}</td>

                  <td>
                    <Link to={`/managementCompany/${arg._id}`}>
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

export default ManagementCompanyView;
