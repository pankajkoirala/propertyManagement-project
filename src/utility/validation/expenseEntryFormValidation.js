import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const ExpenseEntryFormValidation = Yup.object().shape({
  //expense_list: Yup.string().required("Required Field"),
  expense_EntryDate: Yup.date().required("Required Field"),
  Expense_Remark: Yup.string().required("Required Field"),
  expense_Type: Yup.string()
    .oneOf(["Maintanance", "Legal", "FMC", "Utility", "Office Expense"])
    .required("Required Field"),
  expenseInvoiceNumber: Yup.number().required("Required Field"),
  Maintanance_ticketID: Yup.string(),
  property_ID: Yup.string(),
  //expense_Heading:Yup.string().required("Required Field"),
  //expense_amount:Yup.number().required("Required Field"),
  invoicePhoto: Yup.string().required("File Required"),
});
