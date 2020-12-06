import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const employeeEntryFormValidation = Yup.object().shape({
  employee_firstName: Yup.string().required("Required Field"),
  employee_middleName: Yup.string(),
  employee_lastName: Yup.string().required("Required Field"),
  employee_area:Yup.string().required("Required Field"),
  employee_gender: Yup.string().oneOf(["Male", "Female", "Other"]).required("Please select gender"),
  employee_phoneNo: Yup.number().required("Required Field"),
  employee_DOB: Yup.date().required("Required Field"),
  employee_email: Yup.string().required("Required Field"),
  employee_city: Yup.string().min(1, "Too Short").max(50, "Too long").required("Required Field"),
  employee_post:Yup.string().required("Required Field"),
  employee_country: Yup.string().min(2, "Too Short").max(50, "Too long").required("Required"),
  files_list: Yup.array().required("File Required"),
});
