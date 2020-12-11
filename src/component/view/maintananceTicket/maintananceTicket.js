import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import SearchInput from "./../../../shared/filterListData";

import "./maintananceTicket.css";

const MaintananceTicketView = (props) => {
  let [maintananceTicket, setMaintananceTicket] = useState([]);
  let maintananceTicketList = props.maintananceTicket.slice().reverse();

  if (maintananceTicket.length === 0) {
    maintananceTicket = maintananceTicketList;
  } else {
    maintananceTicketList = maintananceTicket;
  }

  return (
    <>
      <div className="tenantview">
        <h1 className="page-title">Maintanance Ticket List</h1>

        <SearchInput
          filteringData={props.maintananceTicket.map((arg) => {
            return {
              search1: arg?.maintananceTicket_ID,
              search2:
                arg?.MaintanancePropertyID?.property_type +
                "/" +
                arg?.MaintanancePropertyID?.referenceNO,
              search3: "",
              ID: arg._id,
            };
          })}
          setFilteredData={setMaintananceTicket}
          allData={props.maintananceTicket.slice().reverse()}
        />

        <div style={{ overflowX: "auto" }}>
          <table id="maintananceticket-table">
            <thead>
              <tr>
                <th>ID Number</th>
                <th>Ticket id</th>
                <th>Ticket Issue Date</th>
                <th>Ticket Issue Date</th>
                <th>Maintanance Company Id</th>
                <th>Maintanance Property ID</th>
                <th>Maintanance Company DetailInfo</th>
              </tr>
            </thead>
            {maintananceTicketList.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg?.maintananceTicket_ID}</td>
                    <td>
                      {moment(arg?.maintananceTicketIssueDate).format(
                        "YYYY-MM-DD"
                      )}
                    </td>
                    <td>
                      {moment(arg?.maintananceTicketDueDate).format(
                        "YYYY-MM-DD"
                      )}
                    </td>
                    <td>{arg?.MaintananceCompanyId?.Company_ID}</td>

                    <td>
                      {arg.MaintanancePropertyID?.property_type +
                        "/" +
                        arg.MaintanancePropertyID?.referenceNO}
                    </td>

                    <td>
                      <Link to={`/maintananceTicket/${arg._id}`}>
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

export default MaintananceTicketView;
