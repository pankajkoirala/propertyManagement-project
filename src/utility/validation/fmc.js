import * as Yup from "yup";

export const fmcEntryFormValidation = Yup.object().shape({
  property: Yup.string().required("Required Field"),
  management_Companies: Yup.string().required("Required Field"),
  totalAmount: Yup.string().required("Required Field"),
  file1: Yup.string().required("Required Field"),
  file2: Yup.string().required("Required Field"),

  fmcInvoice_Date: Yup.date().required("Required Field"),
  quarter: Yup.string()
    .oneOf(["First quarter",
      "Second quarter", "Third quarter",
      "Fourth quarter"
    ])
    .required("Please select quarter"),

  entry_date: Yup.date().required("Required Field"),
  remark: Yup.string().required("Required Field"),
});
