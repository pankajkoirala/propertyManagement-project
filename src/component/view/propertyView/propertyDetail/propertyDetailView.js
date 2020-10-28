import React, { useEffect, useState } from "react";
import PropertyEntryForm from "../../../../component/entryForm/PropertyEntryForm/PropertyEntryForm";

let PropertyDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div>
      {props.selectedone.map((arg, index) => {
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
                <h1>{arg._id}</h1>
                <p>
                  <i className="fa fa-map-marker"></i> {arg.country},{arg.city}
                </p>
                <p>
                  Rs. <b>{arg.property_price}</b> per Month
                </p>
              </div>
              <button onClick={() => setShowEditForm(!showEditForm)}>
                edit
              </button>
              <PropertyEntryForm 
              {...props}
              property={props.selectedone[0]}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PropertyDetailViewComponent;
