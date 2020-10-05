import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PropertyFormValidation = Yup.object().shape({
  
  property_type: Yup.string().required("Please select property type"),
  property_price: Yup.string().required("Please enter price"),
  property_status: Yup.string().required("Please select stauts"),

  address: Yup.object({
    permanent: Yup.object({
      city: Yup.string()
        .min(1, "Too Short")
        .max(50, "Too long")
        .required("Required Field"),
        street: Yup.string()
        .min(1, "Too Short")
        .max(50, "Too long")
        .required("Required"),

        ZipCode: Yup.string()
       
        .required("Required"),
      country: Yup.string()
        .min(1, "Too Short")
        .max(50, "Too long")
        .required("Required Field"),
      phoneNo: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required Field"),
    }),
  }),
});