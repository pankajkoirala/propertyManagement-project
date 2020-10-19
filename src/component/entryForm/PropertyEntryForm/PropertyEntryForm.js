import React from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Table } from "react-bootstrap";
import { Field, Formik } from "formik";
import { PropertyFormValidation } from "../../../utility/validation/propertyEntryFormValidation.js";

const PropertyEntry = (props) => {
  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={{
              street: "",
              city: "",
              country: "",
              property_type: "",
              property_price: "",
              property_status: "",
              bedromArea: "",
              kitchenArea: "",
              hallArea: "",
              bathroomArea: "",
              NoOfBathroom: "",
              NoOfHall: "",
              NoOfKitchen: "",
              NoOfbedrom: "",
              bathroomRemark: "",
              hallRemark:"",
              bedroomRemark:"",
              kitchenRemark:"",
              photo: "",
              Parking: "",
              Swimming: "",
              Balcony: "",
              Smoking: "",
              PetAllowed: "",
              Garden: "",
            }}
            onSubmit={(values) => {
              props.propertySend(values);
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
                  <div className=" d-flex justify-content-center d-flex flex-column m-3">
                    <div className="">
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

                    <div className="">
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
                    <div className="">
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
                        <option value="Repair and Maintanance">
                          Repair and Maintanance
                        </option>
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

                    <div className="">
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

                    <div className="">
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
                    <div className="">
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
                              value={values.bedromArea}
                              name="bedromArea"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.bedromArea && errors?.bedromArea && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.bedromArea}
                              </span>
                            )}
                          </td>
                          <td>
                            {" "}
                            <Input
                              type="number"
                              value={values.NoOfbedrom}
                              name="NoOfbedrom"
                              placeholder="area in Sq.ft"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched?.NoOfbedrom && errors?.NoOfbedrom && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors?.NoOfbedrom}
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
                            name="Balcony"
                            onChange={(e) =>
                              setFieldValue(
                                "Balcony",
                                e.currentTarget.checked
                                  ? "available"
                                  : "unavailable"
                              )
                            }
                          />{" "}
                          Balcony
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

                    <div className="mt-4 mb-4">
                      <Label className="font-weight-bold text-white">
                        Product Photo
                      </Label>
                      <Input
                        className="text-white "
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue("photo", event.currentTarget.files[0]);
                        }}
                      />

                      {touched.photo && values.photo && (
                        <img
                          src={URL.createObjectURL(values.photo)}
                          alt="no pic"
                          height="200"
                        />
                      )}
                    </div>
                  </div>

                  <button type="submit" onClick={handleSubmit}>
                    Add
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
