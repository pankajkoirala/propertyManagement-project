import React from "react";
import ExpenseEntryFormComponent from "../../../component/entryForm/expenseEntry/expenseEntry";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { connect } from "react-redux";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const ExpenseEntryForm = (props) => {
  const expenseData = (data) => {
    const formData = new FormData();

    if (data.Maintanance_ticketID !== "") {
      formData.append("Maintanance_ticketID", data.Maintanance_ticketID);
    }
    if (data.property_ID !== "") {
      formData.append("property_ID", data.property_ID);
    }

    formData.append("expense_list", data.expense_list);
    formData.append("expense_EntryDate", data.expense_EntryDate);
    formData.append("Expense_Remark", data.Expense_Remark);
    formData.append("expenseInvoiceNumber", data.expenseInvoiceNumber);
    formData.append("invoicePhoto", data.invoicePhoto);
    formData.append("expense_Type", data.expense_Type);

   
    
      Axios.post( base_URL + "/api/expense",formData,{
        headers: {
          [token_key]: getLocalStorage(token_key),
        },
      })
      .then((res) => {
        notification("Created successfully", "SUCCESS");
        reloadFunction();
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <ExpenseEntryFormComponent
        expenseData={expenseData}
        Redux_maintananceTicketData={
          props.Redux_maintananceTicketData.maintananceTicket
        }
        redux_propertyData={props.redux_propertyData.property}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_maintananceTicketData: state.maintananceTicket,
  redux_propertyData: state.property,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_invoice: (arg) =>
    dispatch({ type: "ADD_ALL_INVOICE", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEntryForm);
