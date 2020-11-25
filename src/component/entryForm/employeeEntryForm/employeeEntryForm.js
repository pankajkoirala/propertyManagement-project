import React, { useState } from "react";
import "./employeeEntryForm.css";

import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

//import { employeeEntryFormValidation } from "../../../utility/validation/employeeEntryFormValidation.js";

const TenantEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.selectedEmployee ? props?.selectedEmployee?.files_list : []
  );

  let initialValue = {
    employee_gender: props?.selectedEmployee?.employee_gender || "",

    employee_area: props?.selectedEmployee?.employee_area || "",
    employee_city: props?.selectedEmployee?.employee_city || "",
    employee_country: props?.selectedEmployee?.employee_country || "",
    employee_DOB: props?.selectedEmployee?.employee_DOB || "",
    employee_phoneNo: props?.selectedEmployee?.employee_phoneNo || "",
    employee_firstName: props?.selectedEmployee?.employee_firstName || "",
    employee_middleName: props?.selectedEmployee?.employee_middleName || " ",
    employee_lastName: props?.selectedEmployee?.employee_lastName || "",
    employee_email: props?.selectedEmployee?.employee_email || "",
    employee_post: props?.selectedEmployee?.employee_post || "",
    fileName: "",
    file: "",
    files_list: [],
  };

  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");

              props.selectedEmployee
                ? props.EmployeeUpdate(
                    values,
                    props?.selectedEmployee?._id,
                    allFile
                  )
                : props.EmployeeData(values, allFile);
              console.log(values);
            }}
            // validationSchema={employeeEntryFormValidation}
          >
            {({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              isSubmitting,
            }) => (
              <Form>
                <FormGroup className="form-group m-5 p-4 ">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">Employee Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">First Name</Label>
                        <Input
                          type="text"
                          value={values.employee_firstName}
                          name="employee_firstName"
                          placeholder="Enter your firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_firstName &&
                          errors.employee_firstName && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.employee_firstName}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Middle Name</Label>
                        <Input
                          type="text"
                          value={values.employee_middleName}
                          name="employee_middleName"
                          placeholder="Enter your middleName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_middleName &&
                          errors.employee_middleName && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.employee_middleName}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Last Name</Label>
                        <Input
                          type="text"
                          value={values.employee_lastName}
                          name="employee_lastName"
                          placeholder="Enter your lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_lastName && errors.employee_lastName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_lastName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">area</Label>
                        <Input
                          type="text"
                          value={values.employee_area}
                          name="employee_area"
                          placeholder="Enter your employee_area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_area && errors?.employee_area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_area}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">city</Label>
                        <Input
                          type="text"
                          value={values.employee_city}
                          name="employee_city"
                          placeholder="Enter your employee_city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_city && errors?.employee_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_city}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">country</Label>
                        <Input
                          type="text"
                          value={values.employee_country}
                          name="employee_country"
                          placeholder="Enter the name of employee_country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_country && errors?.employee_country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Gender</Label>
                        <Input
                          type="select"
                          value={values.employee_gender}
                          name="employee_gender"
                          placeholder="Enter gender"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">select one</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Input>

                        {touched.employee_gender && errors.employee_gender && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_gender}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleSelect">employee_DOB</Label>
                        <Input
                          type="date"
                          name="employee_DOB"
                          value={values.employee_DOB}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.employee_DOB && errors?.employee_DOB && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_DOB}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.employee_email}
                          name="employee_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_email && errors.employee_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_email}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.employee_phoneNo}
                          name="employee_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_phoneNo && errors.employee_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_phoneNo}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">post</Label>
                        <Input
                          type="text"
                          value={values.employee_post}
                          name="employee_post"
                          placeholder="Enter the employee_post assigned"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_post && errors.employee_post && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_post}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 text-left mb-2 mt-4">
                      <Input
                        name="fileName"
                        type="text"
                        placeholder="Select Status of Cheque"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fileName}
                      ></Input>
                    </div>
                    <div className="col-md-4 text-left mb-2 mt-4">
                      <Label className="float-left">Upload Scan Copy</Label>
                      <Input
                        type="file"
                        alt="no file"
                        name="file"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}
                      />
                    </div>
                    <div className="col-md-4 text-left mb-2 mt-4">
                      <button
                        disabled={!values.fileName || !values.file}
                        onClick={() => {
                          let filterData = allFile.find(
                            (a) => a.fileName === values.fileName
                          );
                          if (filterData) {
                            let afterRemoveSameData = allFile.filter(
                              (arg) => arg.fileName !== filterData.fileName
                            );
                            setAllFile([
                              ...afterRemoveSameData,
                              {
                                fileName: values.fileName,
                                file: values.file,
                              },
                            ]);
                          } else {
                            setAllFile([
                              ...allFile,
                              {
                                fileName: values.fileName,
                                file: values.file,
                              },
                            ]);
                          }
                        }}
                        type="button"
                        className="btn btn-secondary btn-sm"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  {allFile.length !== 0 ? (
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th> Name</th>
                          <th>image</th>
                          <th>
                            <button
                              style={
                                props?.selectedEmployee
                                  ? { display: "inline" }
                                  : { display: "none" }
                              }
                              onClick={() => setAllFile([])}
                            >
                              delete All
                            </button>
                          </th>
                        </tr>
                      </thead>
                      {allFile.map((arg, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{index + 1}</td>

                              <td className="font-weight-bold">
                                {arg.fileName}
                              </td>
                              <td>
                                <img
                                  src={
                                    typeof arg.file === "string"
                                      ? arg.file
                                      : URL.createObjectURL(arg.file)
                                  }
                                  alt="no file"
                                  height="80px"
                                />
                              </td>
                              <td>
                                <button
                                  style={
                                    props?.selectedEmployee
                                      ? { display: "none" }
                                      : { display: "inline" }
                                  }
                                  type="button"
                                  onClick={() => {
                                    photoDelete(arg.fileName);
                                  }}
                                >
                                  delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </Table>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn btn-primary success col-md-3 mt-5"
                    type="button"
                    onClick={() => setShowPopUp(true)}
                  >
                    Submit
                  </button>
                  <PoopUp
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.selectedEmployee ? "Update" : "Create"}
                    message={
                      props.selectedEmployee
                        ? "are you sure want to update"
                        : "are you sure want to create"
                    }
                  />
                </FormGroup>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TenantEntry;
