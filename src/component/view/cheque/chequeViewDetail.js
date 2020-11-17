import React, { useState } from "react";
import ChequeEntryForm from "../../entryForm/cheque/chequeEntry/chequeEntryForm";
import PoopUp from "./../../../shared/popup";

let ChequeDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  console.log(showPopup);

  return (
    <div>
      {showEditForm === false ? (
        props.selectedCheque.map((arg, index) => {
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
                  disabled={
                    props.leaseDataID?.some(
                      (ID) => ID === arg?.lease_property?._id
                    ) === true
                      ? true
                      : false
                  }
                  className="danger ml-2"
                  id="pankaj"
                  onClick={() => setShowPopUp(true)}
                >
                  Delete
                </button>
                <PoopUp
                  isOpen={showPopup}
                  isClose={setShowPopUp}
                  CRUD_Function={props.ChequeDelete}
                  id={arg._id}
                  message={"are you sure want to delete"}
                  buttonName={"Delete"}
                />
              </div>
            </div>
          );
        })
      ) : (
        <ChequeEntryForm
          {...props}
          showHide={showHide}
          Cheque={props.selectedCheque[0]}
        />
      )}
    </div>
  );
};

export default ChequeDetailViewComponent;
