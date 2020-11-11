import React, { useState } from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Table } from "react-bootstrap";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";

import { PropertyFormValidation } from "../../../utility/validation/propertyEntryFormValidation.js";

const PropertyEntry = (props) => {
  const [heading, setHeading] = useState("");
  const [unit, setUnit] = useState("");
  const [remark, setRemark] = useState("");
  const [facilities, setFacilities] = useState(
    props?.property ? props?.property?.facilities : []
  );

  let addFacilities = (data) => {
    setFacilities([...facilities, data]);
    setHeading("");
    setRemark("");
    setUnit("");
  };
  let removeExpense = (id) =>
    setFacilities(facilities.filter((arg) => arg.facilitiesId !== id));

  let initialValue = {
    city: props?.property?.city || "",
    area: props?.property?.area || "",
    country: props?.property?.country || "",
    property_type: props?.property?.property_type || "",
    property_price: props?.property?.property_price || "",
    facilities: props?.property?.facilities || [],
    property_community: props?.property?.property_community || "",
    building_Name: props?.property?.building_Name || "",
    building_Number: props?.property?.building_Number || "",
    plot_Number: props?.property?.plot_Number || "",
    building_floorNumber: props?.property?.building_floorNumber || "",
    Muncipality_Number: props?.property?.Muncipality_Number || "",
    Property_Area: props?.property?.Property_Area || "",
    Property_Premise_Number: props?.property?.Property_Premise_Number || "",
    Title_Deed_Photo: props?.property?.Title_Deed_Photo || "",
    photo: props?.property?.photo || "",
    Parking_Number: props?.property?.Parking_Number || "not available",
  };
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              values.facilities = JSON.stringify(facilities);
              props.property
                ? props.propertyUpdate(values, props?.property?._id)
                : props.propertySend(values);
            }}
            // validationSchema={PropertyFormValidation}
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
              <Form className=" ">
                <FormGroup className=" container">
                  <h1 className="text-center my-4">
                    Please Fill Up the Property information
                  </h1>
                  <div className=" d-flex justify-content-center d-flex flex-column m-3">
                    <div className="d-flex flex-wrap">
                      <div className="col-sm-4 my-1">
                        <Label for="exampleSelect">Property Type</Label>

                        <Input
                          type="select"
                          name="property_type"
                          id="exampleSelect"
                          placeholder="Select"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.property_type}
                        >
                          <option value=""> </option>
                          <option value="Residential">Residential</option>
                          <option value="Commericial">Commericial</option>
                          <option value="Land">Land</option>
                        </Input>

                        {touched?.property_type && errors?.property_type && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors?.property_type}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label>Property price</Label>
                        <Input
                          type="number"
                          name="property_price"
                          placeholder="Enter Price"
                          value={values.property_price}
                          min={0}
                          onChange={handleChange}
                        />
                        {touched.property_price && errors.property_price && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.property_price}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">Country</Label>
                        <Input
                          type="text"
                          value={values.country}
                          name="country"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.country && errors.country && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.country}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">City</Label>
                        <Input
                          type="text"
                          value={values.city}
                          name="city"
                          placeholder="Enter your City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.city && errors.city && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.city}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">Area</Label>
                        <Input
                          type="area"
                          value={values.area}
                          name="area"
                          placeholder="Enter your City"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.area && errors.area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.area}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">building Name</Label>
                        <Input
                          type="text"
                          value={values.building_Name}
                          name="building_Name"
                          placeholder="Enter your Street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.building_Name && errors.building_Name && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.building_Name}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">building Number </Label>
                        <Input
                          type="number"
                          value={values.building_Number}
                          name="building_Number"
                          placeholder="Enter your Street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.building_Number && errors.building_Number && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.building_Number}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">plot Number</Label>
                        <Input
                          type="number"
                          value={values.plot_Number}
                          name="plot_Number"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.plot_Number && errors.plot_Number && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.plot_Number}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">building floorNumber</Label>
                        <Input
                          type="number"
                          value={values.building_floorNumber}
                          name="building_floorNumber"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.building_floorNumber &&
                          errors.building_floorNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.building_floorNumber}
                            </span>
                          )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">Muncipality Number</Label>
                        <Input
                          type="number"
                          value={values.Muncipality_Number}
                          name="Muncipality_Number"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Muncipality_Number &&
                          errors.Muncipality_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Muncipality_Number}
                            </span>
                          )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">Property Area</Label>
                        <Input
                          type="number"
                          value={values.Property_Area}
                          name="Property_Area"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Property_Area && errors.Property_Area && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Property_Area}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">community</Label>
                        <Input
                          type="text"
                          value={values.property_community}
                          name="property_community"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.property_community &&
                          errors.property_community && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.property_community}
                            </span>
                          )}
                      </div>

                      <div className="col-sm-4 my-1">
                        <Label for="exampleName">Property Premise Number</Label>
                        <Input
                          type="number"
                          value={values.Property_Premise_Number}
                          name="Property_Premise_Number"
                          placeholder="Enter the name of Country"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Property_Premise_Number &&
                          errors.Property_Premise_Number && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Property_Premise_Number}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="">
                      <Label for="exampleName">
                        <h3>Facilities</h3>
                      </Label>
                    </div>

                    <Table bordered>
                      <thead>
                        <tr>
                          <th>heading</th>
                          <th>unit</th>

                          <th>Remarks</th>
                          <th>add</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Input
                              type="text"
                              value={heading}
                              onChange={(e) => {
                                setHeading(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <Input
                              type="number"
                              value={unit}
                              onChange={(e) => {
                                setUnit(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <Input
                              type="text"
                              value={remark}
                              onChange={(e) => {
                                setRemark(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <button
                              disabled={!heading || !unit || !remark}
                              onClick={() =>
                                addFacilities({
                                  heading: heading,
                                  unit: unit,
                                  remark: remark,
                                  facilitiesId: uuidv4(),
                                })
                              }
                              type="button"
                              className="font-weight-bold"
                            >
                              Add
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    {facilities.length > 0 ? (
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>heading</th>
                            <th>unit</th>
                            <th>Remarks</th>
                            <th>add</th>
                          </tr>
                        </thead>
                        {facilities.map((arg, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>{index + 1}</td>
                                <td>{arg.heading}</td>
                                <td>{arg.unit}</td>
                                <td>{arg.remark}</td>

                                <td>
                                  <button
                                    type="button"
                                    className="font-weight-bold"
                                    onClick={() =>
                                      removeExpense(arg.facilitiesId)
                                    }
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </Table>
                    ) : (
                      ""
                    )}
                    <div className="col-sm-4 my-1">
                      <Label for="exampleName">Parking Number</Label>
                      <Input
                        type="text"
                        value={values.Parking_Number}
                        name="Parking_Number"
                        placeholder="Enter the name of Country"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.Parking_Number && errors.Parking_Number && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.Parking_Number}
                        </span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <Label>Title Deed Photo</Label>
                      <Input
                        type="file"
                        name="Title_Deed_Photo"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue(
                            "Title_Deed_Photo",
                            event.currentTarget.files[0]
                          );
                        }}
                      />

                      {touched.Title_Deed_Photo && values.Title_Deed_Photo && (
                        <img
                          src={
                            typeof values.Title_Deed_Photo === "string"
                              ? values.Title_Deed_Photo
                              : URL.createObjectURL(values.Title_Deed_Photo)
                          }
                          alt="no pic"
                          height="200"
                        />
                      )}
                    </div>
                    <div className="col-md-4">
                      <Label>property photo</Label>
                      <Input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue("photo", event.currentTarget.files[0]);
                        }}
                      />

                      {touched.photo && values.photo && (
                        <img
                          src={
                            typeof values.photo === "string"
                              ? values.photo
                              : URL.createObjectURL(values.photo)
                          }
                          alt="no pic"
                          height="200"
                        />
                      )}
                    </div>
                  </div>

                  <button type="submit" onClick={handleSubmit}>
                    Submit
                  </button>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PropertyEntry;
