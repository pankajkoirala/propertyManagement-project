import React, { useState } from "react";
import LeaseEntryForm from "../../entryForm/lease/lease";
import PoopUp from "./../../../shared/popup";
import moment from "moment";

let LeaseDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <>
      <div>
        {showEditForm === false ? (
          props.selecteOneLease.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <div className="row">
                  <div className="col-6">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.property?.files_list[0]?.file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-2">Property Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Propety Id</div>
                        <div className="font-weight-bold my-2">
                          Propety Type
                        </div>

                        <div className="font-weight-bold my-2">Area</div>
                        <div className="font-weight-bold my-2">
                          Building Name
                        </div>
                        <div className="font-weight-bold my-2">
                          Building Number
                        </div>
                        <div className="font-weight-bold my-2">Plot Number</div>
                        <div className="font-weight-bold my-2">
                          {" "}
                          Building Floor Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Municipality Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Property Premise Number
                        </div>
                        <div className="font-weight-bold my-2">community </div>
                        <div className="font-weight-bold my-2">
                          Property Owner Name
                        </div>
                        <div className="font-weight-bold my-2">
                          Property Area
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.referenceNO}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.property_type}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.property?.area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.building_Name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.building_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.plot_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.building_floorNumber}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.Muncipality_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.Property_Premise_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.property_community}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.Property_ownerName}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.property?.Property_Area}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5 className="text-center mb-2">Lease Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Lease ID</div>
                        <div className="font-weight-bold my-2">
                          Commerce Date
                        </div>
                        <div className="font-weight-bold my-2">Expiration</div>
                        <div className="font-weight-bold my-2">
                          Security Deposite
                        </div>
                        <div className="font-weight-bold my-2">
                          Security Due Date
                        </div>
                        <div className="font-weight-bold my-2">Lease Term</div>
                        <div className="font-weight-bold my-2">Frequency</div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg.LeaseId}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(arg.commenceDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(arg.expirationDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg.securityDeposite}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(arg.securityfirstDueDate).format(
                            "YYYY-MM-DD"
                          )}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg.lease_Term}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg.frequency === "7"
                            ? "Weekly"
                            : arg.frequency === "14"
                            ? "Bi-Weekly"
                            : arg.frequency === "30"
                            ? "Monthly"
                            : arg.frequency === "90"
                            ? "Quartely"
                            : "Yearly"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-2">Tenant Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Tenant ID</div>
                        <div className="font-weight-bold my-2">Tenant Name</div>
                        <div className="font-weight-bold my-2">
                          Date Of Birth/Company Registration Date
                        </div>
                        <div className="font-weight-bold my-2">Address</div>
                        <div className="font-weight-bold my-2">Email </div>
                        <div className="font-weight-bold my-2">Contact</div>
                        <div className="font-weight-bold my-2">Gov Id No</div>
                        <div className="font-weight-bold my-2">
                          Driving License
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.TenantId}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_Name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(
                            arg?.tenants?.DateOfBirth_registrationDate
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.area +
                            "," +
                            arg?.tenants?.city +
                            "," +
                            arg?.tenants?.country}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_email}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_GovIdNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_DrivingLicenceNo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="mt4 ">Lease Document</h5>
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
                  CRUD_Function={props.LeaseDelete}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <LeaseEntryForm
            {...props}
            showHide={showHide}
            lease={props.selecteOneLease[0]}
          />
        )}
      </div>
    </>
  );
};

export default LeaseDetailViewComponent;
