import React, { useState } from "react";
import "./lease.css";
import { FormGroup, Label, Input, Form, Table, Col } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import LeaseEntryFormValidation from "../../../utility/validation/leaseEntryFormValidation.js";
import RegexConponent from "../../../shared/regexComponent";
import PoopUp from "./../../../shared/popup";

const LeaseEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  const [commerceDate, setCommerceDate] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [paymentTime, setpaymentTime] = useState("");

  let initialvalue = {
    late_feeType: props?.lease?.late_feeType || "",
    frequency: props?.lease?.frequency || "",
    lease_enterDate:
      moment(props?.lease?.lease_enterDate).format("YYYY-MM-DD") || "",
    tenants: props?.lease?.tenants?._id || "",
    property: props?.lease?.property?._id || "",
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

  console.log(paymentTime);

  //difference in comerceDate and expirationDate
  let difference = moment(props?.lease?.expirationDate || expireDate).diff(
    moment(props?.lease?.commenceDate || commerceDate),
    "days"
  ); // resul
  let noOfPayment =
    Math.round((difference / (paymentTime ? paymentTime : 1)) * 100) / 100;

  let days = 0;
  let addedDays = [];

  for (let index = 0; index < noOfPayment.toFixed(0); index++) {
    addedDays.push((days = days + paymentTime));
  }

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
                <div className="col-md-6">
                  <Label for="exampleSelect">Tenants(s)</Label>

                  <RegexConponent
                    {...props}
                    setFieldValue={setFieldValue}
                    options={props?.redux_tenantData?.tenant?.map((tenent) => {
                      return {
                        name:
                          tenent.company_Name +
                          "-" +
                          tenent.tenant_Name +
                          "-" +
                          tenent.TenantId,
                        id: tenent._id,
                      };
                    })}
                    name={"tenants"}
                  />

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
                    options={props.unReserveProperty.map((property) => {
                      return {
                        name:
                          property.property_type + "-" + property.referenceNO,
                        id: property._id,
                      };
                    })}
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
              <div className="row mt-4">
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
                    value={
                      (setCommerceDate(values.commenceDate),
                      values.commenceDate)
                    }
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
                    value={
                      (setExpireDate(values.expirationDate),
                      values.expirationDate)
                    }
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
                    onChange={(e) =>
                      setFieldValue("frequency", setpaymentTime(e.target.value))
                    }
                    onBlur={handleBlur}
                  >
                    <option value=""> </option>
                    <option value="7">Weekly</option>
                    <option value="14">Bi-Weekly</option>
                    <option value="30">Monthly</option>
                    <option value="90">Quartely</option>
                    <option value="365">Yearly</option>
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
                  type="button"
                  onClick={() => setShowPopUp(true)}
                >
                  Save
                </button>
                <PoopUp
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={handleSubmit}
                  buttonName={props.lease ? "Update" : "Create"}
                  message={
                    props.lease
                      ? "are you sure want to update"
                      : "are you sure want to create"
                  }
                />
              </div>
            </FormGroup>
            <Table striped bordered hover size="sm">
              {commerceDate && expireDate && paymentTime ? (
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>date of payment</th>
                    <th>remark</th>
                  </tr>
                </thead>
              ) : (
                ""
              )}

              {commerceDate && expireDate && paymentTime
                ? addedDays.map((arg, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {moment().add(arg, "days").format("DD-MM-YYYY")}
                          </td>
                          <td
                            style={{
                              height: "10px",
                              width: "10px",
                              backgroundColor: "red",
                              borderRadius: "50%",
                            }}
                          ></td>
                        </tr>
                      </tbody>
                    );
                  })
                : ""}
            </Table>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LeaseEntry;
