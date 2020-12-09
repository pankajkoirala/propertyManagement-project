import React, { useState } from "react";
import "./managementCompany.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

import { managementCompanyEntryFormValidation } from "../../../utility/validation/managementCompanyEntryFormValidation.js";

const ManagementCompanyComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.managementCompany ? props?.managementCompany?.files_list : []
  );

  let initialvalue = {
    managementCompany_area:
      props?.managementCompany?.managementCompany_area || "",
    managementCompany_city:
      props?.managementCompany?.managementCompany_city || "",

    managementCompany_country:
      props?.managementCompany?.managementCompany_country || "",

    managementCompany_phoneNo:
      props?.managementCompany?.managementCompany_phoneNo || "",
    managementCompany_Registeration_Number:
      props?.managementCompany?.managementCompany_Registeration_Number || "",
    managementCompany_name:
      props?.managementCompany?.managementCompany_name || "",
    managementCompany_Registeration_Date:
      moment(
        props.managementCompany?.managementCompany_Registeration_Date
      ).format("YYYY-MM-DD") || "",
    managementCompany_email:
      props?.managementCompany?.managementCompany_email || "",
    managementCompany_MobileNumber:
      props?.managementCompany?.managementCompany_MobileNumber || "",
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
            initialValues={initialvalue}
            onSubmit={(values) => {
              setLoadingState(true);

              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props.managementCompany
                ? props.managementCompanyUpdate(
                    values,
                    props?.managementCompany._id,
                    allFile
                  )
                : props.ManagementCompanyData(values, allFile);
            }}
            validationSchema={managementCompanyEntryFormValidation}
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
                <FormGroup className=" p-5 m-4">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">
                        Management Company Entry Form
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>

                    <div className="row">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_name}
                          name="managementCompany_name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_name &&
                          errors.managementCompany_name && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_name}
                            </span>
                          )}
                      </div>

                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Registeration Date</Label>
                        <Input
                          type="date"
                          value={values.managementCompany_Registeration_Date}
                          name="managementCompany_Registeration_Date"
                          placeholder="Registeration Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_Registeration_Date &&
                          errors.managementCompany_Registeration_Date && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_Registeration_Date}
                            </span>
                          )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Registration Number</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_Registeration_Number}
                          name="managementCompany_Registeration_Number"
                          placeholder="Registration Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_Registeration_Number &&
                          errors.managementCompany_Registeration_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_Registeration_Number}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Area</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_area}
                          name="managementCompany_area"
                          placeholder="Location Area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_area &&
                          errors?.managementCompany_area && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_area}
                            </span>
                          )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">City</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_city}
                          name="managementCompany_city"
                          placeholder="City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_city &&
                          errors?.managementCompany_city && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_city}
                            </span>
                          )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">Country</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_country}
                          name="managementCompany_country"
                          placeholder="Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_country &&
                          errors?.managementCompany_country && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_country}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_email}
                          name="managementCompany_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_email &&
                          errors.managementCompany_email && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_email}
                            </span>
                          )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.managementCompany_phoneNo}
                          name="managementCompany_phoneNo"
                          placeholder="Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_phoneNo &&
                          errors.managementCompany_phoneNo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_phoneNo}
                            </span>
                          )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">Mobile Number</Label>
                        <Input
                          type="number"
                          value={values.managementCompany_MobileNumber}
                          name="managementCompany_MobileNumber"
                          placeholder="Mobile Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_MobileNumber &&
                          errors.managementCompany_MobileNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_MobileNumber}
                            </span>
                          )}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <h4 className="form-head">Document Field</h4>
                    <div className="row">
                      <div className="col-md-4 text-left mb-2 ">
                        <p>Document Name</p>
                        <Input
                          name="fileName"
                          type="text"
                          placeholder="Document Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fileName}
                        ></Input>
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-2">
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
                          Add File
                        </button>
                      </div>
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
                                props?.managementCompany
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
                                    props?.managementCompany
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
                    disabled={allFile.length === 0 ? true : false}
                    className="btn btn-primary col-2 success mt-5"
                    type="button"
                    onClick={() => setShowPopUp(true)}
                  >
                    Add
                  </button>
                  <PoopUp
                    loadingIconState={loadingState}
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.managementCompany ? "Update" : "Create"}
                    message={
                      props.managementCompany
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

export default ManagementCompanyComponent;
