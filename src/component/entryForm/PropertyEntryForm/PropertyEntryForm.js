import React, { useState } from "react";
import "./propertyEntryForm.css";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Table } from "react-bootstrap";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import PoopUp from "./../../../shared/popup";
import RegexConponent from "../../../shared/regexComponent";
import { PropertyFormValidation } from "../../../utility/validation/propertyEntryFormValidation.js";
import { notification } from "../../../shared/notification";

const PropertyEntry = (props) => {
  const [showPopup, setShowPopUp] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [allFile, setAllFile] = useState(
    props?.property ? props?.property?.files_list : []
  );
  const [heading, setHeading] = useState("");
  const [unit, setUnit] = useState("");
  const [remark, setRemark] = useState("");
  const [facilities, setFacilities] = useState(
    props?.property?.facilities || []
  );
  //owner id unigue
  const [OwnerId, setOwnerId] = useState([]);

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
    Property_ownerName:
      props?.property?.Property_ownerName?.map((arg) => arg._id) || [],
    city: props?.property?.city || "",
    area: props?.property?.area || "",
    country: props?.property?.country || "U.A.E",
    property_type: props?.property?.property_type || "",
    property_name: props?.property?.property_name || "",
    property_price: props?.property?.property_price || "",
    facilities: props?.property?.facilities || [],
    property_community: props?.property?.property_community || "",
    plot_no: props?.property?.plot_no || "",
    building_Number: props?.property?.building_Number || "",
    building_floorNumber: props?.property?.building_floorNumber || "",
    Makani_Number: props?.property?.Makani_Number || "",
    Property_Area: props?.property?.Property_Area || "",
    Property_Premise_Number: props?.property?.Property_Premise_Number || "",
    developerCompany: props?.property?.developerCompany?._id || "",
    managementCompany: props?.property?.managementCompany?._id || "",
    remark: props?.property?.remark || "",
    unitNo: props?.property?.unitNo || "",
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
    return self.indexOf(item) === pos;
  });
  let selectedOwner = [];
  selectedOwner = props?.Redux_OwnerData?.filter((arg) =>
    uniqueArray.includes(arg._id)
  );

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => {
        setLoadingState(true);
        //facilities convert to string
        values.facilities = JSON.stringify(facilities);
        typeof allFile[0].file === "string"
          ? (values.files_list = JSON.stringify(allFile))
          : (values.files_list = "");
        //
        values.Property_ownerName = JSON.stringify(
          uniqueArray.length === 0
            ? props?.property?.Property_ownerName?.map((arg) => arg._id)
            : uniqueArray
        );
        //data sending function
        props.property
          ? props.propertyUpdate(values, props?.property?._id, allFile)
          : props.propertySend(values, allFile);
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
                  <Label for="exampleSelect">
                    Property Type
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
                  <Label>
                    Investment Capital
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
                    type="number"
                    name="property_price"
                    placeholder="Investment Capital"
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
                  <Label>
                    Property Name
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
                    type="text"
                    name="property_name"
                    placeholder="Property Name"
                    value={values.property_name}
                    min={0}
                    onChange={handleChange}
                  />
                  {touched.property_name && errors.property_name && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.property_name}
                    </span>
                  )}
                </div>
                <div className="col-sm-4 my-1">
                  <Label for="exampleName">
                    Country
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
                    type="text"
                    value={"U.A.E"}
                    name="country"
                    placeholder="Country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled
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
                  <Label for="exampleName">
                    City
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
                    type="select"
                    value={values.city}
                    name="city"
                    placeholder=" City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">Select One</option>
                    <option value="ABU DHABI">ABU DHABI</option>
                    <option value="DUBAI">DUBAI</option>
                    <option value="SHARJAH">SHARJAH</option>
                  </Input>
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
                  <Label for="exampleName">
                    Area
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
                    type="text"
                    value={values.area}
                    name="area"
                    placeholder="Location area"
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
                  <Label for="exampleName">
                    Plot Number
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
                    type="text"
                    value={values.plot_no}
                    name="plot_no"
                    placeholder="Plot Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.plot_no && errors.plot_no && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.plot_no}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">
                    Building Number
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
                  <Label for="exampleName">
                    Floor Number
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
                  <Label for="exampleName">MAKANI Number</Label>
                  <Input
                    type="text"
                    value={values.Makani_Number}
                    name="Makani_Number"
                    placeholder="Muncipality Number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.Makani_Number && errors.Makani_Number && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.Makani_Number}
                    </span>
                  )}
                </div>

                <div className="col-sm-4 my-1">
                  <Label for="exampleName">
                    Property Area
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
                  <Label for="exampleName">
                    Community
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
                <div className="col-4 my-1">
                  <Label for="exampleName">
                    DEWA Premise Number
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

                <div className="col-4 my-1">
                  <Label for="exampleName">
                    Unit No
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
                    type="text"
                    value={values.unitNo}
                    name="unitNo"
                    placeholder="Unit no"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.unitNo && errors.unitNo && (
                    <span
                      className="text-danger col-md-12 text-left mb-2"
                      style={{ fontSize: 12 }}
                    >
                      {errors.unitNo}
                    </span>
                  )}
                </div>

                <div className="col-4">
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
                      props?.property?.managementCompany?.managementCompany_name
                    }
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

                  <div style={{ marginTop: "40px" }}>
                    {touched.managementCompany && errors.managementCompany && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.managementCompany}
                      </span>
                    )}
                  </div>
                </div>
                <div style={{ width: "auto" }} className="col-4 my-1">
                  <Label for="exampleName">
                    Owner Name{" "}
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
                    {...props}
                    editSelectedName={
                      props?.property?.Property_ownerName?.owner_Name
                    }
                    setFieldValue={setFieldValue}
                    OwnerFunction={ownerIdList}
                    name={"Property_ownerName"}
                    options={props?.Redux_OwnerData?.map((owner) => {
                      return {
                        name: owner.owner_Name + "-" + owner.owner_ID,
                        id: owner._id,
                      };
                    })}
                  />
                  <div style={{ marginTop: "40px" }}>
                    {touched.Property_ownerName && errors.Property_ownerName && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.Property_ownerName}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-4">
                  <Label for="exampleSelect">
                    Developer Company
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
                    editSelectedName={
                      props?.property?.developerCompany?.DeveloperCompany_Name
                    }
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
                  <div style={{ marginTop: "40px" }}>
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
                <div className="col-md-4">
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
              </div>

              {/* {//owner selected list} */}
              <div style={{ marginTop: "50px", width: "30%" }}>
                {selectedOwner.length !== 0 ? (
                  <h5 className="form-head">Owner List</h5>
                ) : (
                  ""
                )}

                {selectedOwner.map((arg) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>{arg.owner_Name}</div>
                      <button
                        type="button"
                        onClick={() => deleteOwner(arg._id)}
                      >
                        delete
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <Label for="exampleName">
                  <h3 className="form-head">Facilities</h3>
                </Label>

                <Table bordered>
                  <thead>
                    <tr>
                      <th className="bg-secondary text-white">Heading</th>
                      <th className="bg-secondary text-white">Quantity</th>
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
                          placeholder="quantity"
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
                          placeholder="Remarks"
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
                        <th className="bg-secondary text-white">Quantity</th>
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
              </div>
              <div style={{ marginTop: "20px" }}>
                <h4 className="form-head">Document Field</h4>
                <div className="row">
                  <div className="col-md-4 text-left mb-2 ">
                    <p>
                      Document Name
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
                      placeholder="Document Name"
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
                            if (event.currentTarget.files[0].size > 1048576) {
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
              disabled={allFile.length === 0 ? true : false}
              className="btn btn-primary col-md-2 ml-3 mt-5"
              onClick={() => setShowPopUp(true)}
            >
              Submit
            </button>
            <PoopUp
              loadingIconState={loadingState}
              isOpen={showPopup}
              isClose={setShowPopUp}
              CRUD_Function={handleSubmit}
              buttonName={props.property ? "Update" : "Create"}
              message={
                props.property
                  ? "Are you sure you want to Update this Form"
                  : "Are you sure you want to create this Form"
              }
            />
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
};

export default PropertyEntry;
