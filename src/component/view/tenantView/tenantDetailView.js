import React, { useState } from "react";
import "./tenantView.css";
import PoopUp from "./../../../shared/popup";
import moment from "moment";

import TanentEntryForm from "../../../component/entryForm/tenantEntryForm/tenantEntryForm";

const TanentDetailView = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  return (
    <>
      <div style={{ margin: "25px" }}>
        {showEditForm === false ? (
          props.selectedTenantone.map((arg, index) => {
            return (
              <div key={index}>
                <div className="d-flex justify-content-between ">
                  <div className="col-3">
                    <img
                      style={{
                        height: "400px",
                        width: "300px",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.files_list[0]?.file}
                      alt="recently added"
                    />
                  </div>
                  <div style={{ marginLeft: "100px" }} className="col-7 ">
                    <h5 className="text-center mb-2">Tenant Information</h5>
                    <div className="row mr-4">
                      {arg.TenentType === "Person" ? (
                        <>
                          {" "}
                          <div className="col-6" style={{ left: "0px" }}>
                            <div className="font-weight-bold my-1">
                              Tenant Id
                            </div>
                            <div className="font-weight-bold my-1">
                              Tenant Name
                            </div>
                            <div className="font-weight-bold my-1">
                              Tenant Type
                            </div>
                            <div className="font-weight-bold my-1">
                              Date Of Birth
                            </div>
                            <div className="font-weight-bold my-1">
                              Emirates Id No
                            </div>

                            <div className="font-weight-bold my-1">area</div>
                            <div className="font-weight-bold my-1"> City</div>
                            <div className="font-weight-bold my-1">
                              Country{" "}
                            </div>
                            <div className="font-weight-bold my-1">Email</div>
                            <div className="font-weight-bold my-1">
                              Contact No
                            </div>
                            <div className="font-weight-bold my-1">
                              Passport No
                            </div>
                            <div className="font-weight-bold my-1">
                              Passport expire Date
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="font-weight-bold my-1">
                              {arg?.TenantId}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_Name}
                            </div>

                            <div className="font-weight-bold my-1">
                              {arg?.TenentType}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.DateOfBirth_registrationDate
                                ? moment(
                                    arg?.DateOfBirth_registrationDate
                                  ).format("YYYY-MM-DD")
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_GovIdNo ? arg?.tenant_GovIdNo : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.area ? arg?.area : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.city ? arg?.city : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.country ? arg?.country : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_email ? arg?.tenant_email : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_phoneNo ? arg?.tenant_phoneNo : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_passportNo
                                ? arg?.tenant_passportNo
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_passportNo
                                ? arg?.tenant_passport_expireDate
                                : "-"}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-6" style={{ left: "0px" }}>
                            <div className="font-weight-bold my-1">
                              Tenant Id
                            </div>
                            <div className="font-weight-bold my-1">
                              Tenant Type
                            </div>
                            <div className="font-weight-bold my-1">
                              Company Name
                            </div>
                            <div className="font-weight-bold my-1">
                              Authorize Person
                            </div>
                            <div className="font-weight-bold my-1">
                              Designation
                            </div>

                            <div className="font-weight-bold my-1">area</div>
                            <div className="font-weight-bold my-1"> City</div>
                            <div className="font-weight-bold my-1">Country</div>
                            <div className="font-weight-bold my-1">Email</div>
                            <div className="font-weight-bold my-1">
                              Trade License No
                            </div>
                            <div className="font-weight-bold my-1">
                              issuing Date
                            </div>
                            <div className="font-weight-bold my-1">
                              ExpireDate
                            </div>
                            <div className="font-weight-bold my-1">
                              Emirates ID No
                            </div>
                            <div className="font-weight-bold my-1">
                              Emirates ID Expire Date
                            </div>
                            <div className="font-weight-bold my-1">
                              Passport No
                            </div>
                            <div className="font-weight-bold my-1">
                              Passport expire Date
                            </div>
                            <div className="font-weight-bold my-1">Remarks</div>
                          </div>
                          <div className="col-6">
                            <div className="font-weight-bold my-1">
                              {arg?.TenantId ? arg?.TenantId : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.TenentType ? arg?.TenentType : "-"}
                            </div>

                            <div className="font-weight-bold my-1">
                              {arg?.tenant_companyName
                                ? arg?.tenant_companyName
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_companyAuthorizePerson
                                ? arg?.tenant_companyAuthorizePerson
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_companyAuthorizePersonDesignation
                                ? arg?.tenant_companyAuthorizePersonDesignation
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.area ? arg?.area : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.city ? arg?.city : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.country ? arg?.country : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_email ? arg?.tenant_email : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_companyTradeLicenseNo
                                ? arg?.tenant_companyTradeLicenseNo
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_companyIssuingDate
                                ? moment(arg?.tenant_companyIssuingDate).format(
                                    "YYYY-MM-DD"
                                  )
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_companyExpireDate
                                ? moment(arg?.tenant_companyExpireDate).format(
                                    "YYYY-MM-DD"
                                  )
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_GovIdNo ? arg?.tenant_GovIdNo : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_GovIdNo
                                ? moment(arg?.tenant_GovIdNo_expireDate).format(
                                    "YYYY-MM-DD"
                                  )
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_passportNo
                                ? arg?.tenant_passportNo
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.tenant_passportNo
                                ? moment(
                                    arg?.tenant_passport_expireDate
                                  ).format("YYYY-MM-DD")
                                : "-"}
                            </div>
                            <div className="font-weight-bold my-1">
                              {arg?.remark ? arg?.remark : "-"}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <h5 className="mt4 text-center">Tenant Document</h5>
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
