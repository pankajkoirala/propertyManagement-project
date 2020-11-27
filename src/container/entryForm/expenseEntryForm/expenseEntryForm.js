import React from "react";
import ExpenseEntryFormComponent from "../../../component/entryForm/expenseEntry/expenseEntry";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { notification } from "../../../shared/notification.js";
import { connect } from "react-redux";
import { reloadFunction } from "../../../shared/commonFunction";

const ExpenseEntryForm = (props) => {
  const expenseData = (data) => {
    const formData = new FormData();

    formData.append("expense_list", data.expense_list);
    formData.append("expense_EntryDate", data.expense_EntryDate);
    formData.append("Maintanance_ticketID", data.Maintanance_ticketID);
    formData.append("Expense_Remark", data.Expense_Remark);
    formData.append("expenseInvoiceNumber", data.expenseInvoiceNumber);
    formData.append("invoicePhoto", data.invoicePhoto);

    Axios({
      method: "post",
      url: base_URL + "/api/expense",
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
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
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  Redux_maintananceTicketData: state.maintananceTicket,
});

const mapDispatchToProps = (dispatch) => ({
  redux_Add_invoice: (arg) =>
    dispatch({ type: "ADD_ALL_INVOICE", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseEntryForm);
