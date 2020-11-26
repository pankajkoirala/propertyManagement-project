import React, { useState } from "react";
import MaintananceCompanyEntryForm from "../../entryForm/maintainanceCompanyEntryForm/maintainanceCompanyEntryForm";
import PoopUp from "./../../../shared/popup";
import moment from "moment";

let MaintananceCompanyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div>
        {showEditForm === false ? (
          props.selectedMaintananceCompany.map((arg, index) => {
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
                      src={arg?.files_list[0]?.file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-4">
                      Maintanance Company Information
                    </h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">
                          Maintanance Company ID
                        </div>
                        <div className="font-weight-bold my-2">
                          Company Name
                        </div>
                        <div className="font-weight-bold my-2">Area</div>
                        <div className="font-weight-bold my-2">City</div>
                        <div className="font-weight-bold my-2">Country</div>
                        <div className="font-weight-bold my-2">
                          Registration Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Registration Date
                        </div>
                        <div className="font-weight-bold my-2">Email </div>
                        <div className="font-weight-bold my-2">
                          Phone Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Mobile Number
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_ID}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_Name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_city}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_country}
                        </div>

                        <div className="font-weight-bold my-2">
                          {
                            arg?.MaintananceCompanyId
                              ?.Company_Registration_Number
                          }
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(
                            arg?.MaintananceCompanyId
                              ?.Company_Registeration_Date
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_email}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.Company_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Company_Mobile_Number}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="mt4 text-center">
                      Maintanance Company Document
                    </h5>
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
                  style={
                    props?.maintananceCompanyIDs?.some(
                      (ID) => ID === arg._id
                    ) === true
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
                  CRUD_Function={props.maintananceCompanyDelete}
                  buttonName={"Delete"}
                  id={arg._id}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <MaintananceCompanyEntryForm
            {...props}
            showHide={showHide}
            maintananceCompany={props.selectedMaintananceCompany[0]}
          />
        )}
      </div>
    </>
  );
};

export default MaintananceCompanyDetailViewComponent;
