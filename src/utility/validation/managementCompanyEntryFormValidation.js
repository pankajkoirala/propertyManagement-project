import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const managementCompanyEntryFormValidation = Yup.object().shape({
  managementCompany_area: Yup.string().required("Required Field"),
  managementCompany_city: Yup.string().required("Required Field"),
  managementCompany_country: Yup.string().required("Required Field"),
  managementCompany_name: Yup.string().required("Required Field"),
  managementCompany_phoneNo: Yup.number().required("Required Field"),
  managementCompany_MobileNumber: Yup.string().required("Required Field"),
  managementCompany_Registeration_Number:Yup.number().required("Required Field"),
  managementCompany_email: Yup.string().required("Required Field"),
  managementCompany_Registeration_Date: Yup.date().required("Required Field"),
  //files_list: Yup.array().required("File Required"),
});
