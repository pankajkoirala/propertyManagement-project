import React from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Table } from "react-bootstrap";
import { Field, Formik } from "formik";
import { PropertyFormValidation } from "../../../utility/validation/propertyEntryFormValidation.js";

const PropertyEntry = (props) => {
  console.log("ok", props);
  let initialValue = {
    street: props?.property?.street || "",
    city: props?.property?.city || "",
    country: props?.property?.country || "",
    property_type: props?.property?.property_type || "",
    property_price: props?.property?.property_price || "",
    property_status: props?.property?.property_status || "",
    bedroomArea: props?.property?.bedroomArea || "",
    NoOfbedroom: props?.property?.NoOfbedroom || "",
    bedroomRemark: props?.property?.bedroomRemark || "",
    kitchenArea: props?.property?.kitchenArea || "",
    NoOfKitchen: props?.property?.NoOfKitchen || "",
    kitchenRemark: props?.property?.kitchenRemark || "",
    hallArea: props?.property?.hallArea || "",
    NoOfHall: props?.property?.NoOfHall || "",
    hallRemark: props?.property?.hallRemark || "",
    bathroomArea: props?.property?.bathroomArea || "",
    NoOfBathroom: props?.property?.NoOfBathroom || "",
    bathroomRemark: props?.property?.bathroomRemark || "",
    Balcony_Area: props?.property?.Balcony_Area || "",
    NoOfBalcony: props?.property?.NoOfBalcony || "",
    BalconyRemark: props?.property?.BalconyRemark || "",
    Parking: props?.property?.Parking || "unavailable",
    Swimming: props?.property?.Swimming || "unavailable",
    Smoking: props?.property?.Smoking || "unavailable",
    PetAllowed: props?.property?.PetAllowed || "unavailable",
    Garden: props?.property?.Garden || "unavailable",
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
  };
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              props.property
                ? props.propertyUpdate(values, props?.property?._id)
                : props.propertySend(values);
              console.log(values);
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
                          <option value="Villa">Villa</option>
                          <option value="House">House</option>
                          <option value="Apartment">Apartment</option>
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
                        <Label for="exampleSelect">Property Status</Label>
                        <Input
                          type="select"
                          name="property_status"
                          value={values.property_status}
                          id="exampleSelect"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="">select one</option>
                          <option value="free">Free</option>
                          <option value="Occupied">Occupied</option>
                        </Input>
                        {touched.property_status && errors.property_status && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.property_status}
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
                        <Label for="exampleName">Street</Label>
                        <Input
                          type="text"
                          value={values.street}
                          name="street"
                          placeholder="Enter your Street"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.street && errors.street && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.street}
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
                        <h3>Properties</h3>
                      </Label>
                    </div>

                    <Table bordered>
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th>topic</th>
                          <th>Area</th>
                          <th>unit</th>

                          <th>Remarks</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Bedroom</td>
                          <td>
                            <Input
                              type="number"
                              value={values.bedroomArea}
                              name="bedroomArea"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.bedroomArea && errors?.bedroomArea && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.bedroomArea}
                              </span>
                            )}
                          </td>
                          <td>
                            {" "}
                            <Input
                              type="number"
                              value={values.NoOfbedroom}
                              name="NoOfbedroom"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.NoOfbedroom && errors?.NoOfbedroom && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.NoOfbedroom}
                              </span>
                            )}
                          </td>

                          <td>
                            <Input
                              type="text"
                              value={values.bedroomRemark}
                              name="bedroomRemark"
                              placeholder="Enter the bedroomRemark"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.bedroomRemark && errors.bedroomRemark && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.bedroomRemark}
                              </span>
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Hall</td>
                          <td>
                            <Input
                              type="number"
                              value={values.hallArea}
                              name="hallArea"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.hallArea && errors?.hallArea && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.hallArea}
                              </span>
                            )}
                          </td>
                          <td>
                            {" "}
                            <Input
                              type="number"
                              value={values.NoOfHall}
                              name="NoOfHall"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.NoOfHall && errors?.NoOfHall && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.NoOfHall}
                              </span>
                            )}
                          </td>

                          <td>
                            {" "}
                            <Input
                              type="text"
                              value={values.hallRemark}
                              name="hallRemark"
                              placeholder="Enter the hallRemark"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.hallRemark && errors.hallRemark && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.hallRemark}
                              </span>
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td>3</td>
                          <td>Kitchen with Dinning</td>
                          <td>
                            <Input
                              type="number"
                              value={values.kitchenArea}
                              name="kitchenArea"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.kitchenArea && errors?.kitchenArea && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.kitchenArea}
                              </span>
                            )}
                          </td>
                          <td>
                            {" "}
                            <Input
                              type="number"
                              value={values.NoOfKitchen}
                              name="NoOfKitchen"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.NoOfKitchen && errors?.NoOfKitchen && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.NoOfKitchen}
                              </span>
                            )}{" "}
                          </td>

                          <td>
                            {" "}
                            <Input
                              type="text"
                              value={values.kitchenRemark}
                              name="kitchenRemark"
                              placeholder="Enter the kitchenRemark"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.kitchenRemark && errors.kitchenRemark && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.kitchenRemark}
                              </span>
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td>4</td>
                          <td>Bathroom</td>
                          <td>
                            <Input
                              type="number"
                              value={values.bathroomArea}
                              name="bathroomArea"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.bathroomArea && errors?.bathroomArea && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.bathroomArea}
                              </span>
                            )}
                          </td>
                          <td>
                            <Input
                              type="number"
                              value={values.NoOfBathroom}
                              name="NoOfBathroom"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.NoOfBathroom &&
                              errors?.NoOfBathroom && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors?.NoOfBathroom}
                                </span>
                              )}{" "}
                          </td>

                          <td>
                            {" "}
                            <Input
                              type="text"
                              value={values.bathroomRemark}
                              name="bathroomRemark"
                              placeholder="Enter the bathroomRemark"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.bathroomRemark && errors.bathroomRemark && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.bathroomRemark}
                              </span>
                            )}
                          </td>
                        </tr>

                        <tr>
                          <td>5</td>
                          <td>Balcony</td>
                          <td>
                            <Input
                              type="number"
                              value={values.Balcony_Area}
                              name="Balcony_Area"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.Balcony_Area && errors?.Balcony_Area && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.Balcony_Area}
                              </span>
                            )}
                          </td>
                          <td>
                            <Input
                              type="number"
                              value={values.NoOfBalcony}
                              name="NoOfBalcony"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.NoOfBalcony && errors?.NoOfBalcony && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.NoOfBalcony}
                              </span>
                            )}{" "}
                          </td>

                          <td>
                            {" "}
                            <Input
                              type="text"
                              value={values.BalconyRemark}
                              name="BalconyRemark"
                              placeholder="Enter the bathroomRemark"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.BalconyRemark && errors.BalconyRemark && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.BalconyRemark}
                              </span>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <div className="">
                      <Label>
                        <h3>Facilities</h3>
                      </Label>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="Parking"
                            onChange={(e) =>
                              setFieldValue(
                                "Parking",
                                e.currentTarget.checked
                                  ? "available"
                                  : "unavailable"
                              )
                            }
                          />{" "}
                          Parking
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="Swimming"
                            onChange={(e) =>
                              setFieldValue(
                                "Swimming",
                                e.currentTarget.checked
                                  ? "available"
                                  : "unavailable"
                              )
                            }
                          />{" "}
                          Swimming
                        </Label>
                      </FormGroup>

                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="Smoking"
                            onChange={(e) =>
                              setFieldValue(
                                "Smoking",
                                e.currentTarget.checked
                                  ? "available"
                                  : "unavailable"
                              )
                            }
                          />{" "}
                          Smoking
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="PetAllowed"
                            onChange={(e) =>
                              setFieldValue(
                                "PetAllowed",
                                e.currentTarget.checked
                                  ? "available"
                                  : "unavailable"
                              )
                            }
                          />{" "}
                          Pet Allowed
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input
                            type="checkbox"
                            name="Garden"
                            onChange={(e) =>
                              setFieldValue(
                                "Garden",
                                e.currentTarget.checked
                                  ? "available"
                                  : "unavailable"
                              )
                            }
                          />{" "}
                          Garden
                        </Label>
                      </FormGroup>

                      {/* {touched.facilities && errors.facilities && (
                                  <span
                                    className="text-danger col-md-12 text-left mb-2"
                                    style={{ fontSize: 12 }}
                                  >
                                    {errors.facilities}
                                  </span>
                                )} */}
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
