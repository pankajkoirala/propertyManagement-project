import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ChequeView = (props) => {
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

  let unUsedCheque = filterChequeList.filter(
    (arg) => typeof arg?.lease_property?.LeaseId !== "number"
  );

  if (chequeState !== false) {
    filterChequeList = updatedOptions;
  } else {
    updatedOptions = filterChequeList;
  }

  return (
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
          className="float-right"
          onClick={() => {
            setchequeState(!chequeState);
            setUpdatedOptions(unUsedCheque);
          }}
        >
          lease navako cheque
        </button>
      </div>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SN</th>
            <th>property no</th>

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
                      ? "bg-secondary text-white font-weight-bold"
                      : arg.cheque_status === "Cleared"
                      ? "bg-success text-white font-weight-bold"
                      : "bg-danger text-white font-weight-bold"
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
  );
};

export default ChequeView;
