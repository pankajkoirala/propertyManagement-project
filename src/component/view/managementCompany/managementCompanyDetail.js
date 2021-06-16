import React, { useState } from "react";
import ManagementCompanyEntryForm from "../../entryForm/managementCompanyEntryForm/managementCompanyEntryForm";
import PoopUp from "./../../../shared/popup";
let ManagementCompanyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div style={{ margin: "25px" }}>
        {showEditForm === false ? (
          props.selectedManagementCompany.map((arg, index) => {
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
                      Management Company Information
                    </h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">
                          Management Company ID
                        </div>
                        <div className="font-weight-bold my-2">
                          Company Name
                        </div>
                        <div className="font-weight-bold my-2">area</div>
                        <div className="font-weight-bold my-2">City</div>
                        <div className="font-weight-bold my-2">Country</div>

                        <div className="font-weight-bold my-2">Email </div>
                        <div className="font-weight-bold my-2">
                          Phone Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Mobile Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Remarks
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_companyID}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_city}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_country}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_email}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.managementCompany_MobileNumber}
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
                  style={
                    props?.managementCompanyIDs.some((ID) => ID === arg._id) ===
                      true
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
                  CRUD_Function={props.managementCompanyDelete}
                  buttonName={"Delete"}
                  id={arg._id}
                  message={"Are you sure you want to Delete"}
                />
              </div>
            );
          })
        ) : (
          <ManagementCompanyEntryForm
            {...props}
            showHide={showHide}
            managementCompany={props.selectedManagementCompany[0]}
          />
        )}
      </div>
    </>
  );
};

export default ManagementCompanyDetailViewComponent;
