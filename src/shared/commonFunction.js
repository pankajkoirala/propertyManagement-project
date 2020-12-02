import moment from "moment";

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
