import * as Yup from "yup";

export const chequeEntryFormValidation = Yup.object().shape({
  miscellaneous_amount: Yup.number().required("Required Field"),
  vat_amount: Yup.number().required("Required Field"),
  cheque_bankName: Yup.string().required("Required Field"),
  cheque_issueDate: Yup.date().required("Required Field"),
  cheque_entryDate: Yup.date().required("Required Field"),
  cheque_status: Yup.string()
    .oneOf(["Not Deposited", "Pending", "Hold", "Cleared", "Bounce"])
    .required("Required"),
  cheque_remarks: Yup.string().required("Required Field"),
  cheque_amount: Yup.number().required("Required Field"),
  cheque_number: Yup.number().required("Required Field"),
  lease_property: Yup.string().required("Required Field"),
  cheque_depositeDate: Yup.date().required("Required"),
  cheque_clearDate: Yup.string().required("Required Field"),
  cheque_bouncedDate: Yup.string().required("Required Field"),
  cheque_holdDate: Yup.string().required("Required Field"),
  cheque_recivedDate: Yup.date().required("Required Field"),
  property_id: Yup.string().required("Required Field"),
  cheque_picture_back: Yup.string().required("Required Field"),
  cheque_picture_front: Yup.string().required("Required Field"),
});
