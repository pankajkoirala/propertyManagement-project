import * as Yup from "yup";

export const ExpenseEntryFormValidation = Yup.object().shape({
  //expense_list: Yup.string().required("Required Field"),
  expense_EntryDate: Yup.date().required("Required Field"),
  Expense_Remark: Yup.string().required("Required Field"),
  expense_Type: Yup.string()
    .oneOf(["Maintanance", "Legal", "FMC", "Utility", "Miscellaneous"])
    .required("Required Field"),
  expenseInvoiceNumber: Yup.number().required("Required Field"),
  Maintanance_ticketID: Yup.string(),
  property_ID: Yup.string(),
  //expense_Heading:Yup.string().required("Required Field"),
  //expense_amount:Yup.number().required("Required Field"),
  invoicePhoto: Yup.string().required("File Required"),
});
