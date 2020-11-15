import React, { useState } from "react";
import "./maintainanceCompany.css";
import moment from "moment";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";

//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const MaintainanceCompanyComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  let initialvalue = {
    Company_street: props?.maintananceCompany?.Company_street || "",
    Company_city: props?.maintananceCompany?.Company_city || "",
    Company_provience: props?.maintananceCompany?.Company_provience || "",
    Company_country: props?.maintananceCompany?.Company_country || "",
    Company_ZipCode: props?.maintananceCompany?.Company_ZipCode || "",
    Company_uploadPhoto: props?.maintananceCompany?.Company_uploadPhoto || "",
    Company_phoneNo: props?.maintananceCompany?.Company_phoneNo || "",
    Company_Registration_Number:
      props?.maintananceCompany?.Company_Registration_Number || "",
    Company_Name: props?.maintananceCompany?.Company_Name || "",
    Company_Registeration_Date:
      moment(props.maintananceCompany?.Company_Registeration_Date).format(
        "YYYY-MM-DD"
      ) || "",
    Company_email: props?.maintananceCompany?.Company_email || "",
    Company_Mobile_Number:
      props?.maintananceCompany?.Company_Mobile_Number || "",
  };

  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              console.log(values);
              props.maintananceCompany
                ? props.maintananceCompanyUpdate(
                    values,
                    props?.maintananceCompany?._id
                  )
                : props.MaintananceCompanyData(values);
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
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>Maintainance Compant Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Company Name</Label>
                        <Input
                          type="text"
                          value={values.Company_Name}
                          name="Company_Name"
                          placeholder="Company Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Name && errors.Company_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Company_Name}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Registeration Date</Label>
                        <Input
                          type="date"
                          value={values.Company_Registeration_Date}
                          name="Company_Registeration_Date"
                          placeholder="Registeration Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Registeration_Date &&
                          errors.Company_Registeration_Date && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Company_Registeration_Date}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Registration Number</Label>
                        <Input
                          type="number"
                          value={values.Company_Registration_Number}
                          name="Company_Registration_Number"
                          placeholder="Registration Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Registration_Number &&
                          errors.Company_Registration_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Company_Registration_Number}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">street</Label>
                        <Input
                          type="text"
                          value={values.Company_street}
                          name="Company_street"
                          placeholder="Enter your Company_street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Company_street && errors?.Company_street && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_street}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">city</Label>
                        <Input
                          type="text"
                          value={values.Company_city}
                          name="Company_city"
                          placeholder="Enter your Company_city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Company_city && errors?.Company_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_city}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">provience</Label>
                        <Input
                          type="text"
                          value={values.Company_provience}
                          name="Company_provience"
                          placeholder="Enter Company_provience Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Company_provience &&
                          errors?.Company_provience && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors?.Company_provience}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleSelect">ZipCode</Label>
                        <Input
                          type="number"
                          name="Company_ZipCode"
                          value={values.Company_ZipCode}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.Company_ZipCode && errors?.Company_ZipCode && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_ZipCode}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6">
                        <Label for="exampleName">country</Label>
                        <Input
                          type="text"
                          value={values.Company_country}
                          name="Company_country"
                          placeholder="Enter the name of Company_country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.Company_country && errors?.Company_country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.Company_country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.Company_email}
                          name="Company_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_email && errors.Company_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Company_email}
                          </span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">phone Number</Label>
                        <Input
                          type="number"
                          value={values.Company_phoneNo}
                          name="Company_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_phoneNo && errors.Company_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Company_phoneNo}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Mobile Number</Label>
                        <Input
                          type="number"
                          value={values.Company_Mobile_Number}
                          name="Company_Mobile_Number"
                          placeholder="Mobile Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Company_Mobile_Number &&
                          errors.Company_Mobile_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Company_Mobile_Number}
                            </span>
                          )}
                      </div>

                      <div className="col-md-6 text-left mb-2 mt-4">
                        <Label className="float-left">Company Photo</Label>
                        <Input
                          type="file"
                          name="Company_uploadPhoto"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "Company_uploadPhoto",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.Company_uploadPhoto &&
                          values.Company_uploadPhoto && (
                            <img
                              src={
                                typeof values.Company_uploadPhoto === "string"
                                  ? values.Company_uploadPhoto
                                  : URL.createObjectURL(
                                      values.Company_uploadPhoto
                                    )
                              }
                              alt="no picture"
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
                    buttonName={props.maintananceCompany ? "Update" : "Create"}
                    message={
                      props.maintananceCompany
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

export default MaintainanceCompanyComponent;
