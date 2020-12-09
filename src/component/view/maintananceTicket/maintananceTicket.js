import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button, Form, FormGroup, Input } from "reactstrap";
import SearchInput from "./../../../shared/filterListData";

const MaintananceTicketView = (props) => {
  let [maintananceTicket, SetMaintananceTicket] = useState([]);
  let maintananceTicketList = props.maintananceTicket.slice().reverse();

  if (maintananceTicket.length === 0) {
    maintananceTicket = maintananceTicketList;
  } else {
    maintananceTicketList = maintananceTicket;
  }
  return (
    <>
      <div className="tenantview">
        <h1 className="text-center">Maintanance Ticket List</h1>
        <Form inline>
          <SearchInput
            filteringData={props?.maintananceTicket?.map((arg) => {
              return {
                search1: arg.maintananceTicket_ID,
                search2:
                  arg.MaintanancePropertyID?.property_type +
                  "/" +
                  arg.MaintanancePropertyID?.referenceNO,
                search3: moment(arg.maintananceTicketIssueDate).format(
                  "YYYY-MM-DD"
                ),
                ID: arg._id,
              };
            })}
            setFilteredData={SetMaintananceTicket}
            allData={props.maintananceTicket.slice().reverse()}
          />
          <Button>Submit</Button>
        </Form>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID Number</th>
              <th>Ticket id</th>
              <th>Ticket Issue Date</th>
              <th>Ticket Issue Date</th>
              <th>Maintanance Company Id</th>
              <th>Maintanance Property ID</th>
              <th>Maintanance Company DetailInfo</th>
              <th>detail view</th>
            </tr>
          </thead>
          {props.maintananceTicket.map((arg, index) => {
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
                    {moment(arg?.maintananceTicketDueDate).format("YYYY-MM-DD")}
                  </td>
                  <td>{arg?.MaintananceCompanyId?.Company_ID}</td>

                  <td>
                    {arg.MaintanancePropertyID?.property_type +
                      "/" +
                      arg.MaintanancePropertyID?.referenceNO}
                  </td>
                  <td>{arg?.MaintananceCompanyDetailInfo}</td>

                  <td>
                    <Link to={`/maintananceTicket/${arg._id}`}>
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

export default MaintananceTicketView;
