import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

const BrokerCompanyView = (props) => {
  let [BrokerCompanyList, SetBrokerCompanyList] = useState([]);
  let brokerCompanyList = props.allBrokerCompany;

  if (BrokerCompanyList.length === 0) {
    BrokerCompanyList = brokerCompanyList;
  } else {
    brokerCompanyList = BrokerCompanyList;
  }

  return (
    <>
      <div className="tenantview">
        <h1 className="text-center">broker Company List</h1>
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
          allData={props.allBrokerCompany}
        />

        <Table striped bordered hover size="sm">
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

export default BrokerCompanyView;
