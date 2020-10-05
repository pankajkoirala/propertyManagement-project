import React from "react"
import "./propertyEntryForm.css"
import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import {PropertyFormValidation} from "../../utility/validation/propertyEntryFormValidation"

const PropertyEntry=()=>{
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
                              phoneNo: "",
                            },
                        property_type: "",
                        property_price: "",
                        property_status: "",
                    }}}
                    onSubmit={(values) => {
                       
                        console.log(values);
                    }}
                    validationSchema={PropertyFormValidation}
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

                                        <p className="text-white font-weight-bold">Property Entry Form</p>
                                    </div>
                                    <div> <Label className="text-white font-weight-bold" for="exampleCity">ID</Label></div>
                                    
                                    <div>
                                    {/* <div className="m-4"> */}
                                    <div>
                    <h3>Permanent Address </h3>
                  </div>

                                

                  <div className="row m-3">

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
                    <div className="col-md-3">
                      <Label for="exampleName">Phone Number</Label>
                      <Input
                        type="number"
                        value={
                          values.address.permanent
                            ? values.address.permanent.phoneNo
                            : ""
                        }
                        name="address.permanent.phoneNo"
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.address?.permanent?.phoneNo &&
                        errors?.address?.permanent?.phoneNo && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.address?.permanent?.phoneNo}
                          </span>
                        )}
                    </div>
                  </div>
                </div>
                                    
                                    <button type="submit" onClick={handleSubmit}>Add</button>
                                </FormGroup>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>


        </div>
    )
}

export default PropertyEntry