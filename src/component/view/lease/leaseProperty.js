import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import SearchInput from "./../../../shared/filterListData";

import "./leaseProperty.css";
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
      <div className="leaseProperty">
        <div className="page-title">
          <h1>lease list</h1>
        </div>
        <SearchInput
          filteringData={props.lease.map((arg) => {
            return {
              search1: arg?.tenants?.tenant_Name,
              search2:
                arg?.property?.property_name,
              search3: arg?.LeaseId,
              search4: arg?.property?.unitNo,
              ID: arg._id,
            };
          })}
          setFilteredData={setLease}
          allData={props.lease.slice().reverse()}
        />

        <div style={{ overflowX: "auto" }}>
          <table id="lease-table">
            <thead>
              <tr>
                <th>SN</th>
                <th> Lease ID</th>
                <th>Tenent Name</th>
                <th>Lease Term</th>
                <th>Eommerce Date</th>
                <th>Expire Date</th>
                <th>Property Type </th>
                <th> Property Name</th>
                <th> Unit No </th>
                <th> Detail</th>
              </tr>
            </thead>
            {leaseList.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg.LeaseId || '-'}</td>
                    <td>{arg?.tenants?.tenant_Name || '-'}</td>
                    <td>{arg.lease_Term || '-'}</td>
                    <td>{moment(arg?.commenceDate).format("YYYY-MM-DD")}</td>
                    <td>{moment(arg?.expirationDate).format("YYYY-MM-DD")}</td>
                    <td>
                      {arg?.property?.property_type || '-'
                      }
                    </td>
                    <td>
                      {arg?.property?.property_name || '-'
                      }
                    </td>
                    <td>
                      {arg?.property?.unitNo || '-'
                      }
                    </td>

                    <td>
                      <Link to={`/lease/${arg._id}`}>
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
export default LeaseDisplay;
