import * as Yup from "yup";

export const OwnerEntryFormValidation = Yup.object().shape({
  owner_area: Yup.string().required("Required"),
  owner_city: Yup.string().required("Required"),
  owner_country: Yup.string().required("Required"),
  owner_DOB: Yup.date().required("Required"),
  owner_phoneNo: Yup.string().required("Required"),
  owner_Name: Yup.string().required("Required"),
  owner_Type: Yup.string().oneOf(["Person", "Company"]).required("Required"),
  owner_GovID_RegNo: Yup.string().required("Required"),
  owner_email: Yup.string().required("Required"),
  // owner_property: Yup.string().required("Required"),
  remark: Yup.string(),

  //files_list:
});
