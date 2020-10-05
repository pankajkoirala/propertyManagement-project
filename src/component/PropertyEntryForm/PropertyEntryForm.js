import React from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import { PropertyFormValidation } from "../../utility/validation/propertyEntryFormValidation";

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
              property_photo:""
            }}
            onSubmit={(values) => {
              props.propertySend(values)
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
                        type="text"
                        name="property_type"
                        value={values.property_type}
                        id="exampleSelect"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></Input>
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
                    placeholder="enter your Age"
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
                        <option value="for sell">for sell</option>
                        <option value="for rent"> for rent</option>
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
                      <Label for="exampleName">BHK</Label>
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
                    </div>
                    <div className="">
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
                    </div>


                    <div className="mt-4  p-3">
            <Label className="float-left">Photo</Label>
            <Input
              type="file"
              name="property_photo"
              accept="image/*"
              onChange={(event) => {
                setFieldValue("property_photo", event.currentTarget.files[0]);
              }}
            />

            {touched.property_photo && values.property_photo && (
              <img
                src={URL.createObjectURL(values.property_photo)}
                alt="no picture"
                height="20"
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
