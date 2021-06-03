import * as Yup from "yup";

export const developerEntryFormValidation = Yup.object().shape({
  Developer_area: Yup.string().required("Required Field"),
  Developer_city: Yup.string().required("Required Field"),
  Developer_country: Yup.string().required("Required Field"),
  DeveloperCompany_phoneNo: Yup.number().required("Required Field"),
  DeveloperCompany_Name: Yup.string().required("Required Field"),
  DeveloperCompany_RegisterationDate: Yup.date().required("Required Field"),
  DeveloperCompany_email: Yup.string().required("Required Field"),
  DeveloperCompany_MobileNumber: Yup.number().required("Required Field"),
  DeveloperCompany_RegisterationNumber: Yup.string().required("Required Field"),
  // files_list: Yup.array().required("File Required"),
  remark: Yup.string(),

});
