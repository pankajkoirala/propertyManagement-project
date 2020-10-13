import React from "react";
import "./lease.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Link } from "react-router-dom";
import { Formik } from "formik";


import LeaseEntryFormValidation from "../../../utility/validation/leaseEntryFormValidation.js"

const LeaseEntry=()=> {
  return(<div className="leasediv"> 
   <div className="row">
     <div className="col-12 text-center"><h3>Lease Term Detail </h3></div> <br/></div>
        <Formik
          initialValues={{
            lease_number: "",
            lease_enterDate: "",
            tenants: "",
            property_occupants: "",
            lease_Term: "",
            commenceDate: "",
            expirationDate: "",
            rentAmount: "",
            dueDate: "",
            frequency: "",
            gracePeriod: "",
            late_feeType: "",
            lateFeeAmount: "",
            securityDeposite: "",
            securityDueDatet: "",
            picture: "",
        
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          //validationSchema={LeaseEntryFormValidation}
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
                            value={values.leaseNumber}
                            name="leaseNumber"
                            placeholder="Lease Number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.leaseNumber && errors.leaseNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.leaseNumber}
                            </span>
                          )}
                           </div>
                        
                        <div className="col-md-4">
                          <Label for="exampleName">Lease Entered On</Label>
                          <Input
                            type="date"
                            value={values.enterDate}
                            name="enterDate"
                            placeholder="Enter Date"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.enterDate && errors.enterDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.enterDate}
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
                    name="tenants"
                    id="exampleSelect"
                    placeholder="Select Status of Cheque"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.status}
                  >
                    <option value=""> </option>
                    <option value="addNewTenant">Add New</option>
                    <option value="viewTenantList">List from Tenant Entry</option>
                   
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
                    value={values.property}
                  >
                    <option value=""> </option>
                    <option value="addProperty"> Add Property</option>
                    <option value="selectTenantFromList">List from Property Entry</option>
                   
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
                    type="select"
                    name="property_occupants"
                    id="exampleSelect"
                    placeholder="Enter Property Occupants"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.property_occupants}
                  >
                    <option value=""> </option>
                    <option value="addOccupant">Add New Occupant</option>
                    <option value="selectOccupantsFromList">Select from Occupant List</option>
                   
                  </Input>

                  {touched.status && errors.status && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property_occupants}
                    </span>
                  )}
                    
                    </div>
                </div>
                  
                <div className="col-md-12">
                      <b>Terms of Tendency</b>
                      </div>
                <div className="row">
                  
                      <div className="col-md-4">
                    <Label for="exampleSelect">Lease Terms</Label>
                  <Input
                    type="select"
                    name="lease_Term"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lease_Term}
                  >
                    <option value=""> </option>
                    <option value="value.monthToMonth">Month to Month</option>
                    <option value="value.fixedTerm">Fixed Terms</option>
                   
                  </Input>

                  {touched.lease_Term && errors.lease_Term && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.lease_Term}
                    </span>
                  )}
                    </div>
                    <div className="col-md-4">
                    <Label for="exampleSelect">Commencement Date</Label>
                  <Input
                    type="date"
                    name="commenceDate"
                    id="exampleSelect"
                    placeholder="Select Commence Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.commenceDate}
                  >
                  </Input>

                  {touched.commenceDate && errors.commenceDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.commenceDate}
                    </span>
                  )}
                      
               </div>
                      <div className="col-4"> 
                      <Label for="exampleName">Expiration Date</Label>
                      <Input
                        type="date"
                        value={values.expirationDate}
                        name="expirationDate"
                        placeholder="ExpirationDate"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.expirationDate && errors.expirationDate && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.expirationDate}
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
                    name="rentAmount"
                    id="exampleSelect"
                    placeholder="Rent Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.rentAmount}
                  >
                  </Input>

                  {touched.rentAmount && errors.rentAmount && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.rentAmount}
                    </span>
                  )}
                    </div>
                    <div className="col-md-4">
                    <Label for="exampleSelect">First Due Date</Label>
                  <Input
                    type="date"
                    name="dueDate"
                    id="exampleSelect"
                    placeholder="Due Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dueDate}
                  >
                    
                   
                  </Input>

                  {touched.dueDate && errors.dueDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.dueDate}
                    </span>
                  )}
                      
               </div>
                      <div className="col-4"> 
                      <Label for="exampleName">Frequency</Label>
                      <Input
                    type="select"
                    name="frequency"
                    id="exampleSelect"
                    placeholder="Frequencyt"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.frequency}
                  >
                    <option value=""> </option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quartely">Quartely</option>
                      <option value="yearly">Yearly</option>
                   
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
                    name="gracePeriod"
                    id="exampleSelect"
                    placeholder="gracePeriod"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gracePeriod}
                  >
                  </Input>

                  {touched.gracePeriod && errors.gracePeriod && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.gracePeriod}
                    </span>
                  )}
                    </div>
                    <div className="col-md-4">
                    <Label for="exampleSelect">Late Fee Type</Label>
                  <Input
                    type="select"
                    name="late_feeType"
                    id="exampleSelect"
                    placeholder="Select Late Fee type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.late_feeType}
                  >
                    <option value=""> </option>
                      <option value="flat">Flat</option>
                      <option value="percentage">Percentage</option>
                   
                  </Input>

                  {touched.late_feeType && errors.late_feeType && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.late_feeType}
                    </span>
                  )}
                      
               </div>
                      <div className="col-4"> 
                      <Label for="exampleName">Late Fee Amount</Label>
                      <Input
                    type="number"
                    name="lateFeeAmount"
                    id="exampleSelect"
                    placeholder="Late Fee Amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lateFeeAmount}
                  >
                  </Input>
                      
                     
                      {touched.lateFeeAmount && errors.lateFeeAmount && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.lateFeeAmount}
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
                    name="securityDeposites"
                    id="exampleSelect"
                    placeholder="Security Deposite"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.securityDeposite}
                  >
                  </Input>

                  {touched.securityDeposite && errors.securityDeposite && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.securityDeposite}
                    </span>
                  )}
                    </div>
                    <div className="col-md-4">
                    <Label for="exampleSelect">Deposite Due Date</Label>
                  <Input
                    type="date"
                    name="securityDueDate"
                    id="exampleSelect"
                    placeholder="Security Due Date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.securityDueDate}
                  > 
                  </Input>

                  {touched.securityDueDate && errors.securityDueDate && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.securityDueDate}
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
                    
                    <button
                          className="Success col-4 mt-2"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          Save
                        </button>

                  </div>
                
              </FormGroup>
            </Form>
          )}
        </Formik>
  </div>)
}

export default LeaseEntry