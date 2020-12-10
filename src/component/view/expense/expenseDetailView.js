import React, { useState } from "react";
import ExpenseEntryForm from "../../entryForm/expenseEntry/expenseEntry";
import PoopUp from "./../../../shared/popup";
import moment from "moment";
import { Table } from "reactstrap";

let ExpenseDetailViewComponent = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showPopup, setShowPopUp] = useState(false);

  let showHide = () => {
    setShowEditForm(!showEditForm);
  };
  return (
    <>
      <div style={{ margin: "25px" }}>
        {showEditForm === false ? (
          props.selectedExpense.map((arg, index) => {
            return (
              <div key={index} className="property-card">
                <div className="row">
                  <div className="col-4">
                    <img
                      style={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "20px",
                      }}
                      src={arg.invoicePhoto}
                      alt="recently added"
                    />
                  </div>
                  <div className="col-8">
                    <h5>Expense Information</h5>
                    <div className="row">
                      <div className="col-6">
                        <div className="font-weight-bold my-3">Expense ID</div>
                        <div className="font-weight-bold my-3">
                          Expense Entry Date
                        </div>
                        <div className="font-weight-bold my-3">
                          Expense Invoice No
                        </div>
                        <div className="font-weight-bold my-3">
                          Expense Remark
                        </div>
                        <div className="font-weight-bold my-3">
                          Maintanance Ticket ID
                        </div>
                        <div className="font-weight-bold my-3">
                          Maintanance Ticket Issue Date
                        </div>
                        <div className="font-weight-bold my-3">
                          Maintanance Ticket Due Date
                        </div>
                        <div className="font-weight-bold my-3">
                          Maintanance Info
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="font-weight-bold my-3">
                          {arg.Expense_ID}
                        </div>
                        <div className="font-weight-bold my-3">
                          {moment(arg.expense_EntryDate).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.expenseInvoiceNumber}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.Expense_Remark}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg.cheque_amount}
                        </div>
                        <div className="font-weight-bold my-3">
                          {arg?.Maintanance_ticketID?.maintananceTicket_ID}
                        </div>

                        <div className="font-weight-bold my-3">
                          {moment(
                            arg?.Maintanance_ticketID
                              ?.maintananceTicketIssueDate
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div className="font-weight-bold my-3">
                          {moment(
                            arg?.Maintanance_ticketID?.maintananceTicketDueDate
                          ).format("YYYY-MM-DD")}
                        </div>
                        <div
                          style={{
                            width: "350px",
                            height: "auto",
                            padding: "10px",
                            borderRadius: "5px",
                          }}
                          className="font-weight-bold my-3 bg-secondary"
                        >
                          {
                            arg?.Maintanance_ticketID
                              ?.MaintananceCompanyDetailInfo
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {arg.expense_list.map((exp, index) => {
                    return (
                      <Table key={index} striped>
                        <thead>
                          <tr>
                            <th>SN</th>
                            <th>Expense Heading</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{exp?.expenseHead}</td>
                            <td>AED.{exp?.expenseAmount}</td>
                          </tr>
                        </tbody>
                      </Table>
                    );
                  })}
                </div>
                <button
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "150px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  onClick={() => setShowEditForm(!showEditForm)}
                >
                  edit
                </button>
                <button
                  style={{
                    backgroundColor: "blue",
                    borderRadius: "20px",
                    margin: "10px",
                    height: "40px",
                    width: "150px",
                    color: "white",
                    fontWeight: "bold",
                  }}
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
                  CRUD_Function={props.expenseDelete}
                  id={arg._id}
                  buttonName={"Delete"}
                  message={"are you sure want to delete"}
                />
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
    </>
  );
};

export default ExpenseDetailViewComponent;
