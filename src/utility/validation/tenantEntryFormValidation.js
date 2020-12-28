import * as Yup from "yup";

export const TenantEntryFormValidation = Yup.object().shape({
  TenentType: Yup.string().oneOf(["Person", "Company"]).required("Required"),
  tenant_Name: Yup.string().required("Required"),

  //tenant_photo: Yup.string().required("Please upload Photo"),
  tenant_phoneNo: Yup.number().required("Required"),
  DateOfBirth_registrationDate: Yup.date().required("Required"),
  tenant_GovIdNo: Yup.string().required("Required"),

  tenant_email: Yup.string().required("Required"),
  city: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  residence: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  //files_list: Yup.string().required("Required"),
  tenant_GovIdNo_expireDate: Yup.date().required("Required"),
  tenant_passport_expireDate: Yup.string(),
  tenant_passportNo: Yup.string(),
  tenant_visaNo: Yup.string(),
  tenant_visa_expireDate: Yup.string(),
});


