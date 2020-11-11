import React, { useState } from "react";

import { FormGroup, Label, Input, Form, Table } from "reactstrap";
import { Formik } from "formik";
import moment from "moment";

const ChequeEntry = (props) => {
  const [photo, setPhoto] = useState([]);
  var [photoName, setPhotoName] = useState([]);
  var [photosList, setPhotosList] = useState([]);
  var [nameList, setNameList] = useState([]);
  var [initialValue, setInitialValue] = useState({});

  console.log("ChequeEntry -> photosList", photosList);
  console.log("ChequeEntry -> nameList", nameList);

  var initialValue = {};
  for (var i = 0; i < nameList.length; i++)
    initialValue[nameList[i]] = photosList[i];
  console.log(initialValue);

  return (
    <div>
      <div className="PropertyFormEntry">
        <div>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => {
              props.ownerData(initialValue);
              console.log(initialValue);
            }}
            // validationSchema={TenantEntryFormValidation}
          >
            {({ handleSubmit }) => (
              <Form className="d-flex justify-content-center">
                <FormGroup className="">
                  <div className="text-center">
                    <div className="row">
                      <div className="col-md-4 text-left mb-2 mt-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(event) => {
                            setPhoto(event.currentTarget.files[0]);
                          }}
                        />
                      </div>
                      <div className="col-md-4 text-left mb-2 mt-4">
                        <Input
                          type="text"
                          onChange={(e) => {
                            setPhotoName(e.target.value);
                          }}
                        />
                      </div>

                      <button
                        className="Success col-4 mt-2"
                        type="button"
                        onClick={() => {
                          setNameList([...nameList, photoName]);
                          setPhotosList([...photosList, photo]);
                        }}
                      >
                        Add Cheque
                      </button>
                    </div>
                    {/* {photosData.map((arg, index) => {
                      return (
                        <Table key={index}>
                          <tr>
                            <td>{index + 1}</td>

                            <td>{arg.Name}</td>
                            <td>
                              <img src={arg.url} alt="" />{" "}
                            </td>
                            <td>
                              <button type="button" onClick={() => {}}>
                                delete
                              </button>
                            </td>
                          </tr>
                        </Table>
                      );
                    })} */}
                    <button type="button" onClick={handleSubmit}>
                      submit
                    </button>
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
