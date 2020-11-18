import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import SearchInput from "./../../../shared/filterListData";

const DevelopementCompanyView = (props) => {
  let [developerCompanys, SetDeveloperCompanys] = useState([]);
  let developerCompanyList = props.allDevelopementCompany;

  if (developerCompanys.length === 0) {
    developerCompanys = developerCompanyList;
  } else {
    developerCompanyList = developerCompanys;
  }

  return (
    <div className="tenantview">
      <h1 className="text-center">Developer company list</h1>
      <SearchInput
        filteringData={props.allDevelopementCompany.map((arg) => {
          return {
            search1: arg.DeveloperCompany_ID,
            search2: arg.DeveloperCompany_Name,
            search3: arg.DeveloperCompany_phoneNo,
            ID: arg._id,
          };
        })}
        setFilteredData={SetDeveloperCompanys}
        allData={props.allDevelopementCompany}
      />

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SN</th>
            <th>ID Number</th>
            <th>Company name</th>
            <th>registration number</th>
            <th>registration date</th>
            <th>Contact Number</th>
            <th>Contact Email</th>
            <th>Remarks</th>
          </tr>
        </thead>
        {developerCompanyList.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg.DeveloperCompany_ID}</td>

                <td>{arg.DeveloperCompany_Name}</td>
                <td>{arg.DeveloperCompany_RegisterationNumber}</td>
                <td>
                  {moment(arg?.DeveloperCompany_RegisterationDate).format(
                    "YYYY-MM-DD"
                  )}
                </td>
                <td>{arg.DeveloperCompany_phoneNo}</td>
                <td>{arg.DeveloperCompany_email}</td>

                <h1>{props.nameMatra_number}</h1>
                <td>
                  <Link to={`/DeveloperCompany/${arg._id}`}>
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

export default DevelopementCompanyView;
