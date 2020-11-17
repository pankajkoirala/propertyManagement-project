import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button, Form, FormGroup, Input } from "reactstrap";

const ExpenseDisplay = (props) => {
  return (
    <div>
      <h1>lease list</h1>
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
            <th> lease ID</th>
            <th>entry date</th>
            <th>invoice number</th>
            <th>remark</th>
            <th>detail view</th>
          </tr>
        </thead>
        {props?.expenseList?.map((arg, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{arg.LeaseId}</td>
                <td>{moment(arg?.expense_EntryDate).format("YYYY-MM-DD")}</td>
                <td>{arg?.expenseInvoiceNumber}</td>
                <td>{arg?.Expense_Remark}</td>

                <td>
                  <Link to={`/expense/${arg._id}`}>
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
export default ExpenseDisplay;
