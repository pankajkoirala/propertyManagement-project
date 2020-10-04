import React from "react"
import "./login.css"
import {  FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import {LoginValidator} from "../../utility/validation/loginValidation"

const LoginComponent = (props) => {
    return (
        <div>    <div className="fulllogin">
            <div>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={(values) => {
                       
                        console.log(values);
                    }}
                    validationSchema={LoginValidator}
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
                                <FormGroup className=" loginform">
                                    <div className="text-center">
                                        <img className="loginImg" src="https://jpcprinting.co.uk/wp-content/uploads/2015/08/blank-profile.png" alt="" />
                                        <p className="text-white font-weight-bold">Login</p>
                                    </div>
                                    <div className="email">
                                        <Label className="text-white font-weight-bold" for="exampleCity">email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.email && errors.email && (
                                            <span
                                                className="text-danger col-md-12 text-left mb-2"
                                                style={{ fontSize: 12 }}
                                            >
                                                {errors.email}
                                            </span>
                                        )}
                                    </div>

                                    <div className="password">
                                        <Label className="text-white font-weight-bold" for="exampleCity">password</Label>
                                        <Input
                                            type="password"
                                            name="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.password && errors.password && (
                                            <span
                                                className="text-danger col-md-12 text-left mb-2"
                                                style={{ fontSize: 12 }}
                                            >
                                                {errors.password}
                                            </span>
                                        )}
                                        <div className="text-white">{props.response}</div>
                                    </div>
                                    <button type="submit" onClick={handleSubmit}>submit</button>
                                </FormGroup>
                            </Form>
                        )}
                </Formik>
            </div>
        </div></div>
    )
}
export default LoginComponent