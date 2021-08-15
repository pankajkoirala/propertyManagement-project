import React from "react";
import ExpensesView from "../../../component/view/expense/expense";
import { connect } from "react-redux";
import moment from "moment";

const ExpenseView = (props) => {
  let sortExpenseByDate = props.redux_expenseData.expense.sort(
    (a, b) =>
      new moment(b.expense_EntryDate).format("YYYYMMDD") -
      new moment(a.expense_EntryDate).format("YYYYMMDD")
  );
  return (
    <div>
      <ExpensesView
        expenseList={sortExpenseByDate}
        redux_propertyData={props.redux_propertyData.property}
        redux_fmc={props.redux_fmc}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_expenseData: state.expense,
  redux_propertyData: state.property,
  redux_fmc: state.fmc.fmc
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseView);
