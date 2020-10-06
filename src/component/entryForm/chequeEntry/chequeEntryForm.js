import React from "react";
import "./chequeEntryForm.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";


const ChequeEntry=()=> {
  return(<div>
    <div className="PropertyFormEntry">
      <div>
        <Formik
          initialValues={{
            issueDate: "",
            status: "",
            remarks: "",
            photo: "",
        
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          // validationSchema={TenantEntryFormValidation}
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
            <Form className="d-flex justify-content-center">
              <FormGroup className="">
                <div className="text-center">
                  <p className="text-black font-weight-bold">
                    {" "}
                    <h3>Cheque Entry Form </h3>
                  </p>
                </div>
                <div>
                  {/* <div className="m-4"> */}

                  <div className="row ">
                    <div className="mt-4 col-md-4">
                      <Label for="exampleName">Issue Date</Label>
                      <Input
                        type="date"
                        value={values.issueDate}
                        name="tenant_issueDate"
                        placeholder="Enter issue date of Cheque"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.issueDate && errors.issueDate && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.issueDate}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 col-md-4">
                      <Label for="exampleName">Status</Label>
                      <Input
                        type="text"
                        value={values.status}
                        name="Cheque Status"
                        placeholder="Select status of Cheque"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.status && errors.status && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.status}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 col-md-4">
                      <Label for="exampleName">Remarks</Label>
                      <Input
                        type="text"
                        value={values.remarks}
                        name="remarks"
                        placeholder="Remarks"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.remarks && errors.remarks && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.remarks}
                        </span>
                      )}
                    </div>
                  </div>

                  
                  
                  <div className="row">
                    <button
                  className="success m-4"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Click to Add Cheque Records
                </button>

                  </div>
                </div>
              </FormGroup>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>)
}

export default ChequeEntry