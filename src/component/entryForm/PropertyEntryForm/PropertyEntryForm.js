import React, { useState } from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Table } from "react-bootstrap";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import PoopUp from "./../../../shared/popup";
import RegexConponent from "../../../shared/regexComponent";

import { PropertyFormValidation } from "../../../utility/validation/propertyEntryFormValidation.js";
import { array } from "yup";

const PropertyEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);

  const [allFile, setAllFile] = useState(
    props?.property ? props?.property?.files_list : []
  );
  const [heading, setHeading] = useState("");
  const [unit, setUnit] = useState("");
  const [remark, setRemark] = useState("");
  const [OwnerId, setOwnerId] = useState([]);

  const [facilities, setFacilities] = useState(
    props?.property?.facilities || []
  );

  let addFacilities = (data) => {
    setFacilities([...facilities, data]);
    setHeading("");
    setRemark("");
    setUnit("");
  };
  let photoDelete = (name) => {
    setAllFile(allFile.filter((file) => file.fileName !== name));
  };
  let removeFacilite = (id) =>
    setFacilities(facilities.filter((arg) => arg.facilitiesId !== id));

  let initialValue = {
    Property_ownerName: props?.property?.Property_ownerName || [],
    city: props?.property?.city || "",
    area: props?.property?.area || "",
    country: props?.property?.country || "",
    property_type: props?.property?.property_type || "",
    property_price: props?.property?.property_price || "",
    facilities: props?.property?.facilities || [],
    property_community: props?.property?.property_community || "",
    building_Name: props?.property?.building_Name || "",
    building_Number: props?.property?.building_Number || "",
    plot_Number: props?.property?.plot_Number || "",
    building_floorNumber: props?.property?.building_floorNumber || "",
    Muncipality_Number: props?.property?.Muncipality_Number || "",
    Property_Area: props?.property?.Property_Area || "",
    Property_Premise_Number: props?.property?.Property_Premise_Number || "",
    developerCompany: props?.property?.developerCompany?._id || "",
    managementCompany: props?.property?.managementCompany?._id || "",

    fileName: "",
    file: "",
    files_list: [],
  };

  //owner list edit delete
  let ownerIdList = (owner_id) => {
    setOwnerId([...OwnerId, owner_id]);
  };
  //deleteOwnerID
  let deleteOwner = (ownerId) => {
    setOwnerId(OwnerId.filter((arg) => arg !== ownerId));
  };
  //remove duplicate from array
  let uniqueArray = OwnerId.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
  let selectedOwner = [];
  selectedOwner = props?.Redux_OwnerData.filter((arg) =>
    uniqueArray.includes(arg._id)
  );

  console.log(
    "🚀 ~ file: PropertyEntryForm.js ~ line 75 ~ uniqueArray ~ uniqueArray",
    uniqueArray
  );

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => {
        //facilities convert to string
        values.facilities = JSON.stringify(facilities);
        typeof allFile[0].file === "string"
          ? (values.files_list = JSON.stringify(allFile))
          : (values.files_list = "");
        //
        values.Property_ownerName = JSON.stringify(uniqueArray);
        //data sending function
        props.property
          ? props.propertyUpdate(values, props?.property?._id, allFile)
          : props.propertySend(values, allFile);
        console.log(values);
      }}
      validationSchema={PropertyFormValidation}
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
        <Form className=" ">
          <FormGroup className=" form-group m-5 p-5">
            <h1 className="form-head text-center my-4">
              Please Fill Up the Property information
            </h1>
            <div className="  m-3">
              <h4 className="form-head">General Information</h4>
              <div className="d-flex flex-wrap">
                <div className="col-sm-4 my-1">
                  <Label for="exampleSelect">Property Type</Label>

                  <Input
                    type="select"
                    name="property_type"
                    id="exampleSelect"
                    placeholder="Select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.property_type}
                  >
                    <option value=""> Select One</option>
                    <option value="Residential">Residential</option>
                    <option value="Commericial">Commericial</option>
                    <option value="Land">Land</option>
                  </Input>

                  {touched?.property_type && errors?.property_type && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors?.property_type}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label>Investment Input</Label>
                  <Input
                    type="number"
                    name="property_price"
                    placeholder="Investment Input"
                    value={values.property_price}
                    min={0}
                    onChange={handleChange}
                  />
                  {touched.property_price && errors.property_price && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property_price}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Country</Label>
                  <Input
                    type="text"
                    value={values.country}
                    name="country"
                    placeholder="Country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.country && errors.country && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.country}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">City</Label>
                  <Input
                    type="text"
                    value={values.city}
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.city && errors.city && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.city}
                    </span>
                  )}
                </div>
                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Area</Label>
                  <Input
                    type="area"
                    value={values.area}
                    name="area"
                    placeholder="Location Area"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.area && errors.area && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.area}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Building Name</Label>
                  <Input
                    type="text"
                    value={values.building_Name}
                    name="building_Name"
                    placeholder="Building Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.building_Name && errors.building_Name && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.building_Name}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Building Number</Label>
                  <Input
                    type="text"
                    value={values.building_Number}
                    name="building_Number"
                    placeholder="Building Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.building_Number && errors.building_Number && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.building_Number}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Plot Number</Label>
                  <Input
                    type="text"
                    value={values.plot_Number}
                    name="plot_Number"
                    placeholder="Plot Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.plot_Number && errors.plot_Number && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.plot_Number}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Floor Number</Label>
                  <Input
                    type="text"
                    value={values.building_floorNumber}
                    name="building_floorNumber"
                    placeholder="Floor Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.building_floorNumber && errors.building_floorNumber && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.building_floorNumber}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Muncipality Number</Label>
                  <Input
                    type="text"
                    value={values.Muncipality_Number}
                    name="Muncipality_Number"
                    placeholder="Muncipality Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Muncipality_Number && errors.Muncipality_Number && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.Muncipality_Number}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Property Area</Label>
                  <Input
                    type="number"
                    value={values.Property_Area}
                    name="Property_Area"
                    placeholder="Property Area in sqft"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Property_Area && errors.Property_Area && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.Property_Area}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Community</Label>
                  <Input
                    type="text"
                    value={values.property_community}
                    name="property_community"
                    placeholder="Community"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.property_community && errors.property_community && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property_community}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">Dewa Premise Number</Label>
                  <Input
                    type="text"
                    value={values.Property_Premise_Number}
                    name="Property_Premise_Number"
                    placeholder="Dewa Premise Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Property_Premise_Number &&
                    errors.Property_Premise_Number && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.Property_Premise_Number}
                      </span>
                    )}
                </div>
                <div style={{ width: "auto" }} className="col-sm-4 my-1">
                  <Label for="exampleName">Owner Name </Label>

                  <RegexConponent
                    {...props}
                    setFieldValue={setFieldValue}
                    OwnerFunction={ownerIdList}
                    name={"Property_ownerName"}
                    options={props?.Redux_OwnerData?.map((owner) => {
                      return {
                        name:
                          owner.owner_firstName +
                          owner.owner_middleName +
                          owner.owner_lastName +
                          "-" +
                          owner.owner_ID,
                        id: owner._id,
                      };
                    })}
                  />
                </div>
                <div className="col-md-">
                  <Label for="exampleSelect">Developer Company</Label>

                  <RegexConponent
                    setFieldValue={setFieldValue}
                    options={props?.redux_DeveloperCompanyData?.map(
                      (developer) => {
                        return {
                          name: developer.DeveloperCompany_Name,
                          id: developer._id,
                        };
                      }
                    )}
                    name={"developerCompany"}
                  />

                  {touched.developerCompany && errors.developerCompany && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.developerCompany}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-md-">
                <Label for="exampleSelect">Management Company</Label>

                <RegexConponent
                  setFieldValue={setFieldValue}
                  options={props?.Redux_ManagementCompanyData?.map(
                    (management) => {
                      return {
                        name: management.managementCompany_name,
                        id: management._id,
                      };
                    }
                  )}
                  name={"managementCompany"}
                />

                {touched.managementCompany && errors.managementCompany && (
                  <span
                    className="text-danger col-md-12 text-left mb-2"
                    style={{ fontSize: 12 }}
                  >
                    {errors.managementCompany}
                  </span>
                )}
              </div>

              {selectedOwner.map((arg) => {
                return (
                  <div>
                    <div>
                      {arg.owner_firstName +
                        " " +
                        arg.owner_middleName +
                        " " +
                        arg.owner_lastName}
                      <button onClick={() => deleteOwner(arg._id)}>
                        delete
                      </button>
                    </div>
                  </div>
                );
              })}
              <div className="">
                <Label for="exampleName">
                  <h3 className="form-head">Facilities</h3>
                </Label>
              </div>

              <Table bordered>
                <thead>
                  <tr>
                    <th className="bg-secondary text-white">Heading</th>
                    <th className="bg-secondary text-white">Unit</th>

                    <th className="bg-secondary text-white">Remarks</th>
                    <th className="bg-secondary text-white">Add</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Input
                        type="text"
                        value={heading}
                        placeholder="Heading"
                        onChange={(e) => {
                          setHeading(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <Input
                        type="number"
                        placeholder="unit"
                        value={unit}
                        onChange={(e) => {
                          setUnit(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <Input
                        type="text"
                        value={remark}
                        placeholder="Remark"
                        onChange={(e) => {
                          setRemark(e.target.value);
                        }}
                      />
                    </td>
                    <td>
                      <button
                        disabled={!heading || !unit || !remark}
                        onClick={() =>
                          addFacilities({
                            heading: heading,
                            unit: unit,
                            remark: remark,
                            facilitiesId: uuidv4(),
                          })
                        }
                        type="button"
                        className="font-weight-bold"
                      >
                        Add Facilities
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              {facilities.length > 0 ? (
                <Table bordered>
                  <thead>
                    <tr>
                      <th className="bg-secondary text-white">SN</th>
                      <th className="bg-secondary text-white">heading</th>
                      <th className="bg-secondary text-white">unit</th>
                      <th className="bg-secondary text-white">Remarks</th>
                      <th className="bg-secondary text-white">delete</th>
                    </tr>
                  </thead>
                  {facilities.map((arg, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{arg.heading}</td>
                          <td>{arg.unit}</td>
                          <td>{arg.remark}</td>

                          <td>
                            <button
                              type="button"
                              className="font-weight-bold"
                              onClick={() => removeFacilite(arg.facilitiesId)}
                            >
                              Delete
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
              <div style={{ marginTop: "20px" }}>
                <h4 className="form-head">Document Field</h4>
                <div className="row">
                  <div className="col-md-4 text-left mb-2 ">
                    <p>Document Name</p>
                    <Input
                      name="fileName"
                      type="text"
                      placeholder="Document Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.fileName}
                    ></Input>
                  </div>
                  <div className="col-md-4 text-left mb-2 mt-2">
                    <Label className="float-left">Upload Scan Copy</Label>
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
                            props?.property
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

                          <td className="font-weight-bold">{arg.fileName}</td>
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
                                props?.property
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
            </div>

            <button
              type="button"
              className="btn btn-primary col-md-2 ml-3 mt-5"
              onClick={() => setShowPopUp(true)}
            >
              Submit
            </button>
            <PoopUp
              isOpen={showPopup}
              isClose={setShowPopUp}
              CRUD_Function={handleSubmit}
              buttonName={props.property ? "Update" : "Create"}
              message={
                props.property
                  ? "are you sure want to update"
                  : "are you sure want to create"
              }
            />
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyEntry;
