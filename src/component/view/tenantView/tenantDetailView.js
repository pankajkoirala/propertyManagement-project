import React, { useState } from "react";
import "./tenantView.css";
import PoopUp from "./../../../shared/popup";
import moment from "moment";

import LOGO from "../../../assets/logo.png";
import TanentEntryForm from "../../../component/entryForm/tenantEntryForm/tenantEntryForm";

const TanentDetailView = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  return (
    <>
      <div>
        {showEditForm === false ? (
          props.selectedTenantone.map((arg, index) => {
            return (
              <div>
                <div key={index} className="row pbox">
                  <div className="row mt-4">
                    <div className="col-4">
                      <img
                        style={{
                          height: "400px",
                          width: "100%",
                          borderRadius: "20px 20px 0px 0px",
                        }}
                        src={arg?.files_list[0]?.file}
                        alt="recently added"
                      />
                    </div>
                    <div style={{ marginLeft: "100px" }} className="col-5 ">
                      <h5 className="text-center mb-2">Tenant Information</h5>
                      <div className="d-flex justify-content-between mr-4">
                        <div style={{ left: "0px" }}>
                          <div className="font-weight-bold my-2">Tenant Id</div>
                          <div className="font-weight-bold my-2">
                            Tenant Name
                          </div>
                          <div className="font-weight-bold my-2">
                            Tenant Type
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg.TenentType === "Person"
                              ? "Date Of Birth"
                              : "Registration Date"}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg.TenentType === "Person"
                              ? "Government Id No"
                              : "Registration Number"}
                          </div>

                          <div className="font-weight-bold my-2">Area</div>
                          <div className="font-weight-bold my-2"> City</div>
                          <div className="font-weight-bold my-2">Country </div>
                          <div className="font-weight-bold my-2">Email</div>
                          <div className="font-weight-bold my-2">
                            Contact No
                          </div>
                        </div>
                        <div>
                          <div className="font-weight-bold my-2">
                            {arg?.TenantId}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.tenant_Name}
                          </div>

                          <div className="font-weight-bold my-2">
                            {arg?.TenentType}
                          </div>
                          <div className="font-weight-bold my-2">
                            {moment(arg?.DateOfBirth_registrationDate).format(
                              "YYYY-MM-DD"
                            )}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.tenant_GovIdNo}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.area}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.city}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.country}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.tenant_email}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.tenant_phoneNo}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mt4 text-center">Employee Document</h5>
                  <div className="d-flex flex-wrap">
                    {arg?.files_list?.map((file, index) => {
                      return (
                        <div className="m-4">
                          <div>
                            <a href={file.file} target={file.file}>
                              <img
                                style={{ height: "100px", width: "100px" }}
                                src={file.file}
                                alt={file.file}
                              />
                            </a>
                          </div>
                          <div className="font-weight-bold text-center">
                            {file.fileName}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  edit
                </button>
                <button
                  style={
                    props?.leasedTanentId?.some((ID) => ID === arg._id) === true
                      ? { visibility: "hidden" }
                      : {
                          backgroundColor: "blue",
                          borderRadius: "20px",
                          margin: "10px",
                          height: "40px",
                          width: "100px",
                          color: "white",
                          fontWeight: "bold",
                        }
                  }
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
            );
          })
        ) : (
          <TanentEntryForm
            {...props}
            selectedTenantone={props.selectedTenantone[0]}
          />
        )}
      </div>
    </>
  );
};

export default TanentDetailView;
