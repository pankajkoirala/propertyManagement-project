import * as Yup from "yup";

export const brokerEntryFormValidation = Yup.object().shape({
  residence: Yup.string().required("Required Field"),
  city: Yup.string().required("Required Field"),
  country: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
  broker_phoneNo: Yup.number().required("Required Field"),
  broker_RegistrationNumber: Yup.string().required("Required Field"),
  broker_companyRegisterDate: Yup.date().required("Required Field"),
  broker_companyName: Yup.string().required("Required Field"),
  broker_email: Yup.string().required("Required Field"),
  brokerType: Yup.string()
    .oneOf(["Person", "Company"])
    .required("Required Field"),

  //files_list: Yup.array().required("File Required"),
});
