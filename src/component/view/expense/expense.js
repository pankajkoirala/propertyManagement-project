import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Table, Input } from "reactstrap";
import SearchInput from "./../../../shared/filterListData";

import "./expense.css";
import {
  expenseCalculationPerHead,
  totalExpenseCalculation,
} from "../../../shared/commonFunction";

const ExpenseDisplay = (props) => {
  let [expenses, SetExpenses] = useState([]);
  let [expensesMonth, SetExpensesMonth] = useState("");
  let [expensesYear, SetExpensesYear] = useState("");

  let expensesList = props?.expenseList.slice().reverse();

  //filtering array list by month and year
  let FilterByMonthYear = () => {
    let filterArray = expenses.filter(
      (arg) =>
        moment(arg.expense_EntryDate).format("YYYY-MM") ===
          expensesYear + "-" + expensesMonth?.padStart(2, 0) ||
        moment(arg.expense_EntryDate).format("YYYY") === expensesYear ||
        moment(arg.expense_EntryDate).format("MM") ===
          expensesMonth?.padStart(2, 0)
    );
    filterArray?.length !== 0 ? SetExpenses(filterArray) : SetExpenses([]);
  };

  if (expenses.length === 0) {
    expenses = expensesList;
  } else {
    expensesList = expenses;
  }

  //year list making
  const year = new Date().getFullYear();
  const IncreasingYears = Array.from(
    new Array(20),
    (val, index) => index + year
  );
  const DecreasingYears = Array.from(
    new Array(20),
    (val, index) => -index + (year - 1)
  );
  let allYears = DecreasingYears.reverse(DecreasingYears.length).concat(
    IncreasingYears
  );

  return (
    <>
      <div style={{ padding: "20px" }}>
        <div className="page-title">
          <h1>Expense list</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{}}>
            <SearchInput
              filteringData={props?.expenseList?.map((arg) => {
                return {
                  search1: arg.Expense_ID,
                  search2: arg.expense_Type,
                  search3: arg.expenseInvoiceNumber,
                  search4:
                    arg.expense_Type === "Maintanance"
                      ? arg?.property_ID?.property_type +
                        "-" +
                        arg?.property_ID?.referenceNO
                      : "",
                  ID: arg._id,
                };
              })}
              setFilteredData={SetExpenses}
              allData={props?.expenseList}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ margin: "4px" }}>
              <Input
                type="select"
                onClick={(e) => SetExpensesMonth(e.target.value)}
              >
                <option value="">select Month</option>
                <option value={1}>January</option>
                <option value={2}>February</option>
                <option value={3}>March</option>
                <option value={4}>April</option>
                <option value={5}>May</option>
                <option value={6}>June</option>
                <option value={7}>July</option>
                <option value={8}>August</option>
                <option value={9}>September</option>
                <option value={10}>October</option>
                <option value={11}>November</option>
                <option value={12}>December</option>
              </Input>
            </div>

            <div style={{ margin: "4px" }}>
              <Input
                type="select"
                onClick={(e) => SetExpensesYear(e.target.value)}
              >
                <option value="">select Year</option>
                {allYears.map((arg, index) => {
                  return (
                    <option key={index} value={arg}>
                      {arg}
                    </option>
                  );
                })}
              </Input>
            </div>
            <button
              style={{
                margin: "4px",
                height: "34px",
                width: "80px",
                border: "none",
                background: "#28a745",
                textTransform: "capitalize",
                color: "white",
              }}
              onClick={() => {
                FilterByMonthYear();
              }}
            >
              find
            </button>
          </div>
          <div style={{ fontWeight: "bold" }}>
            <span>Total Expense :</span>
            AED. {totalExpenseCalculation(expensesList)}
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table id="expense-table">
            <thead>
              <tr>
                <th>SN</th>
                <th> Expense ID</th>
                <th>entry date</th>
                <th>invoice number</th>
                <th>Expense Type</th>
                <th>Property </th>
                <th>Amount</th>
                <th>detail view</th>
              </tr>
            </thead>
            {expenses?.map((arg, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{arg.Expense_ID}</td>
                    <td>
                      {moment(arg?.expense_EntryDate).format("YYYY-MM-DD")}
                    </td>
                    <td>{arg?.expenseInvoiceNumber}</td>
                    <td>{arg?.expense_Type}</td>
                    <td>
                      {arg.expense_Type === "Maintanance"
                        ? arg?.property_ID?.property_type +
                          "-" +
                          arg?.property_ID?.referenceNO
                        : "-"}
                    </td>
                    <td> AED.{expenseCalculationPerHead(arg?.expense_list)}</td>
                    <td>
                      <Link to={`/expense/${arg._id}`}>
                        <button className="view-btn">View Detail</button>
                      </Link>
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
export default ExpenseDisplay;
