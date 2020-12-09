import React, { useState } from "react";
import "./developerCompany.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

import { developerEntryFormValidation } from "../../../utility/validation/developmentCompanyEntryFormValidation.js";

const DeveloperCompanyComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const [allFile, setAllFile] = useState(
    props?.developerCompany ? props?.developerCompany?.files_list : []
  );

  let initialValue = {
    Developer_area: props?.developerCompany?.Developer_area || "",
    Developer_city: props?.developerCompany?.Developer_city || "",
    Developer_country: props?.developerCompany?.Developer_country || "",
    DeveloperCompany_phoneNo:
      props?.developerCompany?.DeveloperCompany_phoneNo || "",
    DeveloperCompany_Name: props?.developerCompany?.DeveloperCompany_Name || "",
    DeveloperCompany_RegisterationDate:
      moment(
        props?.developerCompany?.DeveloperCompany_RegisterationDate
      ).format("YYYY-MM-DD") || "",

    DeveloperCompany_email:
      props?.developerCompany?.DeveloperCompany_email || "",
    DeveloperCompany_MobileNumber:
      props?.developerCompany?.DeveloperCompany_MobileNumber || "",
    DeveloperCompany_RegisterationNumber:
      props?.developerCompany?.DeveloperCompany_RegisterationNumber || "",
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
              setLoadingState(true);

              console.log(values);
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props?.developerCompany
                ? props.DeveloperCompanyUpdate(
                    values,
                    props?.developerCompany?._id,
                    allFile
                  )
                : props.DevelopmentCompanyData(values, allFile);
            }}
            validationSchema={developerEntryFormValidation}
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
                <FormGroup className="p-3 m-5 form-group">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">Developer Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.DeveloperCompany_Name}
                          s
                          name="DeveloperCompany_Name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DeveloperCompany_Name &&
                          errors.DeveloperCompany_Name && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DeveloperCompany_Name}
                            </span>
                          )}
                      </div>

                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Registeration Date</Label>
                        <Input
                          type="date"
                          value={values.DeveloperCompany_RegisterationDate}
                          name="DeveloperCompany_RegisterationDate"
                          placeholder="Registeration Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DeveloperCompany_RegisterationDate &&
                          errors.DeveloperCompany_RegisterationDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DeveloperCompany_RegisterationDate}
                            </span>
                          )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Registration Number</Label>
                        <Input
                          type="text"
                          value={values.DeveloperCompany_RegisterationNumber}
                          name="DeveloperCompany_RegisterationNumber"
                          placeholder="Registration Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DeveloperCompany_RegisterationNumber &&
                          errors.DeveloperCompany_RegisterationNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DeveloperCompany_RegisterationNumber}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Area</Label>
                        <Input
                          type="text"
                          value={values.Developer_area}
                          name="Developer_area"
                          placeholder="Location Area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Developer_area && errors?.Developer_area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Developer_area}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">City</Label>
                        <Input
                          type="text"
                          value={values.Developer_city}
                          name="Developer_city"
                          placeholder="Enter your city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Developer_city && errors?.Developer_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Developer_city}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">Country</Label>
                        <Input
                          type="text"
                          value={values.Developer_country}
                          name="Developer_country"
                          placeholder="Enter the name of country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Developer_country &&
                          errors?.Developer_country && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.Developer_country}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.DeveloperCompany_email}
                          name="DeveloperCompany_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DeveloperCompany_email &&
                          errors.DeveloperCompany_email && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DeveloperCompany_email}
                            </span>
                          )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.DeveloperCompany_phoneNo}
                          name="DeveloperCompany_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DeveloperCompany_phoneNo &&
                          errors.DeveloperCompany_phoneNo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DeveloperCompany_phoneNo}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Mobile Number</Label>
                        <Input
                          type="number"
                          value={values.DeveloperCompany_MobileNumber}
                          name="DeveloperCompany_MobileNumber"
                          placeholder="Mobile Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.DeveloperCompany_MobileNumber &&
                          errors.DeveloperCompany_MobileNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.DeveloperCompany_MobileNumber}
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
                          <Label className="float-left">Upload Scan Copy</Label>
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
                            <th>Image</th>
                            <th>
                              <button
                                style={
                                  props?.developerCompany
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
                                      props?.developerCompany
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
                  </div>
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
                    buttonName={props.developerCompany ? "Update" : "Create"}
                    message={
                      props.developerCompany
                        ? "Are you sure want to update"
                        : "Are you sure want to create"
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

export default DeveloperCompanyComponent;
