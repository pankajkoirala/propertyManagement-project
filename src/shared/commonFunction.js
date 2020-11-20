import moment from "moment";

export const reloadFunction = () => {
  setTimeout(() => {
    window.location.reload();
  }, 1500);
};

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
