import React, { useState } from "react";
import PropertyEntryForm from "../../entryForm/PropertyEntryForm/PropertyEntryForm";
import "./property.css";
import PoopUp from "./../../../shared/popup";
import { Table } from "reactstrap";

let PropertyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div style={{ margin: "20px" }}>
        {showEditForm === false ? (
          props.selectedone.map((arg, index) => {
            return (
              <div key={index}>
                <div className="row">
                  <div className="col-6">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.files_list[0]?.file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-2">Additional Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-3">area</div>
                        <div className="font-weight-bold my-3">
                          Building Name
                        </div>
                        <div className="font-weight-bold my-3">
                          Building Number
                        </div>
                        <div className="font-weight-bold my-3">Plot Number</div>
                        <div className="font-weight-bold my-3">
                          {" "}
                          Building Floor Number
                        </div>
                        <div className="font-weight-bold my-3">
                          Municipality Number
                        </div>
                        <div className="font-weight-bold my-3">
                          Dewa Premise Number
                        </div>
                        <div className="font-weight-bold my-3">community </div>
                        <div className="font-weight-bold my-3">
                          Property Owner Name
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-3">{arg.area}</div>
                        <div className="font-weight-bold my-3">
                          {arg.building_Name}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.building_Number}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.plot_Number}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.building_floorNumber}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.Muncipality_Number}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.Property_Premise_Number}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.property_community}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.Property_ownerName.map((owner, index) => {
                            return <li key={index}>{owner.owner_Name}</li>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h5 className="text-center mb-2">Property Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Property ID</div>
                        <div className="font-weight-bold my-2">
                          Property Type
                        </div>
                        <div className="font-weight-bold my-2">
                          Investment Input
                        </div>
                        <div className="font-weight-bold my-2">Location</div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg.referenceNO}
                        </div>
                        <div className="font-weight-bold my-2">{arg.area}</div>
                        <div className="font-weight-bold my-2">
                          {arg.property_type}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg.property_price}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg.city + "," + arg.country}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-2">Facilities</h5>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>SN</th>
                          <th> Heading</th>
                          <th> Unit</th>
                          <th>Remark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {arg.facilities.map((facilities, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td className="font-weight-bold">
                                {facilities.heading}
                              </td>
                              <td className="font-weight-bold">
                                {facilities.unit}
                              </td>
                              <td className="font-weight-bold">
                                {facilities.remark}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </div>
                <div>
                  <h5 className="mt4 text-center">Property Document</h5>
                  <div className="d-flex flex-wrap">
                    {arg?.files_list?.map((file, index) => {
                      return (
                        <div key={index} className="m-4">
                          <div>
                            <a href={file.file} target={file.file}>
                              <img
                                style={{ height: "100px", width: "100px" }}
                                src={file.file}
                                alt={file.file}
                              />
                            </a>
                          </div>
                          <div className="font-weight-bold text-center">
                            {file.fileName}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  edit
                </button>
                <button
                  style={
                    props.leaseIdList.some((ID) => ID === arg._id) === true
                      ? { visibility: "hidden" }
                      : {
                          backgroundColor: "blue",
                          borderRadius: "20px",
                          margin: "10px",
                          height: "40px",
                          width: "100px",
                          color: "white",
                          fontWeight: "bold",
                        }
                  }
                  type="button"
                  onClick={() => setShowPopUp(true)}
                >
                  delete
                </button>
                <PoopUp
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={props.DeleteProperty}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <PropertyEntryForm
            {...props}
            showHide={showHide}
            property={props.selectedone[0]}
          />
        )}
      </div>
    </>
  );
};

export default PropertyDetailViewComponent;
