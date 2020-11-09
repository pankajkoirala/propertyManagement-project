import React from "react";
import ExpensesView from "../../../component/view/expense/expense";
import { connect } from "react-redux";

const ExpenseView = (props) => {
  return (
    <div>
      <ExpensesView expenseList={props.redux_expenseData.expense} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_expenseData: state.expense,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseView);
