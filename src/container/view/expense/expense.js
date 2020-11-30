import React from "react";
import ExpensesView from "../../../component/view/expense/expense";
import { connect } from "react-redux";

const ExpenseView = (props) => {
  return (
    <div>
      <ExpensesView
        expenseList={props.redux_expenseData.expense}
        redux_propertyData={props.redux_propertyData.property}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_expenseData: state.expense,
  redux_propertyData: state.property,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseView);
