import React, { useState } from "react";
import MaintananceTicketEntryForm from "../../entryForm/maintananceTicket/maintananceTicket";
import PoopUp from "./../../../shared/popup";

let MaintananceTicketDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <div>
      {showEditForm === false ? (
        props.selectedMaintananceTicket.map((arg, index) => {
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
                  CRUD_Function={props.maintananceTicketDelete}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
              </div>
            </div>
          );
        })
      ) : (
        <MaintananceTicketEntryForm
          {...props}
          showHide={showHide}
          maintananceTicket={props.selectedMaintananceTicket[0]}
        />
      )}
    </div>
  );
};

export default MaintananceTicketDetailViewComponent;
