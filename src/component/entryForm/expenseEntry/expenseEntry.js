import React from "react";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";

let expenseList = [];

const ExpenseEntry = (props) => {
  console.log(props);
  let initialvalue = {
    expense_list: expenseList,
    expense_EntryDate: "",
    Maintanance_ticketID: "",
    Expense_Remark: "",
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
                      <h3>Expense entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">entry date</Label>
                        <Input
                          type="date"
                          value={values.expense_EntryDate}
                          name="expense_EntryDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.expense_EntryDate && errors.expense_EntryDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.expense_EntryDate}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">maintanance ticket ID</Label>
                        <Input
                          type="text"
                          value={values.Maintanance_ticketID}
                          name="Maintanance_ticketID"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Maintanance_ticketID &&
                          errors.Maintanance_ticketID && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.Maintanance_ticketID}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">expense heading</Label>
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
                        <Label for="exampleName">amount</Label>
                        <Input
                          type="number"
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
                        <Label for="exampleName">remark</Label>
                        <Input
                          type="text"
                          value={values.Expense_Remark}
                          name="Expense_Remark"
                          placeholder="Bank name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.Expense_Remark && errors.Expense_Remark && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Expense_Remark}
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

export default ExpenseEntry;
