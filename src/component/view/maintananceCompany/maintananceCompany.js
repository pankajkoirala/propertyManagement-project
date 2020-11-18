import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

import SearchInput from "./../../../shared/filterListData";

const MaintananceCompanyView = (props) => {
  let [maintananceCompany, SetMaintananceCompany] = useState([]);
  let maintananceCompanyList = props.MaintananceCompany;

  if (maintananceCompany.length === 0) {
    maintananceCompany = maintananceCompanyList;
  } else {
    maintananceCompanyList = maintananceCompany;
  }

  return (
    <div className="tenantview">
      <h1 className="text-center"> Maintanance Company List</h1>
      <SearchInput
        filteringData={props.MaintananceCompany.map((arg) => {
          return {
            search1: arg.Company_ID,
            search2: arg.Company_phoneNo,
            search3: arg.Company_Name,
            ID: arg._id,
          };
        })}
        setFilteredData={SetMaintananceCompany}
        allData={props.MaintananceCompany}
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
        {maintananceCompanyList.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg.Company_ID}</td>
                <td>{arg.Company_Name}</td>
                <td>{arg.Company_Registration_Number}</td>
                <td>{arg.Company_phoneNo}</td>
                <td>{arg.Company_email}</td>

                <td>
                  <Link to={`/maintainanceCompany/${arg._id}`}>
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
  );
};

export default MaintananceCompanyView;
