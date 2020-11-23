import React, { useState } from "react";
import TopNavBar from "../../../shared/topNavBar";
import ChequeEntryForm from "../../entryForm/cheque/chequeEntry/chequeEntryForm";
import PoopUp from "./../../../shared/popup";
import Invoice from "./../../../container/entryForm/invoice/invoice";

let ChequeDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [printInvoice, setPrintInvoice] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <div>
      <TopNavBar />
      {printInvoice === false ? (
        showEditForm === false ? (
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
                    onClick={() => setShowPopUp(true)}
                  >
                    Delete
                  </button>
                  <button
                    style={
                      arg.cheque_status !== "Cleared"
                        ? { visibility: "hidden" }
                        : { visibility: "visible" }
                    }
                    onClick={() => setPrintInvoice(!printInvoice)}
                  >
                    print
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
        )
      ) : (
        <Invoice
          Cheque={props.selectedCheque[0]}
          printInvoice={printInvoice}
          setPrintInvoice={setPrintInvoice}
        />
      )}
    </div>
  );
};

export default ChequeDetailViewComponent;
