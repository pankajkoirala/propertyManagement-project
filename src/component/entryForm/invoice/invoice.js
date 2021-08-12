import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Input, Label } from "reactstrap";
import moment from "moment";
import PoopUp from "../../../shared/popup";
import { Link } from "@material-ui/core";
import ReactToPdf from "react-to-pdf";
import "./invoice.css";
let InvoiceComponent = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [inWord, setInWord] = useState("");
  const [invoiceID] = useState(
    "INVOICE-" + (Math.random() * 900000).toFixed(0)
  );
  let initialvalue = {
    chequeMongoId: props.Cheque._id,
    invoicePhoto: "",
    invoiceIssueDate: moment().format("YYYY-MM-DD"),
    chequeNumber: props?.Cheque?.cheque_number,
    lease_id: props?.Cheque?.lease_property?.LeaseId,
    InvoiceId: "INVOICE-",
    propertyId:
      props?.Cheque?.property_id?.property_type +
      "/" +
      props?.Cheque?.property_id?.referenceNO,
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
      n[1] !== "0".padStart(2, 0)
        ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
        : "";

    str +=
      n[2] !== "0".padStart(2, 0)
        ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
        : "";
    str +=
      n[3] !== "0".padStart(2, 0)
        ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
        : "";
    str +=
      n[4] !== "0"
        ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
        : "";
    str +=
      (n[5] !== "0".padStart(2, 0)
        ? (str !== "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]])
        : "") + "Only";
    return setInWord(str);
  }

  const options = {
    orientation: "landscape",

    format: [900, 900],
  };



  return (
    <div>
      <div>
        <div className="PropertyFormEntry">
          <div>
            <Formik
              initialValues={initialvalue}
              onSubmit={(values) => {
                props.invoicePost(values);
                setLoadingState(true);
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
                  {/* .................................. */}
                  {Invoices.map((inv, index) => {
                    return (
                      <ReactToPdf options={options}>
                        {({ toPdf, targetRef }) => (
                          <div
                            style={{
                              marginTop: "30px",
                              height: 700,
                              width: 1150,
                            }}
                            ref={targetRef}
                          >
                            <Link
                              style={{ float: "right", marginLeft: "10px" }}
                              type="button"
                              onClick={toPdf}
                            >
                              Download
                            </Link>
                            <div
                              style={{
                                marginTop: "30px",
                                marginBottom: "30px",
                              }}
                              key={index}
                            >
                              <div style={{ marginTop: "40px" }}>
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
                                          {
                                            props?.Cheque?.lease_property
                                              ?.LeaseId
                                          }
                                        </span>
                                      </div>
                                      <div>
                                        <span className="font-weight-bold mx-1">
                                          Property :
                                        </span>
                                        <span className="font-weight-bold mx-1">
                                          {props?.Cheque?.property_id
                                            ?.property_type +
                                            "/" +
                                            props?.Cheque?.property_id
                                              ?.referenceNO}
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
                              <div
                                style={{ height: "auto" }}
                                className="row mx-1"
                              >
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
                                <b className="col-1 border-left border-dark  ">
                                  1
                                </b>
                                <b className="col-5 border-left border-dark   ">
                                  Rent Amount
                                </b>
                                <b className="col-2 border-left border-dark  ">
                                  {props?.Cheque?.cheque_amount}
                                </b>
                                <b className="col-2 border-left border-dark   ">
                                  0{" "}
                                </b>
                                <b className="col-2 border-left border-right  border-dark ">
                                  {props?.Cheque?.cheque_amount}
                                </b>
                              </div>
                              <div
                                style={{ height: "200px" }}
                                className="row mx-1 "
                              >
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
                                  AED.
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
                                  Vat Amount
                                </b>
                                <b className="col-2  border-dark border-bottom ">
                                  AED.{props?.Cheque?.vat_amount}
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
                                  AED.
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
                                <b className="col-12 ">In Word Rs: {inWord}</b>
                              </div>
                              <div
                                style={{
                                  fontWeight: "bold",
                                  marginTop: "100px",
                                  marginLeft: "40px",
                                }}
                              >
                                <div>.................</div>
                                <div>Signature</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </ReactToPdf>
                    );
                  })}
                  <div style={{ marginTop: "100px" }} className="row">
                    <div className="mt-4 col-5">
                      <Label className="font-weight-bold">Invoice No</Label>
                      <Input
                        type="text"
                        name="InvoiceId"
                        value={values.InvoiceId}
                        placeholder="Expense Heading"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {touched.InvoiceId && errors.InvoiceId && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.InvoiceId}
                        </span>
                      )}
                    </div>
                    <div
                      style={{ margin: "10px" }}
                      className=" text-left col-5 "
                    >
                      <Label className="float-left font-weight-bold">
                        Upload Scan Copy Of Invoice
                      </Label>
                      <Input
                        style={{ padding: "20px" }}
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
                  </div>

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
                    cancel
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
                    type="button"
                    onClick={() => setShowPopUp(true)}
                  >
                    save
                  </button>
                  <PoopUp
                    loadingIconState={loadingState}
                    isOpen={showPopup}
                    isClose={setShowPopUp}
                    CRUD_Function={handleSubmit}
                    buttonName={props.BrokerCompany ? "Update" : "Create"}
                    message={
                      props.BrokerCompany
                        ? "Are you sure you want to Update this Form"
                        : "Are you sure you want to create this Form"
                    }
                  />
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


{/* <ReactToPdf options={options}>
{({ toPdf, targetRef }) => (

  <div ref={targetRef} class="page-content container">
    <Link
      style={{ float: "right", marginLeft: "10px" }}
      type="button"
      onClick={toPdf}
    >
      Download
    </Link>
    <div class="page-header text-blue-d2">
      <h1 class="page-title text-secondary-d1">
        Invoice
        <small class="page-info">
          <i class="fa fa-angle-double-right text-80"></i>
          ID: #111-222
        </small>
      </h1>

      <div class="page-tools">
        <div class="action-buttons">
          <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
            <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
            Print
          </a>
          <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
            <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
            Export
          </a>
        </div>
      </div>
    </div>

    <div class="container px-0">
      <div class="row mt-4">
        <div class="col-12 col-lg-10 offset-lg-1">
          <div class="row">
            <div class="col-12">
              <div class="text-center text-150">
                <i class="fa fa-book fa-2x text-success-m2 mr-1"></i>
                <span class="text-default-d3">Bootdey.com</span>
              </div>
            </div>
          </div>

          <hr class="row brc-default-l1 mx-n1 mb-4" />

          <div class="row">
            <div class="col-sm-6">
              <div>
                <span class="text-sm text-grey-m2 align-middle">To:</span>
                <span class="text-600 text-110 text-blue align-middle">Alex Doe</span>
              </div>
              <div class="text-grey-m2">
                <div class="my-1">
                  Street, City
                </div>
                <div class="my-1">
                  State, Country
                </div>
                <div class="my-1"><i class="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">111-111-111</b></div>
              </div>
            </div>

            <div class="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
              <hr class="d-sm-none" />
              <div class="text-grey-m2">
                <div class="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                  Invoice
                </div>

                <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> #111-222</div>

                <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> Oct 12, 2019</div>

                <div class="my-2"><i class="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge badge-warning badge-pill px-25">Unpaid</span></div>
              </div>
            </div>
          </div>

          <div class="mt-4">
            <div class="row text-600 text-white bgc-default-tp1 py-25">
              <div class="d-none d-sm-block col-1">#</div>
              <div class="col-9 col-sm-5">Description</div>
              <div class="d-none d-sm-block col-4 col-sm-2">Qty</div>
              <div class="d-none d-sm-block col-sm-2">Unit Price</div>
              <div class="col-2">Amount</div>
            </div>

            <div class="text-95 text-secondary-d3">
              <div class="row mb-2 mb-sm-0 py-25">
                <div class="d-none d-sm-block col-1">1</div>
                <div class="col-9 col-sm-5">Domain registration</div>
                <div class="d-none d-sm-block col-2">2</div>
                <div class="d-none d-sm-block col-2 text-95">$10</div>
                <div class="col-2 text-secondary-d2">$20</div>
              </div>

              <div class="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                <div class="d-none d-sm-block col-1">2</div>
                <div class="col-9 col-sm-5">Web hosting</div>
                <div class="d-none d-sm-block col-2">1</div>
                <div class="d-none d-sm-block col-2 text-95">$15</div>
                <div class="col-2 text-secondary-d2">$15</div>
              </div>

              <div class="row mb-2 mb-sm-0 py-25">
                <div class="d-none d-sm-block col-1">3</div>
                <div class="col-9 col-sm-5">Software development</div>
                <div class="d-none d-sm-block col-2">--</div>
                <div class="d-none d-sm-block col-2 text-95">$1,000</div>
                <div class="col-2 text-secondary-d2">$1,000</div>
              </div>

              <div class="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                <div class="d-none d-sm-block col-1">4</div>
                <div class="col-9 col-sm-5">Consulting</div>
                <div class="d-none d-sm-block col-2">1 Year</div>
                <div class="d-none d-sm-block col-2 text-95">$500</div>
                <div class="col-2 text-secondary-d2">$500</div>
              </div>
            </div>

            <div class="row border-b-2 brc-default-l2"></div>


            <div class="table-responsive">
              <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                <thead class="bg-none bgc-default-tp1">
                  <tr class="text-white">
                    <th class="opacity-2">#</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th width="140">Amount</th>
                  </tr>
                </thead>

                <tbody class="text-95 text-secondary-d3">
                  <tr></tr>
                  <tr>
                    <td>1</td>
                    <td>Domain registration</td>
                    <td>2</td>
                    <td class="text-95">$10</td>
                    <td class="text-secondary-d2">$20</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="row mt-3">
              <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                Extra note such as company or payment information...
              </div>

              <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                <div class="row my-2">
                  <div class="col-7 text-right">
                    SubTotal
                  </div>
                  <div class="col-5">
                    <span class="text-120 text-secondary-d1">$2,250</span>
                  </div>
                </div>

                <div class="row my-2">
                  <div class="col-7 text-right">
                    Tax (10%)
                  </div>
                  <div class="col-5">
                    <span class="text-110 text-secondary-d1">$225</span>
                  </div>
                </div>

                <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                  <div class="col-7 text-right">
                    Total Amount
                  </div>
                  <div class="col-5">
                    <span class="text-150 text-success-d3 opacity-2">$2,475</span>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div>
              <span class="text-secondary-d1 text-105">Thank you for your business</span>
              <a href="#" class="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">Pay Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

)}
</ReactToPdf> */}
