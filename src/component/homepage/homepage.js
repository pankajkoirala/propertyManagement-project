import React from "react";
import "./homepage.css";
import { PieChart } from "react-minimal-pie-chart";
import SearchIcon from '@material-ui/icons/Search';


//import {Card, Button} from "reactstrap";
import INCOME from "../../assets/income.PNG";
import Maintainance from "../../assets/maintinance.PNG";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";

const Homepage = (props) => {
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
        data: [33, 25, 35, 51, 54, 76, 33, 44, 54, 34, 67, 12],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <div className="row">
      <div className="dashboard-top">
      <div className="form-group has-search">
        <span className="form-control-feedback"><SearchIcon/></span>
        <input type="text" className="form-control" placeholder="Search"/>
      </div>
        <div className="dashboard-link">
          <ul>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>Logout</a></li>
          </ul>
        </div>
      </div>
      <div className=" bodydisplay">
        <div className="row">
          <div className="col-9 bodydisplay">
            {" "}
            <h1>DASHBOARD</h1>
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
              <Line data={data} />
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
                        { title: "One", value: 1, color: "#E38627" },
                        { title: "Two", value: 15, color: "#C13C37" },
                        { title: "Three", value: 20, color: "#6A2135" },
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
                    <h4>3</h4>
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
                    <h4>5</h4>
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
                    <h4>10</h4>
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
                        { title: "One", value: 1, color: "#E38627" },
                        { title: "Two", value: 15, color: "#C13C37" },
                        { title: "Three", value: 20, color: "#6A2135" },
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
                    <h4>3</h4>
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
                    <h4>5</h4>
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
                    <h4>10</h4>
                  </div>
                </div>
              </div>
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
