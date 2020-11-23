import React, { useState } from "react";
import HomepageComponent from "../../component/homepage/homepage";
import { connect } from "react-redux";
import { incomeCalc, expenseCalc } from "../../shared/commonFunction";
import TopNavBar from "../../shared/topNavBar";

const HomepageContainer = (props) => {
  const [next_preYear, setNext_preYear] = useState(new Date().getFullYear());

  //income calculation
  let rentalIncome = 0;
  let vatIncome = 0;
  let miscellaneousIncome = 0;
  let clearedCheque = props?.redux_ChequeData?.cheque?.filter(
    (arg) => arg.cheque_status === "Cleared"
  );
  for (let index = 0; index < clearedCheque.length; index++) {
    rentalIncome = rentalIncome + clearedCheque[index].cheque_amount;
    vatIncome = vatIncome + clearedCheque[index].vat_amount;
    miscellaneousIncome =
      miscellaneousIncome + clearedCheque[index].miscellaneous_amount;
  }

  //bardiagram data calculation

  let barIncomeData = [];
  incomeCalc(clearedCheque, barIncomeData, "01", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "02", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "03", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "05", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "06", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "07", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "08", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "09", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "10", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "04", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "11", next_preYear);
  incomeCalc(clearedCheque, barIncomeData, "12", next_preYear);

  let BarExpenseData = [];
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "01",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "02",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "03",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "04",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "05",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "06",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "07",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "08",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "09",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "10",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "11",
    next_preYear
  );
  expenseCalc(
    props.redux_ExpenseData.expense,
    BarExpenseData,
    "12",
    next_preYear
  );

  return (
    <div>
      <TopNavBar/>
      <HomepageComponent
        totalProperty={props.redux_propertyData?.property?.length}
        leaseProperty={props?.redux_leaseData?.lease.length}
        rentalIncome={rentalIncome}
        vatIncome={vatIncome}
        miscellaneousIncome={miscellaneousIncome}
        setNext_preYear={setNext_preYear}
        next_preYear={next_preYear}
        barIncomeData={barIncomeData}
        BarExpenseData={BarExpenseData}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  redux_propertyData: state.property,
  redux_leaseData: state.lease,
  redux_ChequeData: state.cheque,
  redux_ExpenseData: state.expense,
});

const mapDispatchToProps = (dispatch) => ({
  //redux_Add_Tenant: (arg) => dispatch({ type: "ADD_ALL_MAINTANANCE_COMPANY", payload: arg }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);
