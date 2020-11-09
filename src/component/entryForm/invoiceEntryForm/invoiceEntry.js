import React from "react";
import "./invoice.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";

const InvoiceEntry = (props) => {
  let initialvalue = {
    maintananceTicketIssueDate: "",
    maintananceTicketDueDate: "",
    MaintanancePropertyID: "",
    MaintananceCompanyId: "",
    MaintananceCompanyDetailInfo: "",
  };
  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              props.MaintananceTicketData(values);
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
              <Form className="d-flex justify-content-center">
                <FormGroup className="">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3>invoice Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">issue date Date</Label>
                        <Input
                          type="date"
                          value={values.maintananceTicketIssueDate}
                          name="maintananceTicketIssueDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.maintananceTicketIssueDate &&
                          errors.maintananceTicketIssueDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.maintananceTicketIssueDate}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">maintanance due Date</Label>
                        <Input
                          type="date"
                          value={values.maintananceTicketDueDate}
                          name="maintananceTicketDueDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.maintananceTicketDueDate &&
                          errors.maintananceTicketDueDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.maintananceTicketDueDate}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">property id</Label>
                        <Input
                          type="text"
                          value={values.MaintanancePropertyID}
                          name="MaintanancePropertyID"
                          placeholder="Cheque Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.MaintanancePropertyID &&
                          errors.MaintanancePropertyID && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.MaintanancePropertyID}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">maintanance Company Id</Label>
                        <Input
                          type="text"
                          value={values.MaintananceCompanyId}
                          name="MaintananceCompanyId"
                          placeholder="Cheque Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.MaintananceCompanyId &&
                          errors.MaintananceCompanyId && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.MaintananceCompanyId}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">detail message</Label>
                        <Input
                          type="text"
                          value={values.MaintananceCompanyDetailInfo}
                          name="MaintananceCompanyDetailInfo"
                          placeholder="Bank name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.MaintananceCompanyDetailInfo &&
                          errors.MaintananceCompanyDetailInfo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.MaintananceCompanyDetailInfo}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <button
                        className="Success col-4 mt-2"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </FormGroup>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default InvoiceEntry;
