import React, { useState } from "react";
import "./brokerAccount.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"
import PoopUp from "../../../shared/popup";

const BrokerComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.BrokerCompany ? props?.BrokerCompany?.files_list : []
  );
  console.log(allFile);

  let initialvalue = {
    area: props?.BrokerCompany?.area || "",
    city: props?.BrokerCompany?.city || "",
    country: props?.BrokerCompany?.country || "",
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
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props.BrokerCompany
                ? props.BrokerUpdate(values, props.BrokerCompany._id, allFile)
                : props.brokerData(values, allFile);
              console.log(values);
            }}
            //validationSchema={employeeEntryFormValidation}
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
                      {" "}
                      <h3 className="form-head">Broker Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">Broker Type</Label>
                        <Input
                          type="select"
                          name="brokerType"
                          id="exampleSelect"
                          placeholder="Broker Broker"
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
                        <Label for="exampleName">area</Label>
                        <Input
                          type="text"
                          value={values.area}
                          name="area"
                          placeholder="Location area"
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
                          placeholder=" City"
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
                      <div className="col-md-4">
                        <Label for="exampleName">Email</Label>
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
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
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
                          {" "}
                          {values.brokerType === "Company"
                            ? "Company Registration Number "
                            : "Mobile No."}
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
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <h4 className="form-head">Document Field</h4>
                      <div className="row">
                        <div className="col-md-4 text-left mb-2 mt-2">
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
                        <div className="col-md-4 text-left mb-2 ">
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
                    type="button"
                    onClick={() => setShowPopUp(true)}
                  >
                    Submit
                  </button>
                  <PoopUp
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.BrokerCompany ? "Update" : "Create"}
                    message={
                      props.BrokerCompany
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

export default BrokerComponent;
