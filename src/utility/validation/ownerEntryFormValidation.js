import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const OwnerEntryFormValidation = Yup.object().shape({
  owner_area: Yup.string().required("Required"),
  owner_city: Yup.string().required("Required"),
  owner_country: Yup.string().required("Required"),
  owner_DOB: Yup.date().required("Required"),
  owner_phoneNo: Yup.number().required("Required"),
  owner_Name: Yup.string().required("Required"),
  owner_Type: Yup.string().oneOf(["Person", "Company"]).required("Required"),
  owner_GovID_RegNo: Yup.number().required("Required"),
  owner_email: Yup.string().required("Required"),
  // owner_property: Yup.string().required("Required"),
  //files_list:
});
