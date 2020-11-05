import React from "react";
import "./dashboardView.css";

import { FormGroup, Label, Input, Button } from "reactstrap";

const DashbooardView = () => {
  return (
    <div className="dashboard">
      <div className="col-12">
        <h3>General Information</h3>
      </div>
      <div className="col-6">
        <Label for="exampleSelect">
          <b>Property ID</b>
        </Label>
        <Input
          type="select"
          name="tenants"
          id="exampleSelect"
          placeholder="Select Property"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.status}
        >
          <option value=""> </option>
          <option value="viewTenantList">Add New Property</option>
          <option value="viewTenantList">Property List</option>
        </Input>

        {/* {touched.status && errors.status && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.status}
                    </span>
                  )} */}
      </div>
      <div className="row">
        <div className="col-4">
          <Label for="exampleSelect">
            <b>Description</b>
          </Label>
          <Input
            type="textarea"
            name="description"
            id="exampleSelect"
            placeholder="Description"
            // onChange={handleChange}
            // onBlur={handleBlur}
            // value={values.status}
          ></Input>

          {/* {touched.status && errors.status && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.status}
                    </span>
                  )} */}
        </div>

        <div className="col-md-4 box">
          <Label for="exampleName">
            <b>Upload Photo</b>
          </Label>
          <Input
            type="file"
            //value={values.employee_photo}
            name="employee_photo"
            // onChange={handleChange}
            // onBlur={handleBlur}
          />
          {/* {touched.employee_photo && errors.employee_photo && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.employee_photo}
                      </span>
                    )} */}
        </div>
      </div>
      <div className="col-6">
        <Label for="exampleSelect">
          <b>Assigned To</b>
        </Label>
        <Input
          type="select"
          name="tenants"
          id="exampleSelect"
          placeholder="Assigned to"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.status}
        >
          <option value=""> </option>
          <option value="viewTenantList">List from Employee Entry</option>
        </Input>

        {/* {touched.status && errors.status && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.status}
                    </span>
                  )} */}
      </div>
      <div>
        <FormGroup tag="fieldset">
          <legend>
            <b>Priportity</b>
          </legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Low
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Normal
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> High
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Critical
            </Label>
          </FormGroup>
        </FormGroup>
      </div>

      <div className="col-6">
        <Label for="exampleSelect">
          <b>Due Date</b>
        </Label>
        <Input
          type="date"
          name="description"
          id="exampleSelect"
          placeholder="Due Date"
          // onChange={handleChange}
          // onBlur={handleBlur}
          // value={values.status}
        ></Input>

        {/* {touched.status && errors.status && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.status}
                    </span>
                  )} */}
      </div>

      <div className="m-2">
        {" "}
        <Button color="success">Issue Ticket</Button>{" "}
      </div>
    </div>
  );
};

export default DashbooardView;
