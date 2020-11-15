import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
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

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">invoice number</Label>
                        <Input
                          type="text"
                          value={values.expenseInvoiceNumber}
                          name="expenseInvoiceNumber"
                          placeholder="Bank name"
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
                        <Label for="exampleName">expense heading</Label>
                        <Input
                          type="text"
                          name="expense_Heading"
                          value={expenseHeading}
                          placeholder="Cheque Amount"
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
                        <Label for="exampleName">amount</Label>
                        <Input
                          type="number"
                          placeholder="Cheque Amount"
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

                    <div className="row">
                      <button
                        className="Success col-4 mt-2"
                        type="button"
                        onClick={() => setShowPopUp(true)}
                      >
                        submit
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
                            <th> expense heade</th>
                            <th>expense amount</th>
                            <th>delete</th>
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