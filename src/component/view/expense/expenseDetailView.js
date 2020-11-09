import React, { useEffect, useState } from "react";
import ExpenseEntryForm from "../../entryForm/expenseEntry/expenseEntry";

let ExpenseDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  console.log(props);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <div>
      {showEditForm === false ? (
        props.selectedExpense.map((arg, index) => {
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
                    props.expenseDelete(arg._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <ExpenseEntryForm
          {...props}
          showHide={showHide}
          expense={props.selectedExpense[0]}
        />
      )}
    </div>
  );
};

export default ExpenseDetailViewComponent;
