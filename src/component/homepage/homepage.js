import React, { useState } from "react";
import "./homepage.css";
import { PieChart } from "react-minimal-pie-chart";

//import {Card, Button} from "reactstrap";
import INCOME from "../../assets/income.PNG";
import Maintainance from "../../assets/maintinance.PNG";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import { incomeCalc } from "../../shared/commonFunction";

const Homepage = (props) => {
  //const [addyear, setAddyear] = useState(new Date().getFullYear());

  let number = 1;
  // let barData = [];
  // incomeCalc(props.clearedCheque, barData, "01", addyear);
  // incomeCalc(props.clearedCheque, barData, "02", addyear);
  // incomeCalc(props.clearedCheque, barData, "03", addyear);
  // incomeCalc(props.clearedCheque, barData, "05", addyear);
  // incomeCalc(props.clearedCheque, barData, "06", addyear);
  // incomeCalc(props.clearedCheque, barData, "07", addyear);
  // incomeCalc(props.clearedCheque, barData, "08", addyear);
  // incomeCalc(props.clearedCheque, barData, "09", addyear);
  // incomeCalc(props.clearedCheque, barData, "10", addyear);
  // incomeCalc(props.clearedCheque, barData, "04", addyear);
  // incomeCalc(props.clearedCheque, barData, "11", addyear);
  // incomeCalc(props.clearedCheque, barData, "12", addyear);
  const {
    rentalIncome,
    vatIncome,
    miscellaneousIncome,
    totalProperty,
    leaseProperty,
    barData,
    next_preYear,
    setNext_preYear,
  } = props;

  //bardiagram data
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
        label: "Second dataset",
        data: barData,
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <div className="row">
      <div className=" bodydisplay">
        <div className="row">
          <div className="col-9 bodydisplay">
            {" "}
            <h1>DashBoard</h1>
            <div className="row m-3">
              <div className="col-4">
                <img src={INCOME} alt="Income" />
              </div>
              <div className="col-4">
                <img src={Maintainance} alt="Income" />
              </div>
              <div className="col-4">
                <img src={INCOME} alt="Income" />
              </div>
            </div>
            <div className="row m-3">
              <div className="col-4">
                <img src={Maintainance} alt="Income" />
              </div>
              <div className="col-4">
                <img src={INCOME} alt="Income" />
              </div>
              <div className="col-4">
                <img src={Maintainance} alt="Income" />
              </div>
            </div>
            {/* //bar diagram */}
            <div className="App">
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
              {/* income piechart */}

              <div className="bg-white p-4">
                <h3 className="text-center ">Income Status</h3>
                <div className="row ">
                  <div className="p-2">
                    <PieChart
                      style={{ height: "200px", width: "200px" }}
                      data={[
                        { title: "One", value: rentalIncome, color: "#E38627" },
                        { title: "Two", value: vatIncome, color: "#C13C37" },
                        {
                          title: "Three",
                          value: miscellaneousIncome,
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
                    <h4>Rs.{rentalIncome}/-</h4>
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
                    <h4>Rs.{vatIncome}/-</h4>
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
                    <h4>Rs.{miscellaneousIncome}/-</h4>
                  </div>
                </div>
              </div>
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
