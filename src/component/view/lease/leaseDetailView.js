import React, { useState } from "react";
import LeaseEntryForm from "../../entryForm/lease/lease";
import moment from "moment";
import PoopUp from "./../../../shared/popup";

let LeaseDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };

  if (props?.selecteOneLease?.length > 0) {
    let commerceDate = moment(props?.selecteOneLease[0]?.commenceDate);
    let expireDate = moment(props?.selecteOneLease[0]?.expirationDate);
    let difference = expireDate.diff(commerceDate, "days"); // resul
  }

  return (
    <div>
      {showEditForm === false ? (
        props.selecteOneLease.map((arg, index) => {
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
                <button onClick={() => setShowPopUp(true)}>delete</button>
                <PoopUp
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={props.LeaseDelete}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
              </div>
            </div>
          );
        })
      ) : (
        <LeaseEntryForm
          {...props}
          showHide={showHide}
          lease={props.selecteOneLease[0]}
        />
      )}
    </div>
  );
};

export default LeaseDetailViewComponent;
