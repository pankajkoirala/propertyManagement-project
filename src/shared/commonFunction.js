import moment from "moment";
import React from "react";

export const reloadFunction = () => {
  setTimeout(() => {
    window.location.reload();
  }, 1500);
};
//monthly total income calculation
export const incomeCalc = (allCheque, setData, month, addnum) => {
  let monthIncome = 0;
  let filterCheque = allCheque.filter(
    (arg) =>
      moment(arg.cheque_issueDate).format("YYYY-MM") === `${addnum}-${month}`
  );
  for (let index = 0; index < filterCheque.length; index++) {
    monthIncome =
      monthIncome +
      filterCheque[index].miscellaneous_amount +
      filterCheque[index].vat_amount +
      filterCheque[index].cheque_amount;
  }
  setData.push(monthIncome);
};
//monthly total expense calculation
export const expenseCalc = (allExpense, setData, month, addnum) => {
  let monthExpense = 0;
  let filterExpense = allExpense?.filter(
    (arg) =>
      moment(arg?.expense_EntryDate).format("YYYY-MM") === `${addnum}-${month}`
  );
  filterExpense.forEach((arg) => {
    for (let index = 0; index < arg?.expense_list?.length; index++) {
      monthExpense = monthExpense + arg.expense_list[index].expenseAmount;
    }
  });

  setData.push(monthExpense);
};
//expense per object of array
export const expenseCalculationPerHead = (allExpense) => {
  let Expense = 0;

  for (let index = 0; index < allExpense?.length; index++) {
    Expense = Expense + allExpense[index].expenseAmount;
  }
  return Expense;
};

//total expense calculation
export const totalExpenseCalculation = (allExpense) => {
  let totalExpense = 0;

  allExpense.forEach((arg) => {
    for (let index = 0; index < arg?.expense_list?.length; index++) {
      totalExpense = totalExpense + arg.expense_list[index].expenseAmount;
    }
  });
  return totalExpense;
};

//expense per object of array
export const fmcEexpenseCalculationPerHead = (allExpense) => {
  let Expense = 0;

  for (let index = 0; index < allExpense?.length; index++) {
    Expense = Expense + allExpense[index].totalAmount;
  }
  return Expense;
};

//total expense calculation
export const fmcTotalExpenseCalculation = (allExpense) => {
  let totalExpense = 0;

  allExpense.forEach((arg) => {
    for (let index = 0; index < arg?.expense_list?.length; index++) {
      totalExpense = totalExpense + arg.expense_list[index].totalAmount;
    }
  });
  return totalExpense;
};






//total income calculation
export const totalIncomeCalculation = (allCheque) => {
  let totalIncome = 0;
  let TotalVat = 0;
  let TotalMiscelleneous = 0;

  for (let index = 0; index < allCheque.length; index++) {
    totalIncome =
      totalIncome +
      allCheque[index].cheque_amount +
      allCheque[index].miscellaneous_amount +
      allCheque[index].vat_amount;

    TotalVat = TotalVat + allCheque[index].vat_amount;
    TotalMiscelleneous =
      TotalMiscelleneous + allCheque[index].miscellaneous_amount;
  }

  // allCheque.map((arg) => {
  //   totalIncome =
  //     totalIncome +
  //     arg.cheque_amount +
  //     arg.miscellaneous_amount +
  //     arg.vat_amount;
  //   TotalVat = TotalVat + arg.vat_amount;
  //   TotalMiscelleneous = TotalMiscelleneous + arg.miscellaneous_amount;
  // });
  return (
    <div>
      <div>Total Income : AED.{totalIncome}</div>
      <div>Total VAT : AED.{TotalVat}</div>
      <div>Total Miscelleneous : AED.{TotalMiscelleneous}</div>
    </div>
  );
};

//expense calculation by month and type
export const expenseCalculationByMonthAndType = (
  allExpenseArray,
  month,
  expenseType
) => {
  let cost = 0;
  let MonthlyExpenseCalculation = allExpenseArray?.filter(
    (arg) =>
      moment(arg?.expense_EntryDate).format("YYYY-MM") ===
      moment().format("YYYY") + "-" + `${month}`.padStart(2, 0)
  );

  let filterByType = MonthlyExpenseCalculation.filter(
    (arg) => arg.expense_Type === `${expenseType}`
  );

  filterByType.map((arg) =>
    arg.expense_list.forEach((arg1) => {
      cost = cost + arg1?.expenseAmount;
    })
  );
  return cost;
};

//expense calculation by month and type
export const expenseCalculationByYearAndType = (
  allExpenseArray,
  Year,
  expenseType
) => {
  let cost = 0;
  let MonthlyExpenseCalculation = allExpenseArray?.filter(
    (arg) => moment(arg?.expense_EntryDate).format("YYYY") === `${Year}`
  );

  let filterByType = MonthlyExpenseCalculation.filter(
    (arg) => arg.expense_Type === `${expenseType}`
  );

  filterByType.map((arg) =>
    arg.expense_list.forEach((arg1) => {
      cost = cost + arg1?.expenseAmount;
    })
  );
  return cost;
};
