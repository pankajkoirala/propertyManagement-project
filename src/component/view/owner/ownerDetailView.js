import React, { useState } from "react";
import OwnerEntryForm from "./../../../component/entryForm/ownerEntry/ownerEnty";
import PoopUp from "./../../../shared/popup";
import moment from "moment";

let OwnerDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div>
        {showEditForm === false ? (
          props.selectedOwner.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <div className="row">
                  <div className="col-6">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.files_list[0].file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-2">Owner Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Owner ID</div>
                        <div className="font-weight-bold my-2">Owner Type</div>

                        <div className="font-weight-bold my-2">Owner Name</div>
                        <div className="font-weight-bold my-2">
                          {arg.owner_Type === "Person"
                            ? " Date Of Birth"
                            : "Company Registration Date"}
                        </div>
                        <div className="font-weight-bold my-2">Area</div>
                        <div className="font-weight-bold my-2">City</div>
                        <div className="font-weight-bold my-2">Country</div>

                        <div className="font-weight-bold my-2">Email </div>
                        <div className="font-weight-bold my-2">Contact</div>
                        <div className="font-weight-bold my-2">
                          {arg.owner_Type === "Person"
                            ? "Government Id No"
                            : "Company Registration Number"}
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_ID}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_Type}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_Name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {moment(arg?.owner_DOB).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_city}
                        </div>{" "}
                        <div className="font-weight-bold my-2">
                          {arg?.owner_country}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_email}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.tenants?.tenant_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_email}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_phoneNo}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_GovID_RegNo}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-6">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px 20px 0px 0px",
                      }}
                      src={arg?.owner_property?.files_list[0].file}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-6">
                    <h5 className="text-center mb-2">Property Information</h5>
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-2">Propety Id</div>
                        <div className="font-weight-bold my-2">
                          Propety Type
                        </div>

                        <div className="font-weight-bold my-2">Area</div>
                        <div className="font-weight-bold my-2">
                          Building Name
                        </div>
                        <div className="font-weight-bold my-2">
                          Building Number
                        </div>
                        <div className="font-weight-bold my-2">Plot Number</div>
                        <div className="font-weight-bold my-2">
                          {" "}
                          Building Floor Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Municipality Number
                        </div>
                        <div className="font-weight-bold my-2">
                          Property Premise Number
                        </div>
                        <div className="font-weight-bold my-2">community </div>
                        <div className="font-weight-bold my-2">
                          Property Owner Name
                        </div>
                        <div className="font-weight-bold my-2">
                          Property Area
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.referenceNO}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.property_type}
                        </div>

                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.area}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.building_Name}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.building_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.plot_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.building_floorNumber}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.Muncipality_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.Property_Premise_Number}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.property_community}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.Property_ownerName}
                        </div>
                        <div className="font-weight-bold my-2">
                          {arg?.owner_property?.Property_Area}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div>
                  <h5 className="mt4 ">Owner Document</h5>
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
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  className="danger ml-2"
                  onClick={() => {
                    setShowPopUp(true);
                  }}
                >
                  Delete
                </button>
                <PoopUp
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={props.ownerDelete}
                  buttonName={"Delete"}
                  id={arg._id}
                  message={"are you sure want to delete"}
                />
              </div>
            );
          })
        ) : (
          <OwnerEntryForm
            {...props}
            showHide={showHide}
            owner={props.selectedOwner[0]}
          />
        )}
      </div>
    </>
  );
};

export default OwnerDetailViewComponent;
