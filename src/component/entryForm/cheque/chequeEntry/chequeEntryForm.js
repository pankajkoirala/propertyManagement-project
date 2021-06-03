import React, { useState } from "react";
import "./chequeEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import RegexComponent from "../../../../shared/regexComponent";
import {
  chequeEntryFormValidation,
  cashEntryFormValidation,
} from "./../../../../utility/validation/chequeEntryFormValidation.js";
import PoopUp from "./../../../../shared/popup";

const ChequeEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [transectionType, setTransectionType] = useState("Cash");

  let initialvalue = {
    miscellaneous_amount: props?.Cheque?.miscellaneous_amount || "",
    vat_amount: props?.Cheque?.vat_amount || "",
    cheque_bankName: props?.Cheque?.cheque_bankName || "",
    cheque_issueDate: props?.Cheque?.cheque_issueDate || "",
    entryDate: props?.Cheque?.entryDate || "",
    cheque_status: props?.Cheque?.cheque_status || "",
    cheque_remarks: props?.Cheque?.cheque_remarks || "",
    cheque_amount: props?.Cheque?.cheque_amount || "",
    securityDeposite: props?.Cheque?.securityDeposite || "",
    cheque_picture_front: props?.Cheque?.cheque_picture_front || "",
    cheque_picture_back: props?.Cheque?.cheque_picture_back || "",
    cheque_number: props?.Cheque?.cheque_number || "",
    lease_property: props?.Cheque?.lease_property?._id || "",
    property_id: props?.Cheque?.property_id?._id || "",
    cheque_depositeDate: props?.Cheque?.cheque_depositeDate || "",
    cheque_clearDate: props?.Cheque?.cheque_clearDate || "YYYY-MM-DD",
    cheque_bouncedDate: props?.Cheque?.cheque_bouncedDate || "YYYY-MM-DD",
    cheque_holdDate: props?.Cheque?.cheque_holdDate || "YYYY-MM-DD",
    cheque_recivedDate: props?.Cheque?.cheque_recivedDate || "",
    ChequeListNo: props?.Cheque?.cheque_holdDate || "",
    Transaction_Type: props?.Cheque?.Transaction_Type || "",
    depositeBank: props?.Cheque?.depositeBank || "",
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
              setLoadingState(true);
            }}
            validationSchema={ (props?.Cheque
              ? props?.Cheque?.Transaction_Type
              : transectionType) ==='Cash'?cashEntryFormValidation:chequeEntryFormValidation}
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
              <Form className="form-group m-4 p-5">
                <FormGroup className="">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      <h3 className="form-head">Cheque Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-md-3">
                        <Label for="exampleSelect">Transaction Type<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="select"
                          name="Transaction_Type"
                          id="exampleSelect"
                          placeholder="Select"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          onClick={(e) => setTransectionType(e.target.value)}
                          value={values.Transaction_Type}
                        >
                          <option value="">Select One </option>
                          <option value="Cash">Cash</option>
                          <option value="Cheque">Cheque</option>
                        </Input>
                        {touched.Transaction_Type && errors.Transaction_Type && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.Transaction_Type}
                            
                          </span>
                        )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName"> Entry Date<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="date"
                          value={moment(values.entryDate).format("YYYY-MM-DD")}
                          name="entryDate"
                          placeholder="Cheque Entry Date"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.entryDate && errors.entryDate && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.entryDate}
                          </span>
                        )}
                      </div>

                      {values.Transaction_Type === "Cheque" && (
                        <>
                          <div className="mt-4 col-md-3">
                            <Label for="exampleName">Cheque Issue Date<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="date"
                              value={moment(values.cheque_issueDate).format(
                                "YYYY-MM-DD"
                              )}
                              placeholder="Cheque Issue Date"
                              name="cheque_issueDate"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                            {touched.cheque_issueDate &&
                              errors.cheque_issueDate && (
                                <span
                                  className="text-danger col-md-12 text-left mb-2"
                                  style={{ fontSize: 12 }}
                                >
                                  {errors.cheque_issueDate}
                                </span>
                              )}
                          </div>

                          <div className="mt-4 col-md-3">
                            <Label for="exampleName">
                              Cheque Deposited Date
                            <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="date"
                              value={moment(values.cheque_depositeDate).format(
                                "YYYY-MM-DD"
                              )}
                              name="cheque_depositeDate"
                              placeholder="Enter Deposite Date"
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
                            <Label for="exampleName">Cheque Number<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="number"
                              value={values.cheque_number}
                              name="cheque_number"
                              placeholder="Cheque Number"
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
                            <Label for="exampleName">Cheque Date<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="date"
                              value={moment(values.cheque_recivedDate).format(
                                "YYYY-MM-DD"
                              )}
                              name="cheque_recivedDate"
                              placeholder="Enter Recived Date"
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
                            <Label for="exampleName">Bank Name<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="text"
                              value={values.cheque_bankName}
                              name="cheque_bankName"
                              placeholder="Bank Name"
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
                        </>
                      )}
                        <div className="mt-4 col-md-3">
                          <Label for="exampleName"> Deposite Bank<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                          <Input
                            type="text"
                            value={values.depositeBank}
                            name="depositeBank"
                            placeholder="Deposite Bank"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.depositeBank && errors.depositeBank && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.depositeBank}
                            </span>
                          )}
                        </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName"> Amount<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="number"
                          value={values.cheque_amount}
                          name="cheque_amount"
                          placeholder="Amount"
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
                        <Label for="exampleName">VAT Amount <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="number"
                          value={values.vat_amount}
                          name="vat_amount"
                          placeholder="VAT Amount"
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
                        <Label for="exampleName">Miscellaneous Amount<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="number"
                          value={values.miscellaneous_amount}
                          name="miscellaneous_amount"
                          placeholder="Miscellaneous Amount"
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
                        <Label for="exampleSelect">Security Deposit<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="number"
                          name="securityDeposite"
                          placeholder="Security Deposite"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.securityDeposite}
                        ></Input>
                        {touched.securityDeposite && errors.securityDeposite && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.securityDeposite}
                          </span>
                        )}
                      </div>

                      {values.Transaction_Type === "Cheque" && (
                        <>
                          <div className="mt-4 col-md-3">
                            <Label for="exampleSelect">Status<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="select"
                              name="cheque_status"
                              id="exampleSelect"
                              placeholder="Cheque Status "
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.cheque_status}
                            >
                              <option value="">Select any one</option>
                              <option value="PDC Cheque"> PDC Cheque</option>
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
                          {values.cheque_status === "Hold" && (
                            <div className="mt-4 col-md-3">
                              <Label for="exampleName">Cheque Hold Date<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                              <Input
                                type="date"
                                value={moment(values.cheque_holdDate).format(
                                  "YYYY-MM-DD"
                                )}
                                name="cheque_holdDate"
                                placeholder="YYYY-MM-DD"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.cheque_holdDate &&
                                errors.cheque_holdDate && (
                                  <span
                                    className="text-danger col-md-12 text-left mb-2"
                                    style={{ fontSize: 12 }}
                                  >
                                    {errors.cheque_holdDate}
                                  </span>
                                )}
                            </div>
                          )}

                          {values.cheque_status === "Cleared" && (
                            <div className="mt-4 col-md-3">
                              <Label for="exampleName">
                                Cheque Cleared Date
                              <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                              <Input
                                type="date"
                                value={moment(values.cheque_clearDate).format(
                                  "YYYY-MM-DD"
                                )}
                                name="cheque_clearDate"
                                placeholder="YYYY-MM-DD"
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              {touched.cheque_clearDate &&
                                errors.cheque_clearDate && (
                                  <span
                                    className="text-danger col-md-12 text-left mb-2"
                                    style={{ fontSize: 12 }}
                                  >
                                    {errors.cheque_clearDate}
                                  </span>
                                )}
                            </div>
                          )}
                        </>
                      )}
                      {values.Transaction_Type === "Cheque" && (
                        <>
                          {values.cheque_status === "Bounce" && (
                            <div className="mt-4 col-md-3">
                              <Label for="exampleName">
                                Cheque Bounced Date
                              <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                              <Input
                                type="date"
                                value={moment(values.cheque_bouncedDate).format(
                                  "YYYY-MM-DD"
                                )}
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
                          )}
                          <div className="mt-4 col-md-3">
                            <Label for="exampleName">Cheque List No<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                            <Input
                              type="select"
                              value={values.ChequeListNo}
                              name="ChequeListNo"
                              placeholder="select cheque Position"
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value=""> select one</option>
                              <option value="First"> First</option>
                              <option value=" Second"> Second</option>
                              <option value=" Third"> Third</option>
                              <option value=" Fourth"> Fourth</option>
                              <option value=" Fifth"> Fifth</option>
                              <option value=" Sixth"> Sixth</option>
                              <option value=" Seventh"> Seventh</option>
                              <option value=" Eighth"> Eighth</option>
                              <option value=" Ninth"> Ninth</option>
                              <option value=" Tenth"> Tenth</option>
                              <option value=" Eleven"> Eleventh</option>
                              <option value=" Twelft"> Twelfth</option>{" "}
                            </Input>
                            {touched.ChequeListNo && errors.ChequeListNo && (
                              <span
                                className="text-danger col-md-12 text-left mb-2"
                                style={{ fontSize: 12 }}
                              >
                                {errors.ChequeListNo}
                              </span>
                            )}
                          </div>
                        </>
                      )}
                      <div className="mt-4 col-md-3">
                        <Label for="exampleSelect">Lease Number<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <RegexComponent
                          {...props}
                          editSelectedName={
                            props?.Cheque?.lease_property?.LeaseId
                          }
                          setFieldValue={setFieldValue}
                          options={props?.Redux_leaseData?.map((lease) => {
                            return {
                              name:
                                lease.LeaseId +
                                "/" +
                                lease?.property?.property_type +
                                "/" +
                                lease?.property?.referenceNO,

                              id: lease._id,
                            };
                          })}
                          name={"lease_property"}
                        />
                        <div style={{ marginTop: "35px" }}>
                          {touched.lease_property && errors.lease_property && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.lease_property}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleSelect">Property <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <RegexComponent
                          {...props}
                          editSelectedName={
                            props?.Cheque?.property_id?.referenceNO
                          }
                          setFieldValue={setFieldValue}
                          options={props?.Redux_propertyData?.map(
                            (property) => {
                              return {
                                name:
                                  property.property_type +
                                  "/" +
                                  property.referenceNO,

                                id: property._id,
                              };
                            }
                          )}
                          name={"property_id"}
                        />
                        <div style={{ marginTop: "30px" }}>
                          {touched.property_id && errors.property_id && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.property_id}
                            </span>
                          )}
                        </div>
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
                    {values.Transaction_Type === "Cheque" && (
                      <div className="row">
                        <div className="col-5 text-left mb-2 mt-4">
                          <Label className="float-left">
                            Cheque Front Photo
                          <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                          <Input
                            type="file"
                            name="cheque_picture_front"
                            accept="image/*"
                            onChange={(event) => {
                              setFieldValue(
                                "cheque_picture_front",
                                event.currentTarget.files[0]
                              );
                            }}
                          />

                          {touched.cheque_picture_front &&
                            values.cheque_picture_front && (
                              <img
                                src={
                                  typeof values.cheque_picture_front ===
                                  "string"
                                    ? values.cheque_picture_front
                                    : URL.createObjectURL(
                                        values.cheque_picture_front
                                      )
                                }
                                alt="no file"
                                height="20"
                              />
                            )}
                        </div>
                        <div className="col-5 text-left mb-2 mt-4">
                          <Label className="float-left">
                            Cheque Back Photo
                          <span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                          <Input
                            type="file"
                            name="cheque_picture_back"
                            accept="image/*"
                            onChange={(event) => {
                              setFieldValue(
                                "cheque_picture_back",
                                event.currentTarget.files[0]
                              );
                            }}
                          />

                          {touched.cheque_picture_back &&
                            values.cheque_picture_back && (
                              <img
                                src={
                                  typeof values.cheque_picture_back === "string"
                                    ? values.cheque_picture_back
                                    : URL.createObjectURL(
                                        values.cheque_picture_back
                                      )
                                }
                                alt="span no file"
                                height="20"
                              />
                            )}
                        </div>
                      </div>
                    )}

                    <button
                      className="btn btn-primary col-md-2 cheque-btn"
                      type="button"
                      onClick={() => setShowPopUp(true)}
                    >
                      Add Cheque
                    </button>
                    <PoopUp
                      loadingIconState={loadingState}
                      isOpen={showPopup}
                      isClose={setShowPopUp}
                      CRUD_Function={handleSubmit}
                      buttonName={props.Cheque ? "Update" : "Create"}
                      message={
                        props.Cheque
                          ? "Are you sure want to update"
                          : "Are you sure want to create"
                      }
                    />
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
