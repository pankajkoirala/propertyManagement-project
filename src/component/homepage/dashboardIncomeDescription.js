import React, { useState } from "react";
import SearchInput from "./../../shared/filterListData";
import { Table, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { totalIncomeCalculation } from "./../../shared/commonFunction";
import moment from "moment";

let DashboardIncomeComponent = (props) => {
  let [income, setIncome] = useState([]);
  let [incomeMonth, setIncomeMonth] = useState("");
  let [incomeYear, setIncomeYear] = useState("");

  let incomeList = props?.redux_ChequeData?.sort(
    (a, b) =>
      new moment(b.cheque_entryDate).format("YYYYMMDD") -
      new moment(a.cheque_entryDate).format("YYYYMMDD")
  );

  //filtering array list by month and year
  let FilterByMonthYear = () => {
    let filterArray = income.filter(
      (arg) =>
        moment(arg.cheque_entryDate).format("YYYY-MM") ===
          incomeYear + "-" + incomeMonth?.padStart(2, 0) ||
        moment(arg.cheque_entryDate).format("YYYY") === incomeYear ||
        moment(arg.cheque_entryDate).format("MM") ===
          incomeMonth?.padStart(2, 0)
    );
    filterArray?.length !== 0 ? setIncome(filterArray) : setIncome([]);
  };

  if (income.length === 0) {
    income = incomeList;
  } else {
    incomeList = income;
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
    <div>
      <div >
        <h1>Income list</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ margin: "10px" }}>
            <SearchInput
              filteringData={props?.redux_ChequeData?.map((arg) => {
                return {
                  search1: arg.cheque_number,
                  search2: arg.Cheque_ID,
                  search3: arg?.lease_property?.LeaseId,
                  search4:
                    arg?.property_id?.property_type +
                    "/" +
                    arg?.property_id?.referenceNO,
                  ID: arg._id,
                };
              })}
              setFilteredData={setIncome}
              allData={props?.redux_ChequeData}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ margin: "4px" }}>
              <Input
                type="select"
                onClick={(e) => setIncomeMonth(e.target.value)}
              >
                <option value="">Select Month</option>
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
                onClick={(e) => setIncomeYear(e.target.value)}
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
              style={{ margin: "4px", height: "30px", width: "80px" }}
              onClick={() => {
                FilterByMonthYear();
              }}
            >
              find
            </button>
          </div>
          <div style={{ margin: "10px", fontWeight: "bold" }}>
            <span>{totalIncomeCalculation(income)}</span>
          </div>
        </div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>SN</th>
              <th> Cheque ID</th>
              <th>Entry Date</th>
              <th>Issue Date</th>
              <th>Cheque Amount</th>
              <th>VAT Amount</th>
              <th>Miscellaneous Amount </th>
              <th>Property</th>
              <th>Lease Property</th>
              <th>Detail view</th>
            </tr>
          </thead>
          {income?.map((arg, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{arg.Cheque_ID}</td>
                  <td>{moment(arg?.cheque_entryDate).format("YYYY-MM-DD")}</td>
                  <td>{moment(arg?.cheque_issueDate).format("YYYY-MM-DD")}</td>

                  <td>{arg?.cheque_amount}</td>
                  <td>{arg?.vat_amount}</td>
                  <td>{arg?.miscellaneous_amount}</td>
                  <td>
                    {arg?.property_id?.property_type +
                      "/" +
                      arg?.property_id?.referenceNO}
                  </td>

                  <td>{arg?.lease_property?.LeaseId}</td>
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
    </div>
  );
};

export default DashboardIncomeComponent;
