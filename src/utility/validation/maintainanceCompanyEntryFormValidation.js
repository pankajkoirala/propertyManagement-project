import * as Yup from "yup";

export const maintainanceCompanyEntryFormValidation = Yup.object().shape({
  Company_residence: Yup.string().required("Required Field"),
  Company_city: Yup.string().required("Required Field"),
  Company_country: Yup.string().required("Required Field"),
  Company_Registration_Number: Yup.string().required("Required Field"),
  Company_phoneNo: Yup.number().required("Required Field"),
  Company_Mobile_Number: Yup.number().required("Required Field"),
  Company_Name: Yup.string().required("Required Field"),
  Company_Registeration_Date: Yup.date().required("Required Field"),
  Company_email: Yup.string().required("Required Field"),

  //files_list: Yup.array().required("File Required"),
});
