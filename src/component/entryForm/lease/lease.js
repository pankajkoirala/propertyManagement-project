import React, { useState, useEffect } from "react";
import "./lease.css";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import LeaseEntryFormValidation from "../../../utility/validation/leaseEntryFormValidation.js";
import RegexConponent from "../../../shared/regexComponent";

const LeaseEntry = (props) => {
  const [suggestion, setSuggestion] = useState([]);
  const [name, setName] = useState("");

  //autocomplete
  let onTextChange = (e) => {
    let suggestions = [];

    const regex = new RegExp(`^${e}`, "gi");
    e == ""
      ? (suggestions = [])
      : (suggestions = props?.redux_tenantData?.tenant?.filter((v) =>
          regex.test(v.tenant_firstName || v.TenantId)
        ));
    console.log("hello", suggestions);
    setSuggestion(suggestions);
  };

  let initialvalue = {
    chequeList: props?.lease?.chequeList.map((arg) => arg._id) || [],
    late_feeType: props?.lease?.late_feeType || "",
    frequency: props?.lease?.frequency || "",
    lease_enterDate:
      moment(props?.lease?.lease_enterDate).format("YYYY-MM-DD") || "",
    tenants: props?.lease?.tenants._id || "",
    property: props?.lease?.property._id || "",
    lease_Term: props?.lease?.lease_Term || "",
    commenceDate: moment(props?.lease?.commenceDate).format("YYYY-MM-DD") || "",
    expirationDate:
      moment(props?.lease?.expirationDate).format("YYYY-MM-DD") || "",
    rentAmount: props?.lease?.rentAmount || "",
    firstDueDate: moment(props?.lease?.firstDueDate).format("YYYY-MM-DD") || "",
    gracePeriod: props?.lease?.gracePeriod || "",
    lateFeeAmount: props?.lease?.lateFeeAmount || "",
    securityDeposite: props?.lease?.securityDeposite || "",
    securityfirstDueDate:
      moment(props?.lease?.securityfirstDueDate).format("YYYY-MM-DD") || "",

    photo: props?.lease?.photo || "",
  };

  return (
    <div className="leasediv">
      <div className="row">
        <div className="col-12 text-center">
          <h3>Lease Term Detail </h3>
        </div>
        <br />
      </div>
      <Formik
        initialValues={initialvalue}
        onSubmit={(values) => {
          values.chequeList = JSON.stringify(values.chequeList);

          console.log(values);
          props?.lease
            ? props.LeaseUpdate(values, props.lease._id)
            : props.leaseData(values);
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
                <div className="col-12 mt-2 ml-2 mr-2">General Information</div>
                <div className="col-md-4">
                  <Label for="exampleName">Lease Entered On</Label>
                  <Input
                    type="date"
                    disabled={props.lease ? true : false}
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
                    autoComplete=""
                    type="text"
                    name="tenants"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    value={name}
                    onChange={(e) => {
                      return (
                        setName(e.target.value), onTextChange(e.target.value)
                      );
                    }}
                  >
                    <option value="">select one </option>
                  </Input>
                  {suggestion.length !== 0 ? (
                    <ul>
                      {suggestion.map((item, index) => (
                        <option
                          className="tanentOption"
                          onClick={() => {
                            values.tenants = item._id;
                            setName(item.tenant_firstName);
                            setSuggestion([]);
                          }}
                          value={item._id}
                          key={index}
                        >
                          {item.TenantId} - {item.tenant_firstName}
                        </option>
                      ))}
                    </ul>
                  ) : null}

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

                  <RegexConponent
                    setFieldValue={setFieldValue}
                    filteringData={props.unReserveProperty}
                    searchingData={"property_type"}
                    name={"property"}
                  />
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
                      src={
                        typeof values.photo === "string"
                          ? values.photo
                          : URL.createObjectURL(values.photo)
                      }
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

              <div className="col-md-5">
                <Label for="exampleSelect">cheque (s)</Label>
                <Input
                  type="select"
                  name="chequeList"
                  id="exampleSelect"
                  placeholder="Select Status of Cheque"
                  onChange={(e) =>
                    setFieldValue("chequeList", [
                      ...values.chequeList,
                      e.target.value,
                    ])
                  }
                  onBlur={handleBlur}
                >
                  <option value="">select one </option>
                  {props?.UnchequeUsed?.map((arg, index) => {
                    return (
                      <option key={index} value={arg?._id}>
                        {arg?.cheque_number}{" "}
                      </option>
                    );
                  })}
                </Input>

                {!props.lease
                  ? values?.chequeList?.map((a) => {
                      let house = props?.redux_ChequeData?.cheque?.find(
                        (b) => b._id === a
                      );
                      return <div>{house?.cheque_number}</div>;
                    })
                  : values?.chequeList?.map((arg, index) => {
                      return <h1 key={index}>{arg?.cheque_number}</h1>;
                    })}
                {touched.chequeList && errors.chequeList && (
                  <span
                    className="text-danger col-md-12 text-left mb-2"
                    style={{ fontSize: 12 }}
                  >
                    {errors.chequeList}
                  </span>
                )}
              </div>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LeaseEntry;
