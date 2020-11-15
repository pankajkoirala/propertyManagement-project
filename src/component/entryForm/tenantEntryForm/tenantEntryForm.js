import React, { useState } from "react";
import "./tenantEntryForm.css";
import moment from "moment";

import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import { TenantEntryFormValidation } from "../../../utility/validation/tenantEntryFormValidation.js";
import PoopUp from "./../../../shared/popup";

const TenantEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  const [allFile, setAllFile] = useState(
    props.selectedTenantone?.files_list || []
  );
  console.log(allFile);

  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };

  let initialvalue = {
    tenant_GovIdNo: props.selectedTenantone?.tenant_GovIdNo || "",
    tenant_DrivingLicenceNo:
      props.selectedTenantone?.tenant_DrivingLicenceNo || "",
    area: props.selectedTenantone?.area || "",
    city: props.selectedTenantone?.city || "",
    country: props.selectedTenantone?.country || "",
    tenant_phoneNo: props.selectedTenantone?.tenant_phoneNo || "",
    tenant_Name: props.selectedTenantone?.tenant_Name || "",
    company_Name: props.selectedTenantone?.company_Name || "",
    tenant_email: props.selectedTenantone?.tenant_email || "",
    DateOfBirth_registrationDate:
      moment(props.selectedTenantone?.DateOfBirth_registrationDate).format(
        "YYYY-MM-DD"
      ) || "",
    files_list: [],
    fileName: "",
    file: "",
  };
  return (
    <div>
      <div className="">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");

              props.selectedTenantone
                ? props.tenentUpdate(
                    values,
                    props?.selectedTenantone?._id,
                    allFile
                  )
                : props.tenantData(values, allFile);
            }}
            // validationSchema={TenantEntryFormValidation}
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
              <Form className="d-flex justify-content-center">
                <FormGroup className="fulldiv">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>Tenant Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-6">
                        <Label for="exampleName">
                          Tenant Name / Authorize Person Name
                        </Label>
                        <Input
                          type="text"
                          value={values.tenant_Name}
                          name="tenant_Name"
                          placeholder="Tenent Name/Authorize Person Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_Name && errors.tenant_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_Name}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-6">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.company_Name}
                          name="company_Name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.company_Name && errors.company_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.company_Name}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Area</Label>
                        <Input
                          type="text"
                          value={values.area}
                          name="area"
                          placeholder="Street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.area && errors?.area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.area}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">City</Label>
                        <Input
                          type="text"
                          value={values.city}
                          name="city"
                          placeholder="City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.city && errors?.city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.city}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">Country</Label>
                        <Input
                          type="text"
                          value={values.country}
                          name="country"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.country && errors?.country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.tenant_email}
                          name="tenant_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_email && errors.tenant_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_email}
                          </span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.tenant_phoneNo}
                          name="tenant_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_phoneNo && errors.tenant_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_phoneNo}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">
                          Date of Birth / Company Registration Date
                        </Label>
                        <Input
                          type="date"
                          value={values.DateOfBirth_registrationDate}
                          name="DateOfBirth_registrationDate"
                          placeholder="Enter DOB"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DateOfBirth_registrationDate &&
                          errors.DateOfBirth_registrationDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DateOfBirth_registrationDate}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">
                          Government Issue Card Number
                        </Label>
                        <Input
                          type="number"
                          value={values.tenant_GovIdNo}
                          name="tenant_GovIdNo"
                          placeholder="Enter Government Id Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_GovIdNo && errors.tenant_GovIdNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_GovIdNo}
                          </span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">Driving Licence Number</Label>
                        <Input
                          type="number"
                          value={values.tenant_DrivingLicenceNo}
                          name="tenant_DrivingLicenceNo"
                          placeholder="Enter your Driving Licence Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_DrivingLicenceNo &&
                          errors.tenant_DrivingLicenceNo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.tenant_DrivingLicenceNo}
                            </span>
                          )}
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
                        <Label
                          onClick={() => console.log(values)}
                          className="float-left"
                        >
                          Upload Scan Copy
                        </Label>
                        <Input
                          type="file"
                          alt="no picture"
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
                            let filterData = allFile?.find(
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
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <button
                      className="success col-md-4 m-5"
                      type="button"
                      onClick={() => setShowPopUp(true)}
                    >
                      Add
                    </button>
                    <PoopUp
                      isOpen={showPopup}
                      isClose={setShowPopUp}
                      CRUD_Function={handleSubmit}
                      buttonName={props.selectedTenantone ? "Update" : "Create"}
                      message={
                        props.selectedTenantone
                          ? "are you sure want to update"
                          : "are you sure want to create"
                      }
                    />
                  </div>

                  {props?.selectedTenantone?.files_list ||
                  allFile?.length !== 0 ? (
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th> Name</th>
                          <th>image</th>
                          <th>
                            <button
                              type="button"
                              style={
                                props?.selectedTenantone
                                  ? { display: "inline" }
                                  : { display: "none" }
                              }
                              onClick={() => setAllFile([])}
                            >
                              deleteAll
                            </button>
                          </th>
                        </tr>
                      </thead>
                      {allFile?.map((arg, index) => {
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
                                  alt=""
                                  alt="no picture"
                                  height="80px"
                                />
                              </td>
                              <td>
                                <button
                                  type="button"
                                  style={
                                    props?.selectedTenantone
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
