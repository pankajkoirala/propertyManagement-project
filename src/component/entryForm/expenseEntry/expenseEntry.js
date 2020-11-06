import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";

const ExpenseEntry = (props) => {
  const [expenseHeading, setExpenseHeading] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [deleteData, setdeleteData] = useState("");
  const [expenselist, setexpenselist] = useState([]);

  let filterExpenseList = expenselist.filter(
    (arg) => arg.expenseHead !== deleteData
  );
  let timeout = () => {
    setTimeout(() => {
      setdeleteData("");
    }, 5000);
  };

  let ExpenseData = (data) => {
    expenselist.push(data);
    setExpenseAmount("");
    setExpenseHeading("");
  };
  let deleteItem = (id) => {
    setdeleteData(id);
  };

  let initialvalue = {
    expense_list: expenselist,
    expense_EntryDate: "",
    Maintanance_ticketID: "",
    Expense_Remark: "",
  };

  console.log("pankajkoirala", filterExpenseList);
  console.log("deleteData", deleteData);

  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
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
                          name="expense_amount"
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
                        //disabled={!expenseHeading || !expenseAmount}
                        onClick={() =>
                          ExpenseData({
                            expenseHead: expenseHeading,
                            expenseAmount: expenseAmount,
                          })
                        }
                      >
                        add
                      </button>
                    </div>

                    <div className="row">
                      <button
                        className="Success col-4 mt-2"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        submit
                      </button>

                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th> expense heade</th>
                            <th>expense amount</th>
                            <th>delete</th>
                          </tr>
                        </thead>
                        {filterExpenseList.map((arg, index) => {
                          return (
                            <tbody key={index}>
                              <tr>
                                <td>{index + 1}</td>

                                <td>{arg.expenseHead}</td>
                                <td>{arg.expenseAmount}</td>
                                <td>
                                  <button
                                    type="button"
                                    onClick={
                                      (() => deleteItem(arg.expenseHead),
                                      timeout())
                                    }
                                  >
                                    delete
                                  </button>{" "}
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
