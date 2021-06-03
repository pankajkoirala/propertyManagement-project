import React, { useState } from "react";
import DeveloperCompanyForm from "../../entryForm/developersCompanyEntryForm/developerCompanyEntryForm";
import PoopUp from "./../../../shared/popup";
import moment from "moment";
let DeveloperCompanyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div style={{ margin: "25px" }}>
        {showEditForm === false ? (
          props.selectedDeveloperCompany.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <div className="row my-2">
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
                      Developer Company Information
                    </h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Company ID</div>
                        <div className="font-weight-bold my-2">
                          Company Name
                        </div>
                        <div className="font-weight-bold my-2">area</div>
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
                        <div className="font-weight-bold my-2">
                          Remark 
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.DeveloperCompany_ID}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.DeveloperCompany_Name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Developer_area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Developer_city}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.Developer_country}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.DeveloperCompany_RegisterationNumber}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(
                            arg?.managementCompanyId
                              ?.DeveloperCompany_RegisterationDate
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.DeveloperCompany_email}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.DeveloperCompany_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.DeveloperCompany_MobileNumber}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.remark}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="mt4 text-center">
                      Management Company Document
                    </h5>
                    <div className="d-flex flex-wrap">
                      {arg?.files_list?.map((file, index) => {
                        return (
                          <div key={index} className="m-4">
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
                  onClick={() => setShowPopUp(true)}
                >
                  delete
                </button>
                <PoopUp
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={props.DeveloperCompanyDelete}
                  buttonName={"Delete"}
                  id={arg._id}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <DeveloperCompanyForm
            {...props}
            showHide={showHide}
            developerCompany={props.selectedDeveloperCompany[0]}
          />
        )}
      </div>
    </>
  );
};

export default DeveloperCompanyDetailViewComponent;
