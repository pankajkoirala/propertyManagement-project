import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import SearchInput from "./../../../shared/filterListData";

const ExpenseDisplay = (props) => {
  let [expenses, SetExpenses] = useState([]);
  let expensesList = props?.expenseList;

  if (expenses.length === 0) {
    expenses = expensesList;
  } else {
    expensesList = expenses;
  }
  return (
    <>
      <div>
        <h1>lease list</h1>
        <SearchInput
          filteringData={props?.expenseList.map((arg) => {
            return {
              search1: arg.Expense_ID,
              search2: "",
              search3: "",
              ID: arg._id,
            };
          })}
          setFilteredData={SetExpenses}
          allData={props?.expenseList}
        />

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
          {expensesList?.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.Expense_ID}</td>
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
    </>
  );
};
export default ExpenseDisplay;
