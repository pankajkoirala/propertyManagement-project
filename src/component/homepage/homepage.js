import React from "react";
import "./homepage.css";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import IncomePic from "../../assets/income.jpg";
import ExpensePic from "../../assets/expense.jpg";
import {
  incomeCalc,
  expenseCalc,
  expenseCalculationByMonthAndType,
  expenseCalculationByYearAndType,
} from "../../shared/commonFunction";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const Homepage = (props) => {
  const {
    //property piechart data
    totalProperty,
    leaseProperty,
    //line bar data
    barIncomeData,
    BarExpenseData,
    next_preYear,
    setNext_preYear,
    totalYearIncome,
    totalYearExpense,
    //cheque month data
    rentalIncome_month,
    vatIncome_month,
    miscellaneousIncome_month,
    setChequeDate_month,
    chequeDate_month,
    //cheque month data
    rentalIncome_Year,
    vatIncome_Year,
    miscellaneousIncome_Year,
    chequeDate_year,
    setChequeDate_year,
    //expense by month/year
    ExpenseDate_year,
    setExpenseDate_year,
    ExpenseDate_month,
    setExpenseDate_month,
  } = props;

  let p = [];
  console.log(
    "🚀 ~ file: homepage.js ~ line 125 ~ HomepageContainer ~ yearlyExpense",
    expenseCalculationByMonthAndType(
      props?.redux_ExpenseData?.expense,
      ExpenseDate_month,
      "Maintanance"
    )
  );

  //bardiagram data
  let number = 1;
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: " Income",
        data: barIncomeData,
        fill: true,
        borderColor: "#742774",
      },
      {
        label: "Expense",
        data: BarExpenseData,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <div className=" bodydisplay">
        <h1
          className="form-head"
          style={{ display: "flex", justifyContent: "center" }}
        >
          DASHBOARD
        </h1>
        {/* //bar income expense  */}
        <div style={{ display: "flex", flex: "wrap" }}>
          <div style={{ position: "relative", margin: "20px" }}>
            <img
              style={{ height: "300px", width: "300px", borderRadius: "10px" }}
              src={IncomePic}
              alt=""
            />
            <Link to="/dashboardIncome">
              {" "}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: "160px",
                  marginBottom: "20px",
                }}
              >
                Income Detail
              </div>
            </Link>
          </div>
          <div style={{ position: "relative", margin: "20px" }}>
            <img
              style={{ height: "300px", width: "300px", borderRadius: "10px" }}
              src={ExpensePic}
              alt=""
            />
            <Link to="/expensesList">
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: "160px",
                  marginBottom: "20px",
                }}
              >
                Expense Detail
              </div>
            </Link>
          </div>
          {/* pie chart property */}
          <div className=" p-4">
            <h5 className="text-center ">property Status</h5>
            <div className="row ">
              <div style={{ height: "250px", width: "250px" }} className="p-2">
                <PieChart
                  animation
                  animationDuration={500}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#E38627",
                      title: "One",
                      value: totalProperty,
                    },
                    {
                      color: "#C13C37",
                      title: "Two",
                      value: totalProperty - leaseProperty,
                    },
                    {
                      color: "#6A2135",
                      title: "Three",
                      value: leaseProperty,
                    },
                  ]}
                  labelPosition={50}
                  lengthAngle={360}
                  lineWidth={40}
                  paddingAngle={0}
                  radius={50}
                  animate
                  startAngle={0}
                  viewBoxSize={[100, 100]}
                />
              </div>
              <div className="mt-4 ml-4 d-flex flex-column">
                <div className=" h6 row">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  total property unit
                </div>
                <h5>{totalProperty}</h5>
                <div className=" h6 row ">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#C13C37",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  free property
                </div>
                <h5>{totalProperty - leaseProperty}</h5>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2135",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  occupied property
                </div>
                <h5>{leaseProperty}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between p-4 bg-white">
          {/* {//expense by month} */}
          <div className="bg-white p-4">
            <h5 className="text-center ">
              Expense Status by Month <br />
              {data?.labels[ExpenseDate_month - 1]}
            </h5>
            <div className="row ">
              <div className="p-2">
                <PieChart
                  style={{ height: "200px", width: "200px" }}
                  // [Maintanance,Legal,FMC,Utility,Office Expense,Service Charge ];
                  data={[
                    {
                      title: "maintanance",
                      value: expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Maintanance"
                      ),
                      color: "#E38627",
                    },
                    {
                      title: "Legal",
                      value: expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Legal"
                      ),
                      color: "#C13C37",
                    },
                    {
                      title: "FMC",
                      value: expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "FMC"
                      ),
                      color: "#6A2165",
                    },
                    {
                      title: "Utility",
                      value: expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Utility"
                      ),
                      color: "#6A2195",
                    },
                    {
                      title: "Office Expense",
                      value: expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Office Expense"
                      ),
                      color: "#6A6135",
                    },
                    {
                      title: "Service Charge ",
                      value: expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Service Charge"
                      ),
                      color: "#6A2035",
                    },
                  ]}
                />
              </div>
              <div className="mt-4 ml-4 d-flex flex-column">
                <div className=" h6 row">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Maintanance
                  <span>
                    Rs.
                    {expenseCalculationByMonthAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_month,
                      "Maintanance"
                    )}
                    /-
                  </span>
                </div>
                <div className=" h6 row ">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#C13C37",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Legal{" "}
                  <span>
                    Rs.
                    {expenseCalculationByMonthAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_month,
                      "Legal"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2165",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  FMC
                  <span>
                    Rs.
                    {expenseCalculationByMonthAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_month,
                      "FMC"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2195",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Utility
                  <span>
                    Rs.
                    {expenseCalculationByMonthAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_month,
                      "Utility"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A6135",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Office Expense
                  <span>
                    Rs.
                    {expenseCalculationByMonthAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_month,
                      "Office Expense"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2035",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Service Charge
                  <span>
                    Rs.
                    {expenseCalculationByMonthAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_month,
                      "Service Charge"
                    )}
                    /-
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ margin: "5px" }}
                onClick={() =>
                  setExpenseDate_month(ExpenseDate_month - number--)
                }
              >
                <ArrowBackIosIcon />
              </button>
              <button
                onClick={() =>
                  setExpenseDate_month(ExpenseDate_month + number++)
                }
                style={{ margin: "5px" }}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
          {/* {//expense piechart year} */}
          <div className="bg-white p-4">
            <h5 className="text-center ">
              Expense Status by Year <br />
              {ExpenseDate_year}
            </h5>
            <div className="row ">
              <div className="p-2">
                <PieChart
                  style={{ height: "200px", width: "200px" }}
                  // [Maintanance,Legal,FMC,Utility,Office Expense,Service Charge ];
                  data={[
                    {
                      title: "maintanance",
                      value: expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Maintanance"
                      ),
                      color: "#E38627",
                    },
                    {
                      title: "Legal",
                      value: expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Legal"
                      ),
                      color: "#C13C37",
                    },
                    {
                      title: "FMC",
                      value: expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "FMC"
                      ),
                      color: "#6A2165",
                    },
                    {
                      title: "Utility",
                      value: expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Utility"
                      ),
                      color: "#6A2195",
                    },
                    {
                      title: "Office Expense",
                      value: expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Office Expense"
                      ),
                      color: "#6A6135",
                    },
                    {
                      title: "Service Charge ",
                      value: expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Service Charge"
                      ),
                      color: "#6A2035",
                    },
                  ]}
                />
              </div>
              <div className="mt-4 ml-4 d-flex flex-column">
                <div className=" h6 row">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Maintanance
                  <span>
                    Rs.
                    {expenseCalculationByYearAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_year,
                      "Maintanance"
                    )}
                    /-
                  </span>
                </div>
                <div className=" h6 row ">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#C13C37",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Legal{" "}
                  <span>
                    Rs.
                    {expenseCalculationByYearAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_year,
                      "Legal"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2165",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  FMC
                  <span>
                    Rs.
                    {expenseCalculationByYearAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_year,
                      "FMC"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2195",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Utility
                  <span>
                    Rs.
                    {expenseCalculationByYearAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_year,
                      "Utility"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A6135",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Office
                  <span>
                    Rs.
                    {expenseCalculationByYearAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_year,
                      "Office Expense"
                    )}
                    /-
                  </span>
                </div>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2035",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Service Charge
                  <span>
                    Rs.
                    {expenseCalculationByYearAndType(
                      props?.redux_ExpenseData?.expense,
                      ExpenseDate_year,
                      "Service Charge"
                    )}
                    /-
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ margin: "5px" }}
                onClick={() => {
                  setExpenseDate_year(ExpenseDate_year - number--);
                }}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                onClick={() => {
                  setExpenseDate_year(ExpenseDate_year + number++);
                }}
                style={{ margin: "5px" }}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>

          {/* income piechart by month */}

          <div className="bg-white p-4">
            <h5 className="text-center ">
              Income Status by Month <br />
              {data?.labels[chequeDate_month - 1]}
            </h5>
            <div className="row ">
              <div className="p-2">
                <PieChart
                  style={{ height: "200px", width: "200px" }}
                  data={[
                    {
                      title: "One",
                      value: rentalIncome_month,
                      color: "#E38627",
                    },
                    { title: "Two", value: vatIncome_month, color: "#C13C37" },
                    {
                      title: "Three",
                      value: miscellaneousIncome_month,
                      color: "#6A2135",
                    },
                  ]}
                />
              </div>
              <div className="mt-4 ml-4 d-flex flex-column">
                <div className=" h6 row">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Rental Income
                </div>
                <h5>Rs.{rentalIncome_month}/-</h5>
                <div className=" h6 row ">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#C13C37",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Vat Income{" "}
                </div>
                <h5>Rs.{vatIncome_month}/-</h5>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2135",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Other Income
                </div>
                <h5>Rs.{miscellaneousIncome_month}/-</h5>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ margin: "5px" }}
                onClick={() => setChequeDate_month(chequeDate_month - number--)}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                onClick={() => setChequeDate_month(chequeDate_month + number++)}
                style={{ margin: "5px" }}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
          {/* pie chart by year */}

          <div className="bg-white p-4">
            <h5 className="text-center ">
              Income Status by Year <br /> {chequeDate_year}
            </h5>
            <div className="row ">
              <div className="p-2">
                <PieChart
                  style={{ height: "200px", width: "200px" }}
                  data={[
                    {
                      title: "One",
                      value: rentalIncome_Year,
                      color: "#E38627",
                    },
                    { title: "Two", value: vatIncome_Year, color: "#C13C37" },
                    {
                      title: "Three",
                      value: miscellaneousIncome_Year,
                      color: "#6A2135",
                    },
                  ]}
                />
              </div>
              <div className="mt-4 ml-4 d-flex flex-column">
                <div className=" h6 row">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Rental Income
                </div>
                <h5>Rs.{rentalIncome_Year}/-</h5>
                <div className=" h6 row ">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#C13C37",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Vat Income{" "}
                </div>
                <h5>Rs.{vatIncome_Year}/-</h5>
                <div className="h6 row">
                  {" "}
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#6A2135",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  Other Income
                </div>
                <h5>Rs.{miscellaneousIncome_Year}/-</h5>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ margin: "5px" }}
                onClick={() => setChequeDate_year(chequeDate_year - number--)}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                style={{ margin: "5px" }}
                onClick={() => setChequeDate_year(chequeDate_year + number++)}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>

        {/* line bar chart */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
              Total Income :{totalYearIncome}
            </div>
            <div style={{ fontWeight: "bold", fontSize: "25px" }}>
              year-{next_preYear}
            </div>
            <div style={{ fontWeight: "bold", fontSize: "20px" }}>
              Total Expense :{totalYearExpense}
            </div>
          </div>
          <Line data={data} />
          <div className="d-flex justify-content-center">
            <button
              className="m-2"
              type="button"
              onClick={() => setNext_preYear(next_preYear - number--)}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              className="m-2"
              type="button"
              onClick={() => {
                setNext_preYear(next_preYear + number++);
              }}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
