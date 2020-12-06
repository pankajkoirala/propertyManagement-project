import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import {expenseEntryFormValidation} from "./../../../utility/validation/expenseEntryFormValidation.js"
import moment from "moment";
import PoopUp from "./../../../shared/popup";
import RegexComponent from "./../../../shared/regexComponent";

const ExpenseEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [expenseHeading, setExpenseHeading] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenselist, setexpenselist] = useState(
    props?.expense?.expense_list || []
  );
  //remove expanse
  let removeExpense = (id) =>
    setexpenselist(expenselist.filter((arg) => arg.expenseId !== id));

  //add expense
  let addExpense = (data) => {
    setexpenselist([...expenselist, data]);
    setExpenseAmount("");
    setExpenseHeading("");
  };

  let initialvalue = {
    expense_list: props?.expense?.expense_list || [],
    expense_EntryDate:
      moment(props?.expense?.expense_EntryDate).format("YYYY-MM-DD") || "",
    Maintanance_ticketID: props?.expense?.Maintanance_ticketID?._id || "",
    Expense_Remark: props?.expense?.Expense_Remark || "",
    expenseInvoiceNumber: props?.expense?.expenseInvoiceNumber || "",
    invoicePhoto: props?.expense?.invoicePhoto || "",
    expense_Heading: "",
    expense_amount: "",
  };
  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              values.expense_list = expenselist.map((arg) => {
                return {
                  expenseHead: arg.expenseHead,
                  expenseAmount: arg.expenseAmount,
                  expenseId: arg.expenseId,
                };
              });
              values.expense_list = JSON.stringify(values.expense_list);
              console.log(values);
              props?.expense
                ? props.expenseUpdate(values, props?.expense?._id)
                : props.expenseData(values);
            }}
            validationSchema={expenseEntryFormValidation}
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
              <Form className="form-group mt-5 p-4">
                <FormGroup className="">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">Expense Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Entry Date</Label>
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
                        <Label for="exampleName">Maintanance Ticket ID</Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_maintananceTicketData?.map(
                            (maintananceTicket) => {
                              return {
                                name: maintananceTicket.maintananceTicket_ID,
                                id: maintananceTicket._id,
                              };
                            }
                          )}
                          name={"Maintanance_ticketID"}
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
                        <Label for="exampleName">Remark</Label>
                        <Input
                          type="text"
                          value={values.Expense_Remark}
                          name="Expense_Remark"
                          placeholder="Remark"
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
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Invoice Number</Label>
                        <Input
                          type="text"
                          value={values.expenseInvoiceNumber}
                          name="expenseInvoiceNumber"
                          placeholder="Invoice Number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.expenseInvoiceNumber &&
                          errors.expenseInvoiceNumber && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.expenseInvoiceNumber}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Expense Heading</Label>
                        <Input
                          type="text"
                          name="expense_Heading"
                          value={expenseHeading}
                          placeholder="Expense Heading"
                          onChange={(e) => setExpenseHeading(e.target.value)}
                        />
                        {touched.expense_Heading && errors.expense_Heading && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.expense_Heading}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Amount</Label>
                        <Input
                          type="number"
                          placeholder="Amount"
                          value={expenseAmount}
                          onChange={(e) => setExpenseAmount(e.target.value)}
                        />
                        {touched.expense_amount && errors.expense_amount && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.expense_amount}
                          </span>
                        )}
                      </div>
                      
                      <button
                        type="button"
                        className="btn btn-secondary btn-sm addbtn-expense"
                        disabled={!expenseHeading || !expenseAmount}
                        onClick={() =>
                          addExpense({
                            expenseHead: expenseHeading,
                            expenseAmount: expenseAmount,
                            expenseId: uuidv4(),
                          })
                        }
                      >
                        add
                      </button>
                      </div>
                    
                    <div className="col-md-6 text-left mb-2 mt-4">
                      <Label className="float-left">Upload Scan Copy</Label>
                      <Input
                        type="file"
                        name="invoicePhoto"
                        accept="image/*"
                        onChange={(event) => {
                          setFieldValue(
                            "invoicePhoto",
                            event.currentTarget.files[0]
                          );
                        }}
                      />

                      {touched.invoicePhoto && values.invoicePhoto && (
                        <img
                          src={
                            typeof values.invoicePhoto === "string"
                              ? values.invoicePhoto
                              : URL.createObjectURL(values.invoicePhoto)
                          }
                          alt="no file"
                          height="20"
                        />
                      )}
                    </div>

                    <div className="row">
                      <button
                        className="btn btn-primary Success col-2 mt-5 mb-5 ml-3"
                        type="button"
                        onClick={() => setShowPopUp(true)}
                      >
                        Submit
                      </button>
                      <PoopUp
                        isOpen={showPopup}
                        isClose={setShowPopUp}
                        CRUD_Function={handleSubmit}
                        buttonName={props.expense ? "Update" : "Create"}
                        message={
                          props.expense
                            ? "are you sure want to update"
                            : "are you sure want to create"
                        }
                      />

                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th> Expense Head</th>
                            <th>Expense Amount</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        {expenselist.map((arg, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>{index + 1}</td>

                                <td>{arg.expenseHead}</td>
                                <td>{arg.expenseAmount}</td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      removeExpense(arg.expenseId);
                                    }}
                                  >
                                    delete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </Table>
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
