import React, { useState } from "react";
import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import PoopUp from "./../../../shared/popup";
import { fmcEntryFormValidation } from "../../../utility/validation/fmc";
import { notification } from "../../../shared/notification";
import RegexConponent from "../../../shared/regexComponent";

const FMC = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.owner ? props?.owner?.files_list : []
  );

  let initialValue = {
    property: props?.selectedFMC?.property?._id || "",
    management_Companies: props?.selectedFMC?.management_Companies?._id || "",
    totalAmount: props?.selectedFMC?.totalAmount || "",
    quarter: props?.selectedFMC?.quarter || "",
    file1: props?.selectedFMC?.file1 || "",
    file2: props?.selectedFMC?.file2 || "",
    entry_date: moment(props?.selectedFMC?.entry_date).format('YYYY-MM-DD') || new Date(),
    remark: props?.selectedFMC?.remark || "",
    fmcInvoice_Date: moment(props?.selectedFMC?.fmcInvoice_Date).format('YYYY-MM-DD') || "",

  };

  return (
    <div>
      <div>
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              setLoadingState(true);


              props?.selectedFMC
                ? props.fmcUpdate(values, props?.selectedFMC?._id)
                : props.fmc(values);
            }}
            validationSchema={fmcEntryFormValidation}
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
              <Form>
                <FormGroup className="form-group m-5 p-5">
                  <div className="text-center">
                    <div className="text-black font-weight-bold">
                      {" "}
                      <h3 className="form-head">FMC Entry Form </h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="form-head">General Information</h4>
                    <div className="row ">
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">
                          Payment Quarter
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
                        {touched.quarter && errors.quarter && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.quarter}
                          </span>
                        )}
                        <Input
                          type="select"
                          name="quarter"
                          placeholder="Select"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.quarter}
                        >
                          <option value="">Select One </option>
                          <option value="First quarter">First quarter</option>
                          <option value="Second quarter">Second quarter</option>
                          <option value="Third quarter">Third quarter</option>
                          <option value="Fourth quarter">Fourth quarter</option>
                        </Input>
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">
                          Date
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
                        {touched.fmcInvoice_Date && errors.fmcInvoice_Date && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.fmcInvoice_Date}
                          </span>
                        )}
                        <Input
                          type="date"
                          value={values.fmcInvoice_Date}
                          name="fmcInvoice_Date"
                          placeholder=""
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">
                          Property
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
                        <RegexConponent
                          setFieldValue={setFieldValue}
                          editSelectedName={
                            props?.selectedFMC ? (props?.selectedFMC?.property?.property_name +
                              "-" +
                              'PU No-' + props?.selectedFMC?.property?.unitNo) : ""
                          }
                          options={props.property.map((property) => {
                            return {
                              name:
                                (property?.property_name || '') +
                                "-" +
                                ('PU No-' + property?.unitNo),
                              id: property._id,
                            };
                          })}
                          name={"property"}
                        />
                        {touched.property && errors.property && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.property}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleSelect">
                          Management Company
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

                        <RegexConponent
                          setFieldValue={setFieldValue}
                          editSelectedName={
                            props?.selectedFMC ? props?.selectedFMC.management_Companies?.managementCompany_name : ""
                          }
                          options={props?.Redux_ManagementCompanyData?.map(
                            (management) => {
                              return {
                                name: management.managementCompany_name,
                                id: management._id,
                              };
                            }
                          )}
                          name={"management_Companies"}
                        />
                        {touched.management_Companies && errors.management_Companies && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.management_Companies}
                          </span>
                        )}
                      </div>
                      <div className="mt-2 col-md-4">
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
                        {touched.totalAmount && errors.totalAmount && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.totalAmount}
                          </span>
                        )}
                        <Input
                          type="number"
                          value={values.totalAmount}
                          name="totalAmount"
                          placeholder="Total Amount"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                      </div>
                      <div className="mt-2 col-md-4">
                        <Label for="exampleName">Remarks</Label>
                        {touched.remark && errors.remark && (
                          <span
                            className="text-danger col-md-12 text-left mb-2"
                            style={{ fontSize: 12 }}
                          >
                            {errors.remark}
                          </span>
                        )}
                        <Input
                          type="text"
                          value={values.remark}
                          name="remark"
                          placeholder="remarks"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>

                    </div>



                  </div>
                  {/* <div style={{ marginTop: "40px" }}>
                    <h4 className="form-head">Document Field</h4>
                    <div className="row ">
                      <div className="col-md-4 text-left mb-2 ">
                        <p>
                          Document Name{" "}
                          <span
                            style={{
                              fontSize: "20px",
                              marginTop: "20px",
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </p>
                        <Input
                          name="fileName"
                          type="text"
                          placeholder="File Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fileName}
                        ></Input>
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-2">
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
                          alt="no file"
                          name="file"
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
                                if (
                                  event.currentTarget.files[0].size > 1048576
                                ) {
                                  notification(
                                    "File Size Shouldn't exceed 1.5 MB",
                                    "ERROR"
                                  );
                                } else {
                                  setFieldValue(
                                    "file",
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
                  </div> */}
                  {/* {allFile.length !== 0 ? (
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
                  )} */}
                  <div className="col-5 text-left mb-2 mt-4">
                    <Label className="float-left">
                      Invoice
                      <span
                        style={{
                          fontSize: "20px",
                          marginTop: "20px",
                          color: "red",
                        }}
                      >
                        *
                      </span>
                      {touched.file1 && errors.file1 && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.file1}
                        </span>
                      )}
                    </Label>
                    <Input
                      type="file"
                      name="file1"
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
                            if (
                              event.currentTarget.files[0].size > 1048576
                            ) {
                              notification(
                                "File Size Shouldn't exceed 1.5 MB",
                                "ERROR"
                              );
                            } else {
                              setFieldValue(
                                "file1",
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
                          notification("Please Select image ", "ERROR");
                        }
                      }}
                    />

                    {touched.file1 &&
                      values.file1 && (
                        <img
                          src={
                            typeof values.file1 === "string"
                              ? values.file1
                              : URL.createObjectURL(
                                values.file1
                              )
                          }
                          alt="span no file"
                          height="20"
                        />
                      )}
                    {typeof values.file1 === 'string' && props?.selectedFMC?.file1 && <img style={{ height: '100px', width: '100px' }} alt='' src={props?.selectedFMC?.file1} />}

                  </div>
                  <div className="col-5 text-left mb-2 mt-4">
                    <Label className="float-left">
                      Invoice
                      <span
                        style={{
                          fontSize: "20px",
                          marginTop: "20px",
                          color: "red",
                        }}
                      >
                        *
                      </span>
                      {touched.file2 && errors.file2 && (
                        <span
                          className="text-danger col-md-12 text-left mb-2"
                          style={{ fontSize: 12 }}
                        >
                          {errors.file2}
                        </span>
                      )}
                    </Label>
                    <Input
                      type="file"
                      name="file2"
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
                            if (
                              event.currentTarget.files[0].size > 1048576
                            ) {
                              notification(
                                "File Size Shouldn't exceed 1.5 MB",
                                "ERROR"
                              );
                            } else {
                              setFieldValue(
                                "file2",
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
                          notification("Please Select image ", "ERROR");
                        }
                      }}
                    />

                    {touched.file2 &&
                      values.file2 && (
                        <img
                          src={
                            typeof values.file2 === "string"
                              ? values.file2
                              : URL.createObjectURL(
                                values.file2
                              )
                          }
                          alt="span no file"
                          height="20"
                        />
                      )}
                    {typeof values.file2 === 'string' && props?.selectedFMC?.file2 && <img style={{ height: '100px', width: '100px' }} alt='' src={props?.selectedFMC?.file2} />}
                  </div>
                  <button
                    className="btn btn-primary col-sm-2 mt-5"
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
                    buttonName={props.owner ? "Update" : "Create"}
                    message={
                      props.owner
                        ? "Are you sure you want to Update this Form"
                        : "Are you sure you want to create this Form"
                    }
                  />
                </FormGroup>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FMC;
