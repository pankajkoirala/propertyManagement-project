import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { ExpenseEntryFormValidation } from "./../../../utility/validation/expenseEntryFormValidation.js";
import moment from "moment";
import PoopUp from "./../../../shared/popup";
import RegexComponent from "./../../../shared/regexComponent";
import { notification } from "../../../shared/notification.js";

const ExpenseEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
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
    expense_Type: props?.expense?.expense_Type || "",
    property_ID: props?.expense?.property_ID?._id || "",
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
              setLoadingState(true);
              //expense list sending
              values.expense_list = JSON.stringify(
                expenselist.map((arg) => {
                  return {
                    expenseHead: arg.expenseHead,
                    expenseAmount: arg.expenseAmount,
                    expenseId: arg.expenseId,
                  };
                })
              );

              props?.expense
                ? props.expenseUpdate(values, props?.expense?._id)
                : props.expenseData(values);
            }}
            validationSchema={ExpenseEntryFormValidation}
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
                  <div>
                    <div className="text-center">
                      <div className="text-black font-weight-bold">
                        {" "}
                        <h3 className="form-head">Expense Entry Form </h3>
                      </div>
                    </div>
                    <div>
                      {/* <div className="m-4"> */}
                      <div className="row ">
                        <div className="mt-4 col-4">
                          <Label for="exampleName">
                            Entry date
                            <span
                              style={{
                                fontSize: "20px",
                                marginTop: "20px",
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Label>
                          <Input
                            type="date"
                            value={values.expense_EntryDate}
                            name="expense_EntryDate"
                            placeholder="Enter date of Cheque"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.expense_EntryDate &&
                            errors.expense_EntryDate && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.expense_EntryDate}
                              </span>
                            )}
                        </div>

                        <div className="mt-4 col-md-4">
                          <Label for="exampleName">
                            Invoice Number
                            <span
                              style={{
                                fontSize: "20px",
                                marginTop: "20px",
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Label>
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
                        <div className="mt-4 col-md-4">
                          <Label for="exampleSelect">
                            Expense Type
                            <span
                              style={{
                                fontSize: "20px",
                                marginTop: "20px",
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Label>
                          <Input
                            type="select"
                            name="expense_Type"
                            id="exampleSelect"
                            placeholder="Select"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.expense_Type}
                          >
                            <option value="">Select One </option>
                            <option value="Maintanance">Maintanance</option>
                            <option value="Legal">Legal</option>
                            <option value="Brokerage">Brokerage</option>
                            <option value="Utility">Utility</option>
                            <option value="Miscellaneous">Miscellaneous</option>
                          </Input>
                          {touched.expense_Type && errors.expense_Type && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.expense_Type}
                            </span>
                          )}
                        </div>
                        {values.expense_Type !== "Miscellaneous" ? (
                          <div className="mt-4 col-4">
                            <Label for="exampleName">
                              maintanance ticket ID
                              <span
                                style={{
                                  fontSize: "20px",
                                  marginTop: "20px",
                                  color: "red",
                                }}
                              >
                                *
                              </span>
                            </Label>
                            <RegexComponent
                              {...props}
                              setFieldValue={setFieldValue}
                              options={props?.Redux_maintananceTicketData?.map(
                                (maintananceTicket) => {
                                  return {
                                    name: 'PU No-' + maintananceTicket?.MaintanancePropertyID?.unitNo + ' ' + maintananceTicket?.MaintananceCompanyId?.Company_Name,
                                    id: maintananceTicket?._id,
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
                        ) : (
                          ""
                        )}
                        {values.expense_Type !== "Miscellaneous" ? (
                          <>
                            <div className="mt-4 col-4">
                              <Label for="exampleName">
                                property
                                <span
                                  style={{
                                    fontSize: "20px",
                                    marginTop: "20px",
                                    color: "red",
                                  }}
                                >
                                  *
                                </span>
                              </Label>
                              <RegexComponent
                                {...props}
                                setFieldValue={setFieldValue}
                                options={props?.redux_propertyData?.map(
                                  (property) => {


                                    return {
                                      name:
                                        (property?.property_name || '') +
                                        "-" +
                                        ('PU No-' + property?.unitNo),
                                      id: property?._id,
                                    };
                                  }
                                )}
                                name={"property_ID"}
                              />
                              {touched.property_ID && errors.property_ID && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.property_ID}
                                </span>
                              )}
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                        <div className="mt-4 col-md-4">
                          <Label for="exampleName">Remarks</Label>
                          <Input
                            type="text"
                            value={values.Expense_Remark}
                            name="Expense_Remark"
                            placeholder="Remarks"
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
                          <Label for="exampleName">
                            Expense Heading
                            <span
                              style={{
                                fontSize: "20px",
                                marginTop: "20px",
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Label>
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
                          <Label for="exampleName">
                            Amount
                            <span
                              style={{
                                fontSize: "20px",
                                marginTop: "20px",
                                color: "red",
                              }}
                            >
                              *
                            </span>
                          </Label>
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
                    </div>

                    <div className="col-md-6 text-left mb-2 mt-4">
                      <Label className="float-left">
                        Upload Scan Copy
                        <span
                          style={{
                            fontSize: "20px",
                            marginTop: "20px",
                            color: "red",
                          }}
                        >
                          *
                        </span>
                      </Label>
                      <Input
                        type="file"
                        name="invoicePhoto"
                        accept="image/*"
                        onChange={(event) => {
                          if (event.currentTarget.files[0]) {
                            let rn = event.currentTarget.files[0].name;
                            let bn = rn?.split(".");
                            bn = bn[bn?.length - 1];
                            if (
                              bn === "jpg" ||
                              bn === "jpeg" ||
                              bn === "png" ||
                              bn === "JPG" ||
                              bn === "JPEG" ||
                              bn === "PNG"
                            ) {
                              if (event.currentTarget.files[0].size > 1048576) {
                                notification(
                                  "File Size Shouldn't exceed 1.5 MB",
                                  "ERROR"
                                );
                              } else {
                                setFieldValue(
                                  "invoicePhoto",
                                  event.currentTarget.files[0]
                                );
                              }
                            } else {
                              notification(
                                "Please Select JPG, JPEG or PNG Format Only",
                                "ERROR"
                              );
                            }
                          } else {
                            notification("Please Select image", "ERROR");
                          }
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
                        loadingIconState={loadingState}
                        isOpen={showPopup}
                        isClose={setShowPopUp}
                        CRUD_Function={handleSubmit}
                        buttonName={props.expense ? "Update" : "Create"}
                        message={
                          props.expense
                            ? "Are you sure you want to Update this Form"
                            : "Are you sure you want to create this Form"
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
