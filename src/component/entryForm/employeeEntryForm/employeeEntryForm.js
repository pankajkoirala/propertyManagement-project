import React from "react"
import './employeeEntryForm.css'

import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const TenantEntry=()=>{
    return(
        <div>
                <div >
            <div>
                <Formik
                    initialValues={{
                              street:"",
                              city: "",
                              provience: "",
                              country: "",
                              ZipCode: "",
                              employee_photo:"",
                              employee_phoneNo: "",
                              employee_firstName: "",
                              employee_middleName: "",
                              employee_lastName:"",
                              employee_email:"",
                              post:"",
                        
                    }}
                    onSubmit={(values) => {
                       
                        console.log(values);
                    }}
                   validationSchema={employeeEntryFormValidation}
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

                                        <p className="text-black font-weight-bold"> <h3>Employee Entry Form </h3></p>
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
                    {touched.employee_firstName && errors.employee_firstName && (
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
                    {touched.employee_middleName && errors.employee_middleName && (
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
                      <Label for="exampleName">Street</Label>
                      <Input
                        type="text"
                        value={
                          values.street
                        }
                        name="street"
                        placeholder="Enter your Street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.street &&
                        errors?.street && (
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
                        value={
                          values.city
                        }
                        name="city"
                        placeholder="Enter your City"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.city &&
                        errors?.city && (
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
                        value={
                          values.provience
                        }
                        name="provience"
                        placeholder="Enter Provience Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.provience &&
                        errors?.provience && (
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
                        value={
                          values.ZipCode
                        }
                        id="exampleSelect"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        
                      </Input>
                      {touched?.ZipCode &&
                        errors?.ZipCode && (
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
                        value={
                          values.country
                        }
                        name="country"
                        placeholder="Enter the name of Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.country &&
                        errors?.country && (
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
                        value={values.employee_email}
                        
                        name="employee_email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.employee_email &&
                        errors.employee_email && (
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
                    <Label for="exampleName">Post</Label>
                    <Input
                      type="text"
                      value={values.post}
                      name="post"
                      placeholder="Enter the post assigned"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.post && errors.post && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.post}
                      </span>
                    )}
                  </div>
                  
                  
                  <div className="col-md-6">
                    <Label for="exampleName">Upload Photo</Label>
                    <Input
                      type="file"
                      value={values.employee_photo}
                      name="employee_photo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.employee_photo && errors.employee_photo && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.employee_photo}
                      </span>
                    )}
                  </div>
                  </div>
                  
                </div> 
                                    <button className="success m-4"type="submit" onClick={handleSubmit}>Add</button>
                                </FormGroup>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>


        </div>
    )
}

export default TenantEntry