import React from "react";
import "./tenantEntryForm.css";
import moment from "moment";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import { TenantEntryFormValidation } from "../../../utility/validation/tenantEntryFormValidation.js";

const TenantEntry = (props) => {
  console.log(props.selectedTenantone);
  let initialvalue = {
    tenant_GovIdNo: props.selectedTenantone?.tenant_GovIdNo || "",
    tenant_DrivingLicenceNo:
      props.selectedTenantone?.tenant_DrivingLicenceNo || "",
    area: props.selectedTenantone?.area || "",
    city: props.selectedTenantone?.city || "",
    country: props.selectedTenantone?.country || "",
    tenant_phoneNo: props.selectedTenantone?.tenant_phoneNo || "",
    tenant_Name: props.selectedTenantone?.tenant_Name || "",
    company_Name: props.selectedTenantone?.company_Name || "",
    tenant_email: props.selectedTenantone?.tenant_email || "",
    DateOfBirth_registrationDate:
      moment(props.selectedTenantone?.DateOfBirth_registrationDate).format(
        "YYYY-MM-DD"
      ) || "",
    tenant_photo: props.selectedTenantone?.tenant_photo || "",
    tenant_EId_photo: props.selectedTenantone?.tenant_EId_photo || "",
    tenant_TradeLicense_photo:
      props.selectedTenantone?.tenant_TradeLicense_photo || "",
    tenant_IdentityLetter_photo:
      props.selectedTenantone?.tenant_IdentityLetter_photo || "",
    tenant_SK_Properties_photo:
      props.selectedTenantone?.tenant_SK_Properties_photo || "",
    tenant_POA_photo: props.selectedTenantone?.tenant_POA_photo || "",
  };
  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              props.selectedTenantone
                ? props.tenentUpdate(values, props?.selectedTenantone?._id)
                : props.tenantData(values);
              console.log(values);
            }}
            // validationSchema={TenantEntryFormValidation}
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
              <Form className="d-flex justify-content-center">
                <FormGroup className="fulldiv">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>Tenant Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-6">
                        <Label for="exampleName">
                          Tenant Name / Authorize Person Name
                        </Label>
                        <Input
                          type="text"
                          value={values.tenant_Name}
                          name="tenant_Name"
                          placeholder="Tenent Name/Authorize Person Name"
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

                      <div className="mt-4 col-md-6">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.company_Name}
                          name="company_Name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.company_Name && errors.company_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.company_Name}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Area</Label>
                        <Input
                          type="text"
                          value={values.area}
                          name="area"
                          placeholder="Street"
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
                          placeholder="City"
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
                          placeholder="Enter the name of Country"
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
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.tenant_email}
                          name="tenant_email"
                          placeholder="Enter Email"
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

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
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
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">
                          Date of Birth / Company Registration Date
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

                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">
                          Government Issue Card Number
                        </Label>
                        <Input
                          type="number"
                          value={values.tenant_GovIdNo}
                          name="tenant_GovIdNo"
                          placeholder="Enter Government Id Number"
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
                        <Label for="exampleName">Driving Licence Number</Label>
                        <Input
                          type="number"
                          value={values.tenant_DrivingLicenceNo}
                          name="tenant_DrivingLicenceNo"
                          placeholder="Enter your Driving Licence Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_DrivingLicenceNo &&
                          errors.tenant_DrivingLicenceNo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.tenant_DrivingLicenceNo}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label>Upload tenant EID</Label>
                        <Input
                          type="file"
                          name="tenant_EId_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "tenant_EId_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.tenant_EId_photo &&
                          values.tenant_EId_photo && (
                            <img
                              src={
                                typeof values?.tenant_EId_photo === "string"
                                  ? values.tenant_EId_photo
                                  : URL.createObjectURL(
                                      values?.tenant_EId_photo
                                    )
                              }
                              alt="no pic"
                              height="200"
                            />
                          )}
                      </div>

                      <div className="col-md-4">
                        <Label>Upload tenant Photo</Label>
                        <Input
                          type="file"
                          name="tenant_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "tenant_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        {touched.tenant_photo && values.tenant_photo && (
                          <img
                            src={
                              typeof values?.tenant_photo === "string"
                                ? values?.tenant_photo
                                : URL.createObjectURL(values?.tenant_photo)
                            }
                            alt="no pic"
                            height="200"
                          />
                        )}
                      </div>
                      {/* hello */}

                      <div className="col-md-4">
                        <Label>Upload Trade License photo</Label>
                        <Input
                          type="file"
                          name="tenant_TradeLicense_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "tenant_TradeLicense_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.tenant_TradeLicense_photo &&
                          values.tenant_TradeLicense_photo && (
                            <img
                              src={
                                typeof values?.tenant_TradeLicense_photo ===
                                "string"
                                  ? values?.tenant_TradeLicense_photo
                                  : URL.createObjectURL(
                                      values?.tenant_TradeLicense_photo
                                    )
                              }
                              alt="no pic"
                              height="200"
                            />
                          )}
                      </div>
                      <div className="col-md-4">
                        <Label>tenant IdentityLetter photo</Label>
                        <Input
                          type="file"
                          name="tenant_IdentityLetter_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "tenant_IdentityLetter_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.tenant_IdentityLetter_photo &&
                          values.tenant_IdentityLetter_photo && (
                            <img
                              src={
                                typeof values?.tenant_IdentityLetter_photo ===
                                "string"
                                  ? values?.tenant_IdentityLetter_photo
                                  : URL.createObjectURL(
                                      values?.tenant_IdentityLetter_photo
                                    )
                              }
                              alt="no pic"
                              height="200"
                            />
                          )}
                      </div>
                      <div className="col-md-4">
                        <Label>tenant_SK_Properties_photo</Label>
                        <Input
                          type="file"
                          name="tenant_SK_Properties_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "tenant_SK_Properties_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.tenant_SK_Properties_photo &&
                          values.tenant_SK_Properties_photo && (
                            <img
                              src={
                                typeof values?.tenant_SK_Properties_photo ===
                                "string"
                                  ? values?.tenant_SK_Properties_photo
                                  : URL.createObjectURL(
                                      values?.tenant_SK_Properties_photo
                                    )
                              }
                              alt="no pic"
                              height="200"
                            />
                          )}
                      </div>
                      <div className="col-md-4">
                        <Label>Upload tenant_POA_photo</Label>
                        <Input
                          type="file"
                          name="tenant_POA_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "tenant_POA_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.tenant_POA_photo &&
                          values.tenant_POA_photo && (
                            <img
                              src={
                                typeof values?.tenant_POA_photo === "string"
                                  ? values?.tenant_POA_photo
                                  : URL.createObjectURL(
                                      values?.tenant_POA_photo
                                    )
                              }
                              alt="no pic"
                              height="200"
                            />
                          )}
                      </div>
                    </div>
                  </div>
                  <button
                    className="success col-md-4 m-5"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Add
                  </button>
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
