import React from "react"

import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import {tenantEntryFormValidation} from "../../utility/validation/tenantEntryFormValidation.js"

const TenantEntry=()=>{
    return(
        <div>
                <div className="PropertyFormEntry">
            <div>
                <Formik
                    initialValues={{
                        address: {
                              street:"",
                              city: "",
                              provience: "",
                              country: "",
                              ZipCode: "",
                            },
                        tenant_photo:"",
                        tenant_phoneNo: "",
                        tenant_firstName: "",
                        tenant_middleName: "",
                        tenant_lastName:"",
                        tenant_email:"",
                        post:"",
                        
                    }}
                    onSubmit={(values) => {
                       
                        console.log(values);
                    }}
                   validationSchema={tenantEntryFormValidation}
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
                            <Form className="d-flex justify-content-center ">
                            
                                <FormGroup className="">
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
                      value={values.tenant_firstName}
                      name="tenant_firstName"
                      placeholder="Enter your firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tenant_firstName && errors.tenant_firstName && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tenant_firstName}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Middle Name</Label>
                    <Input
                      type="text"
                      value={values.tenant_middleName}
                      name="tenant_middleName"
                      placeholder="Enter your middleName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tenant_middleName && errors.tenant_middleName && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tenant_middleName}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Last Name</Label>
                    <Input
                      type="text"
                      value={values.tenant_lastName}
                      name="tenant_lastName"
                      placeholder="Enter your lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tenant_lastName && errors.tenant_lastName && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tenant_lastName}
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
                          values.address.street
                        }
                        name="address.street"
                        placeholder="Enter your Street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.street &&
                        errors?.address?.street && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.street}
                          </span>
                        )}
                    </div>



                    <div className="col-md-4">
                      <Label for="exampleName">City</Label>
                      <Input
                        type="text"
                        value={
                          values.address.city
                        }
                        name="address.city"
                        placeholder="Enter your City"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.city &&
                        errors?.address?.city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.city}
                          </span>
                        )}
                    </div>

                    <div className="col-md-4">
                      <Label for="exampleName">Provience</Label>
                      <Input
                        type="text"
                        value={
                          values.address.provience
                        }
                        name="address.provience"
                        placeholder="Enter Provience Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.provience &&
                        errors?.address?.provience && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.provience}
                          </span>
                        )}
                    </div>
</div>
<div className="row">
                    <div className="col-md-6">
                      <Label for="exampleSelect">ZipCode</Label>
                      <Input
                        type="text"
                        name="address.ZipCode"
                        value={
                          values.address.ZipCode
                        }
                        id="exampleSelect"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        
                      </Input>
                      {touched?.address?.ZipCode &&
                        errors?.address?.ZipCode && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.ZipCode}
                          </span>
                        )}
                    </div>
                    <div className="col-md-6">
                      <Label for="exampleName">Country</Label>
                      <Input
                        type="text"
                        value={
                          values.address.country
                        }
                        name="address.country"
                        placeholder="Enter the name of Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.country &&
                        errors?.address?.country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.country}
                          </span>
                        )}
                    </div> 
                  </div>
                  <div className="row">
                  <div className="col-md-6">
                      <Label for="exampleName">Email</Label>
                      <Input
                        type="email"
                        value={values.tenant_email}
                        
                        name="tenant_email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.tenant_email &&
                        errors.tenant_email && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.tenant_email}
                          </span>
                        )}
                    </div>

                  <div className="col-md-6">
                    <Label for="exampleName">Contact Number</Label>
                    <Input
                      type="number"
                      value={values.tenant_phoneNo}
                      name="tenant_phoneNo"
                      placeholder="Enter your Contact Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tenant_phoneNo && errors.tenant_phoneNo && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tenant_phoneNo}
                      </span>
                    )}
                  </div>

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
                    {touched.tenant_post && errors.tenant_post && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.post}
                      </span>
                    )}
                  </div>
                  </div>
                  
                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Upload Photo</Label>
                    <Input
                      type="file"
                      value={values.tenant_photo}
                      name="tenant_photo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.tenant_photo && errors.tenant_photo && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.tenant_photo}
                      </span>
                    )}
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