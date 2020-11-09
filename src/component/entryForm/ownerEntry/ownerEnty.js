import React, { useState } from "react";
import "./ownerEntry.css";
import moment from "moment";

// import {  FormGroup, Label, Input, Form } from "reactstrap";
// import { Formik } from "formik";
//import {employeeEntryFormValidation} from "../../../utility/validation/employeeEntryFormValidation.js"
import { FormGroup, Label, Input, Form } from "reactstrap";
import { Formik } from "formik";

let date = new Date();

const OwnerEntry = (props) => {
  const [photos, setPhotos] = useState([]);
  const [photoName, setPhotoName] = useState("");
  const [photo, setPhoto] = useState({});
  console.log("photos array", photos);

  let initialvalue = {
    allPhotos: photos,
  };
  let addPhoto = (data) => {
    setPhotos([...photos, data]);
    setPhoto({});
    setPhotoName("");
  };

  return (
    <div>
      <Formik
        initialValues={initialvalue}
        onSubmit={(values) => {
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
                    <Label for="exampleName"> bank Name</Label>
                    <Input
                      type="text"
                      value={photoName}
                      onChange={(e) => setPhotoName(e.target.value)}
                    />
                    {/* {touched.cheque_bankName && errors.cheque_bankName && (
                      <span
                        className="text-danger col-md-12 text-left mb-2"
                        style={{ fontSize: 12 }}
                      >
                        {errors.cheque_bankName}
                      </span>
                    )} */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 text-left mb-2 mt-4">
                    <Label className="float-left">Upload Scan Copy</Label>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        setPhoto(event.currentTarget.files[0])
                      }
                    />

                    {/* {touched.cheque_picture && values.cheque_picture && (
                      <img
                        src={
                          typeof values.cheque_picture === "string"
                            ? values.cheque_picture
                            : URL.createObjectURL()
                        }
                        alt="no picture"
                        height="20"
                      />
                    )} */}
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      addPhoto({ photoname: photoName, pphoto: photo });
                    }}
                  >
                    add
                  </button>
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
  );
};

export default OwnerEntry;
