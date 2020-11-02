import React from "react"
import './bankAccount.css'

import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const BankAccountComponent=()=>{
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
                            
                                <FormGroup className="p-2">
                                    <div className="text-center">

                                        <div className="text-black font-weight-bold"> <h3>Bank Details </h3></div>
                                    </div>
                                    <div>
                                    {/* <div className="m-4"> */}
                                    

                  <div className="row ">
                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Name of Bank</Label>
                    <Input
                      type="text"
                      value={values.employee_firstName}
                      name="employee_firstName"
                      placeholder="Name of Bank"
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
                    <Label for="exampleName">Account Number</Label>
                    <Input
                      type="text"
                      value={values.employee_middleName}
                      name="employee_middleName"
                      placeholder="Account Number"
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
                    <Label for="exampleName">Type of Account</Label>
                    <Input
                      type="text"
                      value={values.employee_lastName}
                      name="employee_lastName"
                      placeholder="Type of Account"
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
                      <Label for="exampleName">Branch Name</Label>
                      <Input
                        type="text"
                        value={
                          values.street
                        }
                        name="street"
                        placeholder="Branch Name"
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
                      <Label for="exampleName">Address</Label>
                      <Input
                        type="text"
                        value={
                          values.city
                        }
                        name="city"
                        placeholder="Address"
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
                      <Label for="exampleName">Currency</Label>
                      <Input
                        type="text"
                        value={
                          values.provience
                        }
                        name="provience"
                        placeholder="Currency"
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
                    <div className="col-md-4">
                      <Label for="exampleSelect">Bank RM Name</Label>
                      <Input
                        type="text"
                        name="ZipCode"
                        placeholder="Bank RM Name"
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
                    <div className="col-md-4">
                      <Label for="exampleSelect">Bank RM Number</Label>
                      <Input
                        type="text"
                        name="ZipCode"
                        placeholder="Bank RM Number"
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
                    <div className="col-md-4">
                      <Label for="exampleSelect">SWIFT Code/ IBAN Code</Label>
                      <Input
                        type="text"
                        name="ZipCode"
                        placeholder="SWIFT Code/ IBAN Code"
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
        


export default BankAccountComponent