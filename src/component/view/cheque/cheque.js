import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ChequeView = (props) => {
  return (
    <div className="tenantview">
      <h1 className="text-center">Cheque list</h1>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="search"
            name="password"
            id="search"
            placeholder="search!"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SN</th>
            <th>property no</th>

            <th>Cheque no</th>
            <th>Cheque Date</th>
            <th>cheque amount</th>
            <th>remark</th>
            <th>cheque cheque_status</th>
          </tr>
        </thead>
        {props.redux_ChequeData.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg.lease_property.referenceNO}</td>

                <td>{arg.cheque_number}</td>

                <td>{moment(arg.cheque_issueDate).format("YYYY-MM-DD")}</td>
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
