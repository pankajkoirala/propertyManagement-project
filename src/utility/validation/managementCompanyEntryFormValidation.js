import * as Yup from "yup";

export const managementCompanyEntryFormValidation = Yup.object().shape({
  managementCompany_residence: Yup.string().required("Required Field"),
  managementCompany_city: Yup.string().required("Required Field"),
  managementCompany_country: Yup.string().required("Required Field"),
  managementCompany_name: Yup.string().required("Required Field"),
  managementCompany_phoneNo: Yup.number().required("Required Field"),
  managementCompany_MobileNumber: Yup.string().required("Required Field"),
  managementCompany_Registeration_Number: Yup.string().required(
    "Required Field"
  ),
  managementCompany_email: Yup.string().required("Required Field"),
  managementCompany_Registeration_Date: Yup.date().required("Required Field"),
  //files_list: Yup.array().required("File Required"),
});
