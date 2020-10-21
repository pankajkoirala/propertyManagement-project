import React from "react";
import "./chequeBounceEntry.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";


const ChequeBounce=()=> {
  return(
    <div className="bg-success m-5">
      <div>
                <Formik
                    initialValues={{
                      cheque_Bound_ID:"",
                      bounce_Date: "",
                      cheque_Number: "",
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
                            
                                <FormGroup className=" p-4">
                                    <div className="text-center">

                                        <p className="text-black font-weight-bold"> <h3>Cheque Bound Detail Form </h3></p>
                                    </div>
                                    <div>
                                    {/* <div className="m-4"> */}
                                    

                  <div className="row">
                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Cheque Bound ID</Label>
                    <Input
                      type="text"
                      value={values.cheque_Bound_ID}
                      name="cheque_Bound_ID"
                      placeholder="Enter Cheque Bound ID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.cheque_Bound_ID && errors.cheque_Bound_IDe && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.cheque_Bound_ID}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Cheque Number</Label>
                    <Input
                      type="text"
                      value={values.cheque_Number}
                      name="cheque_Number"
                      placeholder="Cheque Number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.cheque_Number && errors.cheque_Number && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.cheque_Number}
                      </span>
                    )}
                  </div>

            
                </div>

                
                  <div className="row">
                 
                  <div className="col-md-4">
                      <Label for="exampleName">Cheque Bounce Date</Label>
                      <Input
                        type="text"
                        value={ values.bounce_Date }
                        name="bounce_Date"
                        placeholder="Cheque Bounce Date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.bounce_Date &&
                        errors.bounce_Date && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.bounce_Date}
                          </span>
                        )}
                    </div>



                    <div className="col-md-4">
                      <Label for="exampleName">Bank ID</Label>
                      <Input
                        type="text"
                        value={
                          values.city
                        }
                        name="city"
                        placeholder="Bank ID"
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

export default ChequeBounce