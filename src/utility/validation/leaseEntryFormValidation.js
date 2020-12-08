import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const leaseEntryFormValidation = Yup.object().shape({
  frequency: Yup.number()
    .oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12])
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
});
