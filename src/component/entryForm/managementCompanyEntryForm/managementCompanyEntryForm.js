import React from "react";
import "./managementCompany.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const ManagementCompanyComponent = (props) => {
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={{
              managementCompany_street: "",
              managementCompany_city: "",
              managementCompany_provience: "",
              managementCompany_country: "",
              managementCompany_ZipCode: "",
              managementCompany_photo: "",
              managementCompany_phoneNo: "",
              managementCompany_Registeration_Number: "",
              managementCompany_name: "",
              managementCompany_Registeration_Date: "",
              managementCompany_email: "",
              managementCompany_MobileNumber: "",
            }}
            onSubmit={(values) => {
              props.ManagementCompanyData(values)
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
                <FormGroup className="p-5 bg-light m-2">
                  <div className="text-center">
                    <p className="text-black font-weight-bold">
                      {" "}
                      <h3>Management Company Entry Form </h3>
                    </p>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}



                    <div className="row">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_name}
                          name="managementCompany_name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_name &&
                          errors.managementCompany_name && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_name}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Registeration Date</Label>
                        <Input
                          type="date"
                          value={values.managementCompany_Registeration_Date}
                          name="managementCompany_Registeration_Date"
                          placeholder="Registeration Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_Registeration_Date &&
                          errors.managementCompany_Registeration_Date && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_Registeration_Date}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Registration Number</Label>
                        <Input
                          type="number"
                          value={values.managementCompany_Registeration_Number}
                          name="managementCompany_Registeration_Number"
                          placeholder="Registration Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_Registeration_Number &&
                          errors.managementCompany_Registeration_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_Registeration_Number}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">Street</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_street}
                          name="managementCompany_street"
                          placeholder="Enter your managementCompany_street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_street &&
                          errors?.managementCompany_street && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_street}
                            </span>
                          )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">city</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_city}
                          name="managementCompany_city"
                          placeholder="Enter your managementCompany_city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_city &&
                          errors?.managementCompany_city && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_city}
                            </span>
                          )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">
                         provience
                        </Label>
                        <Input
                          type="text"
                          value={values.managementCompany_provience}
                          name="managementCompany_provience"
                          placeholder="Enter managementCompany_provience Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_provience &&
                          errors?.managementCompany_provience && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_provience}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleSelect">
                          ZipCode
                        </Label>
                        <Input
                          type="number"
                          name="managementCompany_ZipCode"
                          value={values.managementCompany_ZipCode}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.managementCompany_ZipCode &&
                          errors?.managementCompany_ZipCode && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_ZipCode}
                            </span>
                          )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">
                          country
                        </Label>
                        <Input
                          type="text"
                          value={values.managementCompany_country}
                          name="managementCompany_country"
                          placeholder="Enter the name of managementCompany_country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_country &&
                          errors?.managementCompany_country && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_country}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.managementCompany_email}
                          name="managementCompany_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_email &&
                          errors.managementCompany_email && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_email}
                            </span>
                          )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.managementCompany_phoneNo}
                          name="managementCompany_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_phoneNo &&
                          errors.managementCompany_phoneNo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_phoneNo}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Mobile Number</Label>
                        <Input
                          type="number"
                          value={values.managementCompany_MobileNumber}
                          name="managementCompany_MobileNumber"
                          placeholder="Mobile Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.managementCompany_MobileNumber &&
                          errors.managementCompany_MobileNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompany_MobileNumber}
                            </span>
                          )}
                      </div>

                      <div className="col-md-6 text-left mb-2 mt-4">
                  <Label className="float-left">Company Photo</Label>
                  <Input
                    type="file"
                    name="managementCompany_photo"
                    accept="image/*"
                    onChange={(event) => {
                      setFieldValue("managementCompany_photo", event.currentTarget.files[0]);
                    }}
                  />

                  {touched.managementCompany_photo && values.managementCompany_photo && (
                    <img
                      src={URL.createObjectURL(values.managementCompany_photo)}
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

export default ManagementCompanyComponent;
