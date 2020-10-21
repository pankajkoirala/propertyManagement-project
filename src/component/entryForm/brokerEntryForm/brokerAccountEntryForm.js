import React from "react";
import "./brokerAccount.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const BrokerComponent = (props) => {
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={{
              street: "",
              city: "",
              provience: "",
              country: "",
              ZipCode: "",
              broker_photo: "",
              broker_phoneNo: "",
              broker_RegistrationNumber: "",
              broker_companyName: "",
              broker_companyRegisterDate: "",
              broker_email: "",
            }}
            onSubmit={(values) => {
              props.brokerData(values)
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
                <FormGroup className="p-5 bg-warning m-2">
                  <div className="text-center">
                    <p className="text-black font-weight-bold">
                      {" "}
                      <h3>Broker Entry Form </h3>
                    </p>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    

                    <div className="row">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.broker_companyName}
                          name="broker_companyName"
                          placeholder="Company Name"
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

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Registeration Date</Label>
                        <Input
                          type="date"
                          value={values.broker_companyRegisterDate}
                          name="broker_companyRegisterDate"
                          placeholder="Registeration Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.broker_companyRegisterDate && errors.broker_companyRegisterDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.broker_companyRegisterDate}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Registration Number</Label>
                        <Input
                          type="text"
                          value={values.broker_RegistrationNumber}
                          name="broker_RegistrationNumber"
                          placeholder="Registration Number"
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

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">street</Label>
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

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.broker_phoneNo}
                          name="broker_phoneNo"
                          placeholder="Enter your Contact Number"
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
                    </div>
                    <div className="row">
                     

                      <div className="col-md-6 text-left mb-2 mt-4">
                  <Label className="float-left">Upload Agrement Copy</Label>
                  <Input
                    type="file"
                    name="broker_photo"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("broker_photo", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.broker_photo && values.broker_photo && (
                    <img
                      src={URL.createObjectURL(values.broker_photo)}
                      alt="no picture"
                      height="20"
                    />
                  )}
                </div>
                    </div>
                  </div>
                  <button
                    className="success m-4"
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

export default BrokerComponent;
