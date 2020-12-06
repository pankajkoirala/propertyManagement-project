import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const maintainanceCompanyEntryFormValidation = Yup.object().shape({
  Company_area: Yup.string().required("Required Field"),
  Company_city: Yup.string().required("Required Field"),
  Company_country:Yup.string().required("Required Field"),
  Company_Registration_Number: Yup.number().required("Required Field"),
  Company_phoneNo: Yup.number().required("Required Field"),
  Company_Mobile_Number:Yup.number().required("Required Field"),
  Company_Name: Yup.string().required("Required Field"),
  Company_Registeration_Date:Yup.date().required("Required Field"),
  Company_email: Yup.string().required("Required Field"),

  //files_list: Yup.array().required("File Required"),
});
