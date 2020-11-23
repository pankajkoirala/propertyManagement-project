import React, { useState } from "react";
import TopNavBar from "../../../shared/topNavBar";
import DeveloperCompanyForm from "../../entryForm/developersCompanyEntryForm/developerCompanyEntryForm";
import PoopUp from "./../../../shared/popup";

let DeveloperCompanyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  console.log(props);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <TopNavBar/>
      <div>
        {showEditForm === false ? (
          props.selectedDeveloperCompany.map((arg, index) => {
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
                    CRUD_Function={props.DeveloperCompanyDelete}
                    buttonName={"Delete"}
                    id={arg._id}
                    message={"are you sure want to delete"}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <DeveloperCompanyForm
            {...props}
            showHide={showHide}
            developerCompany={props.selectedDeveloperCompany[0]}
          />
        )}
      </div>
    </>
  );
};

export default DeveloperCompanyDetailViewComponent;
