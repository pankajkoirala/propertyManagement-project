import React, { useState } from "react";
import HomepageComponent from "../../component/homepage/homepage";
import { connect } from "react-redux";
import { incomeCalc, expenseCalc } from "../../shared/commonFunction";
import moment from "moment";

const HomepageContainer = (props) => {
  const [next_preYear, setNext_preYear] = useState(moment().format("YYYY"));
  const [chequeDate_month, setChequeDate_month] = useState(
    parseInt(moment().format("MM"))
  );
  const [chequeDate_year, setChequeDate_year] = useState(
    parseInt(moment().format("YYYY"))
  );

  console.log(chequeDate_month);
  console.log(chequeDate_year);

  let clearedCheque = props?.redux_ChequeData?.cheque?.filter(
    (arg) => arg.cheque_status === "Cleared"
  );

  //income calculation by month
  if (chequeDate_month < 1) {
    setChequeDate_month(12);
  } else if (chequeDate_month > 12) {
    setChequeDate_month(1);
  }
  let rentalIncome_month = 0;
  let vatIncome_month = 0;
  let miscellaneousIncome_month = 0;
  let clearedCheque_month = clearedCheque?.filter(
    (arg) =>
      moment(arg.cheque_issueDate).format("MM") ===
      `${chequeDate_month}`.padStart(2, 0)
  );

  for (let index = 0; index < clearedCheque_month.length; index++) {
    rentalIncome_month =
      rentalIncome_month + clearedCheque_month[index].cheque_amount;
    vatIncome_month = vatIncome_month + clearedCheque_month[index].vat_amount;
    miscellaneousIncome_month =
      miscellaneousIncome_month +
      clearedCheque_month[index].miscellaneous_amount;
  }

  //income calculation by Year

  let rentalIncome_Year = 0;
  let vatIncome_Year = 0;
  let miscellaneousIncome_Year = 0;
  let clearedCheque_year = clearedCheque?.filter(
    (arg) =>
      moment(arg.cheque_issueDate).format("YYYY") === `${chequeDate_year}`
  );

  for (let index = 0; index < clearedCheque_year.length; index++) {
    rentalIncome_Year =
      rentalIncome_Year + clearedCheque_year[index].cheque_amount;
    vatIncome_Year = vatIncome_Year + clearedCheque_year[index].vat_amount;
    miscellaneousIncome_Year =
      miscellaneousIncome_Year + clearedCheque_year[index].miscellaneous_amount;
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
    props?.redux_ExpenseData?.expense,
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
      <HomepageComponent
        totalProperty={props.redux_propertyData?.property?.length}
        leaseProperty={props?.redux_leaseData?.lease.length}
        setNext_preYear={setNext_preYear}
        next_preYear={next_preYear}
        barIncomeData={barIncomeData}
        BarExpenseData={BarExpenseData}
        //cheque by month
        rentalIncome_month={rentalIncome_month}
        vatIncome_month={vatIncome_month}
        miscellaneousIncome_month={miscellaneousIncome_month}
        chequeDate_month={chequeDate_month}
        setChequeDate_month={setChequeDate_month}
        //cheque by year
        rentalIncome_Year={rentalIncome_Year}
        vatIncome_Year={vatIncome_Year}
        miscellaneousIncome_Year={miscellaneousIncome_Year}
        chequeDate_year={chequeDate_year}
        setChequeDate_year={setChequeDate_year}
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
