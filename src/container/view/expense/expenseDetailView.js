import React from "react";
import ExpenseDetailViewComp from "../../../component/view/expense/expenseDetailView";
import { base_URL } from "../../../const/base_URL";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { notification } from "../../../shared/notification.js";
import { reloadFunction } from "../../../shared/commonFunction";
import { getLocalStorage } from "./../../../const/tokenStorage";
import { token_key } from "./../../../const/base_URL";

const MaintananceCompanyDetailView = (props) => {
  const { id } = useParams();

  //using params and select one tanent to see detail
  let selectedExpense = props?.redux_expenseData?.expense?.filter(
    (arg) => arg._id === id
  );

  //tanent update
  const expenseUpdate = (data, ID) => {
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

    
     
      Axios.put( base_URL + "/api/expense/" + ID,formData,{
        headers: {
          [token_key]: getLocalStorage(token_key),
        },
      })
      .then((res) => {
        notification("Updated successfully", "SUCCESS");
        reloadFunction();
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
        props.history.push("/expensesList");

        reloadFunction();
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
        Redux_maintananceTicketData={
          props.Redux_maintananceTicketData.maintananceTicket
        }
        redux_propertyData={props.redux_propertyData.property}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  redux_expenseData: state.expense,
  Redux_maintananceTicketData: state.maintananceTicket,
  redux_propertyData: state.property,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaintananceCompanyDetailView);
