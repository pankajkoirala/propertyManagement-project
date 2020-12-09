import React, { useState } from "react";
import "./lease.css";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import { leaseEntryFormValidation } from "../../../utility/validation/leaseEntryFormValidation";
import RegexConponent from "../../../shared/regexComponent";
import PoopUp from "./../../../shared/popup";

const LeaseEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [allFile, setAllFile] = useState(props?.lease?.files_list || []);
  const [commerceDate, setCommerceDate] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [paymentTime, setpaymentTime] = useState(0);

  let initialvalue = {
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
    securityDeposite: props?.lease?.securityDeposite || "",

    fileName: "",
    file: "",
    files_list: [],
  };

  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };

  //difference in comerceDate and expirationDate
  let difference = moment(props?.lease?.expirationDate || expireDate).diff(
    moment(props?.lease?.commenceDate || commerceDate),
    "days"
  ); // result
  let noOfPayment =
    Math.round(
      (difference /
        (paymentTime ? paymentTime : 1 || props?.lease?.frequency)) *
        100
    ) / 100;

  let addedDays = [];

  for (let index = 0; index < noOfPayment.toFixed(0); index++) {
    let days = paymentTime * index;
    addedDays.push(days);
  }
  console.log(
    "🚀 ~ file: lease.js ~ line 60 ~ LeaseEntry ~ addedDays",
    addedDays
  );

  return (
    <div className="form-group m-5 p-4">
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="form-head">Lease Term Detail </h3>
        </div>
        <br />
      </div>
      <Formik
        initialValues={initialvalue}
        onSubmit={(values) => {
          typeof allFile[0].file === "string"
            ? (values.files_list = JSON.stringify(allFile))
            : (values.files_list = "");
          props?.lease
            ? props.LeaseUpdate(values, props.lease._id, allFile)
            : props.leaseData(values, allFile);
          console.log(values);
        }}
        validationSchema={leaseEntryFormValidation}
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
              <div className="row">
                <h4 className="col-12 mt-2 ml-2 mr-2 form-head">
                  General Information
                </h4>
              </div>

              <div className="row ">
                <div className="col-md-4">
                  <Label for="exampleName">Lease Entered On</Label>
                  <Input
                    type="date"
                    disabled={props.lease ? true : false}
                    value={values.lease_enterDate}
                    name="lease_enterDate"
                    placeholder="Lease Entered Date"
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
                <div className="col-md-4">
                  <Label for="exampleSelect">Tenants(s)</Label>

                  <RegexConponent
                    {...props}
                    setFieldValue={setFieldValue}
                    options={props?.redux_tenantData?.tenant?.map((tenent) => {
                      return {
                        name: tenent.tenant_Name + "-" + tenent.TenantId,
                        id: tenent._id,
                      };
                    })}
                    name={"tenants"}
                  />
                  <div style={{ marginTop: "40px" }}>
                    {touched.tenants && errors.tenants && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tenants}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-md-4">
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

                  <div style={{ marginTop: "40px" }}>
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
              </div>

              <div className="row ">
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
                    <option value=""> Select One</option>
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
                    placeholder=" Commence Date"
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

                <div className="col-4">
                  <Label for="exampleName">Frequency</Label>
                  <Input
                    type="select"
                    name="frequency"
                    id="exampleSelect"
                    placeholder="Frequencyt"
                    value={(setpaymentTime(values.frequency), values.frequency)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""> select one</option>
                    <option value={31}>1</option>
                    <option value={59}>2</option>
                    <option value={90}>3</option>
                    <option value={120}>4</option>
                    <option value={151}>5</option>
                    <option value={181}>6</option>
                    <option value={212}>7</option>
                    <option value={243}>8</option>
                    <option value={273}>9</option>
                    <option value={304}>10</option>
                    <option value={334}>11</option>
                    <option value={365}>12</option>
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
                  <div className="col-md-4 text-left mb-2 mt-4">
                    <Label className="float-left">Upload Scan Copy</Label>
                    <Input
                      type="file"
                      alt="no file"
                      name="file"
                      accept="image/*"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                  <div className="col-md-4 text-left mb-2 mt-4">
                    <button
                      className="btn btn-secondary btn-sm"
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
                      <th>image</th>
                      <th>
                        <button
                          style={
                            props?.lease
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

                          <td className="font-weight-bold">{arg.fileName}</td>
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
                                props?.lease
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
              <div>
                <button
                  disabled={allFile.length === 0 ? true : false}
                  className="btn btn-primary Success col-3 mt-5"
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
              {props?.lease?.commenceDate ||
              (commerceDate && props?.lease?.expirationDate) ||
              (expireDate && props?.lease?.frequency) ||
              paymentTime ? (
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

              {props?.lease?.commenceDate ||
              (commerceDate && props?.lease?.expirationDate) ||
              (expireDate && props?.lease?.frequency) ||
              paymentTime
                ? addedDays.map((arg, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            {moment(commerceDate)
                              .add(arg, "days")
                              .format("DD-MM-YYYY")}
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
