import React, { useState } from "react";
import "./chequeEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import RegexComponent from "../../../../shared/regexComponent";
import PoopUp from "./../../../../shared/popup";

const ChequeEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  let initialvalue = {
    miscellaneous_amount: props?.Cheque?.miscellaneous_amount || "",
    vat_amount: props?.Cheque?.vat_amount || "",
    cheque_bankName: props?.Cheque?.cheque_bankName || "",
    cheque_issueDate:
      moment(props?.Cheque?.cheque_issueDate).format("YYYY-MM-DD") || "",
    cheque_entryDate:
      moment(props?.Cheque?.cheque_entryDate).format("YYYY-MM-DD") || "",
    cheque_status: props?.Cheque?.cheque_status || "",
    cheque_remarks: props?.Cheque?.cheque_remarks || "",
    cheque_amount: props?.Cheque?.cheque_amount || "",
    cheque_picture: props?.Cheque?.cheque_picture || "",
    cheque_number: props?.Cheque?.cheque_number || "",
    lease_property: props?.Cheque?.lease_property?._id || "",
    cheque_depositeDate:
      moment(props?.Cheque?.cheque_depositeDate).format("YYYY-MM-DD") || "",
    cheque_clearDate: props?.Cheque?.cheque_clearDate || "YYYY-MM-DD",
    cheque_bouncedDate: props?.Cheque?.cheque_bouncedDate || "YYYY-MM-DD",
    cheque_holdDate: props?.Cheque?.cheque_holdDate || "YYYY-MM-DD",
    cheque_recivedDate:
      moment(props?.Cheque?.cheque_recivedDate).format("YYYY-MM-DD") || "",
  };
  console.log(moment());
  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              props?.Cheque
                ? props.ChequeUpdate(values, props?.Cheque?._id)
                : props.ChequeeData(values);
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
                      <h3>Cheque Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Cheque entry Date</Label>
                        <Input
                          type="date"
                          disabled={true}
                          value={values.cheque_entryDate}
                          name="cheque_entryDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_entryDate && errors.cheque_entryDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_entryDate}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Cheque due Date</Label>
                        <Input
                          type="date"
                          value={values.cheque_issueDate}
                          name="cheque_issueDate"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_issueDate && errors.cheque_issueDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_issueDate}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">cheque Recived Date</Label>
                        <Input
                          type="date"
                          value={values.cheque_recivedDate}
                          name="cheque_recivedDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_recivedDate &&
                          errors.cheque_recivedDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.cheque_recivedDate}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">cheque Deposited Date</Label>
                        <Input
                          type="date"
                          value={values.cheque_depositeDate}
                          name="cheque_depositeDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_depositeDate &&
                          errors.cheque_depositeDate && (
                            <span
                              // className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.cheque_depositeDate}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">cheque number</Label>
                        <Input
                          type="number"
                          value={values.cheque_number}
                          name="cheque_number"
                          placeholder="Cheque Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_number && errors.cheque_number && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_number}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Cheque Amount</Label>
                        <Input
                          type="number"
                          value={values.cheque_amount}
                          name="cheque_amount"
                          placeholder="Cheque Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_amount && errors.cheque_amount && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_amount}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Vat Amount </Label>
                        <Input
                          type="number"
                          value={values.vat_amount}
                          name="vat_amount"
                          placeholder="Cheque Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.vat_amount && errors.vat_amount && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.vat_amount}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">miscellaneous Amount</Label>
                        <Input
                          type="number"
                          value={values.miscellaneous_amount}
                          name="miscellaneous_amount"
                          placeholder="Cheque Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.miscellaneous_amount &&
                          errors.miscellaneous_amount && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.miscellaneous_amount}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName"> bank Name</Label>
                        <Input
                          type="text"
                          value={values.cheque_bankName}
                          name="cheque_bankName"
                          placeholder="Bank name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_bankName && errors.cheque_bankName && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_bankName}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleSelect">Status</Label>
                        <Input
                          type="select"
                          name="cheque_status"
                          id="exampleSelect"
                          placeholder="Select Status of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.cheque_status}
                        >
                          <option value="">Select any one</option>
                          <option value="Not Deposited">Not Deposited</option>
                          <option value="Pending">Pending</option>
                          <option value="Hold">Hold</option>
                          <option value="Cleared">Cleared</option>
                          <option value="Bounce">bounce</option>
                        </Input>

                        {touched.cheque_status && errors.cheque_status && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_status}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleSelect">lease number</Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_leaseData?.map((lease) => {
                            return {
                              name: lease.LeaseId,

                              id: lease._id,
                            };
                          })}
                          name={"lease_property"}
                        />

                        {touched.lease_property && errors.lease_property && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.lease_property}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">cheque Hold Date</Label>
                        <Input
                          type="text"
                          value={values.cheque_holdDate}
                          name="cheque_holdDate"
                          placeholder="YYYY-MM-DD"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_holdDate && errors.cheque_holdDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_holdDate}
                          </span>
                        )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">cheque cleared Date</Label>
                        <Input
                          type="text"
                          value={values.cheque_clearDate}
                          name="cheque_clearDate"
                          placeholder="YYYY-MM-DD"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_clearDate && errors.cheque_clearDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_clearDate}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">cheque bounced Date</Label>
                        <Input
                          type="text"
                          value={values.cheque_bouncedDate}
                          name="cheque_bouncedDate"
                          placeholder="YYYY-MM-DD"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_bouncedDate &&
                          errors.cheque_bouncedDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.cheque_bouncedDate}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Remarks</Label>
                        <Input
                          type="text"
                          value={values.cheque_remarks}
                          name="cheque_remarks"
                          placeholder="Remarks"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.cheque_remarks && errors.cheque_remarks && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.cheque_remarks}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 text-left mb-2 mt-4">
                        <Label className="float-left">Upload Scan Copy</Label>
                        <Input
                          type="file"
                          name="cheque_picture"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue(
                              "cheque_picture",
                              event.currentTarget.files[0]
                            );
                          }}
                        />

                        {touched.cheque_picture && values.cheque_picture && (
                          <img
                            src={
                              typeof values.cheque_picture === "string"
                                ? values.cheque_picture
                                : URL.createObjectURL(values.cheque_picture)
                            }
                            alt="no file"
                            height="20"
                          />
                        )}
                      </div>
                      <button
                        className="Success col-4 mt-2"
                        type="button"
                        onClick={() => setShowPopUp(true)}
                      >
                        Add Cheque
                      </button>
                      <PoopUp
                        isOpen={showPopup}
                        isClose={setShowPopUp}
                        CRUD_Function={handleSubmit}
                        buttonName={props.Cheque ? "Update" : "Create"}
                        message={
                          props.Cheque
                            ? "are you sure want to update"
                            : "are you sure want to create"
                        }
                      />
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

export default ChequeEntry;
