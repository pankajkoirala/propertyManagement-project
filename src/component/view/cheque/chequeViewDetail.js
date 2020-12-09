import React, { useState } from "react";
import ChequeEntryForm from "../../entryForm/cheque/chequeEntry/chequeEntryForm";
import PoopUp from "./../../../shared/popup";
import Invoice from "./../../../container/entryForm/invoice/invoice";
import moment from "moment";

let ChequeDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [printInvoice, setPrintInvoice] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <div style={{ margin: "25px" }}>
      {printInvoice === false ? (
        showEditForm === false ? (
          props.selectedCheque.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <h5 className="text-center my-4"> Cheque Information</h5>
                <div className="row">
                  <div className="col-7">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px",
                      }}
                      src={arg.cheque_picture}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-5">
                    <div className="d-flex justify-content-between mr-4">
                      <div style={{ left: "0px" }}>
                        <div className="font-weight-bold my-1">Cheque ID</div>
                        <div className="font-weight-bold my-1">
                          Cheque Entry Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Status
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Number
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Amount
                        </div>
                        <div className="font-weight-bold my-1">Vat Amount</div>
                        <div className="font-weight-bold my-1">
                          Miscelleneous Amount
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Issue Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Recived Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Deposite Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Clear Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Hold Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Bounce Date
                        </div>
                        <div className="font-weight-bold my-1">
                          Cheque Remark{" "}
                        </div>
                      </div>
                      <div>
                        <div className="font-weight-bold my-1">
                          {arg.Cheque_ID}
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(arg.cheque_entryDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_status}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_number}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_amount}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.vat_amount}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.miscellaneous_amount}
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(arg.cheque_issueDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(arg.cheque_recivedDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-1">
                          {moment(arg.cheque_depositeDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_clearDate}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_holdDate}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_bouncedDate}
                        </div>
                        <div className="font-weight-bold my-1">
                          {arg.cheque_remarks}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "100px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  edit
                </button>
                <button
                  style={
                    props.leaseDataID?.some(
                      (ID) => ID === arg?.lease_property?._id
                    ) !== true
                      ? {
                          backgroundColor: "blue",
                          borderRadius: "20px",
                          margin: "10px",
                          height: "40px",
                          width: "100px",
                          color: "white",
                          fontWeight: "bold",
                        }
                      : { display: "none" }
                  }
                  className="danger ml-2"
                  onClick={() => setShowPopUp(true)}
                >
                  Delete
                </button>
                <button
                  style={
                    arg.cheque_status !== "Cleared"
                      ? { display: "none" }
                      : {
                          backgroundColor: "blue",
                          borderRadius: "20px",
                          margin: "10px",
                          height: "40px",
                          width: "150px",
                          color: "white",
                          fontWeight: "bold",
                        }
                  }
                  onClick={() => setPrintInvoice(!printInvoice)}
                >
                  print Invoice
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
