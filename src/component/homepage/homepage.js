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
import { motion } from "framer-motion";

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
        borderColor: " #00e600",
      },
      {
        label: "Expense",
        data: BarExpenseData,
        fill: false,
        borderColor: "#ff3300",
      },
    ],
  };

  return (
    <div className="bodyWrapper">
      <div className="bodydisplay">
        {/* //bar income expense  */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr) )",
            gridGap: "20px",
            padding: "0px 20px",
            // display: "flex",
            // justifyContent: "space-between",
          }}
        >
          {" "}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="dashboard-card-income-expense income-bar"
          >
            <p>Income</p>
            <Link to="/dashboardIncome">
              <button className="income-detail detail">Income Details</button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.3, delay: 0.1 }}
            className="dashboard-card-income-expense property-status"
          >
            <p>Property Status</p>
            <div className="status">
              <div className="question">
                <p className="question-total q">Total Properties</p>
                <p className="answer-total a">{totalProperty}</p>
              </div>
              <div className="question">
                <p className="question-occupied q">Occupied Properties</p>
                <p className="answer-occupied a">{leaseProperty}</p>
              </div>
              <div className="question">
                <p className="question-free q">Free Properties</p>
                <p className="answer-free a">{totalProperty - leaseProperty}</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="dashboard-card-income-expense expense-bar"
          >
            <p>Expense</p>
            <Link to="/expensesList">
              <button className="income-detail detail">Expense Details</button>
            </Link>
          </motion.div>
        </div>
        <div className="income-expense-card-container">
          {/* <div className="income-container"> */}
          {/* income by month */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="income-expense-card income-card income-by-month-card"
          >
            <h5 className="">
              Income Status by Month
              <span className="date-highlight">
                {data?.labels[chequeDate_month - 1]}
              </span>
            </h5>
            <div className="">
              <div className="pie-container">
                <PieChart
                  style={{ height: "150px", width: "150px" }}
                  data={[
                    {
                      title: "One",
                      value: rentalIncome_month,
                      color: "#E38627",
                    },
                    {
                      title: "Two",
                      value: vatIncome_month,
                      color: "#C13C37",
                    },
                    {
                      title: "Three",
                      value: miscellaneousIncome_month,
                      color: "#6A2135",
                    },
                  ]}
                />
              </div>
              <div className="">
                <div className="one-line">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  <div className="key-value">
                    <p className="key">Rental Income</p>
                    <p className="value">Rs.{rentalIncome_month}/-</p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key"> Vat Income</p>
                    <p className="value">Rs.{vatIncome_month}/-</p>
                  </div>
                </div>

                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Other Income</p>
                    <p className="value">Rs.{miscellaneousIncome_month}/-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="prev-next-btn-container">
              <button
                className="prev-next-btn prev-btn"
                onClick={() => setChequeDate_month(chequeDate_month - number--)}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                className="prev-next-btn next-btn"
                onClick={() => setChequeDate_month(chequeDate_month + number++)}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </motion.div>
          {/* pie chart by year */}

          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="income-expense-card income-card income-by-year-card"
          >
            <h5 className="">
              Income Status by Year{" "}
              <span className="date-highlight"> {chequeDate_year}</span>
            </h5>
            <div className="">
              <div className="pie-container">
                <PieChart
                  style={{ height: "150px", width: "150px" }}
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
              <div className="">
                <div className="one-line">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  <div className="key-value">
                    <p className="key">Rental Income</p>
                    <p className="value">Rs.{rentalIncome_Year}/-</p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Vat Income</p>
                    <p className="value">Rs.{vatIncome_Year}/-</p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Other Income</p>
                    <p className="value">Rs.{miscellaneousIncome_Year}/-</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="prev-next-btn-container">
              <button
                className="prev-next-btn prev-btn"
                onClick={() => setChequeDate_year(chequeDate_year - number--)}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                className="prev-next-btn next-btn"
                onClick={() => setChequeDate_year(chequeDate_year + number++)}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </motion.div>
          {/* </div> */}
          {/* <div className="expense-container"> */}
          {/* {//expense by month} */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="income-expense-card expense-card expense-by-month-card"
          >
            <h5>
              Expense Status by Month
              <span className="date-highlight">
                {data?.labels[ExpenseDate_month - 1]}
              </span>
            </h5>
            <div className="">
              <div className="pie-container">
                <PieChart
                  style={{ height: "150px", width: "150px" }}
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
              <div className="">
                <div className="one-line">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  <div className="key-value">
                    <p className="key">Maintanance</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Maintanance"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Legal</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Legal"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">FMC</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "FMC"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Utility</p>
                    <p className="value">
                      {" "}
                      Rs.
                      {expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Utility"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Office Expense</p>
                    <p className="value">
                      {" "}
                      Rs.
                      {expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Office Expense"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Service Charge</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByMonthAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_month,
                        "Service Charge"
                      )}
                      /-
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="prev-next-btn-container">
              <button
                className="prev-next-btn prev-btn"
                style={{ margin: "5px" }}
                onClick={() =>
                  setExpenseDate_month(ExpenseDate_month - number--)
                }
              >
                <ArrowBackIosIcon />
              </button>
              <button
                className="prev-next-btn next-btn"
                onClick={() =>
                  setExpenseDate_month(ExpenseDate_month + number++)
                }
                style={{ margin: "5px" }}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </motion.div>
          {/* {//expense piechart year} */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="income-expense-card expense-card expense-by-year-card"
          >
            <h5 className="">
              Expense Status by Year
              <span className="date-highlight">{ExpenseDate_year}</span>
            </h5>
            <div className="">
              <div className="pie-container">
                <PieChart
                  style={{ height: "150px", width: "150px" }}
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
              <div className="">
                <div className="one-line">
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      backgroundColor: "#E38627",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  ></div>
                  <div className="key-value">
                    <p className="key">Maintanance</p>
                    <p className="value">
                      {" "}
                      Rs.
                      {expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Maintanance"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Legal</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Legal"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">FMC</p>
                    <p className="value">
                      {" "}
                      Rs.
                      {expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "FMC"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Utility</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Utility"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Office</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Office Expense"
                      )}
                      /-
                    </p>
                  </div>
                </div>
                <div className="one-line">
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
                  <div className="key-value">
                    <p className="key">Service Charge</p>
                    <p className="value">
                      Rs.
                      {expenseCalculationByYearAndType(
                        props?.redux_ExpenseData?.expense,
                        ExpenseDate_year,
                        "Service Charge"
                      )}
                      /-
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="prev-next-btn-container">
              <button
                className="prev-next-btn prev-btn"
                style={{ margin: "5px" }}
                onClick={() => {
                  setExpenseDate_year(ExpenseDate_year - number--);
                }}
              >
                <ArrowBackIosIcon />
              </button>
              <button
                className="prev-next-btn next-btn"
                onClick={() => {
                  setExpenseDate_year(ExpenseDate_year + number++);
                }}
                style={{ margin: "5px" }}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </motion.div>
          {/* </div> */}
        </div>
        {/* line bar chart */}
        <div className="income-expense-wrapper">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "center",
            }}
          >
            Year-<span className="date-highlight">{next_preYear}</span>
          </div>

          <div style={{ borderTop: "4px solid #fff", padding: "1rem" }}>
            <div
              className="income-expense-child"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  background: "#fff",
                  padding: "1rem",
                  borderTop: "3px solid green",
                }}
              >
                Total Income{" "}
                <span
                  style={{
                    marginLeft: "1rem",
                    fontWeight: "lighter",
                    color: "green",
                    fontSize: "28px",
                  }}
                >
                  {totalYearIncome}
                </span>
              </div>

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  background: "#fff",
                  padding: "1rem",
                  borderTop: "3px solid red",
                }}
              >
                Total Expense
                <span
                  style={{
                    marginLeft: "1rem",
                    fontWeight: "lighter",
                    color: "red",
                    fontSize: "28px",
                  }}
                >
                  {totalYearExpense}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="canvas-container">
          <div className="line-container">
            <Line data={data} responsive={true} maintainAspectRatio={true} />
          </div>
          <div className="prevnext-btn-group">
            <button
              style={{
                border: "none",
                background: "#ccc",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                color: "#fff",
                margin: "5px",
                outline: "none !important",
              }}
              className="m-2"
              type="button"
              onClick={() => setNext_preYear(next_preYear - number--)}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              style={{
                border: "none",
                background: "#ccc",
                borderRadius: "50%",
                height: "40px",
                width: "40px",
                color: "#fff",
                margin: "5px",
                outline: "none !important",
              }}
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
