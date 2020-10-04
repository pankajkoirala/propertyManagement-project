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
                            permanent: {
                              street:"",
                              city: "",
                              provience: "",
                              country: "",
                              
                            },
                        tenant_phoneNo: "",
                        tenant_firstName: "",
                        tenant_middleName: "",
                        tenant_lastName:"",
                        tenant_email:"",
                        
                    }}}
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
                            
                                <FormGroup className="entryForm">
                                    <div className="text-center">

                                        <p className="text-white font-weight-bold"> <h3>Tenant Entry Form </h3></p>
                                    </div>
                                    <div> <Label className="text-white font-weight-bold" for="exampleCity">ID</Label></div>
                                    <Input 
                                    type="text"
                                    placeholder="ID will be automatically Assigned"
                                    > </Input>
                                    
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


                  <div className="row m-3">
                  <div>
                                    <p className="bold"> Permanent Address </p>
                  </div>
                  <div className="col-md-3">
                      <Label for="exampleName">Street</Label>
                      <Input
                        type="text"
                        value={
                          values.address.permanent
                            ? values.address.permanent.street
                            : ""
                        }
                        name="address.permanent.street"
                        placeholder="Enter your Street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.permanent?.street &&
                        errors?.address?.permanent?.street && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.permanent?.street}
                          </span>
                        )}
                    </div>



                    <div className="col-md-3">
                      <Label for="exampleName">City</Label>
                      <Input
                        type="text"
                        value={
                          values.address.permanent
                            ? values.address.permanent.city
                            : ""
                        }
                        name="address.permanent.city"
                        placeholder="Enter your City"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.permanent?.city &&
                        errors?.address?.permanent?.city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.permanent?.city}
                          </span>
                        )}
                    </div>

                    <div className="col-md-3">
                      <Label for="exampleName">Country</Label>
                      <Input
                        type="text"
                        value={
                          values.address.permanent
                            ? values.address.permanent.country
                            : ""
                        }
                        name="address.permanent.ountry"
                        placeholder="Enter your Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.permanent?.country &&
                        errors?.address?.permanent?.country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.permanent?.country}
                          </span>
                        )}
                    </div>

                    <div className="col-md-3">
                      <Label for="exampleSelect">ZipCode</Label>
                      <Input
                        type="text"
                        name="address.permanent.ZipCode"
                        value={
                          values.address.ZipCode
                            ? values.address.permanent.ZipCode
                            : ""
                        }
                        id="exampleSelect"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        
                      </Input>
                      {touched?.address?.permanent?.ZipCode &&
                        errors?.address?.permanent?.ZipCode && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.permanent?.ZipCode}
                          </span>
                        )}
                    </div>
                    <div className="col-md-3">
                      <Label for="exampleName">Country</Label>
                      <Input
                        type="text"
                        value={
                          values.address.permanent
                            ? values.address.permanent.country
                            : ""
                        }
                        name="address.permanent.country"
                        placeholder="Enter the name of Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.permanent?.country &&
                        errors?.address?.permanent?.country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.permanent?.country}
                          </span>
                        )}
                    </div> 
                  </div>
                  <div className="col-md-3">
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

                  <div className="mt-4 col-md-4">
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
                </div> 
                                    <button className="m-4"type="submit" onClick={handleSubmit}>Add New Tenant</button>
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