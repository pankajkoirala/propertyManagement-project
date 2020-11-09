import React, { useEffect, useState } from "react";
import ExpenseDetailViewComp from "../../../component/view/expense/expenseDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";

const MaintananceCompanyDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedExpense = props?.redux_expenseData?.expense?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const expenseUpdate = (data, ID) => {
    const formData = new FormData();
    formData.append("expense_list", data.expense_list);
    formData.append("expense_EntryDate", data.expense_EntryDate);
    formData.append("Maintanance_ticketID", data.Maintanance_ticketID);
    formData.append("Expense_Remark", data.Expense_Remark);
    formData.append("expenseInvoiceNumber", data.expenseInvoiceNumber);
    Axios({
      method: "put",
      url: base_URL + "/api/expense/" + ID,
      data: formData,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("Updated successfully", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  const expenseDelete = (ID) => {
    Axios({
      method: "delete",
      url: base_URL + "/api/expense/" + ID,
      config: {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      },
    })
      .then((res) => {
        notification("successfully Deleted", "SUCCESS");
      })
      .catch((err) => {
        notification("error", "ERROR");
      });
  };

  return (
    <div>
      <ExpenseDetailViewComp
        selectedExpense={selectedExpense}
        expenseUpdate={expenseUpdate}
        expenseDelete={expenseDelete}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_expenseData: state.expense,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceCompanyDetailView);
