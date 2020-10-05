import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const PropertyFormValidation = Yup.object().shape({
  property_type: Yup.string().required("Please select property type"),
  property_price: Yup.number().required("Please enter price"),
  property_status: Yup.string()
    .oneOf(["for sell", "for rent", "Repair and Maintanance", "Occupied"])
    .required("Required"),
  BHK: Yup.string().required("Please enter price"),
  toilet: Yup.number().required("Please enter price"),

  city: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
  street: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required"),
    property_photo:Yup.string()    .required("Required Field"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
});
