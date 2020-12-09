import * as Yup from "yup";

export const PropertyFormValidation = Yup.object().shape({
  Property_ownerName: Yup.string().required("Required"),
  city: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
  area: Yup.string().required("Required"),
  country: Yup.string()
    .min(1, "Too Short")
    .max(50, "Too long")
    .required("Required Field"),
  property_type: Yup.string()
    .oneOf(["Residential", "Commericial", "Land"])
    .required("Required"),
  property_price: Yup.number().required("Required"),
  property_community: Yup.string().required("Required"),
  building_Name: Yup.string().required("Required"),
  building_Number: Yup.string().required("Required"),
  plot_Number: Yup.string().required("Required"),
  building_floorNumber: Yup.string().required("Required"),
  Muncipality_Number: Yup.string().required("Required"),
  Property_Area: Yup.string().required("Required"),
  Property_Premise_Number: Yup.string().required("Required"),
  developerCompany: Yup.string().required("Required"),
  managementCompany: Yup.string().required("Required"),

  // files_list:
  // photo: Yup.string().required("Required Field"),
  // facilities: Yup.string().required("Required"),
});
