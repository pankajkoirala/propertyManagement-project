import * as Yup from "yup";

export const TenantEntryFormValidation = Yup.object().shape({
  TenentType: Yup.string().oneOf(["Person", "Company"]).required("Required"),
  tenant_Name: Yup.string().required("Required"),

  //tenant_photo: Yup.string().required("Please upload Photo"),
  tenant_phoneNo: Yup.string().required("Required"),
  DateOfBirth_registrationDate: Yup.date().required("Required"),
  tenant_GovIdNo: Yup.string(),

  tenant_email: Yup.string().required("Required"),
  city: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  area: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  //files_list: Yup.string().required("Required"),
  tenant_GovIdNo_expireDate: Yup.date(),
  tenant_passport_expireDate: Yup.string(),
  tenant_passportNo: Yup.string(),
  remark: Yup.string(),
});
export const TenantEntryCompanyFormValidation = Yup.object().shape({
  TenentType: Yup.string().oneOf(["Person", "Company"]).required("Required"),
  tenant_companyName: Yup.string().required("Required"),
  tenant_companyAuthorizePerson: Yup.string().required("Required"),
  //tenant_photo: Yup.string().required("Please upload Photo"),
  tenant_GovIdNo: Yup.string(),
  tenant_companyIssuingDate: Yup.date().required("Required"),
  tenant_companyExpireDate: Yup.date().required("Required"),
  tenant_companyAuthorizePersonDesignation: Yup.string().required("Required"),
  tenant_companyTradeLicenseNo: Yup.string().required("Required"),
  tenant_email: Yup.string().required("Required"),
  tenant_companyTradeLicenseIssuingAuthority: Yup.string().required("Required"),
  city: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  area: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  tenant_GovIdNo_expireDate: Yup.date(),
  tenant_passport_expireDate: Yup.date(),
  tenant_passportNo: Yup.string(),
  remark: Yup.string(),
});
