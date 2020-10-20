import React from "react";
import "./tenantEntryForm.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { TenantEntryFormValidation } from "../../../utility/validation/tenantEntryFormValidation.js";

const TenantEntry = (props) => {
  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={{
              street: "",
              city: "",
              provience: "",
              country: "",
              ZipCode: "",
              tenant_phoneNo: "",
              tenant_firstName: "",
              tenant_middleName: "",
              tenant_lastName: "",
              tenant_email: "",
              tenant_GovIdNo: "",
              tenant_DrivingLicenceNo: "",
              tenant_DOB: "",
              tenant_photo: "",
              tenant_EId_photo: "",
              tenant_TradeLicense_photo: "",
              tenant_IdentityLetter_photo: "",
              tenant_SK_Properties_photo: "",
              tenant_POA_photo: "",
            }}
            onSubmit={(values) => {
              props.tenantData(values)
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
                    <p className="text-black font-weight-bold">
                      {" "}
                      <h3>Tenant Entry Form </h3>
                    </p>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">First Name</Label>
                        <Input
                          type="text"
                          value={values.tenant_firstName}
                          name="tenant_firstName"
                          placeholder="Firs tName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_firstName && errors.tenant_firstName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_firstName}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Middle Name</Label>
                        <Input
                          type="text"
                          value={values.tenant_middleName}
                          name="tenant_middleName"
                          placeholder="Middle Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_middleName && errors.tenant_middleName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_middleName}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Last Name</Label>
                        <Input
                          type="text"
                          value={values.tenant_lastName}
                          name="tenant_lastName"
                          placeholder="Last Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_lastName && errors.tenant_lastName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_lastName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Street</Label>
                        <Input
                          type="text"
                          value={values.street}
                          name="street"
                          placeholder="Street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.street && errors?.street && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.street}
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
                        <Label for="exampleName">Provience</Label>
                        <Input
                          type="text"
                          value={values.provience}
                          name="provience"
                          placeholder="Provience Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.provience && errors?.provience && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.provience}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleSelect">Zip Code</Label>
                        <Input
                          type="text"
                          name="ZipCode"
                          value={values.ZipCode}
                          placeholder="Zip Code"
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.ZipCode && errors?.ZipCode && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.ZipCode}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
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
                        <Label for="exampleName">Date of Birth</Label>
                        <Input
                          type="date"
                          value={values.tenant_DOB}
                          name="tenant_DOB"
                          placeholder="Enter DOB"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.tenant_DOB && errors.tenant_DOB && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_DOB}
                          </span>
                        )}
                      </div>
                      </div>

                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Government Issue Card Number</Label>
                        <Input
                          type="string"
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
                        {touched.tenant_DrivingLicenceNo && errors.tenant_DrivingLicenceNo && (
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

                        {touched.tenant_EId_photo && values.tenant_EId_photo && (
                          <img
                            src={URL.createObjectURL(values.tenant_EId_photo)}
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
                            src={URL.createObjectURL(values.tenant_photo)}
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

                        {touched.tenant_TradeLicense_photo && values.tenant_TradeLicense_photo && (
                          <img
                            src={URL.createObjectURL(values.tenant_TradeLicense_photo)}
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

                        {touched.tenant_IdentityLetter_photo && values.tenant_IdentityLetter_photo && (
                          <img
                            src={URL.createObjectURL(values.tenant_IdentityLetter_photo)}
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

                        {touched.tenant_SK_Properties_photo && values.tenant_SK_Properties_photo && (
                          <img
                            src={URL.createObjectURL(values.tenant_SK_Properties_photo)}
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

                        {touched.tenant_POA_photo && values.tenant_POA_photo && (
                          <img
                            src={URL.createObjectURL(values.tenant_POA_photo)}
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
