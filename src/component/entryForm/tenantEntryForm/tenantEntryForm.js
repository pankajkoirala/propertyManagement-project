import React, { useState } from "react";
import "./tenantEntryForm.css";
import moment from "moment";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import {
  TenantEntryFormValidation,
  TenantEntryCompanyFormValidation,
} from "../../../utility/validation/tenantEntryFormValidation.js";
import PoopUp from "./../../../shared/popup";
import "../styleform/styleform.css";
import { notification } from "../../../shared/notification";

const TenantEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props.selectedTenantone?.files_list || []
  );
  const [tenentType, setTenentType] = useState("Person");

  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };

  let initialvalue = {
    tenant_GovIdNo: props.selectedTenantone?.tenant_GovIdNo || "",
    area: props.selectedTenantone?.area || "",
    city: props.selectedTenantone?.city || "",
    country: props.selectedTenantone?.country || "U.A.E",
    tenant_phoneNo: props.selectedTenantone?.tenant_phoneNo || "",
    remark: props.selectedTenantone?.remark || "",
    tenant_Name: props.selectedTenantone?.tenant_Name || "",
    tenant_email: props.selectedTenantone?.tenant_email || "",
    DateOfBirth_registrationDate:
      moment(props.selectedTenantone?.DateOfBirth_registrationDate).format(
        "YYYY-MM-DD"
      ) || "",
    files_list: [],
    fileName: "",
    file: "",
    TenentType: props?.selectedTenantone?.TenentType || "",
    tenant_GovIdNo_expireDate:
      moment(props?.selectedTenantone?.tenant_GovIdNo_expireDate).format(
        "YYYY-MM-DD"
      ) || "",
    tenant_passport_expireDate:
      moment(props?.selectedTenantone?.tenant_passport_expireDate).format(
        "YYYY-MM-DD"
      ) || "",
    tenant_passportNo: props?.selectedTenantone?.tenant_passportNo || "",

    tenant_companyName: props?.selectedTenantone?.tenant_companyName || "",
    tenant_companyAuthorizePerson:
      props?.selectedTenantone?.tenant_companyAuthorizePerson || "",
    tenant_companyIssuingDate:
      moment(props?.selectedTenantone?.tenant_companyIssuingDate).format(
        "YYYY-MM-DD"
      ) || "",
    tenant_companyExpireDate:
      moment(props?.selectedTenantone?.tenant_companyExpireDate).format(
        "YYYY-MM-DD"
      ) || "",
    tenant_companyAuthorizePersonDesignation:
      props?.selectedTenantone?.tenant_companyAuthorizePersonDesignation || "",
    tenant_companyTradeLicenseNo:
      props?.selectedTenantone?.tenant_companyTradeLicenseNo || "",
    tenant_companyTradeLicenseIssuingAuthority:
      props?.selectedTenantone?.tenant_companyTradeLicenseIssuingAuthority ||
      "",
  };
  return (
    <div className="form-page">
      <div className="">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              setLoadingState(true);
              typeof allFile[0].file === "string"
                ? (values.files_list = JSON.stringify(allFile))
                : (values.files_list = "");
              props.selectedTenantone
                ? props.tenentUpdate(
                  values,
                  props?.selectedTenantone?._id,
                  allFile
                )
                : props.tenantData(values, allFile);
            }}
            validationSchema={
              (props?.selectedTenantone
                ? props?.selectedTenantone?.TenentType
                : tenentType) === "Person"
                ? TenantEntryFormValidation
                : TenantEntryCompanyFormValidation
            }
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
                      <h3 className="form-head">Tenant Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row ">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">
                          Tenent Type
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
                          name="TenentType"
                          id="exampleSelect"
                          placeholder="Select"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onClick={(e) => setTenentType(e.target.value)}
                          value={values.TenentType}
                        >
                          <option value="">Select One </option>
                          <option value="Person">Person</option>
                          <option value="Company">Company</option>
                        </Input>
                        {touched.TenentType && errors.TenentType && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.TenentType}
                          </span>
                        )}
                      </div>
                      {values.TenentType === "Company" ? (
                        <>
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
                              value={values.tenant_companyName}
                              name="tenant_companyName"
                              placeholder="Company Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyName &&
                              errors.tenant_companyName && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.tenant_companyName}
                                </span>
                              )}
                          </div>
                          <div className="mt-2 col-md-4">
                            <Label for="exampleName">
                              Trade License No
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
                              value={values.tenant_companyTradeLicenseNo}
                              name="tenant_companyTradeLicenseNo"
                              placeholder="Trade License No"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyTradeLicenseNo &&
                              errors.tenant_companyTradeLicenseNo && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.tenant_companyTradeLicenseNo}
                                </span>
                              )}
                          </div>
                          <div className="mt-2 col-md-4">
                            <Label for="exampleName">
                              Issuing Authority
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
                              value={
                                values.tenant_companyTradeLicenseIssuingAuthority
                              }
                              name="tenant_companyTradeLicenseIssuingAuthority"
                              placeholder="Issuing Authority"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyTradeLicenseIssuingAuthority &&
                              errors.tenant_companyTradeLicenseIssuingAuthority && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {
                                    errors.tenant_companyTradeLicenseIssuingAuthority
                                  }
                                </span>
                              )}
                          </div>
                          <div className="col-md-4">
                            <Label for="exampleName">
                              Issuing Date
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
                              type="Date"
                              value={values.tenant_companyIssuingDate}
                              name="tenant_companyIssuingDate"
                              placeholder="Issuing Date"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyIssuingDate &&
                              errors.tenant_companyIssuingDate && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.tenant_companyIssuingDate}
                                </span>
                              )}
                          </div>
                          <div className="col-md-4">
                            <Label for="exampleName">
                              Expire Date
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
                              type="Date"
                              value={values.tenant_companyExpireDate}
                              name="tenant_companyExpireDate"
                              placeholder="Expire Date"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyExpireDate &&
                              errors.tenant_companyExpireDate && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.tenant_companyExpireDate}
                                </span>
                              )}
                          </div>
                          <div className="mt-2 col-md-4">
                            <Label for="exampleName">
                              Authorized person Name
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
                              value={values.tenant_companyAuthorizePerson}
                              name="tenant_companyAuthorizePerson"
                              placeholder="Authorized Person Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyAuthorizePerson &&
                              errors.tenant_companyAuthorizePerson && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.tenant_companyAuthorizePerson}
                                </span>
                              )}
                          </div>
                          <div className="mt-2 col-md-4">
                            <Label for="exampleName">
                              Designation
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
                              value={
                                values.tenant_companyAuthorizePersonDesignation
                              }
                              name="tenant_companyAuthorizePersonDesignation"
                              placeholder="Designation"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.tenant_companyAuthorizePersonDesignation &&
                              errors.tenant_companyAuthorizePersonDesignation && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {
                                    errors.tenant_companyAuthorizePersonDesignation
                                  }
                                </span>
                              )}
                          </div>
                        </>
                      ) : (
                        <div className="mt-2 col-md-4">
                          <Label for="exampleName">
                            Tenant Name
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
                            value={values.tenant_Name}
                            name="tenant_Name"
                            placeholder="Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.tenant_Name && errors.tenant_Name && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.tenant_Name}
                            </span>
                          )}
                        </div>
                      )}
                      <div className=" mt-2 col-md-4">
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
                          value={values.tenant_email}
                          name="tenant_email"
                          placeholder=" Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_email && errors.tenant_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_email}
                          </span>
                        )}
                      </div>

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
                          placeholder="Area"
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

                    {values.TenentType === "Person" && (
                      <div className="row">
                        <div className="col-md-6">
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
                            value={values.tenant_phoneNo}
                            name="tenant_phoneNo"
                            placeholder="Enter your Contact Number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.tenant_phoneNo && errors.tenant_phoneNo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.tenant_phoneNo}
                            </span>
                          )}
                        </div>
                        <div className="col-md-6">
                          <Label for="exampleName">
                            Date of Birth
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
                            value={values.DateOfBirth_registrationDate}
                            name="DateOfBirth_registrationDate"
                            placeholder="Enter DOB"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.DateOfBirth_registrationDate &&
                            errors.DateOfBirth_registrationDate && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.DateOfBirth_registrationDate}
                              </span>
                            )}
                        </div>
                      </div>
                    )}
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Emirates ID Number</Label>
                        <Input
                          type="text"
                          value={values.tenant_GovIdNo}
                          name="tenant_GovIdNo"
                          placeholder="Emirates ID Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_GovIdNo && errors.tenant_GovIdNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_GovIdNo}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">Emirates ID ExpireDate</Label>
                        <Input
                          type="Date"
                          value={values.tenant_GovIdNo_expireDate}
                          name="tenant_GovIdNo_expireDate"
                          placeholder="Emirates ID Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_GovIdNo_expireDate &&
                          errors.tenant_GovIdNo_expireDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.tenant_GovIdNo_expireDate}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Passport No</Label>
                        <Input
                          type="text"
                          value={values.tenant_passportNo}
                          name="tenant_passportNo"
                          placeholder="Passport No"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_passportNo && errors.tenant_passportNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_passportNo}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">Passport ExpireDate</Label>
                        <Input
                          type="date"
                          value={values.tenant_passport_expireDate}
                          name="tenant_passport_expireDate"
                          placeholder="Passport expire date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_passport_expireDate &&
                          errors.tenant_passport_expireDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.tenant_passport_expireDate}
                            </span>
                          )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">Remarks</Label>
                        <Input
                          type="text"
                          value={values.remark}
                          name="remark"
                          placeholder="Remarks"
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
                        {values.files_list.length <= 0
                          ? touched.files_list &&
                          errors.files_list && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.files_list}
                            </span>
                          )
                          : ""}
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
                              let filterData = allFile?.find(
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
                  </div>

                  {props?.selectedTenantone?.files_list ||
                    allFile?.length !== 0 ? (
                    <Table>
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th> Name</th>
                          <th>Image</th>
                          <th>
                            <button
                              type="button"
                              style={
                                props?.selectedTenantone
                                  ? { display: "inline" }
                                  : { display: "none" }
                              }
                              onClick={() => setAllFile([])}
                            >
                              deleteAll
                            </button>
                          </th>
                        </tr>
                      </thead>
                      {allFile?.map((arg, index) => {
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
                                  type="button"
                                  className="btn btn-primary"
                                  style={
                                    props?.selectedTenantone
                                      ? { display: "none" }
                                      : { display: "inline" }
                                  }
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
                    className="btn btn-primary success col-md-2 mt-5"
                    type="button"
                    disabled={allFile.length === 0 ? true : false}
                    onClick={() => setShowPopUp(true)}
                  >
                    Add
                  </button>
                  <PoopUp
                    loadingIconState={loadingState}
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.selectedTenantone ? "Update" : "Create"}
                    message={
                      props.selectedTenantone
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

export default TenantEntry;
