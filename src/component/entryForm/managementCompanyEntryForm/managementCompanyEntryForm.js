import React, { useState } from "react";
import "./managementCompany.css";
import moment from "moment";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const ManagementCompanyComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  let initialvalue = {
    managementCompany_area:
      props?.managementCompany?.managementCompany_area || "",
    managementCompany_city:
      props?.managementCompany?.managementCompany_city || "",

    managementCompany_country:
      props?.managementCompany?.managementCompany_country || "",

    managementCompany_photo:
      props?.managementCompany?.managementCompany_photo || "",
    managementCompany_phoneNo:
      props?.managementCompany?.managementCompany_phoneNo || "",
    managementCompany_Registeration_Number:
      props?.managementCompany?.managementCompany_Registeration_Number || "",
    managementCompany_name:
      props?.managementCompany?.managementCompany_name || "",
    managementCompany_Registeration_Date:
      moment(
        props.managementCompany?.managementCompany_Registeration_Date
      ).format("YYYY-MM-DD") || "",
    managementCompany_email:
      props?.managementCompany?.managementCompany_email || "",
    managementCompany_MobileNumber:
      props?.managementCompany?.managementCompany_MobileNumber || "",
  };
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              props.managementCompany
                ? props.managementCompanyUpdate(
                    values,
                    props?.managementCompany._id
                  )
                : props.ManagementCompanyData(values);
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
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>Management Company Entry Form </h3>
                    </div>
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
                        <Label for="exampleName">area</Label>
                        <Input
                          type="text"
                          value={values.managementCompany_area}
                          name="managementCompany_area"
                          placeholder="Enter your managementCompany_area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.managementCompany_area &&
                          errors?.managementCompany_area && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.managementCompany_area}
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
                        <Label for="exampleName">country</Label>
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
                            setFieldValue(
                              "managementCompany_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.managementCompany_photo &&
                          values.managementCompany_photo && (
                            <img
                              src={
                                typeof values.managementCompany_photo ===
                                "string"
                                  ? values.managementCompany_photo
                                  : URL.createObjectURL(
                                      values.managementCompany_photo
                                    )
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
                    Add
                  </button>
                  <PoopUp
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.managementCompany ? "Update" : "Create"}
                    message={
                      props.managementCompany
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

export default ManagementCompanyComponent;
