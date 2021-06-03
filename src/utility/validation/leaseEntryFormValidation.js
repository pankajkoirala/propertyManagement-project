import * as Yup from "yup";

export const leaseEntryFormValidation = Yup.object().shape({
  frequency: Yup.string()
    .oneOf([
      "30",
      "90",
      "181",
      "365",
    ])
    .required("Select any one"),
  lease_enterDate: Yup.date().required("Please Enter Date of Lease Entered"),

  tenants: Yup.string().required("Required"),
  property: Yup.string().required("Required Field"),

  lease_Term: Yup.string()
    .oneOf(["monthToMonth", "fixedTerm"])
    .required("Required"),

  commenceDate: Yup.date().required("Select Commencement Date"),
  expirationDate: Yup.date().required("Select Expiration Date"),
  rentAmount: Yup.number().required("Enter Rent Amount"),
  securityDeposite: Yup.number().required("Required"),
  totalAmount: Yup.number().required("Required"),
  VAT_Amount: Yup.number().required("Required"),
  remark: Yup.string(),


});
