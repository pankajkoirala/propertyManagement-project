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
  area: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
  //files_list: Yup.string().required("Required"),
  tenant_GovIdNo_expireDate: Yup.date().required("Required"),
  tenant_passport_expireDate: Yup.string().required("Required"),
  tenant_passportNo: Yup.string().required("Required"),
  remark: Yup.string(),

});
export const TenantEntryCompanyFormValidation = Yup.object().shape({
  TenentType: Yup.string().oneOf(["Person", "Company"]).required("Required"),
  tenant_companyName: Yup.string().required("Required"),
  tenant_companyAuthorizePerson: Yup.string().required("Required"),
  //tenant_photo: Yup.string().required("Please upload Photo"),
  tenant_GovIdNo: Yup.string().required("Required"),
  tenant_companyIssuingDate: Yup.date().required("Required"),
  tenant_companyExpireDate: Yup.date().required("Required"),
  tenant_companyAuthorizePersonDesignation: Yup.string().required("Required"),
  tenant_companyTradeLicenseNo:Yup.string().required("Required"),
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
  tenant_GovIdNo_expireDate: Yup.date().required("Required"),
  tenant_passport_expireDate: Yup.date().required("Required"),
  tenant_passportNo: Yup.string().required("Required"),
  remark: Yup.string(),

});

/*tenant_GovIdNo
area
city
country
tenant_phoneNo
tenant_Name
tenant_email
DateOfBirth_registrationDate
TenentType
tenant_GovIdNo_expireDate
tenant_passport_expireDate
tenant_passportNo
tenant_companyAuthorizePerson
tenant_companyIssuingDate
tenant_companyExpireDate
tenant_companyAuthorizePersonDesignation
tenant_companyTradeLicenseNo*/


