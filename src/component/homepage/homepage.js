import React from "react";
import "./homepage.css";
//import {Card, Button} from "reactstrap";
import Navbar from "../../shared/navbar";
import INCOME from "../../assets/income.PNG";
import Maintainance from "../../assets/maintinance.PNG";
import Occupancy from "../../assets/1.PNG";
import { connect } from "react-redux";

const Homepage = (props) => {
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

                {/* <Card style={{ width: '18rem' }}>
                        <Card.Img variant="left" src="holder.js/100px180" />
                        <Card.Body>
                          <Card.Title>Maintainance</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card> */}
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
            <div className="row m-2">
              <div className="col-10">
                <img src={Occupancy} alt="Income" />
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
