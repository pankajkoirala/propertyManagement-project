import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

import "./brokerCompany.css";

const BrokerCompanyView = (props) => {
  let [BrokerCompanyList, SetBrokerCompanyList] = useState([]);
  let brokerCompanyList = props.allBrokerCompany.slice().reverse();

  if (BrokerCompanyList.length === 0) {
    BrokerCompanyList = brokerCompanyList;
  } else {
    brokerCompanyList = BrokerCompanyList;
  }

  return (
    <>
      <div className="tenantview">
        <h1 className="page-title">broker Company List</h1>
        <SearchInput
          filteringData={props.allBrokerCompany.map((arg) => {
            return {
              search1: arg.broker_phoneNo,
              search2: arg.brokerId,
              search3: arg.broker_companyName,
              ID: arg._id,
            };
          })}
          setFilteredData={SetBrokerCompanyList}
          allData={props.allBrokerCompany.slice().reverse()}
        />

        <table id="brokercompany-table">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>broker company id</th>
              <th>broker company name</th>
              <th>broker registration num</th>
              <th>broker Contact Number</th>
              <th>broker Contact Email</th>
              <th>Remarks</th>
            </tr>
          </thead>
          {brokerCompanyList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.brokerId}</td>
                  <td>{arg.broker_companyName}</td>
                  <td>{arg.broker_RegistrationNumber}</td>
                  <td>{arg.broker_phoneNo}</td>
                  <td>{arg.broker_email}</td>

                  <td>
                    <Link to={`/brokerCompany/${arg._id}`}>
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
    </>
  );
};

export default BrokerCompanyView;
