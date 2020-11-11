import React from "react";
import "./chequeEntryForm.css";

import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import { notification } from "../../../../shared/notification";
import RegexComponent from "../../../../shared/regexComponent";

const ChequeEntry = (props) => {
  let initialvalue = {
    cheque_bankName: props?.Cheque?.cheque_bankName || "",
    cheque_issueDate:
      moment(props?.Cheque?.cheque_issueDate).format("YYYY-MM-DD") || "",
    cheque_entryDate:
      moment(props?.Cheque?.cheque_issueDate).format("YYYY-MM-DD") || "",
    cheque_status: props?.Cheque?.cheque_status || "",
    cheque_remarks: props?.Cheque?.cheque_remarks || "",
    cheque_amount: props?.Cheque?.cheque_amount || "",
    cheque_picture: props?.Cheque?.cheque_picture || "",
    cheque_number: props?.Cheque?.cheque_number || "",
    lease_property: props?.Cheque?.lease_property._id || "",
  };
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
                          placeholder="Enter date of Cheque"
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
                        <Label for="exampleName">Amount</Label>
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
                          <option value="Cleared">Cleared</option>
                          <option value="Pending">Pending</option>
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
                            alt="no picture"
                            height="20"
                          />
                        )}
                      </div>
                      <button
                        className="Success col-4 mt-2"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Add Cheque
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

export default ChequeEntry;
