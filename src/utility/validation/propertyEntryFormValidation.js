import * as Yup from "yup";

export const PropertyFormValidation = Yup.object().shape({
  property_location: Yup.string().required("Please enter location"),
  property_street: Yup.string().required("Please enter street"),
  property_zipCode: Yup.string().required("Please enter Zip Code"),
  property_type: Yup.string().required("Please select property type"),
  property_price: Yup.string().required("Please enter price"),
  property_status: Yup.string().required("Please select stauts"),
});