import React, { useState } from "react";
import RegexComponent from "../../../shared/regexComponent";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import PoopUp from "./../../../shared/popup";
import {maintananceTicketEntryFormValidation} from "./../../../utility/validation/maintainanceTicketEntryFormValidation.js"

const MaintananceTicket = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  let initialvalue = {
    maintananceTicketIssueDate:
      moment(props?.maintananceTicket?.maintananceTicketIssueDate).format(
        "YYYY-MM-DD"
      ) || "",
    maintananceTicketDueDate:
      moment(props?.maintananceTicket?.maintananceTicketDueDate).format(
        "YYYY-MM-DD"
      ) || "",
    MaintanancePropertyID:
      props?.maintananceTicket?.MaintanancePropertyID?._id || "",
    MaintananceCompanyId:
      props?.maintananceTicket?.MaintananceCompanyId?._id || "",

    MaintananceCompanyDetailInfo:
      props?.maintananceTicket?.MaintananceCompanyDetailInfo || "",
  };
  return (
    <div>
      <div className="PropertyFormEntry mt-5">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              props?.maintananceTicket
                ? props.maintananceTicketUpdate(
                    values,
                    props?.maintananceTicket?._id
                  )
                : props.MaintananceTicketData(values);
              console.log(values);
            }}
            validationSchema={maintananceTicketEntryFormValidation}
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
              <Form className="form-group p-4">
                <FormGroup className="">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">Maintanance Ticket Form </h3>
                    </div>
                  </div>
                  <div>
                    {/* <div className="m-4"> */}

                    <div className="row ">
                      <div className="mt-4 col-4">
                        <Label for="exampleName">Issue Date</Label>
                        <Input
                          type="date"
                          value={values.maintananceTicketIssueDate}
                          name="maintananceTicketIssueDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.maintananceTicketIssueDate &&
                          errors.maintananceTicketIssueDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.maintananceTicketIssueDate}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Maintanance Due Date</Label>
                        <Input
                          type="date"
                          value={values.maintananceTicketDueDate}
                          name="maintananceTicketDueDate"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.maintananceTicketDueDate &&
                          errors.maintananceTicketDueDate && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.maintananceTicketDueDate}
                            </span>
                          )}
                      </div>

                      <div className="mt-4 col-md-3">
                        <Label for="exampleName">Property Id</Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_propertyData?.map(
                            (property) => {
                              return {
                                name:
                                  property.property_type +
                                  "-" +
                                  property.referenceNO,
                                id: property._id,
                              };
                            }
                          )}
                          name={"MaintanancePropertyID"}
                          placeholderName="Maintainace Property"
                        />

                        {touched.MaintanancePropertyID &&
                          errors.MaintanancePropertyID && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.MaintanancePropertyID}
                            </span>
                          )}
                      </div>
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Maintanance Company Id</Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_maintananceCompanyData?.map(
                            (maintananceCompany) => {
                              return {
                                name: maintananceCompany.Company_Name,

                                id: maintananceCompany._id,
                              };
                            }
                          )}
                          name={"MaintananceCompanyId"}
                        />

                        {touched.MaintananceCompanyId &&
                          errors.MaintananceCompanyId && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.MaintananceCompanyId}
                            </span>
                          )}
                      </div>

                      {/* <div className="mt-4 col-md-3">
                        <Label for="exampleName">
                          Management Company
                        </Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          options={props?.Redux_managementCompanyData?.map(
                            (managementCompany) => {
                              return {
                                name: managementCompany.managementCompany_name,

                                id: managementCompany._id,
                              };
                            }
                          )}
                          name={"managementCompanyId"}
                        />

                        {touched.managementCompanyId &&
                          errors.managementCompanyId && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.managementCompanyId}
                            </span>
                          )}
                      </div> */}
                      <div className="mt-4 col-md-7">
                        <Label for="exampleName">Detail Message</Label>
                        <Input
                          type="textarea"
                          value={values.MaintananceCompanyDetailInfo}
                          name="MaintananceCompanyDetailInfo"
                          placeholder="Detain Message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.MaintananceCompanyDetailInfo &&
                          errors.MaintananceCompanyDetailInfo && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.MaintananceCompanyDetailInfo}
                            </span>
                          )}
                      </div>
                    </div>

                    <div className="row">
                      <button
                        className="btn btn-primary Success col-2 mt-5 ml-3"
                        type="button"
                        onClick={() => setShowPopUp(true)}
                      >
                        Submit
                      </button>
                      <PoopUp
                        isOpen={showPopup}
                        isClose={setShowPopUp}
                        CRUD_Function={handleSubmit}
                        buttonName={
                          props.maintananceTicket ? "Update" : "Create"
                        }
                        message={
                          props.maintananceTicket
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

export default MaintananceTicket;
