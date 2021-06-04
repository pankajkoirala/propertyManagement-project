import React, { useState } from "react";
import RegexComponent from "../../../shared/regexComponent";
import { FormGroup, Label, Input, Form,Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import PoopUp from "./../../../shared/popup";
import { MaintainanceTicketEntryForm } from "./../../../utility/validation/maintainanceTicketEntryFormValidation.js";



const MaintananceTicket = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.maintananceTicket ? props?.maintananceTicket?.files_list : []
    );

  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };

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
    remark:
      props?.maintananceTicket?.remark|| "",

    MaintananceCompanyDetailInfo:
      props?.maintananceTicket?.MaintananceCompanyDetailInfo || "",
    maintanance_Amount: props?.maintananceTicket?.maintanance_Amount || "",

      fileName: "",
      file: "",
      files_list: [],
  };
  return (
    <div>
      <div style={{ margin: "20px" }} className="PropertyFormEntry mt-5">
        <div>
          <Formik
            initialValues={initialvalue}
            onSubmit={(values) => {
              setLoadingState(true);

              typeof allFile[0].file === "string"
              ? (values.files_list = JSON.stringify(allFile))
              : (values.files_list = "");

              props?.maintananceTicket
                ? props.maintananceTicketUpdate(
                    values,
                    props?.maintananceTicket?._id,allFile
                  )
                : props.MaintananceTicketData(values,allFile);
            }}
             validationSchema={MaintainanceTicketEntryForm}
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
                        <Label for="exampleName">Issue Date<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
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
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Maintanance Due Date<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
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

                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Maintanance Amount<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="text"
                          value={values.maintanance_Amount}
                          name="maintanance_Amount"
                          placeholder="Enter date of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.maintanance_Amount &&
                          errors.maintanance_Amount && (
                            <span
                              className="text-danger col-md-12 text-left mb-2"
                              style={{ fontSize: 12 }}
                            >
                              {errors.maintanance_Amount}
                            </span>
                          )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Property Id<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          editSelectedName={props?.maintananceTicket?.MaintanancePropertyID?.referenceNO}
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
                        <div style={{ marginTop: "35px" }}>
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
                      </div>
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Maintanance Company Id<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <RegexComponent
                          {...props}
                          setFieldValue={setFieldValue}
                          editSelectedName={props?.maintananceTicket?.MaintananceCompanyId?.Company_Name}
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
                        <div style={{ marginTop: "35px" }}>
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
                      </div>
                      <div className="mt-4 col-md-4">
                        <Label for="exampleName">Remarks</Label>
                        <Input
                          type="text"
                          value={values.remark}
                          name="remark"
                          placeholder="Remarks"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {touched.remark && errors.remark && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.remark}
                          </span>
                        )}
                      </div>
                      {/* <div className="mt-4 col-md-4">
                        {console.log(props?.Redux_managementCompanyData)}
                        <Label for="exampleName">Management Company<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
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
                    </div>
                    <div style={{ marginTop: "50px" }}>
                      <div className=" col-6">
                        <Label for="exampleName">Detail Message<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
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

                    <div style={{ marginTop: "40px" }}>
                    <h4 className="form-head">Document Field</h4>
                    <div className="row ">
                      <div className="col-md-4 text-left mb-2 ">
                        <p>Document Name<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></p>
                        <Input
                          name="fileName"
                          type="text"
                          placeholder="Select Status of Cheque"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fileName}
                        ></Input>
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-2">
                        <Label className="float-left">Upload Scan Copy<span style={{fontSize:'20px',marginTop:'20px',color:'red'}} >*</span></Label>
                        <Input
                          type="file"
                          alt="no file"
                          name="file"
                          accept="image/*"
                          onChange={(event) => {
                            setFieldValue("file", event.currentTarget.files[0]);
                          }}
                        />
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-4">
                        <button
                          disabled={!values.fileName || !values.file}
                          onClick={() => {
                            let filterData = allFile.find(
                              (a) => a.fileName === values.fileName
                            );
                            if (filterData) {
                              let afterRemoveSameData = allFile.filter(
                                (arg) => arg.fileName !== filterData.fileName
                              );
                              setAllFile([
                                ...afterRemoveSameData,
                                {
                                  fileName: values.fileName,
                                  file: values.file,
                                },
                              ]);
                            } else {
                              setAllFile([
                                ...allFile,
                                {
                                  fileName: values.fileName,
                                  file: values.file,
                                },
                              ]);
                            }
                          }}
                          type="button"
                          className="btn btn-secondary btn-sm"
                        >
                          Add File
                        </button>
                      </div>
                    </div>
                  </div>
                  {allFile.length !== 0 ? (
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th> Name</th>
                          <th>image</th>
                          <th>
                            <button
                              style={
                                props?.owner
                                  ? { display: "inline" }
                                  : { display: "none" }
                              }
                              onClick={() => setAllFile([])}
                            >
                              delete All
                            </button>
                          </th>
                        </tr>
                      </thead>
                      {allFile.map((arg, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{index + 1}</td>
                              <td className="font-weight-bold">
                                {arg.fileName}
                              </td>
                              <td>
                                <img
                                  src={
                                    typeof arg.file === "string"
                                      ? arg.file
                                      : URL.createObjectURL(arg.file)
                                  }
                                  alt="no file"
                                  height="80px"
                                />
                              </td>
                              <td>
                                <button
                                  style={
                                    props?.owner
                                      ? { display: "none" }
                                      : { display: "inline" }
                                  }
                                  type="button"
                                  onClick={() => {
                                    photoDelete(arg.fileName);
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
                  ) : (
                    ""
                  )}
                    <div className="">
                      

                      <button
                        className="btn btn-primary Success col-2 mt-5 ml-3"
                        type="button"
                        onClick={() => setShowPopUp(true)}
                        disabled={allFile.length === 0 ? true : false}
                      >
                        Submit
                      </button>
                      <PoopUp
                        loadingIconState={loadingState}
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
