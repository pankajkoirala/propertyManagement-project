import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import PoopUp from "./../../../shared/popup";
import { OwnerEntryFormValidation } from "../../../utility/validation/ownerEntryFormValidation.js";
import { notification } from "../../../shared/notification";

const OwnerEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.owner ? props?.owner?.files_list : []
  );

  let initialValue = {
    owner_area: props?.owner?.owner_area || "",
    owner_city: props?.owner?.owner_city || "",
    owner_country: props?.owner?.owner_country || "U.A.E",
    owner_DOB: moment(props?.owner?.owner_DOB).format("YYYY-MM-DD") || "",
    owner_phoneNo: props?.owner?.owner_phoneNo || "",
    owner_Name: props?.owner?.owner_Name || "",
    owner_Type: props?.owner?.owner_Type || "",
    owner_GovID_RegNo: props?.owner?.owner_GovID_RegNo || "",

    owner_email: props?.owner?.owner_email || "",
    owner_property: props?.owner?.owner_property?._id || "",
    remark: props?.owner?.remark || "",
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

              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props?.owner
                ? props.ownerUpdate(values, props?.owner?._id, allFile)
                : props.ownerData(values, allFile);
            }}
            validationSchema={OwnerEntryFormValidation}
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
                      <h3 className="form-head">Owner Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row ">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">
                          Owner Type
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
                          name="owner_Type"
                          placeholder="Select"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.owner_Type}
                        >
                          <option value="">Select One </option>
                          <option value="Person">Person</option>
                          <option value="Company">Company</option>
                        </Input>
                        {touched.owner_Type && errors.owner_Type && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_Type}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          {" "}
                          {values.owner_Type === "Company"
                            ? "Company Name"
                            : " Name "}
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
                          value={values.owner_Name}
                          name="owner_Name"
                          placeholder="Owner Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_Name && errors.owner_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_Name}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          {values.owner_Type === "Company"
                            ? "Company Registration No"
                            : " Emirates ID Number"}
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
                          value={values.owner_GovID_RegNo}
                          name="owner_GovID_RegNo"
                          placeholder="Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_GovID_RegNo && errors.owner_GovID_RegNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_GovID_RegNo}
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
                          value={values.owner_area}
                          name="owner_area"
                          placeholder="Location Area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.owner_area && errors?.owner_area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_area}
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
                          value={values.owner_city}
                          name="owner_city"
                          placeholder=" City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select One</option>
                          <option value="ABU DHABI">ABU DHABI</option>
                          <option value="DUBAI">DUBAI</option>
                          <option value="SHARJAH">SHARJAH</option>
                        </Input>
                        {touched?.owner_city && errors?.owner_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_city}
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
                          name="owner_country"
                          placeholder="Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled
                        />
                        {touched?.owner_country && errors?.owner_country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleSelect">
                          {values.owner_Type === "Company"
                            ? "Company Registration Date"
                            : " Date Of Birth "}
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
                          name="owner_DOB"
                          value={values.owner_DOB}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.owner_DOB && errors?.owner_DOB && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_ZipCode}
                          </span>
                        )}
                      </div>
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
                          value={values.owner_email}
                          name="owner_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_email && errors.owner_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_email}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">
                          Contact Number
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
                          type="string"
                          value={values.owner_phoneNo}
                          name="owner_phoneNo"
                          placeholder=" Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_phoneNo && errors.owner_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_phoneNo}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">Remarks</Label>
                        <Input
                          type="text"
                          value={values.remark}
                          name="remark"
                          placeholder="remarks"
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
                    <div className="row">
                      {/* <div className="col-md-6 mb-4">
                        <Label for="exampleName">Owner property<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_propertyData?.map(
                            (property) => {
                              return {
                                name:
                                  property.Property_ownerName +
                                  "-" +
                                  property.referenceNO,
                                id: property._id,
                              };
                            }
                          )}
                          name={"owner_property"}
                        />
                        {touched.owner_property && errors.owner_property && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_property}
                          </span>
                        )}
                      </div> */}
                    </div>
                  </div>
                  <div style={{ marginTop: "40px" }}>
                    <h4 className="form-head">Document Field</h4>
                    <div className="row ">
                      <div className="col-md-4 text-left mb-2 ">
                        <p>
                          Document Name{" "}
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
                          placeholder="File Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fileName}
                        ></Input>
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-2">
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
                                props?.owner
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
                                    props?.owner
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
                    className="btn btn-primary col-sm-2 mt-5"
                    disabled={allFile.length === 0 ? true : false}
                    type="button"
                    onClick={() => setShowPopUp(true)}
                  >
                    Submit
                  </button>
                  <PoopUp
                    loadingIconState={loadingState}
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.owner ? "Update" : "Create"}
                    message={
                      props.owner
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

export default OwnerEntry;
