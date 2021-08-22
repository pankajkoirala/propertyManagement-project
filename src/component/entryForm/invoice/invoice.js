import React, { useState } from "react";
import { Formik } from "formik";
import { Form, Input, Label } from "reactstrap";
import moment from "moment";
import PoopUp from "../../../shared/popup";
import { Link } from "@material-ui/core";
import ReactToPdf from "react-to-pdf";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
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
    propertyId: props?.Cheque?.property_id?.property_name,
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


  const imageDown = (e) => {
    var node = document.getElementById('my-node');

    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        var a = document.createElement("a"); //Create <a>
        a.href = img.src//Image Base64 Goes here
        console.log("🚀 ~ file: invoice.js ~ line 117 ~ a.href", a.href)
        a.download = "Image.png"; //File name Here
        a.click(); //Downloaded file
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  const imageURL = async (e) => {
    var node = document.getElementById('my-node');

    const dataUrl = await htmlToImage.toPng(node)

    var img = new Image();
    img.src = dataUrl;
    var a = document.createElement("a"); //Create <a>
    a.href = img.src//Image Base64 Goes here
    console.log("🚀 ~ file: invoice.js ~ line 117 ~ a.href", a.href)
    // a.download = "Image.png"; //File name Here
    // a.click(); //Downloaded file
    //----------------------------------------------------
    let value = {
      chequeMongoId: props.Cheque._id,
      invoicePhoto: a.href,
      invoiceIssueDate: moment().format("YYYY-MM-DD"),
      chequeNumber: props?.Cheque?.cheque_number,
      lease_id: props?.Cheque?.lease_property?.LeaseId,
      InvoiceId: invoiceID,
      propertyId: props?.Cheque?.property_id?.property_name,
    };

    props.invoicePost(value);
    setLoadingState(true);

  }
  return (
    <div id="my-node">

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
                              onClick={(e) => imageDown(e)}
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


                              <div>
                                To,<br />
                                {props?.tenant?.tenant_Name} <br />
                                {props?.tenant?.area
                                },<br />
                                DIFC,<br />
                                Dubai,U.A.E <br />
                                TRN: 1100250024500003
                              </div>
                              <table className='col-sm-12 border-dark border'>
                                <thead className='text-center'>
                                  <th className='border-right border-dark'>SN</th>
                                  <th className='border-right border-left border-dark'>Description of Goods/services</th>
                                  <th className='border-right border-left border-dark'>Unit/Qty</th>
                                  <th className='border-right border-left border-dark'>Price Per Unit</th>
                                  <th className='border-left border-dark'>Amount (AED)</th>
                                </thead>
                                <tbody className='border-dark border'>
                                  <tr className='' >
                                    <td className=' text-center border-right border-dark'>1</td>
                                    <td className='border-right  border-left border-dark pl-2'>Rent for 2021 contarct period (date) to (date)</td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className=' border-left text-center  border-dark'>{props?.Cheque?.cheque_amount}</td>
                                  </tr>
                                  <tr height='200px' >
                                    <td className=' text-center border-right border-dark'></td>
                                    <td className='border-right  border-left border-dark pl-2'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className=' border-left text-center  border-dark'></td>
                                  </tr>
                                  <tr height='20px' className='border-top border-dark'>
                                    <td className=' text-center border-right border-dark'></td>
                                    <td className='border-right  border-left border-dark pl-2'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className=' border-left text-center  border-dark'>{props?.Cheque?.cheque_amount}</td>
                                  </tr>
                                  <tr height='20px' className='border-top border-dark'>
                                    <td className='border-right  border-left border-dark pl-2'></td>
                                    <td className='pl-4 border-right border-dark'>Vat @5%</td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className=' border-left text-center  border-dark'></td>
                                    <td className='border-right text-center border-left border-dark'>{props?.Cheque?.vat_amount}</td>
                                  </tr>
                                  <tr height='20px' className='border-top border-dark'>
                                    <td className='border-right  border-left border-dark pl-2'></td>
                                    <td className='pl-4 border-right border-dark'>Total</td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className=' border-left text-center  border-dark'></td>
                                    <td className='border-right text-center border-left border-dark'>{props?.Cheque?.cheque_amount + props?.Cheque?.vat_amount}</td>
                                  </tr>

                                  <tr height='20px' className='border-top border-dark'>
                                    <td className=' text-center border-right border-dark'></td>
                                    <td className='border-right  border-left border-dark pl-2'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className='border-right text-center border-left border-dark'></td>
                                    <td className=' border-left text-center  border-dark'></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )
                        }
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
    </div >

  );
};

export default InvoiceComponent;


