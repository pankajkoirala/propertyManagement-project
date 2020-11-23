import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import TopNavBar from "../../../shared/topNavBar";

const ChequeView = (props) => {
  const [noOfCheque, setNoOfCheque] = useState("");
  const [from, setFrom] = useState("YYYY-MM-DD");
  const [to, setTo] = useState("YYYY-MM-DD");
  const [chequeState, setchequeState] = useState(false);
  let [updatedOptions, setUpdatedOptions] = useState([]);

  //check filter from to
  let filterChequeList = props?.sortChequeByDate?.filter((arg) =>
    from === "YYYY-MM-DD" && to === "YYYY-MM-DD"
      ? arg
      : moment(arg.cheque_issueDate).isBetween(
          moment(from, "YYYY-MM-DD"),
          moment(to, "YYYY-MM-DD").add(1, "day")
        )
  );
  //filter by check no
  let filterArray = (cheqNo) => {
    const splittedWord = cheqNo.split("");
    setUpdatedOptions(
      filterChequeList.filter((cheque) =>
        splittedWord.every((letter) => {
          return cheque.cheque_number.toString().includes(letter);
        })
      )
    );
  };
  //filter by lease
  let FilterByLease = (Id) => {
    const splittedWord = Id.split("");
    setUpdatedOptions(
      filterChequeList.filter((cheque) =>
        splittedWord.every((letter) => {
          return cheque?.lease_property?.LeaseId?.toString().includes(letter);
        })
      )
    );
  };

  //filter cheque by cheque status
  let FilterByChequeStatus = (status) => {
    let filterCheque = filterChequeList.filter(
      (arg) => arg.cheque_status === status
    );
    setUpdatedOptions(filterCheque);
    setNoOfCheque(`Number of ${status}:${filterCheque.length}`);
  };
  //out of lease cheque
  let unUsedCheque = filterChequeList.filter(
    (arg) => typeof arg?.lease_property?.LeaseId !== "number"
  );

  if (chequeState !== false) {
    filterChequeList = updatedOptions;
  } else {
    updatedOptions = filterChequeList;
  }

  return (
    <>
      <TopNavBar/>
      <div className="tenantview">
        <h1 className="text-center">Cheque list</h1>
        <div className="d-flex justify-content-center">
          <div>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <span className="font-weight-bold">From : </span>
                <Input
                  type="date"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="search!"
                />
              </FormGroup>
            </Form>
          </div>
          <div>
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <span className="font-weight-bold">To : </span>

                <Input
                  type="date"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  id="search"
                  placeholder="search!"
                />
              </FormGroup>
            </Form>
          </div>
          <Button
            onClick={() => {
              setTo("YYYY-MM-DD");
              setFrom("YYYY-MM-DD");
            }}
          >
            Clear
          </Button>
        </div>

        <div className="d-flex justify-content-around m-4">
          <Form inline>
            <Label className="font-weight-bold">search by cheque no : </Label>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="number"
                onChange={(e) => {
                  filterArray(e.target.value);
                  e.target.value !== ""
                    ? setchequeState(true)
                    : setchequeState(false);
                }}
                placeholder="cheque no"
              />
            </FormGroup>
          </Form>

          <Form inline>
            <Label className="font-weight-bold">search by lease no :</Label>

            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input
                type="text"
                onChange={(e) => {
                  FilterByLease(e.target.value);
                  e.target.value !== ""
                    ? setchequeState(true)
                    : setchequeState(false);
                }}
                placeholder=" lease number"
              />
            </FormGroup>
          </Form>
          <button
            onClick={() => {
              setchequeState(!chequeState);
              setUpdatedOptions(unUsedCheque);
            }}
          >
            leaseExpire cheque
          </button>
          <button
            onClick={() => {
              setchequeState(!chequeState);
              FilterByChequeStatus("Cleared");
            }}
          >
            cleared
          </button>
          <button
            onClick={() => {
              setchequeState(!chequeState);
              FilterByChequeStatus("Bounce");
            }}
          >
            bounce
          </button>
          <button
            onClick={() => {
              setchequeState(!chequeState);
              FilterByChequeStatus("Hold");
            }}
          >
            hold
          </button>
          <button
            onClick={() => {
              setchequeState(!chequeState);
              FilterByChequeStatus("Pending");
            }}
          >
            pending
          </button>
          <button
            onClick={() => {
              setchequeState(!chequeState);
              FilterByChequeStatus("Not Deposited");
            }}
          >
            Not Deposited
          </button>
        </div>
        {chequeState === true ? (
          <div className="h5">{noOfCheque}</div>
        ) : (
          <div className="h5">Number of Cheque:{filterChequeList.length}</div>
        )}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th>lease no</th>

              <th>Cheque no</th>
              <th>Cheque issue Date</th>
              <th>cheque amount</th>
              <th>remark</th>
              <th>cheque cheque_status</th>
              <th>view detail</th>
            </tr>
          </thead>
          {filterChequeList.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg?.lease_property?.LeaseId}</td>
                  <td>{arg.cheque_number}</td>
                  <td>{moment(arg?.cheque_issueDate).format("YYYY-MM-DD")}</td>
                  <td>{arg.cheque_amount}</td>
                  <td>{arg.cheque_remarks}</td>
                  <td
                    className={
                      arg.cheque_status === "Pending"
                        ? " text-secondary font-weight-bold"
                        : arg.cheque_status === "Cleared"
                        ? " text-success font-weight-bold"
                        : arg.cheque_status === "Bounce"
                        ? " text-danger font-weight-bold"
                        : arg.cheque_status === "Not Deposited"
                        ? " text-warning font-weight-bold"
                        : " text-info font-weight-bold"
                    }
                  >
                    {arg.cheque_status}
                  </td>

                  <td>
                    <Link to={`/cheque/${arg._id}`}>
                      <button className="success ml-3">View Detail</button>
                    </Link>
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

export default ChequeView;
