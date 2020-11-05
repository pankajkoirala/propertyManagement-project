import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const LeaseEntryFormValidation = Yup.object().shape({
  lease_number: Yup.string().required("Please enter Lease Number"),
  lease_enterDate: Yup.string().required("Please Enter Date of Lease Entered"),

  tenants: Yup.string()
    .oneOf(["addNewTenant", "viewTenantList"])
    .required("Required"),

  property_occupants: Yup.string()
    .oneOf(["addOccupant", "selectOccupantsFromList"])
    .required("Required"),

  lease_Term: Yup.string()
    .oneOf(["monthToMonth", "fixedTerm"])
    .required("Required"),

  commenceDate: Yup.string().required("Select Commencement Date"),
  expirationDate: Yup.string().required("Select Expiration Date"),
  rentAmount: Yup.number().required("Enter Rent Amount"),
  dueDate: Yup.date().required("Enter Rent Amount"),
  frequency: Yup.string()
    .oneOf(["daily", "weekly", "bi-weekly", "monthly", "quartely", "yearly"])
    .required("Select any one"),
  gracePeriod: Yup.number().required("Enter Grace Period"),
  late_feeType: Yup.string().oneOf(["flat", "percentage"]).required("Required"),
  lateFeeAmount: Yup.number().required("Required"),
  securityDeposite: Yup.number().required("Required"),
  securityDueDate: Yup.number().required("Required"),
  picture: Yup.string().required("Required Field"),
});
