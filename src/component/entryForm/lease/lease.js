import React, { useState } from "react";
import "./lease.css";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import { leaseEntryFormValidation } from "../../../utility/validation/leaseEntryFormValidation";
import RegexConponent from "../../../shared/regexComponent";
import PoopUp from "./../../../shared/popup";
import { notification } from "../../../shared/notification";

const LeaseEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
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
    totalAmount: props?.lease?.totalAmount || "",
    rentAmount: props?.lease?.rentAmount || "",
    VAT_Amount: props?.lease?.VAT_Amount || "",
    securityDeposite: props?.lease?.securityDeposite || "",
    remark: props?.lease?.remark || "",

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

  return (
    <div className="form-group m-5 p-4">
      <Formik
        initialValues={initialvalue}
        onSubmit={(values) => {
          setLoadingState(true);
          typeof allFile[0].file === "string"
            ? (values.files_list = JSON.stringify(allFile))
            : (values.files_list = "");
          props?.lease
            ? props.LeaseUpdate(values, props.lease._id, allFile)
            : props.leaseData(values, allFile);
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
                <div className="col-12 text-center">
                  <h3 className="form-head">Lease Term Detail </h3>
                </div>
                <br />
              </div>
              <div className="row">
                <h4 className="col-12 mt-2 ml-2 mr-2 form-head">
                  General Information
                </h4>
              </div>
              <div className="row ">
                <div className="col-md-4">
                  <Label for="exampleName">
                    Lease Entered On
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
                    disabled={props.lease ? true : false}
                    value={values.lease_enterDate}
                    name="lease_enterDate"
                    placeholder="YYYY-MM-DD"
                    dateFormat="YYYY-MM-DD"
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
                  <Label for="exampleSelect">
                    Tenants(s)
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
                  <RegexConponent
                    {...props}
                    editSelectedName={props?.lease?.tenants?.tenant_Name}
                    setFieldValue={setFieldValue}
                    options={props?.redux_tenantData?.tenant?.map((tenent) => {

                      return {
                        name: tenent.tenant_Name || tenent.tenant_companyName,
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
                  <Label for="exampleSelect">
                    Property
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
                  <RegexConponent
                    setFieldValue={setFieldValue}
                    editSelectedName={props?.lease?.property?.property_name}
                    options={props.unReserveProperty.map((property) => {
                      return {
                        name:
                          (property?.property_name || '') +
                          "-" +
                          ('PU No-' + property?.unitNo),
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
                  <Label for="exampleSelect">
                    Lease Terms
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
                    name="lease_Term"
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
                  <Label for="exampleSelect">
                    Contract Commencement Date
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
                    name="commenceDate"
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
                  <Label for="exampleName">
                    Expiration Date
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
                  <Label for="exampleSelect">
                    Total Amount
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
                    type="number"
                    name="totalAmount"
                    placeholder="Total Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.totalAmount}
                  ></Input>
                  {touched.totalAmount && errors.totalAmount && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.totalAmount}
                    </span>
                  )}
                </div>
                <div className="col-md-4">
                  <Label for="exampleSelect">
                    Rent Amount
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
                    type="number"
                    name="rentAmount"
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
                  <Label for="exampleSelect">
                    VAT Amount
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
                    type="number"
                    name="VAT_Amount"
                    placeholder="VAT Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.VAT_Amount}
                  ></Input>
                  {touched.VAT_Amount && errors.VAT_Amount && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.VAT_Amount}
                    </span>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <Label for="exampleSelect">
                    Security Deposit
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
                    type="number"
                    name="securityDeposite"
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
                <div className="col-4">
                  <Label for="exampleName">
                    TERMS OF THE CONTRACT
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
                    name="frequency"
                    placeholder="ERMS OF THE CONTRACT"
                    value={(setpaymentTime(values.frequency), values.frequency)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""> select one</option>
                    <option value={30}> Monthly</option>
                    <option value={90}>Quartely</option>
                    <option value={181}>Semi Annualy</option>
                    <option value={365}>Yearly</option>
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
                            if (event.currentTarget.files[0].size > 1048576) {
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
                <Table>
                  {props?.lease?.commenceDate ||
                    (commerceDate && props?.lease?.expirationDate) ||
                    (expireDate && props?.lease?.frequency) ||
                    paymentTime ? (
                    <thead>
                      <tr>
                        <th>SN</th>
                        <th>date of payment</th>
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
                          </tr>
                        </tbody>
                      );
                    })
                    : ""}
                </Table>
              </div>
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
                  loadingIconState={loadingState}
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={handleSubmit}
                  buttonName={props.lease ? "Update" : "Create"}
                  message={
                    props.lease
                      ? "Are you sure you want to Update this Form"
                      : "Are you sure you want to create this Form"
                  }
                />
              </div>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LeaseEntry;
