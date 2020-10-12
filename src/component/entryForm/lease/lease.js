import React from "react";
import "./lease.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";


const LeaseEntry=()=> {
  return(<div className="leasediv"> 
   <div className="row">
     <div className="col-12 text-center"><h3>Lease Term Detail </h3></div> <br/></div>
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
            <Form>
              <FormGroup>
               
                  <div className="row ">
                    <div className="col-12 mt-2 ml-2 mr-2"><b>General Information</b> </div>
                          <div className="col-md-4">  
                          <Label for="exampleName">Lease Number</Label>
                          <Input
                            type="text"
                            value={values.chequeDate}
                            name="chequeDate"
                            placeholder="Lease Number"
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
                        
                        <div className="col-md-4">
                          <Label for="exampleName">Lease Entered On</Label>
                          <Input
                            type="date"
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
                      </div>

                
                    <div className="col-md-12"> 
                      <b>Select Property and Tenant</b> 
                    </div>
                <div className="row ">
                      <div className="col-md-5">
                    <Label for="exampleSelect">Tenants(s)</Label>
                  <Input
                    type="select"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                    <option value="Cleared">Add New</option>
                    <option value="Pending">List from Tenant Entry</option>
                   
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
                    <div className="col-md-6">
                    <Label for="exampleSelect">Property</Label>
                  <Input
                    type="select"
                    name="property"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                    <option value="Cleared">Add Property</option>
                    <option value="Pending">List from Property Entry</option>
                   
                  </Input>

                  {touched.property && errors.property && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property}
                    </span>
                  )}
                      
               </div>

                    <div className="col-md-12">
                      <b>Property Occupants</b>
                      </div>
                      <div className="col-6"> 
                      <Label for="exampleName">Occupant(s)</Label>
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
                  
                <div className="col-md-12">
                      <b>Property Occupants</b>
                      </div>
                <div className="row">
                  
                      <div className="col-md-4">
                    <Label for="exampleSelect">Lease Terms</Label>
                  <Input
                    type="select"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                    <option value="Cleared">Month to Month</option>
                    <option value="Pending">Fixed Terms</option>
                   
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
                    <div className="col-md-4">
                    <Label for="exampleSelect">Commencement Date</Label>
                  <Input
                    type="date"
                    name="property"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    
                   
                  </Input>

                  {touched.property && errors.property && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property}
                    </span>
                  )}
                      
               </div>
                      <div className="col-4"> 
                      <Label for="exampleName">Expiration Date</Label>
                      <Input
                        type="date"
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
                          
                  
                  
                <div className="col-md-12">
                      <b>Amount and Schedule of Rent Payment</b>
                      </div>
                <div className="row">
                  
                      <div className="col-md-4">
                    <Label for="exampleSelect">Rent Amount</Label>
                  <Input
                    type="number"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
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
                    <div className="col-md-4">
                    <Label for="exampleSelect">First Due Date</Label>
                  <Input
                    type="date"
                    name="property"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    
                   
                  </Input>

                  {touched.property && errors.property && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property}
                    </span>
                  )}
                      
               </div>
                      <div className="col-4"> 
                      <Label for="exampleName">Frequency</Label>
                      <Input
                    type="select"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                      <option value="Pending">Daily</option>
                      <option value="Cleared">Weekly</option>
                      <option value="Pending">Bi-Weekly</option>
                      <option value="Cleared">Monthly</option>
                      <option value="Pending">Quartely</option>
                      <option value="Pending">Yearly</option>
                   
                  </Input>
                      
                     
                      {touched.frequency && errors.frequency && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.frequency}
                        </span>
                      )}
                    
                    </div>
                </div>


                <div className="col-md-12">
                      <b>Grace Period and Late Payment Fee</b>
                      </div>
                <div className="row">
                  
                      <div className="col-md-4">
                    <Label for="exampleSelect">Grace Period Days</Label>
                  <Input
                    type="number"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
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
                    <div className="col-md-4">
                    <Label for="exampleSelect">Late Fee Type</Label>
                  <Input
                    type="select"
                    name="property"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                      <option value="Pending">Flat</option>
                      <option value="Cleared">Percentage</option>
                   
                  </Input>

                  {touched.property && errors.property && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property}
                    </span>
                  )}
                      
               </div>
                      <div className="col-4"> 
                      <Label for="exampleName">Late Fee Amount</Label>
                      <Input
                    type="number"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                      <option value="Pending">Daily</option>
                      <option value="Cleared">Weekly</option>
                      <option value="Pending">Bi-Weekly</option>
                      <option value="Cleared">Monthly</option>
                      <option value="Pending">Quartely</option>
                      <option value="Pending">Yearly</option>
                   
                  </Input>
                      
                     
                      {touched.frequency && errors.frequency && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.frequency}
                        </span>
                      )}
                    
                    </div>
                </div>


                <div className="col-md-12">
                      <b>Security Deposit</b>
                      </div>
                <div className="row">
                  
                      <div className="col-md-4">
                    <Label for="exampleSelect">Security Deposit</Label>
                  <Input
                    type="number"
                    name="status"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
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
                    <div className="col-md-4">
                    <Label for="exampleSelect">Deposite Due Date</Label>
                  <Input
                    type="date"
                    name="property"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  > 
                  </Input>

                  {touched.property && errors.property && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property}
                    </span>
                  )}
                      
               </div>
                </div>






                  <div className="row">

                  <div className="col-md-6 text-left mb-2 mt-4">
                            <Label className="float-left">Upload Agrement Copy</Label>
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
                    
                    {/* <button
                          className="Success col-4 mt-2"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Add Cheque
                        </button> */}

                  </div>
                
              </FormGroup>
            </Form>
          )}
        </Formik>
  </div>)
}

export default LeaseEntry