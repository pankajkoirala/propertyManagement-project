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
            amount: "",
            picture: "",
        
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
                    <div className="mt-4 col-md-3">
                      <Label for="exampleName">Cheque Date</Label>
                      <Input
                        type="date"
                        value={values.chequeDate}
                        name="chequeDate"
                        placeholder="Enter date of Cheque"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.chequeDate && errors.chequeDate && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.chequeDate}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 col-md-3">
                      <Label for="exampleName">Amount</Label>
                      <Input
                        type="number"
                        value={values.amount}
                        name="amount"
                        placeholder="Cheque Amount"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.amount && errors.amount && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.amount}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 col-md-3">
                    <Label for="exampleSelect">Status</Label>
                  <Input
                    type="select"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value="">Select any one</option>
                    <option value="Cleared">Cleared</option>
                    <option value="Pending">Pending</option>
                   
                  </Input>

                  {touched.status && errors.status && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.status}
                    </span>
                  )}
                    </div>

                    <div className="mt-4 col-md-3">
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

                  <div className="col-md-6 text-left mb-2 mt-4">
                            <Label className="float-left">Upload Scan Copy</Label>
                            <Input
                              type="file"
                              name="picture"
                              accept="image/*"
                              onChange={(event) => {
                                setFieldValue("picture", event.currentTarget.files[0]);
                              }}
                            />

                            {touched.picture && values.picture && (
                              <img
                                src={URL.createObjectURL(values.picture)}
                                alt="no picture"
                                height="20"
                              />
                            )}
                          </div>
                    
                    <button
                          className="Success col-4 mt-2"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Add Cheque
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