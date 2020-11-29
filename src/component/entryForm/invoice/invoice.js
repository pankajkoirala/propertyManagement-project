import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Input, Label, Table } from "reactstrap";
import moment from "moment";

let InvoiceComponent = (props) => {
  const [inWord, setInWord] = useState("");
  const [invoiceID, setInvoiceID] = useState(
    "INVOICE-" + (Math.random() * 900000).toFixed(0)
  );

  console.log(
    "🚀 ~ file: invoice.js ~ line 15 ~ InvoiceComponent ~ INVOICE",
    props
  );
  let initialvalue = {
    chequeMongoId: props.Cheque._id,
    invoicePhoto: "",
    invoiceIssueDate: moment().format("YYYY-MM-DD"),
    chequeNumber: props?.Cheque?.cheque_number,
    lease_id: props?.Cheque?.lease_property?.LeaseId,
    InvoiceId: invoiceID,
  };
  let Invoices = [1];
  //total amount in words function
  var a = [
    "",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen ",
    "eighteen ",
    "nineteen ",
  ];
  var b = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function inWords(num) {
    if ((num = num.toString()).length > 9) return "overflow";
    let n = ("000000000" + num)
      .substr(-9)
      .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str +=
      n[1] !== 0
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";
    str +=
      n[2] !== 0
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    str +=
      n[3] !== 0
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    str +=
      n[4] !== 0
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    str +=
      n[5] !== 0
        ? (str !== "" ? "and " : "") +
          (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) +
          "only "
        : "";
    return setInWord(str);
  }

  return (
    <div>
      <div>
        <div className="PropertyFormEntry">
          <div>
            <Formik
              initialValues={initialvalue}
              onSubmit={(values) => {
                props.invoicePost(values);
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
                <Form className="">
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
                        src={URL.createObjectURL(values.invoicePhoto)}
                        alt="no file"
                        height="20"
                      />
                    )}
                  </div>
                  {Invoices.map((inv, index) => {
                    return (
                      <div
                        style={{ marginTop: "30px", marginBottom: "30px" }}
                        key={index}
                      >
                        <div>
                          <h1 className="text-center">Graphene</h1>
                          <div className="text-center font-weight-bold">
                            Head Office : Graphene Pvt.Ltd,-Tripureshwor
                          </div>
                          <div className="text-center font-weight-bold">
                            Kathmandu,Nepal
                            Tel:01-2345678,9864537676,Website:Graphene@info.com.np
                          </div>
                          <div className="d-flex justify-content-between mx-1 mt-4">
                            <div>
                              <div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Invoice No :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    {props?.redux_InvoiceData?.some(
                                      (invoice) =>
                                        invoice?.chequeMongoId ===
                                        props?.Cheque?._id
                                    ) === true
                                      ? "Invoice Already Printed"
                                      : invoiceID}
                                  </span>
                                </div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Vat Regd No :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    123
                                  </span>
                                </div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Tanent Name :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    {props?.tenant?.tenant_Name}
                                  </span>
                                </div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Location :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    {props?.tenant?.area +
                                      "," +
                                      props?.tenant?.city +
                                      "," +
                                      props?.tenant?.country}
                                  </span>
                                </div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Lease Id :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    {props?.Cheque?.lease_property?.LeaseId}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Invoice Issue Date :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    {moment().format("YYYY-MM-DD")}
                                  </span>
                                </div>
                                <div>
                                  <span className="font-weight-bold mx-1">
                                    Cheque Cleared Date :
                                  </span>
                                  <span className="font-weight-bold mx-1">
                                    {props?.Cheque?.cheque_clearDate}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ height: "auto" }} className="row mx-1">
                          <b className="col-1  border-left border-dark border-bottom border-top">
                            SN
                          </b>
                          <b className="col-5  border-left border-dark border-bottom border-top">
                            particular
                          </b>
                          <b className="col-2 border-left border-dark border-bottom border-top">
                            Basic Amount
                          </b>
                          <b className="col-2  border-left border-dark border-bottom border-top">
                            Discount
                          </b>
                          <b className="col-2  border-left border-right border-dark border-bottom border-top">
                            Amount
                          </b>
                        </div>
                        <div className="row mx-1 ">
                          <b className="col-1 border-left border-dark  ">1</b>
                          <b className="col-5 border-left border-dark   ">
                            Rent Amount
                          </b>
                          <b className="col-2 border-left border-dark  ">
                            {props?.Cheque?.cheque_amount}
                          </b>
                          <b className="col-2 border-left border-dark   ">0 </b>
                          <b className="col-2 border-left border-right  border-dark ">
                            {props?.Cheque?.cheque_amount}
                          </b>
                        </div>
                        <div style={{ height: "200px" }} className="row mx-1 ">
                          <b className="col-1  border-left border-dark border-bottom ">
                            2
                          </b>

                          <b className="col-5 border-left border-dark  border-bottom ">
                            Miscelleneous Amount
                          </b>
                          <b className="col-2  border-left border-dark  border-bottom ">
                            {props?.Cheque?.miscellaneous_amount}
                          </b>
                          <b className="col-2  border-left border-dark border-bottom ">
                            0
                          </b>
                          <b className="col-2  border-left border-dark border-right border-bottom ">
                            {props?.Cheque?.miscellaneous_amount}
                          </b>
                        </div>
                        <div
                          style={{ height: "auto" }}
                          className="row mx-1 border-left border-dark border-right "
                        >
                          <b className="col-6 "></b>
                          <b className="col-4  border-left border-dark border-right border-bottom ">
                            Total Amount
                          </b>
                          <b className="col-2  border-dark  border-bottom ">
                            {props?.Cheque?.miscellaneous_amount +
                              props?.Cheque?.cheque_amount}
                          </b>
                        </div>
                        <div
                          style={{ height: "auto" }}
                          className="row mx-1 border-left border-dark border-right "
                        >
                          <b className="col-6 "></b>
                          <b className="col-4 border-left border-dark border-right border-bottom ">
                            Vat Amount(5%)
                          </b>
                          <b className="col-2  border-dark border-bottom ">
                            {props?.Cheque?.vat_amount}
                          </b>
                        </div>
                        <div
                          style={{ height: "auto" }}
                          className="row mx-1 border-left border-dark border-right border-bottom"
                        >
                          <b className="col-6 "></b>
                          <b className="col-4  border-left border-dark border-right  ">
                            Amount With VAT
                          </b>
                          <b className="col-2 border-dark">
                            {
                              (inWords(
                                props?.Cheque?.vat_amount +
                                  props?.Cheque?.miscellaneous_amount +
                                  props?.Cheque?.cheque_amount
                              ),
                              props?.Cheque?.vat_amount +
                                props?.Cheque?.miscellaneous_amount +
                                props?.Cheque?.cheque_amount)
                            }
                          </b>
                        </div>
                        <div
                          style={{ height: "auto" }}
                          className="row mx-1 border-left border-dark border-right border-bottom"
                        >
                          <b className="col-12 ">InWord Rs {inWord}</b>
                        </div>
                        <div
                          style={{
                            fontWeight: "bold",
                            marginTop: "100px",
                          }}
                        >
                          <div>.................</div>
                          <div>Signature</div>
                        </div>
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    style={{
                      backgroundColor: "blue",
                      borderRadius: "20px",
                      margin: "10px",
                      height: "40px",
                      width: "150px",
                      color: "white",
                      fontWeight: "bold",
                    }}
                    onClick={() => props.setPrintInvoice(!props.printInvoice)}
                  >
                    cancle
                  </button>
                  <button
                    style={
                      props?.redux_InvoiceData?.some(
                        (invoice) =>
                          invoice?.chequeMongoId === props?.Cheque?._id
                      ) === true
                        ? { visibility: "hidden" }
                        : {
                            visibility: "visible",
                            backgroundColor: "blue",
                            borderRadius: "20px",
                            margin: "10px",
                            height: "40px",
                            width: "150px",
                            color: "white",
                            fontWeight: "bold",
                          }
                    }
                    type="submit"
                    onClick={handleSubmit}
                  >
                    save
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;