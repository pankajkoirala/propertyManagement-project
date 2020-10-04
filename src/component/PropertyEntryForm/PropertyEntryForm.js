import React from "react"
import "./propertyEntryForm.css"
import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import {PropertyFormValidation} from "../../utility/validation/propertyEntryFormValidation"

const PropertyEntry=()=>{
    return(
        <div>
                <div className="PropertyFormEntry">
            <div>
                <Formik
                    initialValues={{
                        property_location: "",
                        property_street: "",
                        property_zipCode: "",
                        property_type: "",
                        property_price: "",
                        property_status: "",
                    }}
                    onSubmit={(values) => {
                       
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
                            <Form className="d-flex justify-content-center ">
                                <FormGroup className="entryForm">
                                    <div className="text-center">

                                        <p className="text-white font-weight-bold">Property Entry Form</p>
                                    </div>
                                    <div className="location">
                                        <Label className="text-white font-weight-bold" for="exampleCity">email</Label>
                                        <Input
                                            type="text"
                                            name="text"
                                            value={values.text}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.text && errors.text && (
                                            <span
                                                className="text-danger col-md-12 text-left mb-2"
                                                style={{ fontSize: 12 }}
                                            >
                                                {errors.text}
                                            </span>
                                        )}
                                    </div>

                                    
                                    <button type="submit" onClick={handleSubmit}>Add</button>
                                </FormGroup>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>


        </div>
    )
}

export default PropertyEntry