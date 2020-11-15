import React, { useState } from "react";

import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";
import { object } from "yup";

const ChequeEntry = (props) => {
  const [allPhoto, setAllPhoto] = useState([]);
  // console.log("ChequeEntry -> photo", photo);
  // var [photoName, setPhotoName] = useState("");
  // console.log("ChequeEntry -> photoName", photoName);
  // var [nagarikta, setnagarikta] = useState([]);
  // console.log("ChequeEntry -> nagarikta", nagarikta);
  // var [certificate, setcertificate] = useState([]);
  // console.log("ChequeEntry -> certificate", certificate);
  // var [transcip, settranscip] = useState([]);
  // console.log("ChequeEntry -> transcip", transcip);
  // var [pp_photo, setpp_photo] = useState([]);
  // console.log("ChequeEntry -> pp_photo", pp_photo);

  // console.log("ChequeEntry -> photoName", photoName);
  // let addPhoto = () => {
  //   if (photoName === "nagarikta") {
  //     setnagarikta(photo);
  //     setPhoto([]);
  //     setPhotoName("");
  //   } else if (photoName === "certificate") {
  //     setcertificate(photo);
  //     setPhoto([]);
  //     setPhotoName("");
  //   } else if (photoName === "transcip") {
  //     settranscip(photo);
  //     setPhoto([]);
  //     setPhotoName("");
  //   } else if (photoName === "pp_photo") {
  //     setpp_photo(photo);
  //     setPhoto([]);
  //     setPhotoName("");
  //   }
  // };

  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={{
              filesType: "",
              file: "",
              name: "pankaj",
            }}
            onSubmit={(values) => {
              props.ownerData(allPhoto);
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
                <div className="row">
                  <div className="col-md-4 text-left mb-2 mt-4">
                    <Input
                      name="filesType"
                      type="select"
                      placeholder="Select Status of Cheque"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.filesType}
                    >
                      <option value="">Select any one</option>
                      <option value="nagarikta">nagarikta</option>
                      <option value="certificate">certificate</option>
                      <option value="transcip">transcip</option>
                      <option value="pp_photo">pp_photo</option>
                    </Input>
                  </div>
                  <div className="col-md-4 text-left mb-2 mt-4">
                    <Label
                      onClick={() => console.log(values)}
                      className="float-left"
                    >
                      Upload Scan Copy
                    </Label>
                    <Input
                      type="file"
                      alt="no picture"
                      name="file"
                      accept="image/*"
                      onChange={(event) => {
                        setFieldValue("file", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                  <div className="col-md-4 text-left mb-2 mt-4">
                    <button
                      // disabled={photoName === "" || photo.length === 0}
                      onClick={() => {
                        let filterData = allPhoto.find(
                          (a) => a.filesType === values.filesType
                        );
                        if (filterData) {
                          let afterRemoveSameData = allPhoto.filter(
                            (arg) => arg.filesType !== filterData.filesType
                          );
                          setAllPhoto([
                            ...afterRemoveSameData,
                            { filesType: values.filesType, file: values.file },
                          ]);
                        } else {
                          setAllPhoto([
                            ...allPhoto,
                            { filesType: values.filesType, file: values.file },
                          ]);
                        }
                      }}
                      type="button"
                    >
                      Add
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => props.ownerData(values, allPhoto)}
                >
                  submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChequeEntry;
