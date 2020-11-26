import React, { useState } from "react";
import BrokerCompanyEntryForm from "../../entryForm/brokerEntryForm/brokerEntryForm";
import PoopUp from "./../../../shared/popup";
import moment from "moment";

let BrokerCompanyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    console.log(props.history);
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div>
        {showEditForm === false ? (
          props.selectedBrokerCompany.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <div key={index} className="row pbox">
                  <div className="row mt-4">
                    <div className="col-6">
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
                    <div style={{ marginLeft: "10px" }} className="col-5 ">
                      <h5 className="text-center mb-2">Broker Information</h5>
                      <div className="d-flex justify-content-between mr-4">
                        <div style={{ left: "0px" }}>
                          <div className="font-weight-bold my-2">Tenant Id</div>
                          <div className="font-weight-bold my-2">
                            Broker Name
                          </div>
                          <div className="font-weight-bold my-2">
                            Broker Type
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg.brokerType === "Person"
                              ? "Date Of Birth"
                              : "Registration Date"}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg.brokerType === "Person"
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
                            {arg?.brokerId}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.broker_companyName}
                          </div>

                          <div className="font-weight-bold my-2">
                            {arg?.brokerType}
                          </div>
                          <div className="font-weight-bold my-2">
                            {moment(arg?.broker_companyRegisterDate).format(
                              "YYYY-MM-DD"
                            )}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.broker_RegistrationNumber}
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
                            {arg?.broker_email}
                          </div>
                          <div className="font-weight-bold my-2">
                            {arg?.broker_phoneNo}
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
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
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
                  CRUD_Function={props.BrokerDelete}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <BrokerCompanyEntryForm
            {...props}
            showHide={showHide}
            BrokerCompany={props.selectedBrokerCompany[0]}
          />
        )}
      </div>
    </>
  );
};

export default BrokerCompanyDetailViewComponent;
