import React, { useState } from "react";
import "./lease.css";

import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";

import LeaseEntryFormValidation from "../../../utility/validation/leaseEntryFormValidation.js";

const LeaseEntry = (props) => {
  const [cheque, setCheque] = useState([]);
  const [date, setdate] = useState("");
  const [chequeNum, setChequeNum] = useState("");

  let setChequeList = (data) => {
    let updatedcheque = cheque;
    updatedcheque.push(data);
    setCheque(updatedcheque);
    setdate("");
    setChequeNum("");
  };

  return (
    <div className="leasediv">
      <div className="row">
        <div className="col-12 text-center">
          <h3>Lease Term Detail </h3>
        </div>{" "}
        <br />
      </div>
      <Formik
        initialValues={{
          chequeList: [],
          lease_enterDate: "",
          tenants: "",
          property: [],
          lease_Term: "",
          commenceDate: "",
          expirationDate: "",
          rentAmount: "",
          firstDueDate: "",
          frequency: "",
          gracePeriod: "",
          late_feeType: "",
          lateFeeAmount: "",
          securityDeposite: "",
          securityfirstDueDate: "",
          photo: "",
        }}
        onSubmit={(values) => {
          values.chequeList = JSON.stringify(cheque);
          values.property = JSON.stringify(values.property);

          console.log(values);
          props.leaseData(values);
        }}
        //validationSchema={LeaseEntryFormValidation}
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
            <FormGroup>
              <div className="row ">
                <div className="col-12 mt-2 ml-2 mr-2">
                  <b>General Information</b>{" "}
                </div>
                <div className="col-md-4">
                  <Label for="exampleName">Lease Entered On</Label>
                  <Input
                    type="date"
                    value={values.lease_enterDate}
                    name="lease_enterDate"
                    placeholder="Enter Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lease_enterDate && errors.lease_enterDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.lease_enterDate}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <b>Select Property and Tenant</b>
              </div>
              <div className="row ">
                <div className="col-md-5">
                  <Label for="exampleSelect">Tenants(s)</Label>
                  <Input
                    type="select"
                    name="tenants"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {" "}
                    <option value="">select one </option>
                    {props?.tenant.map((arg, index) => {
                      return (
                        <option key={index} value={arg?._id}>{arg?.tenant_firstName} </option>
                      );
                    })}
                  </Input>

                  {touched.tenants && errors.tenants && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.tenants}
                    </span>
                  )}
                </div>
                <div className="col-md-6">
                  <Label for="exampleSelect">Property</Label>
                  <Input
                    type="select"
                    name="property"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={(e) =>
                      setFieldValue("property", [
                        ...values.property,
                        e.target.value,
                      ])
                    }
                    onBlur={handleBlur}
                  >
                    <option value="">select one </option>

                    {props?.property?.map((arg, index) => {
                      return (
                        <option key={index} value={arg._id}>
                          {arg?.property_type}
                          {arg?.referenceNO}
                        </option>
                      );
                    })}
                  </Input>
                  {/* //selected house list shown */}
                  {values?.property?.map((a) => {
                    let house = props?.property?.find((b) => b._id === a);
                    return <div>{house?.property_type}</div>;
                  })}
                  {touched.property && errors.property && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <b>Terms of Tendency</b>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Label for="exampleSelect">Lease Terms</Label>
                  <Input
                    type="select"
                    name="lease_Term"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lease_Term}
                  >
                    <option value=""> </option>
                    <option value="monthToMonth">Month to Month</option>
                    <option value="fixedTerm">Fixed Terms</option>
                  </Input>

                  {touched.lease_Term && errors.lease_Term && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.lease_Term}
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <Label for="exampleSelect">Commencement Date</Label>
                  <Input
                    type="date"
                    name="commenceDate"
                    id="exampleSelect"
                    placeholder="Select Commence Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.commenceDate}
                  ></Input>

                  {touched.commenceDate && errors.commenceDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.commenceDate}
                    </span>
                  )}
                </div>
                <div className="col-4">
                  <Label for="exampleName">Expiration Date</Label>
                  <Input
                    type="date"
                    value={values.expirationDate}
                    name="expirationDate"
                    placeholder="ExpirationDate"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.expirationDate && errors.expirationDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.expirationDate}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <b>Amount and Schedule of Rent Payment</b>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Label for="exampleSelect">Rent Amount</Label>
                  <Input
                    type="number"
                    name="rentAmount"
                    id="exampleSelect"
                    placeholder="Rent Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rentAmount}
                  ></Input>

                  {touched.rentAmount && errors.rentAmount && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.rentAmount}
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <Label for="exampleSelect">First Due Date</Label>
                  <Input
                    type="date"
                    name="firstDueDate"
                    id="exampleSelect"
                    placeholder="Due Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstDueDate}
                  ></Input>

                  {touched.firstDueDate && errors.firstDueDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.firstDueDate}
                    </span>
                  )}
                </div>
                <div className="col-4">
                  <Label for="exampleName">Frequency</Label>
                  <Input
                    type="select"
                    name="frequency"
                    id="exampleSelect"
                    placeholder="Frequencyt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""> </option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="quartely">Quartely</option>
                    <option value="yearly">Yearly</option>
                  </Input>

                  {touched.frequency && errors.frequency && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.frequency}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <b>Grace Period and Late Payment Fee</b>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Label for="exampleSelect">Grace Period Days</Label>
                  <Input
                    type="number"
                    name="gracePeriod"
                    id="exampleSelect"
                    placeholder="gracePeriod"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gracePeriod}
                  ></Input>

                  {touched.gracePeriod && errors.gracePeriod && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.gracePeriod}
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <Label for="exampleSelect">Late Fee Type</Label>
                  <Input
                    type="select"
                    name="late_feeType"
                    id="exampleSelect"
                    placeholder="Select Late Fee type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""> </option>
                    <option value="flat">Flat</option>
                    <option value="percentage">Percentage</option>
                  </Input>

                  {touched.late_feeType && errors.late_feeType && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.late_feeType}
                    </span>
                  )}
                </div>
                <div className="col-4">
                  <Label for="exampleName">Late Fee Amount</Label>
                  <Input
                    type="number"
                    name="lateFeeAmount"
                    id="exampleSelect"
                    placeholder="Late Fee Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lateFeeAmount}
                  ></Input>

                  {touched.lateFeeAmount && errors.lateFeeAmount && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.lateFeeAmount}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <b>Security Deposit</b>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Label for="exampleSelect">Security Deposit</Label>
                  <Input
                    type="number"
                    name="securityDeposite"
                    id="exampleSelect"
                    placeholder="Security Deposite"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.securityDeposite}
                  ></Input>

                  {touched.securityDeposite && errors.securityDeposite && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.securityDeposite}
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <Label for="exampleSelect">Deposite Due Date</Label>
                  <Input
                    type="date"
                    name="securityfirstDueDate"
                    id="exampleSelect"
                    placeholder="Security Due Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.securityfirstDueDate}
                  ></Input>

                  {touched.securityfirstDueDate && errors.securityfirstDueDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.securityfirstDueDate}
                    </span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 text-left mb-2 mt-4">
                  <Label className="float-left">Upload Agrement Copy</Label>
                  <Input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("photo", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.photo && values.photo && (
                    <img
                      src={URL.createObjectURL(values.photo)}
                      alt="no picture"
                      height="20"
                    />
                  )}
                </div>

                <button
                  className="Success col-4 mt-2"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>

              {/* cheque display  */}
              <Form>
                <div className="row">
                  <div className="col-md-4">
                    <Label for="exampleName">cheque issue date</Label>
                    <Input
                      type="date"
                      value={date}
                      placeholder="Enter Date"
                      onChange={(e) => setdate(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <Label for="exampleName">cheque chequeNo </Label>
                    <Input
                      type="number"
                      value={chequeNum}
                      placeholder="Enter Date"
                      onChange={(e) => setChequeNum(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  disabled={!date || !chequeNum}
                  onClick={() => {
                    setChequeList({ issueDate: date, chequeNo: chequeNum });
                  }}
                >
                  add cheque
                </button>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>SN</th>
                      <th>Issue Date</th>
                      <th>Cheque No</th>
                      <th>statue</th>
                    </tr>
                  </thead>
                  {cheque.map((arg, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{arg.issueDate}</td>
                          <td>{arg.chequeNo}</td>
                          <td>Pending/paid</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
              </Form>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LeaseEntry;
