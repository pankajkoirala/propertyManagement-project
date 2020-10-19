import React from "react";
import "./chequeHoldEntry.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";


const ChequeHold=()=> {
  return(
    <div className="bg-success m-5">
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
                            
                                <FormGroup className="">
                                    <div className="text-center">

                                        <p className="text-black font-weight-bold"> <h3>Cheque Hold Detail Form </h3></p>
                                    </div>
                                    <div>
                                    {/* <div className="m-4"> */}
                                    

                  <div className="row ">
                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Cheque ID</Label>
                    <Input
                      type="text"
                      value={values.employee_firstName}
                      name="employee_firstName"
                      placeholder="Enter Cheque ID"
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
                    <Label for="exampleName">Cheque Number</Label>
                    <Input
                      type="text"
                      value={values.employee_middleName}
                      name="employee_middleName"
                      placeholder="Enter Cheque Number"
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
                    <Label for="exampleName">Cheque Fetch Bank Detail</Label>
                    <Input
                      type="text"
                      value={values.employee_lastName}
                      name="employee_lastName"
                      placeholder="Cheque Fetch Bank Detail"
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
                      <Label for="exampleName">Bank Name</Label>
                      <Input
                        type="text"
                        value={
                          values.street
                        }
                        name="street"
                        placeholder="Enter Bank Name"
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
                      <Label for="exampleName">Cheque Issuer Name</Label>
                      <Input
                        type="text"
                        value={
                          values.city
                        }
                        name="city"
                        placeholder="Cheque Issuer Name"
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
                      <Label for="exampleName">Tenant ID</Label>
                      <Input
                        type="text"
                        value={
                          values.provience
                        }
                        name="provience"
                        placeholder="Enter Tenant ID"
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
                      <Label for="exampleSelect">Lease ID</Label>
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
                   
                  </div>
                </div> 
                  <button className="success m-4"type="submit" onClick={handleSubmit}>Add</button>
                    </FormGroup>
                            </Form>
                        )}
                </Formik>
            </div>
        
  </div>
  )
}

export default ChequeHold