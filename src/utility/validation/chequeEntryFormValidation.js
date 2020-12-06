import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const chequeEntryFormValidation = Yup.object().shape({
  miscellaneous_amount: Yup.number().required("Required Field"),
  vat_amount: Yup.number().required("Required Field"),
  cheque_bankName: Yup.string().required("Required Field"),
  cheque_issueDate:Yup.date().required("Required Field"),
  cheque_status: Yup.string().oneOf(["Not Deposited", "Pending", "Hold", "Cleared", "Bounce"]).required("Required"),
  cheque_remarks: Yup.string().required("Required Field"),
  cheque_amount: Yup.number().required("Required Field"),
  cheque_picture: Yup.string().required("File Required"),
  cheque_number: Yup.number().required("Required Field"),
  lease_property:Yup.string().required("Required Field"),
  cheque_depositeDate: Yup.date().required("Required"),
  cheque_clearDate: Yup.string().required("Required Field"),
  cheque_bouncedDate: Yup.string().required("Required Field"),
  cheque_holdDate:Yup.string().required("Required Field"),
  cheque_recivedDate:Yup.date().required("Required Field"),
  cheque_picture: Yup.array().required("File Required"),
});
