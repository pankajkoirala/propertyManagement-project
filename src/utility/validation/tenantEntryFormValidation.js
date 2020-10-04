import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const tenantEntryFormValidation = Yup.object().shape({
  
  tenant_firstName: Yup.string().required("Please enter your First Name"),
  tenant_middleName: Yup.string().required("Please enter your Middle Name"),
  tenant_lastName: Yup.string().required("Please enter your Last Name"),
  tenant_photo: Yup.string().required("Please enter your Photo"),
  tenant_phoneNo: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required Field"),
        
  tenant_email: Yup.string().required("Please enter your Email"),
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
      

    }),
  }),
});