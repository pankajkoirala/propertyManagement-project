import React from "react";
import "./tenantEntryForm.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import {Link } from "react-router-dom";
import { Formik } from "formik";
import { TenantEntryFormValidation } from "../../../utility/validation/tenantEntryFormValidation.js";

const TenantEntry = () => {
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

              tenant_photo: "",
              tenant_phoneNo: "",
              tenant_firstName: "",
              tenant_middleName: "",
              tenant_lastName: "",
              tenant_email: "",
              assignedProperty:"",
              
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={TenantEntryFormValidation}
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
                          placeholder="Enter your firstName"
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
                          placeholder="Enter your middleName"
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
                          placeholder="Enter your lastName"
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
                          placeholder="Enter your Street"
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
                          placeholder="Enter your City"
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
                          placeholder="Enter Provience Name"
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
                        <Label for="exampleSelect">ZipCode</Label>
                        <Input
                          type="text"
                          name="ZipCode"
                          value={values.ZipCode}
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
                      <div className="row ">
                      <div className="col-md-4">
                        <Label for="exampleName">Assigned Property</Label>
                        <Input
                          type="text"
                          value={values.assignedProperty}
                          name="assignedProperty"
                          placeholder="Assigned Propery ID"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.assignedProperty && errors.assignedProperty && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.assignedProperty}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">From </Label>
                        <Input
                          type="date"
                          value={values.assignedProperty}
                          name="assignedProperty"
                          placeholder="Property Assigned"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.assignedProperty && errors.assignedProperty && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.assignedProperty}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">To</Label>
                        <Input
                          type="date"
                          value={values.assignedProperty}
                          name="assignedProperty"
                          placeholder="Property Assigned ID"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.assignedProperty && errors.assignedProperty && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.assignedProperty}
                          </span>
                        )}
                      </div>
                      </div>

                    
                     <div className="row"> 
                     <div className="col-md-4">
                                    <Label>Upload Government Issued ID</Label>
                                    <Input
                                      type="file"
                                      name="tenant_photo"
                                      accept="image/*"
                                      onChange={(event) => {
                                        setFieldValue("tenant_photo", event.currentTarget.files[0]);
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


                                  <div className="col-md-4">
                                    <Label>Upload tenant Photo</Label>
                                    <Input
                                      type="file"
                                      name="tenant_photo"
                                      accept="image/*"
                                      onChange={(event) => {
                                        setFieldValue("tenant_photo", event.currentTarget.files[0]);
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

                                  <div classsName="col-md-4 m-4">
                                        <button
                                      className="success "
                                      type="submit"
                                    >
                                <Link to="/chequeentry"> Click to Add Cheque Records </Link>
                              
                              </button>
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
