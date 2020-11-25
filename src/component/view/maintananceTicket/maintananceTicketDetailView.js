import React, { useState } from "react";
import MaintananceTicketEntryForm from "../../entryForm/maintananceTicket/maintananceTicket";
import PoopUp from "./../../../shared/popup";
import TopNavBar from "../../../shared/topNavBar";
import moment from "moment";

let MaintananceTicketDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <TopNavBar />
      <div>
        {showEditForm === false ? (
          props.selectedMaintananceTicket.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <div className="row my-4">
                  <div className="col-6">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.MaintananceCompanyId?.files_list[0]?.file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-4">
                      Maintanance Company Information
                    </h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-1">
                          Maintanance Company ID
                        </div>
                        <div className="font-weight-bold my-1">
                          Company Name
                        </div>
                        <div className="font-weight-bold my-1">Area</div>
                        <div className="font-weight-bold my-1">City</div>
                        <div className="font-weight-bold my-1">Country</div>
                        <div className="font-weight-bold my-1">
                          Registration Number
                        </div>
                        <div className="font-weight-bold my-1">
                          Registration Date
                        </div>
                        <div className="font-weight-bold my-1">Email </div>
                        <div className="font-weight-bold my-1">
                          Phone Number
                        </div>
                        <div className="font-weight-bold my-1">
                          Mobile Number
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_ID}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_Name}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_area}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_city}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_country}
                        </div>

                        <div className="font-weight-bold my-1">
                          {
                            arg?.MaintananceCompanyId
                              ?.Company_Registration_Number
                          }
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(
                            arg?.MaintananceCompanyId
                              ?.Company_Registeration_Date
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_email}
                        </div>

                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_phoneNo}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyId?.Company_Mobile_Number}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-2">
                  <div className="col-6">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.managementCompanyId?.files_list[0]?.file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-4">
                      Management Company Information
                    </h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-1">
                          Management Company ID
                        </div>
                        <div className="font-weight-bold my-1">
                          Company Name
                        </div>
                        <div className="font-weight-bold my-1">Area</div>
                        <div className="font-weight-bold my-1">City</div>
                        <div className="font-weight-bold my-1">Country</div>
                        <div className="font-weight-bold my-1">
                          Registration Number
                        </div>
                        <div className="font-weight-bold my-1">
                          Registration Date
                        </div>
                        <div className="font-weight-bold my-1">Email </div>
                        <div className="font-weight-bold my-1">
                          Phone Number
                        </div>
                        <div className="font-weight-bold my-1">
                          Mobile Number
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-1">
                          {
                            arg?.managementCompanyId
                              ?.managementCompany_companyID
                          }
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.managementCompanyId?.managementCompany_name}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.managementCompanyId?.managementCompany_area}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.managementCompanyId?.managementCompany_city}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.managementCompanyId?.managementCompany_country}
                        </div>

                        <div className="font-weight-bold my-1">
                          {
                            arg?.managementCompanyId
                              ?.managementCompany_Registeration_Number
                          }
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(
                            arg?.managementCompanyId
                              ?.managementCompany_Registeration_Date
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.managementCompanyId?.managementCompany_email}
                        </div>

                        <div className="font-weight-bold my-1">
                          {arg?.managementCompanyId?.managementCompany_phoneNo}
                        </div>
                        <div className="font-weight-bold my-1">
                          {
                            arg?.managementCompanyId
                              ?.managementCompany_MobileNumber
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row my-4">
                  <div className="col-6">
                    <h5 className="text-center mb-4">
                      Maintanance Ticket Information
                    </h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-1">
                          Maintanance Ticket ID
                        </div>
                        <div className="font-weight-bold my-1">
                          Maintanance Ticket Issue Date
                        </div>
                        <div className="font-weight-bold my-1">
                          {" "}
                          Maintanance Ticket Due Date
                        </div>
                        <div className="font-weight-bold my-1">
                          {" "}
                          Maintanance Information
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-1">
                          {arg?.maintananceTicket_ID}
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(arg?.maintananceTicketIssueDate).format(
                            "YYYY-MM-DD"
                          )}
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(arg?.maintananceTicketDueDate).format(
                            "YYYY-MM-DD"
                          )}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg?.MaintananceCompanyDetailInfo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                  CRUD_Function={props.maintananceTicketDelete}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <MaintananceTicketEntryForm
            {...props}
            showHide={showHide}
            maintananceTicket={props.selectedMaintananceTicket[0]}
          />
        )}
      </div>
    </>
  );
};

export default MaintananceTicketDetailViewComponent;
