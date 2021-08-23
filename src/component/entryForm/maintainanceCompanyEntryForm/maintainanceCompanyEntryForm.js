import React, { useState } from "react";
import "./maintainanceCompany.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

import { maintainanceCompanyEntryFormValidation } from "../../../utility/validation/maintainanceCompanyEntryFormValidation.js";
import { notification } from "../../../shared/notification";

const MaintainanceCompanyComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.maintananceCompany ? props?.maintananceCompany?.files_list : []
  );

  let initialvalue = {
    Company_area: props?.maintananceCompany?.Company_area || "",
    Company_city: props?.maintananceCompany?.Company_city || "",
    Company_country: props?.maintananceCompany?.Company_country || "U.A.E",
    Company_phoneNo: props?.maintananceCompany?.Company_phoneNo || "",
    remark: props?.maintananceCompany?.remark || "",
    Company_Registration_Number:
      props?.maintananceCompany?.Company_Registration_Number || "",
    Company_Name: props?.maintananceCompany?.Company_Name || "",
    Company_Registeration_Date:
      moment(props.maintananceCompany?.Company_Registeration_Date).format(
        "YYYY-MM-DD"
      ) || "",
    Company_email: props?.maintananceCompany?.Company_email || "",
    Company_Mobile_Number:
      props?.maintananceCompany?.Company_Mobile_Number || "",
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
              // console.log(values);
              setLoadingState(true);
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props.maintananceCompany
                ? props.maintananceCompanyUpdate(
                  values,
                  props?.maintananceCompany?._id,
                  allFile
                )
                : props.MaintananceCompanyData(values, allFile);
            }}
            validationSchema={maintainanceCompanyEntryFormValidation}
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
                <FormGroup className="p-5 form-group m-5">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">
                        Maintainance Company Entry Form
                      </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          Company Name
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="text"
                          value={values.Company_Name}
                          name="Company_Name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Name && errors.Company_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Company_Name}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          Registeration Date
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="date"
                          value={values.Company_Registeration_Date}
                          name="Company_Registeration_Date"
                          placeholder="Registeration Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Registeration_Date &&
                          errors.Company_Registeration_Date && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Company_Registeration_Date}
                            </span>
                          )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          Registration Number
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="text"
                          value={values.Company_Registration_Number}
                          name="Company_Registration_Number"
                          placeholder="Registration Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Registration_Number &&
                          errors.Company_Registration_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Company_Registration_Number}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">
                          Area
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="text"
                          value={values.Company_area}
                          name="Company_area"
                          placeholder="Location area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Company_area && errors?.Company_area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_area}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">
                          City
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="select"
                          value={values.Company_city}
                          name="Company_city"
                          placeholder=" City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select One</option>
                          <option value="ABU DHABI">ABU DHABI</option>
                          <option value="DUBAI">DUBAI</option>
                          <option value="SHARJAH">SHARJAH</option>
                        </Input>
                        {touched?.Company_city && errors?.Company_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_city}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">
                          Country
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="text"
                          value={"U.A.E"}
                          name="Company_country"
                          placeholder="Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled
                        />
                        {touched?.Company_country && errors?.Company_country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_country}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">
                          Email
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="email"
                          value={values.Company_email}
                          name="Company_email"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_email && errors.Company_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Company_email}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">
                          Phone Number
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="text"
                          value={values.Company_phoneNo}
                          name="Company_phoneNo"
                          placeholder="Phone Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_phoneNo && errors.Company_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Company_phoneNo}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">
                          Mobile Number
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="text"
                          value={values.Company_Mobile_Number}
                          name="Company_Mobile_Number"
                          placeholder="Mobile Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Mobile_Number &&
                          errors.Company_Mobile_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Company_Mobile_Number}
                            </span>
                          )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">Remarks</Label>
                        <Input
                          type="text"
                          value={values.remark}
                          name="remarks"
                          placeholder="remark"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.remark && errors.remark && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.remark}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <h4 className="form-head">Document Field</h4>
                    <div className="row">
                      <div className="col-md-4 text-left mb-2 ">
                        <p>
                          Document Name
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </p>
                        <Input
                          name="fileName"
                          type="text"
                          placeholder="Document Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fileName}
                        ></Input>
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-4">
                        <Label className="float-left">
                          Upload Scan Copy
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </Label>
                        <Input
                          type="file"
                          alt="no file"
                          name="file"
                          accept="image/*"
                          onChange={(event) => {
                            if (event.currentTarget.files[0]) {
                              let rn = event.currentTarget.files[0].name;
                              let bn = rn?.split(".");
                              bn = bn[bn?.length - 1];
                              if (
                                bn === "jpg" ||
                                bn === "jpeg" ||
                                bn === "png" ||
                                bn === "JPG" ||
                                bn === "JPEG" ||
                                bn === "PNG"
                              ) {
                                if (
                                  event.currentTarget.files[0].size > 1048576
                                ) {
                                  notification(
                                    "File Size Shouldn't exceed 1.5 MB",
                                    "ERROR"
                                  );
                                } else {
                                  setFieldValue(
                                    "file",
                                    event.currentTarget.files[0]
                                  );
                                }
                              } else {
                                notification(
                                  "Please Select JPG, JPEG or PNG Format Only",
                                  "ERROR"
                                );
                              }
                            } else {
                              notification("Please Select image", "ERROR");
                            }
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
                                props?.maintananceCompany
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
                                    props?.maintananceCompany
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
                    buttonName={props.maintananceCompany ? "Update" : "Create"}
                    message={
                      props.maintananceCompany
                        ? "Are you sure you want to Update this Form"
                        : "Are you sure you want to create this Form"
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

export default MaintainanceCompanyComponent;
