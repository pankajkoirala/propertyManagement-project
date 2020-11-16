import React, { useState } from "react";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import PoopUp from "./../../../shared/popup";
import RegexComponent from "./../../../shared/regexComponent";

const OwnerEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  let initialValue = {
    owner_area: props?.selectedowner?.owner_area || "",
    owner_city: props?.selectedowner?.owner_city || "",
    owner_country: props?.selectedowner?.owner_country || "",
    owner_DOB: props?.selectedowner?.owner_DOB || "",
    owner_photo: props?.selectedowner?.owner_photo || "",
    owner_phoneNo: props?.selectedowner?.owner_phoneNo || "",
    owner_firstName: props?.selectedowner?.owner_firstName || "",
    owner_middleName: props?.selectedowner?.owner_middleName || " ",
    owner_lastName: props?.selectedowner?.owner_lastName || "",
    owner_email: props?.selectedowner?.owner_email || "",
    owner_property: props?.selectedowner?.owner_property?._id || "",
  };
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              props.ownerData(values);
              console.log(values);
            }}
            // validationSchema={ownerEntryFormValidation}
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
                <FormGroup className="ownerEntry">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>owner Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">First Name</Label>
                        <Input
                          type="text"
                          value={values.owner_firstName}
                          name="owner_firstName"
                          placeholder="Enter your firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_firstName && errors.owner_firstName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_firstName}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Middle Name</Label>
                        <Input
                          type="text"
                          value={values.owner_middleName}
                          name="owner_middleName"
                          placeholder="Enter your middleName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_middleName && errors.owner_middleName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_middleName}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Last Name</Label>
                        <Input
                          type="text"
                          value={values.owner_lastName}
                          name="owner_lastName"
                          placeholder="Enter your lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_lastName && errors.owner_lastName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_lastName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4">
                        <Label for="exampleName">area</Label>
                        <Input
                          type="text"
                          value={values.owner_area}
                          name="owner_area"
                          placeholder="Enter your owner_area"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.owner_area && errors?.owner_area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_area}
                          </span>
                        )}
                      </div>

                      <div className="col-md-4">
                        <Label for="exampleName">city</Label>
                        <Input
                          type="text"
                          value={values.owner_city}
                          name="owner_city"
                          placeholder="Enter your owner_city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.owner_city && errors?.owner_city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_city}
                          </span>
                        )}
                      </div>
                      <div className="col-md-4">
                        <Label for="exampleName">country</Label>
                        <Input
                          type="text"
                          value={values.owner_country}
                          name="owner_country"
                          placeholder="Enter the name of owner_country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched?.owner_country && errors?.owner_country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleSelect">owner_DOB</Label>
                        <Input
                          type="date"
                          name="owner_DOB"
                          value={values.owner_DOB}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></Input>
                        {touched?.owner_DOB && errors?.owner_DOB && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.owner_ZipCode}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">Email</Label>
                        <Input
                          type="email"
                          value={values.owner_email}
                          name="owner_email"
                          placeholder="Enter Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_email && errors.owner_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_email}
                          </span>
                        )}
                      </div>

                      <div className="col-md-6">
                        <Label for="exampleName">Contact Number</Label>
                        <Input
                          type="number"
                          value={values.owner_phoneNo}
                          name="owner_phoneNo"
                          placeholder="Enter your Contact Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.owner_phoneNo && errors.owner_phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_phoneNo}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Label for="exampleName">owner property</Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_propertyData?.map(
                            (property) => {
                              return {
                                name:
                                  property.Property_ownerName +
                                  "-" +
                                  property.referenceNO,
                                id: property._id,
                              };
                            }
                          )}
                          name={"owner_property"}
                        />
                        {touched.owner_property && errors.owner_property && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.owner_property}
                          </span>
                        )}
                      </div>
                      <div className="col-md-6 text-left mb-2 mt-4">
                        <Label className="float-left">owner Photo</Label>
                        <Input
                          type="file"
                          name="owner_photo"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "owner_photo",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.owner_photo && values.owner_photo && (
                          <img
                            src={
                              typeof values?.owner_photo === "string"
                                ? values?.owner_photo
                                : URL.createObjectURL(values?.owner_photo)
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
                    submit
                  </button>
                  <PoopUp
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.selectedowner ? "Update" : "Create"}
                    message={
                      props.selectedowner
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

export default OwnerEntry;
