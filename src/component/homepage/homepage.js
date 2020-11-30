import React from "react";
import "./homepage.css";
import { PieChart } from "react-minimal-pie-chart";

//import {Card, Button} from "reactstrap";

import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const Homepage = (props) => {
  const {
    totalProperty,
    leaseProperty,
    barIncomeData,
    BarExpenseData,
    next_preYear,
    setNext_preYear,
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
  } = props;

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
        {/* //bar diagram */}
        <div>
          <h4 className="text-center">year-{next_preYear}</h4>
          <Line data={data} />
          <div className="d-flex justify-content-center">
            <button
              className="m-2"
              type="button"
              onClick={() => {
                setNext_preYear(next_preYear + number++);
              }}
            >
              next year
            </button>
            <button
              className="m-2"
              type="button"
              onClick={() => setNext_preYear(next_preYear - number--)}
            >
              pre year
            </button>
          </div>
        </div>
        {/* pie chart property */}
        <div className="d-flex justify-content-between p-4 bg-white">
          <div className=" p-4">
            <h3 className="text-center ">property Status</h3>
            <div className="row ">
              <div className="p-2">
                <PieChart
                  style={{ height: "200px", width: "200px" }}
                  data={[
                    {
                      title: "One",
                      value: totalProperty,
                      color: "#E38627",
                    },
                    {
                      title: "Two",
                      value: totalProperty - leaseProperty,
                      color: "#C13C37",
                    },
                    {
                      title: "Three",
                      value: leaseProperty,
                      color: "#6A2135",
                    },
                  ]}
                />
              </div>
              <div className="mt-4 ml-4 d-flex flex-column">
                <div className=" h5 row">
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
                <h4>{totalProperty}</h4>
                <div className=" h5 row ">
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
                <h4>{totalProperty - leaseProperty}</h4>
                <div className="h5 row">
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
                <h4>{leaseProperty}</h4>
              </div>
            </div>
          </div>
          {/* income piechart by month */}

          <div className="bg-white p-4">
            <h3 className="text-center ">Income Status by Month</h3>
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
                <div className=" h5 row">
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
                <h4>Rs.{rentalIncome_month}/-</h4>
                <div className=" h5 row ">
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
                <h4>Rs.{vatIncome_month}/-</h4>
                <div className="h5 row">
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
                <h4>Rs.{miscellaneousIncome_month}/-</h4>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ margin: "5px" }}
                onClick={() => setChequeDate_month(chequeDate_month - number--)}
              >
                prev
              </button>
              <button
                onClick={() => setChequeDate_month(chequeDate_month + number++)}
                style={{ margin: "5px" }}
              >
                next
              </button>
            </div>
          </div>
          {/* pie chart by year */}

          <div className="bg-white p-4">
            <h3 className="text-center ">Income Status by Year</h3>
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
                <div className=" h5 row">
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
                <h4>Rs.{rentalIncome_Year}/-</h4>
                <div className=" h5 row ">
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
                <h4>Rs.{vatIncome_Year}/-</h4>
                <div className="h5 row">
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
                <h4>Rs.{miscellaneousIncome_Year}/-</h4>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ margin: "5px" }}
                onClick={() => setChequeDate_year(chequeDate_year + number++)}
              >
                prev
              </button>
              <button
                style={{ margin: "5px" }}
                onClick={() => setChequeDate_year(chequeDate_year - number--)}
              >
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
