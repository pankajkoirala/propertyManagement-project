import React, { useEffect, useState } from "react";
import MaintananceCompanyEntryForm from "../../entryForm/maintainanceCompanyEntryForm/maintainanceCompanyEntryForm";
import { useParams } from "react-router-dom";

import { connect } from "react-redux";

let MaintananceCompanyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <div>
      {showEditForm === false ? (
        props.selectedMaintananceCompany.map((arg, index) => {
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
                    props.maintananceCompanyDelete(arg._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <MaintananceCompanyEntryForm
          {...props}
          showHide={showHide}
          maintananceCompany={props.selectedMaintananceCompany[0]}
        />
      )}
    </div>
  );
};

export default MaintananceCompanyDetailViewComponent;
