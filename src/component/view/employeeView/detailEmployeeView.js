import React, { useState } from "react";
import EmployeeEntryForm from "../../entryForm/employeeEntryForm/employeeEntryForm";
import PoopUp from "./../../../shared/popup";
import moment from "moment";
import { Table } from "reactstrap";

let EmployeeDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  return (
    <>
      <div>
        {showEditForm === false ? (
          props.selectedEmployee.map((arg, index) => {
            return (
              <div key={index} className="">
                <div className="row mt-4">
                  <div className="col-3">
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
                    <h5 className="text-center mb-2">Employee Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Employee Id</div>
                        <div className="font-weight-bold my-2">
                          Employee FirstName
                        </div>
                        <div className="font-weight-bold my-2">
                          Employee MiddleName
                        </div>
                        <div className="font-weight-bold my-2">
                          Employee LastName
                        </div>
                        <div className="font-weight-bold my-2">
                          Date of Birth
                        </div>
                        <div className="font-weight-bold my-2">Gender</div>

                        <div className="font-weight-bold my-2">Area</div>
                        <div className="font-weight-bold my-2"> City</div>
                        <div className="font-weight-bold my-2">Country </div>
                        <div className="font-weight-bold my-2">Email</div>
                        <div className="font-weight-bold my-2">Contact No </div>
                        <div className="font-weight-bold my-2">Designation</div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.Employee_ID}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_firstName}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.employee_middleName}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_lastName}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(arg?.employee_DOB).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_gender}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_city}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_country}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_email}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.employee_post}
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
                  CRUD_Function={props.employeeDelete}
                  id={arg._id}
                  message={"Are you sure you want to Delete"}
                  buttonName={"Delete"}
                />
              </div>
            );
          })
        ) : (
          <EmployeeEntryForm
            {...props}
            selectedEmployee={props.selectedEmployee[0]}
          />
        )}
      </div>
    </>
  );
};

export default EmployeeDetailViewComponent;
