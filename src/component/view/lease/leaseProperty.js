import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SearchInput from "./../../../shared/filterListData";

const LeaseDisplay = (props) => {
  let [lease, setLease] = useState([]);
  let leaseList = props.lease.slice().reverse();

  if (lease.length === 0) {
    lease = leaseList;
  } else {
    leaseList = lease;
  }
  return (
    <>
      <div>
        <h1>lease list</h1>
        <Form inline>
          <SearchInput
            filteringData={props.lease.map((arg) => {
              return {
                search1: arg?.tenants?.tenant_Name,
                search2:
                  arg?.property?.property_type +
                  "/" +
                  arg.property?.referenceNO,
                search3: arg?.LeaseId,
                ID: arg._id,
              };
            })}
            setFilteredData={setLease}
            allData={props.lease.slice().reverse()}
          />
        </Form>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th> lease ID</th>
              <th>tenent name</th>
              <th>Lease term</th>
              <th>commerce date</th>
              <th>expire date</th>
              <th> lease Property</th>
            </tr>
          </thead>
          {leaseList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.LeaseId}</td>
                  <td>{arg?.tenants?.tenant_Name}</td>
                  <td>{arg.lease_Term}</td>
                  <td>{moment(arg?.commenceDate).format("YYYY-MM-DD")}</td>
                  <td>{moment(arg?.expirationDate).format("YYYY-MM-DD")}</td>
                  <td>
                    {arg?.property?.property_type +
                      "/" +
                      arg.property?.referenceNO}
                  </td>

                  <td>
                    <Link to={`/lease/${arg._id}`}>
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
export default LeaseDisplay;
