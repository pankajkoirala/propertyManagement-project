import React, { useState } from "react";
import "./tenantView.css";
import PoopUp from "./../../../shared/popup";

import LOGO from "../../../assets/logo.png";
import TanentEntryForm from "../../../component/entryForm/tenantEntryForm/tenantEntryForm";

const TanentDetailView = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  return (
    <div>
      {showEditForm === false ? (
        props.selectedTenantone.map((arg, index) => {
          return (
            <div key={index} className="row pbox">
              <div className="col-12 bg-primary">
                <div className="row">
                  <div className="col-8 bg-success text-left">
                    <b>Application Date:</b>
                    <br /> January 21, 2020
                    <br />
                    <br />
                    <b>
                      Property Occupied: <br /> 412 B, Kuleshwor
                    </b>
                  </div>

                  <div className="col-4 bg-warning">
                    <img className="logo" src={LOGO} alt="" />
                    <button onClick={() => setShowEditForm(!showEditForm)}>
                      edit
                    </button>
                    <button
                      className="danger ml-2"
                      onClick={() => {
                        setShowPopUp(true);
                      }}
                    >
                      Delete
                    </button>
                    <PoopUp
                      isOpen={showPopup}
                      isClose={setShowPopUp}
                      CRUD_Function={props.tenentDelete}
                      id={arg._id}
                      buttonName={"Delete"}
                      message={"are you sure want to delete"}
                    />
                  </div>
                  {/* <div className="col-2"><img className="printer" src={PRINTERLOGO} alt="" /></div> */}
                </div>
              </div>

              <div className="col-12">
                <div className="text-center">
                  <img
                    className="tenantImg"
                    src={arg.tenant_EId_photo}
                    alt={arg.tenant_EId_photo}
                  />
                  <h3>Sulochana Poudel</h3>
                </div>
              </div>

              <div className="col-12 bg-secondary">
                <div className="row">
                  <div className="col-6 bg-success">
                    <h5>PRIMARY APPLICANT</h5>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Email</th>
                          <th scope="col">{arg.tenant_email}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">Address</th>
                          <th scope="col">Tripureshwor, Kathmandu</th>
                        </tr>
                        <tr>
                          <th scope="row">Phone No. </th>
                          <td>9834759302</td>
                        </tr>
                        <tr>
                          <th scope="row">Cell No. </th>
                          <td>01112838484</td>
                        </tr>
                        <tr>
                          <th scope="row">Work No.</th>
                          <td>445335</td>
                        </tr>
                        <tr>
                          <th scope="row">Vehicle</th>
                          <td>Ba5Cha 554, Suzuki</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-6 bg-danger">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Birthdate</th>
                          <th scope="col">2020/02/02</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Passport No. </th>
                          <td>99302</td>
                        </tr>
                        <tr>
                          <th scope="row">Driver's Licence </th>
                          <td>011484</td>
                        </tr>
                        <tr>
                          <th scope="row">Government ID NO.</th>
                          <td>AA135</td>
                        </tr>

                        <tr>
                          <th scope="row">Additional Occupant</th>
                          <td>Ram</td>
                        </tr>
                        <tr>
                          <th scope="row">Additional Occupant</th>
                          <td>Shyam</td>
                        </tr>
                        <tr>
                          <th scope="row">Additional Occupant</th>
                          <td>Hary</td>
                        </tr>

                        <tr>
                          <th scope="row">Pet</th>
                          <td>Cat- Tiger</td>
                        </tr>
                        <tr>
                          <th scope="row">Other Info</th>
                          <td>Some text here</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <TanentEntryForm
          {...props}
          selectedTenantone={props.selectedTenantone[0]}
        />
      )}
    </div>
  );
};

export default TanentDetailView;
