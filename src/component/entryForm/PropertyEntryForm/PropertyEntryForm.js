import React from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Table} from 'react-bootstrap';
import { Formik } from "formik";
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
              BHK:"",
              toilet:"",
             photo:""
            }}
            onSubmit={(values) => {
              props.propertySend(values)
              console.log(values);
            }}
            validationSchema={PropertyFormValidation}
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
                    <option value="villa">Villa</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                   
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
                        <Label for="exampleName"> <h3>Properties</h3></Label></div>


                      <Table bordered>
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>Unit</th>
                            <th>Area</th>
                            <th>Remarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Bedroom</td>
                            <td>200 Sq.Ft.</td>
                            <td>Attached TB</td>
                          </tr>
                         
                          <tr>
                          <td>2</td>
                            <td>Hall</td>
                            <td>300 Sq.Ft</td>
                            <td>Ocean View</td>
                          </tr>

                          

                          <tr>
                          <td>3</td>
                            <td>Kitchen with Dinning</td>
                            <td>100 Sq.Ft</td>
                            <td>Ocean View</td>
                          </tr>
                          
                          <tr>
                          <td>4</td>
                            <td>Bathroom</td>
                            <td>30 Sq.Ft</td>
                            <td>On first floor with Bathtub</td>
                          </tr>
                        </tbody>
                      </Table>






                    {/* <div className="">
                      <Label for="exampleName">Bedroom</Label>
                      <Input
                        type="text"
                        value={values.BHK}
                        name="BHK"
                        placeholder="Enter your Street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.BHK && errors?.BHK && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors?.BHK}
                        </span>
                      )}
                    </div> */}
                   {/* <div className="">
                       <Label for="exampleName">toilet</Label>
                      <Input
                        type="text"
                        value={values.toilet}
                        name="toilet"
                        placeholder="Enter your Street"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched?.toilet && errors?.toilet && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors?.toilet}
                        </span>
                      )}
                    </div> */}

                       <div className="">
                       <Label>
                             <h3>Facilities</h3> 
                            </Label>
                            <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />{' '}
                              Parking
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />{' '}
                             Swimming
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />{' '}
                             Balcony
                            </Label>
                          </FormGroup><FormGroup check>
                            <Label check>
                              <Input type="checkbox" />{' '}
                             Smoking
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />{' '}
                             Pet Allowed
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type="checkbox" />{' '}
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
                  <Label className="font-weight-bold text-white">Product Photo</Label>
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
