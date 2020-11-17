import React, { useState } from "react";
import PropertyEntryForm from "../../entryForm/PropertyEntryForm/PropertyEntryForm";
import "./property.css";
import PoopUp from "./../../../shared/popup";

let PropertyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <div>
      {showEditForm === false ? (
        props.selectedone.map((arg, index) => {
          return (
            <div key={index} className="property-card">
              <div className="card-contents">
                <div className="">
                  <img
                    className="Propertyimage"
                    src={arg.photo}
                    alt="recently added"
                  />
                </div>
                <div className="property-desc">
                  <h5>{arg.property_type}</h5>
                  <p>For: {arg.property_status}</p>
                  <p>
                    <i className="fa fa-map-marker"></i> {arg.country},
                    {arg.city}
                  </p>
                  <p>
                    Rs. <b>{arg.property_price}</b> per Month
                  </p>
                </div>
                <button onClick={() => setShowEditForm(!showEditForm)}>
                  edit
                </button>
                <button
                  type="button"
                  disabled={
                    props.leaseIdList.some((ID) => ID === arg._id) === true
                      ? true
                      : false
                  }
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
  );
};

export default PropertyDetailViewComponent;
