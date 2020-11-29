import React, { useState } from "react";
import "./tenantEntryForm.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
//import { TenantEntryFormValidation } from "../../../utility/validation/tenantEntryFormValidation.js";
import PoopUp from "./../../../shared/popup";
import "../styleform/styleform.css";

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
    tenant_email: props.selectedTenantone?.tenant_email || "",
    DateOfBirth_registrationDate:
      moment(props.selectedTenantone?.DateOfBirth_registrationDate).format(
        "YYYY-MM-DD"
      ) || "",
    files_list: [],
    fileName: "",
    file: "",
    TenentType: props?.selectedTenantone?.TenentType || "",
  };
  return (
    <div className="form-page">
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
              <Form>
                <FormGroup className="form-group m-5 p-5">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">Tenant Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row ">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">Tenent Type</Label>
                        <Input
                          type="select"
                          name="TenentType"
                          id="exampleSelect"
                          placeholder="Select"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.TenentType}
                        >
                          <option value=""> </option>
                          <option value="Person">Person</option>
                          <option value="Company">Company</option>
                        </Input>
                        {touched.TenentType && errors.TenentType && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.TenentType}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          {values.TenentType === "Company"
                            ? "Company Name"
                            : "Tenant Name"}
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
                      <div className=" mt-2 col-md-4">
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
                          placeholder=" Country"
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
                      <div className="col-md-6">
                        <Label for="exampleName">
                          {values.TenentType === "Company"
                            ? "Company Registration Date "
                            : " Date of Birth "}
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
                          {values.TenentType === "Company"
                            ? " Registration Number "
                            : " Government Issue Card Number"}
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
                          <Label
                            onClick={() => console.log(values)}
                            className="float-left"
                          >
                            Upload Scan Copy
                          </Label>
                          <Input
                            type="file"
                            alt="no file"
                            name="file"
                            accept="image/*"
                            onChange={(event) => {
                              setFieldValue(
                                "file",
                                event.currentTarget.files[0]
                              );
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
                            className="btn btn-secondary btn-sm"
                          >
                            Add File
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary success col-md-2 mt-5"
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
                                  alt="no file"
                                  height="80px"
                                />
                              </td>
                              <td>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  style={
                                    props?.selectedTenantone
                                      ? { display: "none" }
                                      : { display: "inline" }
                                  }
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
