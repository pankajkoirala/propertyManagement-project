import React, { useState } from "react";
import "./brokerAccount.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import { brokerEntryFormValidation } from "../../../utility/validation/brokerEntryFormValidation.js";
import PoopUp from "../../../shared/popup";
import { notification } from "../../../shared/notification";

const BrokerComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const [allFile, setAllFile] = useState(
    props?.BrokerCompany ? props?.BrokerCompany?.files_list : []
  );

  let initialvalue = {
    area: props?.BrokerCompany?.area || "",
    city: props?.BrokerCompany?.city || "",
    country: props?.BrokerCompany?.country || "U.A.E",
    broker_phoneNo: props?.BrokerCompany?.broker_phoneNo || "",
    broker_RegistrationNumber:
      props?.BrokerCompany?.broker_RegistrationNumber || "",
    broker_companyName: props?.BrokerCompany?.broker_companyName || "",
    broker_companyRegisterDate:
      moment(props.BrokerCompany?.broker_companyRegisterDate).format(
        "YYYY-MM-DD"
      ) || "",
    broker_email: props?.BrokerCompany?.broker_email || "",
    fileName: "",
    file: "",
    files_list: [],
    brokerType: props?.BrokerCompany?.brokerType || "",
    remark: props?.BrokerCompany?.remark || "",
  };

  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };
  return (
    <div style={{ margin: "20px" }}>
      <div>
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props.BrokerCompany
                ? props.BrokerUpdate(values, props.BrokerCompany._id, allFile)
                : props.brokerData(values, allFile);
              setLoadingState(true);
            }}
            validationSchema={brokerEntryFormValidation}
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
                <FormGroup className="form-group p-4  m-2">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      <h3 className="form-head">Broker Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">
                          Broker Type{" "}
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
                          name="brokerType"
                          id="exampleSelect"
                          placeholder="Select anyone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.brokerType}
                        >
                          <option value="">Select One </option>
                          <option value="Person">Person</option>
                          <option value="Company">Company</option>
                        </Input>
                        {touched.brokerType && errors.brokerType && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.brokerType}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          {values.brokerType === "Company"
                            ? "Company Name"
                            : "Person Name"}
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
                          value={values.broker_companyName}
                          name="broker_companyName"
                          placeholder="Broker Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.broker_companyName &&
                          errors.broker_companyName && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.broker_companyName}
                            </span>
                          )}
                      </div>

                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          {values.brokerType === "Company"
                            ? "Company Registeration Date "
                            : "Date of Birth"}
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
                          value={values.broker_companyRegisterDate}
                          name="broker_companyRegisterDate"
                          placeholder="Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.broker_companyRegisterDate &&
                          errors.broker_companyRegisterDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.broker_companyRegisterDate}
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
                          value={values.area}
                          name="area"
                          placeholder="Location Area"
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
                          value={values.city}
                          name="city"
                          placeholder=" City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">Select One</option>
                          <option value="ABU DHABI">ABU DHABI</option>
                          <option value="DUBAI">DUBAI</option>
                          <option value="SHARJAH">SHARJAH</option>
                        </Input>

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
                          name="country"
                          placeholder=" Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled
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
                          value={values.broker_email}
                          name="broker_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.broker_email && errors.broker_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.broker_email}
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
                          type="text"
                          value={values.broker_phoneNo}
                          name="broker_phoneNo"
                          placeholder=" Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.broker_phoneNo && errors.broker_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.broker_phoneNo}
                          </span>
                        )}
                      </div>
                      <div className=" col-md-4">
                        <Label for="exampleName">
                          {values.brokerType === "Company"
                            ? "Company Registration Number "
                            : "Mobile No."}
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
                          value={values.broker_RegistrationNumber}
                          name="broker_RegistrationNumber"
                          placeholder=" Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.broker_RegistrationNumber &&
                          errors.broker_RegistrationNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.broker_RegistrationNumber}
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
                    <div style={{ marginTop: "20px" }}>
                      <h4 className="form-head">Document Field</h4>
                      <div className="row">
                        <div className="col-md-4 text-left mb-2 mt-2">
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
                        <div className="col-md-4 text-left mb-2 ">
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
                            className="btn btn-secondary"
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
                                  props?.BrokerCompany
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
                                      props?.BrokerCompany
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
                    className="btn btn-primary col-md-2 success mt-5"
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
                    buttonName={props.BrokerCompany ? "Update" : "Create"}
                    message={
                      props.BrokerCompany
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

export default BrokerComponent;
