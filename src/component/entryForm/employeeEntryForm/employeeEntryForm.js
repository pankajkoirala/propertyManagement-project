import React, { useState } from "react";
import "./employeeEntryForm.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

//import { employeeEntryFormValidation } from "../../../utility/validation/employeeEntryFormValidation.js";

const TenantEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  let initialValue = {
    employee_area: props?.selectedEmployee?.employee_area || "",
    employee_city: props?.selectedEmployee?.employee_city || "",
    employee_country: props?.selectedEmployee?.employee_country || "",
    employee_DOB: props?.selectedEmployee?.employee_DOB || "",
    employee_photo: props?.selectedEmployee?.employee_photo || "",
    employee_phoneNo: props?.selectedEmployee?.employee_phoneNo || "",
    employee_firstName: props?.selectedEmployee?.employee_firstName || "",
    employee_middleName: props?.selectedEmployee?.employee_middleName || " ",
    employee_lastName: props?.selectedEmployee?.employee_lastName || "",
    employee_email: props?.selectedEmployee?.employee_email || "",
    employee_post: props?.selectedEmployee?.employee_post || "",
  };
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              props.selectedEmployee
                ? props.EmployeeUpdate(values, props?.selectedEmployee?._id)
                : props.EmployeeData(values);
              console.log(values);
            }}
            // validationSchema={employeeEntryFormValidation}
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
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>Employee Entry Form </h3>
                    </div>
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
                        <Label for="exampleName">area</Label>
                        <Input
                          type="text"
                          value={values.employee_area}
                          name="employee_area"
                          placeholder="Enter your employee_area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.employee_area && errors?.employee_area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_area}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">city</Label>
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
                        <Label for="exampleName">country</Label>
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
                        <Label for="exampleSelect">employee_DOB</Label>
                        <Input
                          type="date"
                          name="employee_DOB"
                          value={values.employee_DOB}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.employee_DOB && errors?.employee_DOB && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.employee_DOB}
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
                        <Label for="exampleName">post</Label>
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
                            src={
                              typeof values?.employee_photo === "string"
                                ? values?.employee_photo
                                : URL.createObjectURL(values?.employee_photo)
                            }
                            alt="no file"
                            height="20"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <button
                    className="success m-4"
                    type="button"
                    onClick={() => setShowPopUp(true)}
                  >
                    submit
                  </button>
                  <PoopUp
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.selectedEmployee ? "Update" : "Create"}
                    message={
                      props.selectedEmployee
                        ? "are you sure want to update"
                        : "are you sure want to create"
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
