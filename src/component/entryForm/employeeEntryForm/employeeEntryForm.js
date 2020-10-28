import React from "react";
import "./employeeEntryForm.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import { employeeEntryFormValidation } from "../../../utility/validation/employeeEntryFormValidation.js";
import { propTypes } from "react-bootstrap/esm/Image";

const TenantEntry = (props) => {
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={{
              employee_street: "",
              employee_city: "",
              employee_provience: "",
              employee_country: "",
              employee_ZipCode: "",
              employee_photo: "",
              employee_phoneNo: "",
              employee_firstName: "",
              employee_middleName: "",
              employee_lastName: "",
              employee_email: "",
              employee_post: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            props.EmployeeData(values)
            }}
            //                   validationSchema={employeeEntryFormValidation}
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
                <FormGroup className="employeeEntry">
                  <div className="text-center">
                    <p className="text-black font-weight-bold">
                      {" "}
                      <h3>Employee Entry Form </h3>
                    </p>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">First Name</Label>
                        <Input
                          type="text"
                          value={values.employee_firstName}
                          name="employee_firstName"
                          placeholder="Enter your firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_firstName &&
                          errors.employee_firstName && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.employee_firstName}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Middle Name</Label>
                        <Input
                          type="text"
                          value={values.employee_middleName}
                          name="employee_middleName"
                          placeholder="Enter your middleName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_middleName &&
                          errors.employee_middleName && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.employee_middleName}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Last Name</Label>
                        <Input
                          type="text"
                          value={values.employee_lastName}
                          name="employee_lastName"
                          placeholder="Enter your lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_lastName && errors.employee_lastName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_lastName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">employee_street</Label>
                        <Input
                          type="text"
                          value={values.employee_street}
                          name="employee_street"
                          placeholder="Enter your employee_street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_street && errors?.employee_street && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_street}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">employee_city</Label>
                        <Input
                          type="text"
                          value={values.employee_city}
                          name="employee_city"
                          placeholder="Enter your employee_city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_city && errors?.employee_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_city}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">employee_provience</Label>
                        <Input
                          type="text"
                          value={values.employee_provience}
                          name="employee_provience"
                          placeholder="Enter employee_provience Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_provience &&
                          errors?.employee_provience && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.employee_provience}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleSelect">employee_ZipCode</Label>
                        <Input
                          type="number"
                          name="employee_ZipCode"
                          value={values.employee_ZipCode}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.employee_ZipCode && errors?.employee_ZipCode && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_ZipCode}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">employee_country</Label>
                        <Input
                          type="text"
                          value={values.employee_country}
                          name="employee_country"
                          placeholder="Enter the name of employee_country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_country && errors?.employee_country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.employee_email}
                          name="employee_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_email && errors.employee_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_email}
                          </span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.employee_phoneNo}
                          name="employee_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_phoneNo && errors.employee_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_phoneNo}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">employee_post</Label>
                        <Input
                          type="text"
                          value={values.employee_post}
                          name="employee_post"
                          placeholder="Enter the employee_post assigned"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.employee_post && errors.employee_post && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.employee_post}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6 text-left mb-2 mt-4">
                        <Label className="float-left">employee Photo</Label>
                        <Input
                          type="file"
                          name="employee_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "employee_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.employee_photo && values.employee_photo && (
                          <img
                            src={URL.createObjectURL(values.employee_photo)}
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

export default TenantEntry;
