import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const TenantEntryFormValidation = Yup.object().shape({
  tenant_firstName: Yup.string().required("Please enter First Name"),
  tenant_middleName: Yup.string().required("Please enter Last Name"),
  tenant_lastName: Yup.string().required("Please enter Last Name"),
  tenant_photo: Yup.string().required("Please upload Photo"),
  tenant_phoneNo: Yup.number().required("Required Field"),
  assignedProperty: Yup.string().required("Please select property assigned"),
  

  tenant_email: Yup.string().required("Please enter Email"),
  city: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
  street: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  provience: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  ZipCode: Yup.number().required("Required"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
});
