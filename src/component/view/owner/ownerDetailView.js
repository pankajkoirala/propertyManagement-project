import React, { useState } from "react";
import TopNavBar from "../../../shared/topNavBar";
import OwnerEntryForm from "./../../../component/entryForm/ownerEntry/ownerEnty";
import PoopUp from "./../../../shared/popup";

let OwnerDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <TopNavBar/>
      <div>
        s
        {showEditForm === false ? (
          props.selectedOwner.map((arg, index) => {
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
                    CRUD_Function={props.ownerDelete}
                    buttonName={"Delete"}
                    id={arg._id}
                    message={"are you sure want to delete"}
                  />
                </div>
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
