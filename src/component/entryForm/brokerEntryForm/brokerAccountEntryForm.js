import React from "react"
import './brokerAccount.css'

import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"

const BrokerComponent=()=>{
    return(
        <div>
                <div >
            <div>
                <Formik
                    initialValues={{
                              broker_ID:"",
                              company_Name: "",
                              broker_Registeration_Date: "",
                              registeration_Number: "",
                              address: "",
                              city:"",
                              provience: "",
                              zipCode: "",
                              contactPerson1: "",
                              contactPerson2:"",
                              contactPerson3:"",
                              contactNumber1: "",
                              contactNumber2:"",
                              contactNumber3:"",
                              email3:"",
                              email1:"",
                              email2:"",
                              mobile:"",
                              tradeLicencePhoto:"",

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
                            
                                <FormGroup className="p-5 bg-warning m-2">
                                    <div className="text-center">

                                        <p className="text-black font-weight-bold"> <h3>Broker Entry Form </h3></p>
                                    </div>
                                    <div>
                                    {/* <div className="m-4"> */}
                                    

<div className="row">
<div className="mt-4 col-md-5">
                    <Label for="exampleName">Broker ID</Label>
                    <Input
                      type="text"
                      value={values.broker_ID}
                      name="broker_ID"
                      placeholder="Broker ID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.broker_ID && errors.broker_ID && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.broker_ID}
                      </span>
                    )}
                  </div>
</div>


                  <div className="row">
                  

                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Company Name</Label>
                    <Input
                      type="text"
                      value={values.company_Name}
                      name="company_Name"
                      placeholder="Company Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.company_Name && errors.company_Name && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.company_Name}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Registeration Date</Label>
                    <Input
                      type="text"
                      value={values.broker_Registeration_Date}
                      name="broker_Registeration_Date"
                      placeholder="Registeration Date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.broker_Registeration_Date && errors.broker_Registeration_Date && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.broker_Registeration_Date}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Registration Number</Label>
                    <Input
                      type="text"
                      value={values.registeration_Number}
                      name="registeration_Number"
                      placeholder="Registration Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.registeration_Number && errors.registeration_Number && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.registeration_Number}
                      </span>
                    )}
                  </div>
                </div>

                
                  <div className="row">
                 
                  <div className="col-md-4">
                      <Label for="exampleName">Address</Label>
                      <Input
                        type="text"
                        value={
                          values.address
                        }
                        name="street"
                        placeholder="Enter Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address &&
                        errors?.address && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address}
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
                        name="zipCode"
                        value={
                          values.zipCode
                        }
                        id="exampleSelect"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        
                      </Input>
                      {touched?.zipCode &&
                        errors?.zipCode && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.zipCode}
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
                  <div className="col-md-4">
                      <Label for="exampleName">Contact Person1</Label>
                      <Input
                        type="email"
                        value={values.contactPerson1}
                        
                        name="contactPerson1"
                        placeholder="Contact Person"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.contactPerson1 &&
                        errors.contactPerson1 && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.contactPerson1}
                          </span>
                        )}
                    </div>

                  <div className="col-md-4">
                    <Label for="exampleName">Contact Number1</Label>
                    <Input
                      type="number"
                      value={values.contactNumber1}
                      name="employee_phoneNo"
                      placeholder="Enter your Contact Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.contactNumber1 && errors.contactNumber1 && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.contactNumber1}
                      </span>
                    )}
                  </div>
                  <div className="col-md-4">
                    <Label for="exampleName">Email1</Label>
                    <Input
                      type="email"
                      value={values.email1}
                      name="email1"
                      placeholder="Enter your Email1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email1 && errors.email1 && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.email1}
                      </span>
                    )}
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-4">
                      <Label for="exampleName">Contact Person2</Label>
                      <Input
                        type="email"
                        value={values.contactPerson2}
                        
                        name="employee_email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.contactPerson2 &&
                        errors.contactPerson2 && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.contactPerson2}
                          </span>
                        )}
                    </div>

                  <div className="col-md-4">
                    <Label for="exampleName">Contact Number2</Label>
                    <Input
                      type="number"
                      value={values.contactNumber2}
                      name="contactNumber2"
                      placeholder="Enter your Contact Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.contactNumber2 && errors.contactNumber2 && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.contactNumber2}
                      </span>
                    )}
                  </div>
                  <div className="col-md-4">
                    <Label for="exampleName">Email2</Label>
                    <Input
                      type="email"
                      value={values.email2}
                      name="email2"
                      placeholder="Enter your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email2 && errors.email2 && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.email2}
                      </span>
                    )}
                  </div>
                  </div>
                  <div className="row">
                  <div className="col-md-4">
                      <Label for="exampleName">Contact Person3</Label>
                      <Input
                        type="text"
                        value={values.contactPerson3}
                        
                        name="contactPerson3"
                        placeholder="Enter Contact Person"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.contactPerson3 &&
                        errors.contactPerson3 && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.contactPerson3}
                          </span>
                        )}
                    </div>

                  <div className="col-md-4">
                    <Label for="exampleName">Contact Number3</Label>
                    <Input
                      type="number"
                      value={values.employee_phoneNo}
                      name="contactNumber3"
                      placeholder="Enter your Contact Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.contactNumber3 && errors.contactNumber3 && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.contactNumber3}
                      </span>
                    )}
                  </div>
                  <div className="col-md-4">
                    <Label for="exampleName">Email3</Label>
                    <Input
                      type="email"
                      value={values.email3}
                      name="email3"
                      placeholder="Enter your Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.email3 && errors.email3 && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.email3}
                      </span>
                    )}
                  </div>
                  </div>
      <div className="row">
                  <div className="col-md-6">
                    <Label for="exampleName">Mobile Number</Label>
                    <Input
                      type="text"
                      value={values.mobile}
                      name="post"
                      placeholder="Mobile Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.mobile && errors.mobile && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.mobile}
                      </span>
                    )}
                  </div>
                  
                  
                  <div className="col-md-6">
                    <Label for="exampleName">Trade Licence Photo</Label>
                    <Input
                      type="file"
                      value={values.tradeLicencePhoto}
                      name="tradeLicencePhoto"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tradeLicencePhoto && errors.tradeLicencePhoto && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tradeLicencePhoto}
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


export default BrokerComponent