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
                              chequeHoldID:"",
                              cheque_Number: "",
                              bank_ID: "",
                              hold_Period: "",   
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

                                        <p className="text-black font-weight-bold"> <h3>Cheque Hold Detail Form </h3></p>
                                    </div>
                                    <div>
                                    {/* <div className="m-4"> */}
                                    

                  <div className="row">
                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Cheque Hold ID</Label>
                    <Input
                      type="text"
                      value={values.chequeHoldID}
                      name="chequeHoldID"
                      placeholder="chequeHoldID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.chequeHoldID && errors.chequeHoldID && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.chequeHoldID}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 col-md-4">
                    <Label for="exampleName">Cheque Number/ID</Label>
                    <Input
                      type="text"
                      value={values.cheque_Number}
                      name="cheque_Number"
                      placeholder="Enter Cheque Number"
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
                    <Label for="exampleName">Bank ID</Label>
                    <Input
                      type="text"
                      value={values.bank_ID}
                      name="bank_ID"
                      placeholder="Bank ID"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.bank_ID && errors.bank_ID && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.bank_ID}
                      </span>
                    )}
                  </div>
                 
                  <div className="col-md-4">
                      <Label for="exampleName">Cheque Hold Period</Label>
                      <Input
                        type="text"
                        value={values.hold_Period}
                        name="hold_Period"
                        placeholder="Cheque Hold Period"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.hold_Period &&
                        errors.hold_Period&& (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.hold_Period}
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